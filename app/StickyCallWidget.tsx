'use client'
import { useState } from 'react'
import CallbackModal from './CallbackModal'

interface Props {
  phone: string
  phoneDisplay: string
}

export default function StickyCallWidget({ phone, phoneDisplay }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="sticky-call-btn" onClick={() => setOpen(true)} type="button" aria-label="Заказать звонок">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
        </svg>
        <span className="sticky-call-label">Заказать звонок</span>
      </button>
      <CallbackModal open={open} phone={phone} phoneDisplay={phoneDisplay} onClose={() => setOpen(false)} />
    </>
  )
}
