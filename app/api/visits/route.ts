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
