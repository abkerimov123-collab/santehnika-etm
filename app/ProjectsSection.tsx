'use client'
import { useState, useRef } from 'react'

interface Project {
  id: number
  category: string
  image: string
  title: string
  desc: string
  location: string
  images: string[]
  works: string[]
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Застройщик СИАН',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop',
    title: 'ЖК «Новый берег»',
    desc: 'Комплексная поставка инженерных систем для многоквартирного дома.',
    location: 'г. Евпатория',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85&auto=format&fit=crop',
    ],
    works: [
      'Поставка котлового оборудования Vaillant на всю очередь строительства',
      'Система отопления — коллекторная разводка по всем секциям',
      'Горячее водоснабжение с циркуляционными насосами Wilo',
      'Тёплый пол в квартирах на первых двух этажах — трубы Rehau',
    ],
  },
  {
    id: 2,
    category: 'Застройщик СИАН',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop',
    title: 'ЖК «Солнечный»',
    desc: 'Отопление, водоснабжение и тёплый пол под ключ.',
    location: 'г. Евпатория',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=900&q=85&auto=format&fit=crop',
    ],
    works: [
      'Поставка радиаторов Kermi на 120 квартир',
      'Трубная разводка из армированного полипропилена Rehau',
      'Коллекторные шкафы Giacomini для поквартирного учёта',
      'Узлы ввода с балансировочной арматурой Danfoss',
    ],
  },
  {
    id: 3,
    category: 'Застройщик СИАН',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
    title: 'ЖК «Крымский дворик»',
    desc: 'Поставка сантехники и инженерного оборудования для жилого комплекса.',
    location: 'г. Евпатория',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85&auto=format&fit=crop',
    ],
    works: [
      'Поставка котлов Buderus для крышной котельной комплекса',
      'Система ХВС и ГВС — трубы и фитинги Rehau',
      'Запорная арматура и коллекторы GROHE',
      'Насосные группы и расширительные баки Wilo',
    ],
  },
  {
    id: 4,
    category: 'Детский сад',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    title: 'Детский сад, г. Евпатория',
    desc: 'Комплексные работы: отопление, водоснабжение, канализация.',
    location: 'г. Евпатория',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=900&q=85&auto=format&fit=crop',
    ],
    works: [
      'Полная замена системы отопления — котёл Buderus + радиаторы',
      'Прокладка водопровода из полипропилена REHAU',
      'Монтаж канализации — внутренние и наружные сети',
      'Установка санузлов и умывальников GROHE',
    ],
  },
  {
    id: 5,
    category: 'Частный дом',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop',
    title: 'Частный дом, п. Заозёрное',
    desc: 'Котельная, тёплый пол, водоснабжение под ключ.',
    location: 'п. Заозёрное',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85&auto=format&fit=crop',
    ],
    works: [
      'Котельная под ключ — котёл Vaillant + бойлер косвенного нагрева',
      'Тёплый пол 180 м² — коллекторная разводка Giacomini',
      'Система водоснабжения из скважины с накопительным баком',
      'Радиаторное отопление второго этажа — Kermi',
    ],
  },
]

interface ClientModal {
  subtitle: string
  image: string
  points: string[]
}

interface ClientType {
  icon: React.ReactNode
  title: string
  desc: string
  modal: ClientModal
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

type ModalMode = { kind: 'all' } | { kind: 'project'; project: Project } | { kind: 'client'; client: ClientType }

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0)
  const [modal, setModal] = useState<ModalMode | null>(null)
  const [modalImg, setModalImg] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const VISIBLE = 3
  const maxIndex = Math.max(0, projects.length - VISIBLE)

  function prev() { setCurrent(c => Math.max(0, c - 1)) }
  function next() { setCurrent(c => Math.min(maxIndex, c + 1)) }

  function openProject(p: Project) {
    setModal({ kind: 'project', project: p })
    setModalImg(0)
    document.body.style.overflow = 'hidden'
  }

  function openAll() {
    setModal({ kind: 'all' })
    document.body.style.overflow = 'hidden'
  }

  function openClient(c: ClientType) {
    setModal({ kind: 'client', client: c })
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
                <button key={c.title} className="client-item" onClick={() => openClient(c)}>
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

          {/* RIGHT: Реализованные проекты */}
          <div className="projects-col">
            <div className="projects-col-header">
              <div className="section-label" style={{ marginBottom: 0 }}>Реализованные проекты</div>
              <div className="projects-header-right">
                <button className="projects-nav-btn" onClick={prev} disabled={current === 0} aria-label="Предыдущий">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button className="projects-nav-btn" onClick={next} disabled={current >= maxIndex} aria-label="Следующий">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
                <button className="projects-more-link" onClick={openAll}>
                  Смотреть больше →
                </button>
              </div>
            </div>

            <div className="projects-carousel-wrap">
              <div
                ref={trackRef}
                className="projects-track"
                style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 4px)))` }}
              >
                {projects.map((p) => (
                  <button key={p.id} className="project-card" onClick={() => openProject(p)}>
                    <div className="project-card-img-wrap">
                      <img src={p.image} alt={p.title} />
                      <span className="project-category-badge">{p.category}</span>
                    </div>
                    <div className="project-card-body">
                      <div className="project-card-title">{p.title}</div>
                      <div className="project-card-desc">{p.desc}</div>
                      <div className="project-card-location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {p.location}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="proj-modal-overlay" onClick={closeModal}>
          <div
            className={`proj-modal${modal.kind === 'all' ? ' proj-modal--all' : ''}`}
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="proj-modal-close" onClick={closeModal} aria-label="Закрыть">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {modal.kind === 'client' ? (
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
            ) : modal.kind === 'all' ? (
              <div className="proj-modal-all">
                <div className="proj-modal-all-header">
                  <div className="usp-modal-label">Все объекты</div>
                  <h2 className="usp-modal-title">Реализованные проекты</h2>
                </div>
                <div className="proj-all-grid">
                  {projects.map((p) => (
                    <button key={p.id} className="project-card proj-all-card" onClick={() => { setModal({ kind: 'project', project: p }); setModalImg(0) }}>
                      <div className="project-card-img-wrap">
                        <img src={p.image} alt={p.title} />
                        <span className="project-category-badge">{p.category}</span>
                      </div>
                      <div className="project-card-body">
                        <div className="project-card-title">{p.title}</div>
                        <div className="project-card-desc">{p.desc}</div>
                        <div className="project-card-location">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                          {p.location}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : modal.kind === 'project' ? (
              <>
                <div className="usp-modal-imgs">
                  <img
                    src={modal.project.images[modalImg]}
                    alt={modal.project.title}
                    className="usp-modal-main-img"
                  />
                  {modal.project.images.length > 1 && (
                    <div className="usp-modal-thumbs">
                      {modal.project.images.map((img, i) => (
                        <button
                          key={i}
                          className={`usp-modal-thumb${i === modalImg ? ' active' : ''}`}
                          onClick={() => setModalImg(i)}
                        >
                          <img src={img} alt="" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="usp-modal-body">
                  <div className="usp-modal-label">{modal.project.category} · {modal.project.location}</div>
                  <h2 className="usp-modal-title">{modal.project.title}</h2>
                  <ul className="usp-modal-points">
                    {modal.project.works.map((w, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="8" cy="8" r="7"/><polyline points="5 8 7 10 11 6"/>
                        </svg>
                        {w}
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
