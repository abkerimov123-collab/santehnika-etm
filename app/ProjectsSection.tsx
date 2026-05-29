'use client'
import { useState, useEffect, useCallback } from 'react'

interface ClientCard {
  id: number
  name: string
  category: string
  initials: string
  bgColor: string
  textColor: string
  logo?: string
  modal: {
    subtitle: string
    points: string[]
  }
}

const clientCards: ClientCard[] = [
  {
    id: 1,
    name: 'СЦ Теплосервис',
    category: 'Обслуживание систем',
    initials: 'ТС',
    bgColor: '#FFF3E0',
    textColor: '#E65100',
    logo: '/client-teploservice.png',
    modal: {
      subtitle: 'Партнёрство с СЦ Теплосервис',
      points: [
        'Более 8 лет совместной работы — проверенный партнёр в Евпатории',
        'Поставка оборудования и комплектующих для обслуживаемых объектов',
        'Отгрузка материалов для аварийных выездов день в день',
        'Комплектация объектов в Евпатории и по всему Крыму',
        'Постоянное наличие востребованных запчастей и расходников на складе',
      ],
    },
  },
  {
    id: 2,
    name: 'СИАН',
    category: 'Застройщик',
    initials: 'СГ',
    bgColor: '#FAFAFA',
    textColor: '#1A1A1A',
    logo: '/client-sian.png',
    modal: {
      subtitle: 'Партнёрство с СИАН',
      points: [
        'Комплектация жилых объектов инженерной сантехникой',
        'Поставка труб, запорной арматуры и оборудования',
        'Оперативное обеспечение строительных объектов материалами',
        'Поддержка на этапах строительства и ввода объектов',
        'Надёжное партнёрство при реализации жилых проектов',
      ],
    },
  },
  {
    id: 3,
    name: '«Озеро Сновидений»',
    category: 'Гостиничный комплекс',
    initials: 'ОС',
    bgColor: '#F5F5F5',
    textColor: '#333333',
    logo: '/client-ozero.png',
    modal: {
      subtitle: 'Партнёрство с «Озеро Сновидений»',
      points: [
        'Комплектация инженерных систем гостиничного комплекса',
        'Поставка сантехники, оборудования и расходных материалов',
        'Обеспечение бесперебойной работы систем водоснабжения и отопления',
        'Оперативные поставки материалов для эксплуатации и обслуживания объекта',
        'Надёжное партнёрство в работе одного из крупнейших гостиничных комплексов Евпатории',
      ],
    },
  },
  {
    id: 4,
    name: 'ТЭС Отель',
    category: 'Гостиничный комплекс',
    initials: 'ТЭС',
    bgColor: '#F5F5F5',
    textColor: '#333333',
    logo: '/client-tes.png',
    modal: {
      subtitle: 'Партнёрство с ТЭС Отель',
      points: [
        'Комплектация инженерных систем гостиничного комплекса',
        'Поставка сантехники, оборудования и расходных материалов',
        'Оперативное обеспечение объектов для бесперебойной эксплуатации',
        'Поддержка систем водоснабжения, отопления и горячего водоснабжения',
        'Надёжное партнёрство в обслуживании одного из крупнейших гостиничных комплексов Евпатории',
      ],
    },
  },
  {
    id: 5,
    name: 'УК «Престиж»',
    category: 'Управляющая компания',
    initials: 'УКП',
    bgColor: '#F5F1E8',
    textColor: '#1A3A8F',
    logo: '/Client-prestizh.png',
    modal: {
      subtitle: 'Партнёрство с УК «Престиж»',
      points: [
        'Поставка инженерной сантехники для многоквартирных домов',
        'Оперативное обеспечение аварийных и плановых работ',
        'Комплектация систем водоснабжения и отопления',
        'Постоянное наличие востребованных материалов и комплектующих',
        'Надёжное партнёрство в обслуживании жилого фонда Евпатории',
      ],
    },
  },
  {
    id: 6,
    name: 'УК «Уют»',
    category: 'Управляющая компания',
    initials: 'УКУ',
    bgColor: '#F5F5F5',
    textColor: '#333333',
    logo: '/client-uyut.png',
    modal: {
      subtitle: 'Партнёрство с УК «Уют»',
      points: [
        'Поставка инженерной сантехники для обслуживания жилого фонда',
        'Комплектация систем водоснабжения, отопления и канализации',
        'Оперативное обеспечение аварийных и ремонтных работ',
        'Постоянное наличие востребованных материалов и комплектующих',
        'Надёжное партнёрство в обслуживании многоквартирных домов Евпатории',
      ],
    },
  },
  {
    id: 7,
    name: 'Санаторий «Таврия»',
    category: 'Санаторно-курортный комплекс',
    initials: 'ТВ',
    bgColor: '#F5F5F5',
    textColor: '#333333',
    logo: '/client-tavr.png',
    modal: {
      subtitle: 'Партнёрство с санаторием «Таврия»',
      points: [
        'Комплектация инженерных систем санаторно-курортного комплекса',
        'Поставка сантехники, оборудования и расходных материалов',
        'Обеспечение объектов водоснабжения, отопления и горячего водоснабжения',
        'Оперативные поставки материалов для эксплуатации и обслуживания объектов',
        'Надёжное партнёрство в работе одного из крупнейших санаториев Евпатории',
      ],
    },
  },
  {
    id: 8,
    name: '«Консоль-Строй»',
    category: 'Строительная компания',
    initials: 'КС',
    bgColor: '#F5F5F5',
    textColor: '#333333',
    logo: '/client-consol.png',
    modal: {
      subtitle: 'Партнёрство с «Консоль-Строй»',
      points: [
        'Комплектация строительных объектов инженерной сантехникой',
        'Поставка труб, запорной арматуры и инженерного оборудования',
        'Оперативное обеспечение объектов материалами на этапах строительства',
        'Поддержка при монтаже и вводе инженерных систем в эксплуатацию',
        'Надёжное партнёрство при реализации жилых и коммерческих проектов',
      ],
    },
  },
]

