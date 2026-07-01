# Footer Visit Counter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show a small "N сьогодні · M за 7 днів" unique-visitor widget in the site footer, backed by a cookie-identified visitor id and a JSON file on disk.

**Architecture:** A server-side module (`lib/visits.ts`) reads/writes `.visitor-stats/visits.json`, a map of `YYYY-MM-DD` (UTC) → array of visitor ids seen that day, pruned to the last 7 days on every write. A single Next.js route handler (`app/api/visits/route.ts`) reads or issues an httpOnly `vid` cookie, records a visit, and returns `{ today, last7d }`. `Footer.tsx` calls that route once on mount and renders the two numbers in a small pill.

**Tech Stack:** Next.js 15 App Router, TypeScript, `fs/promises`, React client component (existing `Footer.tsx`), `lucide-react` icons already used elsewhere in the file.

## Global Constraints

- Storage path is exactly `.visitor-stats/visits.json` (already covered by the existing `.visitor-stats/` line in `.gitignore` — do not add a new ignore entry).
- No new dependencies — only `fs/promises`, `crypto.randomUUID`, `next/server`, `react`, `lucide-react`, all already available.
- `last7d` is a deduplicated union of visitor ids across the last 7 UTC calendar days, not a sum of daily counts (per spec).
- No test framework exists in this repo (`npm test` is a placeholder) — verification is manual, via `curl` against the dev server and a browser check. Do not introduce a test runner as part of this work.
- Widget must not render (no skeleton, no error state) until a successful response arrives — a failed fetch means the widget section is simply absent.
- Styling must match existing footer conventions: inline `style` objects, `Lato` font stack, gold accent `#C9A84C`, muted whites (see `components/Footer.tsx` for the existing pattern).

---

### Task 1: Storage module — `lib/visits.ts`

**Files:**
- Create: `lib/visits.ts`

**Interfaces:**
- Produces: `recordVisit(vid: string): Promise<void>` and `getStats(): Promise<{ today: number; last7d: number }>`, both exported from `lib/visits.ts`. Task 2 imports these two functions by these exact names and signatures.

- [ ] **Step 1: Create the module**

Create `lib/visits.ts` with this exact content:

```ts
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".visitor-stats");
const DATA_FILE = path.join(DATA_DIR, "visits.json");
const RETENTION_DAYS = 7;

type VisitsData = Record<string, string[]>;

let writeQueue: Promise<void> = Promise.resolve();

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function recentDayKeys(days: number): string[] {
  const keys: string[] = [];
  const now = Date.now();
  for (let i = 0; i < days; i++) {
    const d = new Date(now - i * 24 * 60 * 60 * 1000);
    keys.push(d.toISOString().slice(0, 10));
  }
  return keys;
}

async function readData(): Promise<VisitsData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed as VisitsData;
    }
    return {};
  } catch {
    return {};
  }
}

async function writeData(data: VisitsData): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data), "utf-8");
}

function pruneOldDays(data: VisitsData): VisitsData {
  const keep = new Set(recentDayKeys(RETENTION_DAYS));
  const pruned: VisitsData = {};
  for (const key of Object.keys(data)) {
    if (keep.has(key)) {
      pruned[key] = data[key];
    }
  }
  return pruned;
}

export function recordVisit(vid: string): Promise<void> {
  writeQueue = writeQueue.then(async () => {
    try {
      const data = await readData();
      const key = todayKey();
      const dayVisitors = data[key] ?? [];
      if (!dayVisitors.includes(vid)) {
        dayVisitors.push(vid);
      }
      data[key] = dayVisitors;
      await writeData(pruneOldDays(data));
    } catch {
      // A failed write must not permanently break future recordVisit calls.
    }
  });
  return writeQueue;
}

export async function getStats(): Promise<{ today: number; last7d: number }> {
  const data = await readData();
  const keys = recentDayKeys(RETENTION_DAYS);
  const todayVisitors = data[todayKey()] ?? [];
  const unique7d = new Set<string>();
  for (const key of keys) {
    for (const vid of data[key] ?? []) {
      unique7d.add(vid);
    }
  }
  return { today: todayVisitors.length, last7d: unique7d.size };
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors mentioning `lib/visits.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/visits.ts
git commit -m "feat: add visit-tracking storage module"
```

---

### Task 2: API route — `app/api/visits/route.ts`

**Files:**
- Create: `app/api/visits/route.ts`

**Interfaces:**
- Consumes: `recordVisit(vid: string): Promise<void>` and `getStats(): Promise<{ today: number; last7d: number }>` from `@/lib/visits` (Task 1).
- Produces: `POST /api/visits` returning JSON `{ today: number, last7d: number }`, and setting an httpOnly `vid` cookie the first time a request arrives without one. Task 3 (Footer) calls this exact endpoint and expects this exact response shape.

- [ ] **Step 1: Create the route handler**

Create `app/api/visits/route.ts` with this exact content:

```ts
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { recordVisit, getStats } from "@/lib/visits";

