'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie_consent_v1'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="region" aria-label="Уведомление об использовании cookie">
      <p className="cookie-text">
        Мы используем cookie, чтобы сайт работал корректно и нам было проще улучшать его.
        Продолжая пользоваться сайтом, вы соглашаетесь с использованием cookie.
      </p>
      <div className="cookie-actions">
        <a href="/privacy" className="cookie-link">Подробнее</a>
        <button className="cookie-btn" onClick={accept}>Понятно</button>
      </div>
    </div>
  )
}