interface ClientType {
  icon: React.ReactNode
  title: string
  desc: string
  modal: {
    subtitle: string
    image: string
    points: string[]
  }
}

const clientTypes: ClientType[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Частные дома',
    desc: 'Инженерные системы для комфортной жизни',
    modal: {
      subtitle: 'Почему выбирают нас для дома',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&auto=format&fit=crop',
      points: [
        'Подберём котёл, радиаторы и трубы, которые точно совместимы — монтажник не придёт и не скажет «это не подходит»',
        'Привезём в день заказа по Евпатории — не ждёте неделями под заказ',
        'Поможем рассчитать мощность котла и количество секций радиаторов под ваш дом',
        'Свободный возврат, если что-то не подошло — без лишних вопросов',
        'Работаем с частными домами 10+ лет, знаем крымские условия воды и климата',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Монтажные бригады',
    desc: 'Подбираем совместимые без ошибок',
    modal: {
      subtitle: 'Почему монтажники работают с нами',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85&auto=format&fit=crop',
      points: [
        'Всё в наличии на складе — приехал, забрал, поехал на объект. Без ожидания и переносов',
        'Гарантируем совместимость: подбираем комплект под систему, а не просто отпускаем позиции',
        'Партнёрские условия для постоянных бригад — спрашивайте при первом визите',
        'Оперативная отгрузка с 9:00, удобный подъезд и погрузка',
        'Если на объекте не подошло — обменяем без скандала и оформим документы',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    title: 'Застройщики и УК',
    desc: 'Комплексные поставки для жилых комплексов',
    modal: {
      subtitle: 'Почему застройщики доверяют нам',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85&auto=format&fit=crop',
      points: [
        'Работаем с СИАН и другими застройщиками Евпатории — знаем специфику многоквартирных домов',
        'Комплектуем весь объект от котельной до радиаторов в квартирах — один поставщик, единые сроки',
        'Резервируем товар под очередь строительства, не срываем график',
        'Вся необходимая документация и сертификаты на оборудование',
        'Гибкие условия оплаты для крупных объёмов — обсуждаем индивидуально',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Коммерческие объекты',
    desc: 'Надёжные решения для бизнеса',
    modal: {
      subtitle: 'Почему бизнес выбирает нас',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=900&q=85&auto=format&fit=crop',
      points: [
        'Подбираем оборудование под нагрузку объекта: гостиницы, рестораны, офисы, производства',
        'Работаем с проверенными брендами Vaillant, Buderus, Wilo — надёжность подтверждена годами',
        'Быстрая замена при гарантийном случае — не останавливаем ваш бизнес',
        'Консультируем по снижению затрат на отопление и горячую воду',
        'Прозрачная смета с первого звонка, без скрытых наценок',
      ],
    },
  },
]

type ModalMode =
  | { kind: 'clienttype'; client: ClientType }
  | { kind: 'clientcard'; card: ClientCard }

const VISIBLE = 4

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [modal, setModal] = useState<ModalMode | null>(null)

  const maxIndex = clientCards.length - VISIBLE

  const next = useCallback(() => {
    setCurrent(c => (c >= maxIndex ? 0 : c + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent(c => (c <= 0 ? maxIndex : c - 1))
  }, [maxIndex])

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(next, 3200)
    return () => clearInterval(timer)
  }, [autoPlay, next])

  function openClientType(c: ClientType) {
    setModal({ kind: 'clienttype', client: c })
    document.body.style.overflow = 'hidden'
  }

  function openClientCard(card: ClientCard) {
    setModal({ kind: 'clientcard', card })
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    setModal(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section className="clients-projects-section">
        <div className="clients-projects-inner">

          {/* LEFT: С нами работают */}
          <div className="clients-col">
            <div className="section-label">С нами работают</div>
            <div className="clients-list">
              {clientTypes.map((c) => (
                <button key={c.title} className="client-item" onClick={() => openClientType(c)}>
                  <div className="client-icon">{c.icon}</div>
                  <div className="client-text">
                    <div className="client-title">{c.title}</div>
                    <div className="client-desc">{c.desc}</div>
                  </div>
                  <div className="client-arrow">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 4 10 8 6 12"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Наши клиенты */}
          <div className="client-logos-col"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="projects-col-header">
              <div className="section-label" style={{ marginBottom: 0 }}>Наши клиенты</div>
              <div className="projects-header-right">
                <button className="projects-nav-btn" onClick={prev} aria-label="Предыдущий">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button className="projects-nav-btn" onClick={next} aria-label="Следующий">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="client-logos-carousel-wrap">
              <div
                className="client-logos-track"
                style={{ transform: `translateX(calc(-${current} * ((100cqi - 36px) / 4 + 12px)))` }}
              >
                {clientCards.map((card) => (
                  <button
                    key={card.id}
                    className="client-logo-card"
                    onClick={() => openClientCard(card)}
                    title={card.name}
                  >
                    <div
                      className="client-logo-placeholder"
                      style={{ background: card.bgColor, color: card.textColor }}
                    >
                      {card.logo
                        ? <img src={card.logo} alt={card.name} className="client-logo-img" />
                        : <span className="client-logo-initials">{card.initials}</span>
                      }
                    </div>
                    <div className="client-logo-name">{card.name}</div>
                    <div className="client-logo-cat">{card.category}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="client-logos-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`client-logos-dot${current === i ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Страница ${i + 1}`}
                />
              ))}
            </div>

            <p className="client-logos-tagline">
              Более 15 лет поставляем инженерную сантехнику для частных и коммерческих объектов Евпатории
            </p>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="proj-modal-overlay" onClick={closeModal}>
          <div
            className="proj-modal"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="proj-modal-close" onClick={closeModal} aria-label="Закрыть">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {modal.kind === 'clienttype' ? (
              <>
                <div className="usp-modal-imgs">
                  <img
                    src={modal.client.modal.image}
                    alt={modal.client.title}
                    className="usp-modal-main-img"
                  />
                </div>
                <div className="usp-modal-body">
                  <div className="usp-modal-label">{modal.client.modal.subtitle}</div>
                  <h2 className="usp-modal-title">{modal.client.title}</h2>
                  <ul className="usp-modal-points">
                    {modal.client.modal.points.map((point, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="8" cy="8" r="7"/><polyline points="5 8 7 10 11 6"/>
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : modal.kind === 'clientcard' ? (
              <>
                <div className="usp-modal-imgs client-card-modal-left" style={{ background: modal.card.bgColor }}>
                  <div className="client-card-modal-logo" style={{ color: modal.card.textColor }}>
                    {modal.card.logo
                      ? <img src={modal.card.logo} alt={modal.card.name} className="client-card-modal-logo-img" />
                      : <span className="client-card-modal-initials">{modal.card.initials}</span>
                    }
                    <span className="client-card-modal-name">{modal.card.name}</span>
                  </div>
                  <div className="client-card-modal-tag" style={{ color: modal.card.textColor, borderColor: modal.card.textColor + '40' }}>
                    {modal.card.category}
                  </div>
                </div>
                <div className="usp-modal-body">
                  <div className="usp-modal-label">{modal.card.modal.subtitle}</div>
                  <h2 className="usp-modal-title">{modal.card.name}</h2>
                  <ul className="usp-modal-points">
                    {modal.card.modal.points.map((point, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="8" cy="8" r="7"/><polyline points="5 8 7 10 11 6"/>
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </>
  )
}
