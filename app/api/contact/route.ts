import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "Telegram not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { name, company, activity, stage, validation, contact, comment } = body;

  const text = [
    "📬 *Нова заявка з сайту UKRLAW*",
    "",
    `👤 *Ім'я:* ${name}`,
    `🏢 *Компанія:* ${company}`,
    `⚙️ *Сфера:* ${activity}`,
    `📈 *Стадія:* ${stage}`,
    validation ? `✅ *Validation:* ${validation}` : null,
    `📞 *Контакт:* ${contact}`,
    comment ? `💬 *Коментар:* ${comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram error:", err);
    return NextResponse.json({ error: "Telegram send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