const VID_COOKIE = "vid";
const VID_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: NextRequest) {
  const existingVid = request.cookies.get(VID_COOKIE)?.value;
  const vid = existingVid ?? randomUUID();

  await recordVisit(vid);
  const stats = await getStats().catch(() => ({ today: 0, last7d: 0 }));

  const response = NextResponse.json(stats);
  if (!existingVid) {
    response.cookies.set(VID_COOKIE, vid, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: VID_MAX_AGE,
      path: "/",
    });
  }
  return response;
}
```

- [ ] **Step 2: Start the dev server**

Run: `npm run dev` (background — it binds `127.0.0.1:3009` and stays running)
Expected: `Ready` log line, no startup errors.

- [ ] **Step 3: Verify the endpoint records and returns stats**

Run:
```bash
curl -i -X POST http://127.0.0.1:3009/api/visits
```
Expected: `200 OK`, a `Set-Cookie: vid=...` header, and a JSON body like `{"today":1,"last7d":1}`.

- [ ] **Step 4: Verify the same visitor doesn't get double-counted**

Run (reusing the `vid` cookie value `X` from Step 3's `Set-Cookie` header):
```bash
curl -i -X POST http://127.0.0.1:3009/api/visits --cookie "vid=X"
```
Expected: `200 OK`, no new `Set-Cookie` header, JSON body still `{"today":1,"last7d":1}` (unchanged — same day, same vid).

- [ ] **Step 5: Verify a distinct visitor increments the count**

Run:
```bash
curl -i -X POST http://127.0.0.1:3009/api/visits --cookie "vid=some-other-id"
```
Expected: `200 OK`, JSON body `{"today":2,"last7d":2}`.

- [ ] **Step 6: Inspect the data file**

Run: `cat .visitor-stats/visits.json`
Expected: a single key for today's UTC date mapping to an array containing the vid from Step 3 and `"some-other-id"`.

- [ ] **Step 7: Commit**

```bash
git add "app/api/visits/route.ts"
git commit -m "feat: add /api/visits route for recording and reading visit stats"
```

---

### Task 3: Footer widget — `components/Footer.tsx`

**Files:**
- Modify: `components/Footer.tsx`

**Interfaces:**
- Consumes: `POST /api/visits` → `{ today: number, last7d: number }` (Task 2).

- [ ] **Step 1: Add state, effect, and imports**

In `components/Footer.tsx`, change the top of the file from:

```tsx
"use client";
import { Mail, MessageSquare } from "lucide-react";
import Image from "next/image";
```

to:

```tsx
"use client";
import { useEffect, useState } from "react";
import { Mail, MessageSquare, Eye, Users } from "lucide-react";
import Image from "next/image";
```

Then, immediately after `export default function Footer() {`, add:

```tsx
  const [visitStats, setVisitStats] = useState<{ today: number; last7d: number } | null>(null);

  useEffect(() => {
    fetch("/api/visits", { method: "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.today === "number" && typeof data.last7d === "number") {
          setVisitStats(data);
        }
      })
      .catch(() => {});
  }, []);
```

- [ ] **Step 2: Render the widget below the existing divider row**

Find the end of the footer's divider block — the closing tags right before the final `</div>\n    </footer>`:

```tsx
            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.72rem",
                fontFamily: "Lato, sans-serif",
                maxWidth: "520px",
                textAlign: "right",
                lineHeight: 1.5,
              }}
            >
              Матеріали на цьому сайті мають інформаційний характер і не є офертою, юридичною порадою або гарантією отримання фінансування.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

Replace it with (adds the widget between the closing of the divider row's inner flex container and the closing of the divider block):

```tsx
            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.72rem",
                fontFamily: "Lato, sans-serif",
                maxWidth: "520px",
                textAlign: "right",
                lineHeight: 1.5,
              }}
            >
              Матеріали на цьому сайті мають інформаційний характер і не є офертою, юридичною порадою або гарантією отримання фінансування.
            </p>
          </div>
          {visitStats && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.4rem 0.9rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  fontSize: "0.72rem",
                  fontFamily: "Lato, sans-serif",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                <Eye size={13} color="#C9A84C" />
                <span>{visitStats.today} сьогодні</span>
                <span style={{ color: "#C9A84C" }}>•</span>
                <Users size={13} color="#C9A84C" />
                <span>{visitStats.last7d} за 7 днів</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors mentioning `components/Footer.tsx`.

- [ ] **Step 4: Visually verify in the browser**

With the dev server from Task 2 still running, open `http://127.0.0.1:3009/` and `http://127.0.0.1:3009/thank-you` in a browser.
Expected: the pill widget appears centered below the copyright/disclaimer row on both pages, showing numbers consistent with the `curl` checks from Task 2 (increments by 1 on first load in a fresh browser profile / private window, stays the same on reload).

- [ ] **Step 5: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: render visit counter widget in footer"
```
