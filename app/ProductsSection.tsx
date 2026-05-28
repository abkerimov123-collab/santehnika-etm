'use client'
import { useState } from 'react'
import ProductModal, { Product } from './ProductModal'

const products: Product[] = [
  {
    badge: 'Хит продаж',
    img: '/edisson-50.png',
    name: 'Водонагреватель Edisson 50 л',
    desc: 'Электрический накопительный. Объём 50 литров. Надёжный и экономичный — подходит для семьи из 2–3 человек.',
    fullDesc: 'Накопительный электрический водонагреватель российского производства. Круглый корпус, вертикальный монтаж. Медный ТЭН, эмалированный бак серии Glasslined. Подходит для семьи из 2–3 человек.',
    price: '7 140 ₽',
    specs: [
      { label: 'Объём', value: '50 л' },
      { label: 'Мощность', value: '1500 Вт' },
      { label: 'Время нагрева', value: '105 мин' },
      { label: 'Макс. температура', value: '70 °С' },
      { label: 'Макс. давление', value: '0,6 МПа' },
      { label: 'Класс защиты', value: 'IPX4' },
      { label: 'Гарантия на бак', value: '36 месяцев' },
    ],
  },
  {
    badge: 'Скидка',
    sale: true,
    img: '/shuft-09.png',
    name: 'Сплит-система SHUFT 09',
    desc: 'Настенная система охлаждения и обогрева. Для помещений до 25 м².',
    price: '21 000 ₽',
    oldPrice: '25 000 ₽',
    specs: [
      { label: 'Площадь', value: 'до 25 м²' },
      { label: 'Тип', value: 'настенный сплит' },
      { label: 'Режимы', value: 'охлаждение / обогрев' },
      { label: 'Бренд', value: 'SHUFT' },
    ],
  },
  {
    badge: 'В наличии',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop',
    name: 'Водонагреватель',
    desc: 'Накопительные и проточные. 30–200 литров. Установка под ключ.',
    price: 'от 8 000 ₽',
  },
  {
    badge: 'Скидка',
    sale: true,
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=85&auto=format&fit=crop',
    name: 'Коллектор тёплого пола',
    desc: 'Нержавеющая сталь. Комплект под любое количество контуров.',
    price: 'от 6 500 ₽',
  },
]

export default function ProductsSection({ phone }: { phone: string }) {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <>
      <section className="products-section">
        <div className="products-inner">
          <div className="products-header">
            <div className="section-label">Горячие позиции</div>
            <a href={`tel:${phone}`} className="products-cta">Узнать наличие →</a>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div
                className="product-card"
                key={p.name}
                onClick={() => setSelected(p)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') setSelected(p) }}
              >
                <div className={`product-badge${p.sale ? ' product-badge--sale' : ''}`}>{p.badge}</div>
                <div className="product-img-wrap">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="product-body">
                  <div className="product-name">{p.name}</div>
                  <div className="product-desc">{p.desc}</div>
                  <div className="product-price-row">
                    <div className="product-price-group">
                      <span className="product-price">{p.price}</span>
                      {p.oldPrice && <span className="product-old-price">{p.oldPrice}</span>}
                    </div>
                    <span className="product-btn">Подробнее →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductModal product={selected} phone={phone} onClose={() => setSelected(null)} />
    </>
  )
}
