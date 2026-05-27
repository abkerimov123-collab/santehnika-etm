import dynamic from 'next/dynamic'
import HeroCarousel from './HeroCarousel'

const YandexMap = dynamic(() => import('./YandexMap'), { ssr: false })

function LogoIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="logo-icon"
    >
      {/* Top arc — clockwise from left-above to right-above, through top */}
      <path d="M 6.6 12.58 A 10 10 0 0 1 25.4 12.58" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <polygon points="25.4,12.58 25.72,8.20 22.34,9.44" fill="currentColor" />
      {/* Bottom arc — clockwise from right-below to left-below, through bottom */}
      <path d="M 25.4 19.42 A 10 10 0 0 1 6.6 19.42" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <polygon points="6.6,19.42 6.28,23.80 9.66,22.56" fill="currentColor" />
    </svg>
  )
}

const PHONE = '+79785623232'
const PHONE_DISPLAY = '+7 978 562-32-32'
const WA_URL = `https://wa.me/${PHONE}`
const TG_URL = 'https://t.me/evpaterm'
const MAX_URL = 'https://max.ru/u/f9LHodD0cOJo41JUPgh8J_By2rnO8KkNawBUNBlsW5IYkABer3uiQLOy0vc'

const brands = ['Vaillant', 'Buderus', 'Grohe', 'Kermi', 'Roca', 'Rehau', 'Danfoss', 'Wilo', 'Viessmann', 'Giacomini']

