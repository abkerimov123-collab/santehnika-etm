import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { phone } = await req.json()

  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return NextResponse.json({ error: 'Phone required' }, { status: 400 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  const text = `📞 Новая заявка на звонок\n\nТелефон: ${phone.trim()}\n\n🌐 Сантехника ЕТМ`

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Telegram error' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
