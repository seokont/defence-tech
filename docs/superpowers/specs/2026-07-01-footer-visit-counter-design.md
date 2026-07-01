# Footer visit counter — design

## Goal

Show two small numbers in the site footer: unique visitors today (UTC calendar day) and unique visitors over the last 7 days. No dashboards, no history, no per-page breakdown.

## Context

- Next.js 15 App Router site, single VPS deployment (`next start` on a persistent Node process — `data/` directory survives restarts).
- Only existing API route is `app/api/contact`. No database.
- `Footer` (`components/Footer.tsx`) is a client component rendered on both real pages (`app/page.tsx`, `app/thank-you/page.tsx`), so mounting logic there fires on every real page load.
- Google Ads gtag script is already present in `app/layout.tsx` and sets its own cookies, so adding one more first-party cookie introduces no new privacy posture.

## Storage

`.visitor-stats/visits.json` (already gitignored via the existing `.visitor-stats/` entry in `.gitignore`), shape:

```json
{
  "2026-07-01": ["<vid>", "<vid>", ...],
  "2026-06-30": ["<vid>", ...]
}
```

- Key: UTC calendar date, `YYYY-MM-DD`.
- Value: array acting as a de-duplicated set of visitor ids (`vid`) that visited that day.
- On every write, keys older than 7 days are dropped so the file stays bounded.
- Writes are serialized through an in-module promise queue (chain each write onto the previous one) so concurrent requests can't interleave read-modify-write and corrupt the file.

## Visitor identity

- httpOnly cookie `vid`, `crypto.randomUUID()`, `SameSite=Lax`, `Max-Age=30d`, `Path=/`.
- Generated once per browser on first request that lacks it; reused after that so the same visitor doesn't get double-counted within or across days.

## API

Single route: `app/api/visits/route.ts`

- `POST /api/visits`
  - Reads `vid` cookie; if absent, generates one and sets it on the response.
  - Calls `recordVisit(vid)` (adds `vid` to today's set in `.visitor-stats/visits.json`, dedup is automatic via set semantics, then prunes days older than 7).
  - Calls `getStats()` and returns `{ today: number, last7d: number }` as JSON.
  - `today` = size of today's set.
  - `last7d` = size of the union of visitor ids across the last 7 day-buckets (a repeat visitor across multiple days counts once).

No separate GET endpoint — recording and reading happen in the same round trip since only `Footer` consumes this data.

## Module: `lib/visits.ts`

- `recordVisit(vid: string): Promise<void>` — read file (or start empty), add vid to today's array if not present, prune entries older than 7 days, write file (queued).
- `getStats(): Promise<{ today: number; last7d: number }>` — read file, compute both numbers.
- File read/write uses `fs/promises`; missing file is treated as empty data (no error).

## Frontend: `components/Footer.tsx`

- On mount (`useEffect`, empty deps), `fetch('/api/visits', { method: 'POST' })`, parse JSON, store `{ today, last7d }` in state.
- If the request fails or is still pending, the widget section simply doesn't render — no skeleton, no layout shift, no error UI.
- Widget renders as a new centered row below the existing divider row (the one with copyright + disclaimer):
  - Pill-style container: `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(201,168,76,0.15)`, rounded corners, small padding, centered horizontally.
  - Content: an eye icon (`lucide-react`) + `"{today} сьогодні"`, a small gold-dot separator, a users icon + `"{last7d} за 7 днів"`.
  - Font/sizing consistent with the rest of the footer's fine print (`Lato`, ~0.72–0.78rem, muted colors, gold accent `#C9A84C` for the icons/dot).

## Error handling

- Any failure in `recordVisit`/`getStats` (e.g. disk write error) is caught in the route handler; on error the route still returns `{ today: 0, last7d: 0 }` with a 200 so the frontend never has to special-case a failed request beyond "don't render if data looks absent" — but since we always return valid shape, the widget always renders once the fetch resolves.
- Corrupt/unparseable `.visitor-stats/visits.json` is treated as empty data (start fresh) rather than throwing.

## Testing plan

Manual verification (no existing test harness in this repo — `npm test` is a placeholder):

1. `npm run dev`, load the site, confirm `.visitor-stats/visits.json` is created with today's date and a vid.
2. Reload the page multiple times in the same browser — confirm `today` count does not increase (same `vid` cookie reused).
3. Clear cookies (or use a private window) and load again — confirm `today` increments by 1.
4. Manually edit `.visitor-stats/visits.json` to add a fabricated date 8 days in the past with some vids, hit the endpoint again, confirm that date is pruned from the file and excluded from `last7d`.
5. Manually add overlapping vids across two different days within the 7-day window, confirm `last7d` reflects the deduplicated union, not the sum.
6. Visually confirm the footer widget renders correctly on both `/` and `/thank-you`, matches the existing dark/gold styling, and doesn't shift layout while the fetch is in flight.
