'use client'
import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  phone: string
  phoneDisplay: string
  onClose: () => void
}

export default function CallbackModal({ open, phone, phoneDisplay, onClose }: Props) {
  const [userPhone, setUserPhone] = useState('')
  const [name, setName] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) { setSent(false); setName(''); setUserPhone('') }
  }, [open])

  if (!open) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="callback-dialog" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">×</button>

        {sent ? (
          <div className="callback-success">
            <div className="callback-success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={40} height={40}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="callback-success-title">Заявка принята!</div>
            <div className="callback-success-text">Перезвоним вам в ближайшее время.</div>
          </div>
        ) : (
          <>
            <div className="callback-title">Заказать звонок</div>
            <div className="callback-subtitle">Оставьте номер — перезвоним в течение&nbsp;15&nbsp;минут</div>
            <form className="callback-form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <input
                className="callback-input"
                type="text"
                placeholder="Ваше имя (необязательно)"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className="callback-input"
                type="tel"
                placeholder="Номер телефона *"
                value={userPhone}
                onChange={e => setUserPhone(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary callback-submit">
                Перезвоните мне
              </button>
            </form>
            <div className="callback-or"><span>или</span></div>
            <a href={`tel:${phone}`} className="callback-call-now">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={15} height={15}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              Позвонить сейчас: {phoneDisplay}
            </a>
          </>
        )}
      </div>
    </div>
  )
}
