'use client'
import { useState } from 'react'
import CallbackModal from './CallbackModal'

interface Props {
  phone: string
  phoneDisplay: string
}

export default function HeaderPhoneButton({ phone, phoneDisplay }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="header-phone" onClick={() => setOpen(true)} type="button">
        <svg className="header-phone-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.45 5.45l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="header-phone-divider" />
        <span className="header-phone-text">
          <span className="header-phone-label">Позвонить нам</span>
          <span className="header-phone-number">{phoneDisplay}</span>
        </span>
      </button>
      <CallbackModal open={open} phone={phone} phoneDisplay={phoneDisplay} onClose={() => setOpen(false)} />
    </>
  )
}
