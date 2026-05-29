'use client'
import { useEffect, useState } from 'react'
import CallbackModal from './CallbackModal'

const PHONE = '+79785623232'
const PHONE_DISPLAY = '+7 978 562-32-32'

export interface Product {
  badge: string
  img: string
  name: string
  desc: string
  price: string
  sale?: boolean
  oldPrice?: string
  fullDesc?: string
  specs?: { label: string; value: string }[]
}

interface Props {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  const [callbackOpen, setCallbackOpen] = useState(false)

  useEffect(() => {
    if (!product) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  useEffect(() => {
    if (!product) setCallbackOpen(false)
  }, [product])

  if (!product) return null

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Закрыть">×</button>
          <div className="modal-img-wrap">
            <img src={product.img} alt={product.name} className="modal-img" />
          </div>
          <div className="modal-body">
            <div className={`product-badge${product.sale ? ' product-badge--sale' : ''} modal-badge`}>
              {product.badge}
            </div>
            <h2 className="modal-name">{product.name}</h2>
            <p className="modal-desc">{product.fullDesc || product.desc}</p>
            {product.specs && product.specs.length > 0 && (
              <div className="modal-specs">
                {product.specs.map(s => (
                  <div className="modal-spec-row" key={s.label}>
                    <span className="modal-spec-label">{s.label}</span>
                    <span className="modal-spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="modal-footer">
              <div className="product-price-group">
                <span className="modal-price">{product.price}</span>
                {product.oldPrice && <span className="product-old-price">{product.oldPrice}</span>}
              </div>
              <button className="btn btn-primary modal-cta" onClick={() => setCallbackOpen(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                </svg>
                Позвонить / Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
      <CallbackModal
        open={callbackOpen}
        phone={PHONE}
        phoneDisplay={PHONE_DISPLAY}
        onClose={() => setCallbackOpen(false)}
      />
    </>
  )
}
