import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { phone } = await req.json()

  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return NextResponse.json({ error: 'Phone required' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mail.ru',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Сантехника ЕТМ" <${process.env.SMTP_USER}>`,
    to: 'evpatherm@mail.ru',
    subject: `Заявка на звонок — ${phone.trim()}`,
    text: `Новая заявка на обратный звонок.\n\nТелефон: ${phone.trim()}\n\nОтправлено с сайта santehnika-etm.ru`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; background: #f5f5f5; padding: 24px; border-radius: 8px;">
        <h2 style="color: #0a1628; margin-top: 0;">Новая заявка на звонок</h2>
        <div style="background: #fff; border-radius: 6px; padding: 20px; border-left: 4px solid #22c55e;">
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #0a1628;">📞 ${phone.trim()}</p>
        </div>
        <p style="color: #666; font-size: 13px; margin-top: 16px;">Отправлено с сайта сантехника-етм.рф</p>
      </div>
    `,
  })

  return NextResponse.json({ ok: true })
}