const products = [
  {
    badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=85&auto=format&fit=crop',
    name: 'Газовый котёл',
    desc: 'Настенный, двухконтурный. Подбор по мощности под ваш объект.',
    price: 'от 28 000 ₽',
  },
  {
    badge: 'Скидка',
    sale: true,
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=85&auto=format&fit=crop',
    name: 'Радиатор отопления',
    desc: 'Биметаллические и алюминиевые. Подберём секции под комнату.',
    price: 'от 2 500 ₽',
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

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header>
        <a href="#" className="logo">
          сантехника <LogoIcon size={28} /> етм
        </a>
        <a href={`tel:${PHONE}`} className="header-phone">{PHONE_DISPLAY}</a>
      </header>

      {/* HERO */}
      <section className="hero">
        <HeroCarousel />
        <div className="hero-content">
          <div className="hero-label">Евпатория · сантехника и инженерные системы</div>
          <h1>
            Инженерные<br />
            решения для<br />
            <em>дома и бизнеса</em>
          </h1>
          <p className="hero-sub">
            Отопление, водоснабжение, тёплые полы. Помогаем собрать всё правильно — от выбора до совместимости каждого элемента.
          </p>
          <div className="cta-group">
            <a href={`tel:${PHONE}`} className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              Позвонить
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-tg">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>
            <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="btn btn-max">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9.5l-4 4 1-4H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM12 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              MAX
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* USP */}
      <section className="usp">
        <div className="usp-grid">
          <div className="usp-item">
            <span className="usp-icon">🔧</span>
            <div className="usp-title">Отопление под ключ</div>
            <div className="usp-text">Котлы, коллекторы, радиаторы, тёплый пол — подберём всю систему совместимо и в наличии.</div>
          </div>
          <div className="usp-item">
            <span className="usp-icon">💧</span>
            <div className="usp-title">Водоснабжение и канализация</div>
            <div className="usp-text">Трубы, фитинги, насосы, арматура. Всё от проверенных брендов, без подделок.</div>
          </div>
          <div className="usp-item">
            <span className="usp-icon">💬</span>
            <div className="usp-title">Объясним и подберём</div>
            <div className="usp-text">Скажите задачу — составим список. Монтажник не скажет «это не подходит».</div>
          </div>
          <div className="usp-item">
            <span className="usp-icon">✅</span>
            <div className="usp-title">Удобно работать</div>
            <ul className="usp-bullets">
              <li>Быстрая доставка по Евпатории</li>
              <li>Гибкие условия для монтажников</li>
              <li>Честные цены без навязывания</li>
              <li>Прозрачная смета с первого звонка</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="products-inner">
          <div className="products-header">
            <div className="section-label">Горячие позиции</div>
            <a href={`tel:${PHONE}`} className="products-cta">Узнать наличие →</a>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div className="product-card" key={p.name}>
                <div className={`product-badge${p.sale ? ' product-badge--sale' : ''}`}>{p.badge}</div>
                <div className="product-img-wrap">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="product-body">
                  <div className="product-name">{p.name}</div>
                  <div className="product-desc">{p.desc}</div>
                  <div className="product-price-row">
                    <span className="product-price">{p.price}</span>
                    <a href={`tel:${PHONE}`} className="product-btn">Позвонить</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands-section">
        <div className="section-label" style={{ padding: '0 48px', marginBottom: '24px' }}>Работаем с брендами</div>
        <div className="brands-track-wrap">
          <div className="brands-track">
            {[...brands, ...brands].map((b, i) => (
              <span key={i}>
                <span className="brand-name">{b}</span>
                <span className="brand-sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="statement-card">
          <div className="statement-quote">
            <span>Мы продаём не товар —</span><br />
            <strong>мы продаём результат.</strong><br />
            <span>Спокойствие. Уверенность,<br />что всё подойдёт.</span>
          </div>
          <div className="statement-vline" />
          <div className="statement-meta">
            <div className="statement-city">Евпатория</div>
            <div className="statement-addr">
              Интернациональная ул., 134, корп. 3<br />
              Пн–Пт 9:00–18:00<br />
              Сб 9:00–15:00
            </div>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="socials-bar">
        <div className="section-label">Мы в сети</div>
        <div className="socials-links">
          <a href="https://vk.com/XXXXXXX" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-.9-2.07.1v1.614c0 .385-.12.614-1.135.614-1.647 0-3.47-1-4.754-2.856-1.932-2.699-2.46-4.705-2.46-5.124 0-.253.1-.49.614-.49h1.744c.46 0 .634.21.81.7.892 2.56 2.39 4.803 3.005 4.803.23 0 .336-.105.336-.68v-2.65c-.068-1.22-.714-1.32-.714-1.754 0-.21.168-.42.44-.42h2.744c.375 0 .51.2.51.63v3.573c0 .378.168.508.27.508.23 0 .42-.13.84-.55 1.304-1.46 2.234-3.706 2.234-3.706.12-.254.336-.49.797-.49h1.744c.525 0 .64.27.525.63-.217.997-2.328 3.997-2.328 3.997-.184.3-.25.435 0 .768.184.252.785.77 1.188 1.238.74.843 1.305 1.554 1.457 2.043.16.49-.09.74-.575.74z" />
            </svg>
            ВКонтакте
          </a>
          <a href="https://www.avito.ru/XXXXXXX" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.818 6.516a2.17 2.17 0 1 0 4.34 0 2.17 2.17 0 0 0-4.34 0zM7.698 4.347a2.17 2.17 0 1 0 0 4.34 2.17 2.17 0 0 0 0-4.34zm0 6.51A4.34 4.34 0 0 0 3.36 15.2a4.34 4.34 0 0 0 4.34 4.34 4.34 4.34 0 0 0 4.34-4.34 4.34 4.34 0 0 0-4.34-4.343zm0 6.51a2.17 2.17 0 0 1 0-4.34 2.17 2.17 0 0 1 0 4.34zM15.99 10.86a4.34 4.34 0 0 0-4.34 4.34 4.34 4.34 0 0 0 4.34 4.34 4.34 4.34 0 0 0 4.34-4.34 4.34 4.34 0 0 0-4.34-4.34zm0 6.51a2.17 2.17 0 0 1 0-4.34 2.17 2.17 0 0 1 0 4.34z" />
            </svg>
            Авито
          </a>
          <a href="https://yandex.com/maps/-/CPDBNU~K" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Яндекс.Карты
          </a>
          <a href="https://2gis.ru/search/%D0%95%D0%B2%D0%BF%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20134" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            2ГИС
          </a>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="section-label">Как нас найти</div>
        <div className="map-wrapper">
          <YandexMap />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">
          © 2026 сантехника <LogoIcon size={14} /> етм · Евпатория
        </div>
        <div className="footer-hours">Пн–Пт 9:00–18:00 · Сб 9:00–15:00</div>
      </footer>
    </>
  )
}
