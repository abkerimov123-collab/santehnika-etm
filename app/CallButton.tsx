'use client'

import { useState, useEffect, useRef } from 'react'

const PHONE = '+79785623232'
const PHONE_DISPLAY = '+7 978 562-32-32'
const WA_URL = `https://wa.me/${PHONE}`
const TG_URL = 'https://t.me/evpaterm'

function LogoIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M 6.6 12.58 A 10 10 0 0 1 25.4 12.58" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <polygon points="25.4,12.58 25.72,8.20 22.34,9.44" fill="currentColor" />
      <path d="M 25.4 19.42 A 10 10 0 0 1 6.6 19.42" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <polygon points="6.6,19.42 6.28,23.80 9.66,22.56" fill="currentColor" />
    </svg>
  )
}

export default function CallButton() {
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!phone.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })
      if (res.ok) {
        setStatus('sent')
        setPhone('')
        setTimeout(() => { setOpen(false); setStatus('idle') }, 2500)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fab = isMobile ? (
    <a href={`tel:${PHONE}`} className="call-fab" aria-label="Позвонить">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.74-.24 1.02L6.6 10.8z"/>
      </svg>
    </a>
  ) : (
    <button className="call-fab" aria-label="Связаться с нами" onClick={() => setOpen(true)}>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.74-.24 1.02L6.6 10.8z"/>
      </svg>
    </button>
  )

  return (
    <>
      {fab}

      {open && (
        <div className="cm-overlay" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Свяжитесь с нами">
          <div className="cm-dialog" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="cm-header">
              <span className="cm-logo">
                сантехника <LogoIcon size={18} /> етм
              </span>
              <button className="cm-close" onClick={() => setOpen(false)} aria-label="Закрыть">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="cm-body">
              {/* Left: title + messengers */}
              <div className="cm-left">
                <h2 className="cm-title">Свяжитесь<br />с нами</h2>
                <p className="cm-sub">Поможем подобрать решение<br />под ваш объект</p>

                <div className="cm-channels">
                  <a href={`tel:${PHONE}`} className="cm-channel cm-channel--call">
                    <span className="cm-channel-icon cm-channel-icon--call">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                      </svg>
                    </span>
                    <span className="cm-channel-info">
                      <span className="cm-channel-name">Позвонить нам</span>
                      <span className="cm-channel-hint">{PHONE_DISPLAY}</span>
                    </span>
                    <svg className="cm-channel-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </a>

                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="cm-channel">
                    <span className="cm-channel-icon cm-channel-icon--wa">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <span className="cm-channel-info">
                      <span className="cm-channel-name">WhatsApp</span>
                      <span className="cm-channel-hint">Написать в чат</span>
                    </span>
                    <svg className="cm-channel-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </a>

                  <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="cm-channel">
                    <span className="cm-channel-icon cm-channel-icon--tg">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </span>
                    <span className="cm-channel-info">
                      <span className="cm-channel-name">Telegram</span>
                      <span className="cm-channel-hint">Написать в чат</span>
                    </span>
                    <svg className="cm-channel-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </a>
                </div>

                <div className="cm-info-row">
                  <div className="cm-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <div>
                      <div className="cm-info-label">Работаем ежедневно</div>
                      <div className="cm-info-val">Пн–Пт 9:00–18:00<br />Сб 9:00–15:00</div>
                    </div>
                  </div>
                  <div className="cm-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    <div>
                      <div className="cm-info-label">Евпатория</div>
                      <div className="cm-info-val">Интернациональная ул., 134, корп. 1</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: callback form */}
              <div className="cm-right">
                <div className="cm-right-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="cm-right-title">Заказать звонок</h3>
                <p className="cm-right-sub">Оставьте номер — мы перезвоним<br />в удобное для вас время</p>

                {status === 'sent' ? (
                  <div className="cm-success">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Спасибо! Мы перезвоним вам в ближайшее время.
                  </div>
                ) : (
                  <form className="cm-form" onSubmit={handleSubmit}>
                    <div className="cm-input-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                      </svg>
                      <input
                        ref={inputRef}
                        type="tel"
                        placeholder="Ваш телефон"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="cm-input"
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                    <button type="submit" className="cm-submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Отправляем…' : 'Жду звонка'}
                    </button>
                    {status === 'error' && (
                      <p className="cm-error">Ошибка отправки. Пожалуйста, позвоните нам напрямую.</p>
                    )}
                    <div className="cm-privacy">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      Мы не передаём ваши данные третьим лицам
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
