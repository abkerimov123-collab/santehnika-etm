'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import ProductModal, { Product } from './ProductModal'
import CallbackModal from './CallbackModal'

const PHONE = '+79785623232'
const PHONE_DISPLAY = '+7 978 562-32-32'

const products: Product[] = [
  {
    badge: 'Хит продаж',
    img: '/edisson-50.webp',
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
    img: '/shuft-09.webp',
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
    img: '/BAXI-ECO-4S.webp',
    name: 'Котёл Baxi Eco 4s 24 F',
    desc: 'Настенный газовый двухконтурный котёл. Мощность 24 кВт. Отопление и горячее водоснабжение.',
    fullDesc: 'Настенный газовый двухконтурный котёл итальянского производства. Закрытая камера сгорания, встроенный расширительный бак и циркуляционный насос. Электронный розжиг, защита от замерзания. Подходит для квартир и домов до 240 м².',
    price: '62 000 ₽',
    specs: [
      { label: 'Мощность', value: '24 кВт' },
      { label: 'КПД', value: '91,4 %' },
      { label: 'Площадь обогрева', value: 'до 240 м²' },
      { label: 'Контуров', value: '2 (отопление + ГВС)' },
      { label: 'Камера сгорания', value: 'закрытая' },
      { label: 'Розжиг', value: 'электронный' },
      { label: 'Гарантия', value: '2 года' },
    ],
  },
  {
    badge: 'Скидка',
    sale: true,
    img: '/Thermofix-sn-103.webp',
    name: 'Смеситель Thermofix SN-103',
    desc: 'Термостатический смеситель для душа. Точная регулировка температуры. Хромированное покрытие.',
    fullDesc: 'Термостатический смеситель для душевой кабины и ванны. Автоматически поддерживает заданную температуру воды, защищает от ожогов. Керамический картридж, хромированная латунь. Подходит для скрытого и открытого монтажа.',
    price: '4 100 ₽',
    oldPrice: '5 400 ₽',
    specs: [
      { label: 'Тип', value: 'термостатический' },
      { label: 'Корпус', value: 'латунь, хром' },
      { label: 'Картридж', value: 'керамический' },
      { label: 'Подключение', value: '1/2"' },
      { label: 'Макс. давление', value: '0,6 МПа' },
      { label: 'Монтаж', value: 'открытый / скрытый' },
    ],
  },
  {
    badge: 'В наличии',
    img: '/GROHE.webp',
    name: 'Инсталляция GROHE с унитазом',
    desc: 'Комплект: инсталляция + унитаз с сиденьем. Скрытый монтаж. Бесшумный механизм смыва.',
    fullDesc: 'Готовый комплект для подвесного унитаза: инсталляция GROHE Rapid SL, унитаз, сиденье с микролифтом и клавиша смыва. Стальная рама выдерживает нагрузку до 400 кг. Бесшумное наполнение бачка, двойной смыв 3/6 л.',
    price: '28 000 ₽',
    specs: [
      { label: 'Бренд', value: 'GROHE' },
      { label: 'Тип монтажа', value: 'подвесной (скрытый)' },
      { label: 'Нагрузка на раму', value: 'до 400 кг' },
      { label: 'Смыв', value: '3 / 6 л (двойной)' },
      { label: 'Сиденье', value: 'с микролифтом' },
      { label: 'Шум наполнения', value: 'класс 1 (тихий)' },
      { label: 'Гарантия', value: '5 лет' },
    ],
  },
  {
    badge: 'В наличии',
    img: '/royal-thermo.webp',
    name: 'Радиатор Royal Thermo 500',
    desc: 'Алюминиевый радиатор, высота 500 мм. Высокая теплоотдача. Цена — за 1 секцию.',
    fullDesc: 'Алюминиевый секционный радиатор Royal Thermo 500. Увеличенное межосевое расстояние 500 мм. Высокая теплоотдача — 183 Вт на секцию. Рабочее давление 20 атм, испытательное — 30 атм. Подходит для автономных и централизованных систем отопления.',
    price: '1 150 ₽',
    specs: [
      { label: 'Материал', value: 'алюминий' },
      { label: 'Межосевое расстояние', value: '500 мм' },
      { label: 'Теплоотдача секции', value: '183 Вт' },
      { label: 'Рабочее давление', value: '20 атм' },
      { label: 'Испыт. давление', value: '30 атм' },
      { label: 'Объём секции', value: '0,46 л' },
      { label: 'Цена', value: 'за 1 секцию' },
    ],
  },
]

export default function ProductsSection() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [callbackOpen, setCallbackOpen] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  const scroll = (dir: 'left' | 'right') => {
    if (gridRef.current) gridRef.current.scrollBy({ left: dir === 'right' ? 267 : -267, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const pause = () => { pausedRef.current = true }
    const resume = () => { pausedRef.current = false }

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('touchend', resume)

    const id = window.innerWidth > 700 ? setInterval(() => {
      if (pausedRef.current) return
      el.scrollLeft += 1
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) el.scrollLeft = 0
    }, 40) : null

    return () => {
      if (id) clearInterval(id)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend', resume)
    }
  }, [])

  return (
    <>
      <section className="products-section">
        <div className="products-inner">
          <div className="products-header">
            <div className="section-label">Горячие позиции</div>
            <div className="products-header-right">
              <div className="products-nav">
                <button className="products-nav-btn" onClick={() => scroll('left')} aria-label="Назад">‹</button>
                <button className="products-nav-btn" onClick={() => scroll('right')} aria-label="Вперёд">›</button>
              </div>
              <button className="products-cta" onClick={() => setCallbackOpen(true)}>Узнать наличие →</button>
            </div>
          </div>
          <div className="products-grid" ref={gridRef}>
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
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 480px) 100vw, (max-width: 700px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
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
      <ProductModal product={selected} onClose={() => setSelected(null)} />
      <CallbackModal
        open={callbackOpen}
        phone={PHONE}
        phoneDisplay={PHONE_DISPLAY}
        onClose={() => setCallbackOpen(false)}
      />
    </>
  )
}
