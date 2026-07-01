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
