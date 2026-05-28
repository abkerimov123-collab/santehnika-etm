'use client'
import { useState } from 'react'

interface ModalData {
  title: string
  subtitle: string
  images: string[]
  points: string[]
}

const uspItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Подберём\nправильно',
    desc: 'Опыт в инженерных решениях — подберём совместимые комплектующие.',
    tag: 'Без ошибок и переделок',
    modal: {
      title: 'Подберём правильно',
      subtitle: 'Инженерная экспертиза на стороне покупателя',
      images: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'Проверяем совместимость каждого элемента системы',
        'Подбираем под мощность, объём и тип объекта',
        'Знаем, что реально есть в наличии — не продаём воздух',
        'Если есть сомнение — скажем честно и предложим альтернативу',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Быстрая\nдоставка',
    desc: 'Доставим по Евпатории в день заказа, по Крыму — за 1–2 дня.',
    tag: 'Свой склад в Евпатории',
    modal: {
      title: 'Быстрая доставка',
      subtitle: 'Свой склад — доставка в день заказа',
      images: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'По Евпатории — доставка в день заказа',
        'По Крыму — 1–2 рабочих дня',
        'Собственный склад с постоянным запасом',
        'Отгружаем с 9:00, удобный временной слот',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Поможем\nс выбором',
    desc: 'Проконсультируем и подберём решение под вашу задачу.',
    tag: 'Поддержка специалистов',
    modal: {
      title: 'Поможем с выбором',
      subtitle: 'Говорите задачу — составим список',
      images: [
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'Объясним разницу между моделями без воды',
        'Составим список под ваш объект и бюджет',
        'Монтажник не скажет «это не подходит»',
        'Консультация бесплатна — по телефону или в магазине',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Удобно\nработать',
    desc: 'Свободный возврат и честные условия для монтажников и покупателей.',
    tag: 'Честные условия',
    modal: {
      title: 'Удобно работать',
      subtitle: 'Партнёрские условия для монтажников',
      images: [
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'Свободный возврат, если что-то не подошло',
        'Гибкие условия для монтажников — спрашивайте',
        'Честные цены без навязывания лишнего',
        'Прозрачная смета с первого звонка',
      ],
    },
  },
]

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    value: '1000+',
    label: 'клиентов\nвыбрали нас',
    modal: {
      title: '1000+ клиентов',
      subtitle: 'Нам доверяют в Евпатории и Крыму',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'Частные домовладельцы, застройщики, управляющие компании',
        'Постоянные клиенты возвращаются — проверяем совместимость',
        'Монтажники рекомендуют нас своим заказчикам',
        'Работаем с 2014 года, более 10 лет на рынке',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    value: '10+',
    label: 'лет опыта\nна рынке',
    modal: {
      title: '10+ лет опыта',
      subtitle: 'Инженерные системы — наша специализация',
      images: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'Прошли через все поколения котлов, труб и систем',
        'Знаем, что реально работает в крымских условиях',
        'Обучаем монтажников и помогаем с подбором',
        'Опыт с частными объектами и промышленными объектами',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    value: '20 000+',
    label: 'товаров в наличии\nна складе',
    modal: {
      title: '20 000+ товаров',
      subtitle: 'Свой склад — отгрузка в день заказа',
      images: [
        'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'Котлы, радиаторы, трубы, фитинги, насосы, арматура',
        'Постоянный запас — не ждёте под заказ неделями',
        'Все позиции от проверенных брендов без подделок',
        'Отгружаем с 9:00, приедем или вы заберёте сами',
      ],
    },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>
      </svg>
    ),
    value: 'Свободный\nвозврат',
    label: 'если что-то\nне подошло',
    modal: {
      title: 'Свободный возврат',
      subtitle: 'Без лишних вопросов и нервов',
      images: [
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=85&auto=format&fit=crop',
      ],
      points: [
        'Не подошёл размер или характеристика — вернём без проблем',
        'Не нужен чек — помним историю покупок',
        'Обменяем на подходящий товар прямо в магазине',
        'Честный подход — не удерживаем деньги клиента',
      ],
    },
  },
]

export default function UspSection() {
  const [activeModal, setActiveModal] = useState<ModalData | null>(null)
  const [activeImg, setActiveImg] = useState(0)

  function openModal(modal: ModalData) {
    setActiveModal(modal)
    setActiveImg(0)
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    setActiveModal(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section className="usp2">
        <div className="usp2-grid">
          {uspItems.map((item) => (
            <button
              key={item.title}
              className="usp2-card"
              onClick={() => openModal(item.modal)}
              aria-label={`Подробнее: ${item.title.replace('\n', ' ')}`}
            >
              <div className="usp2-icon-box">
                {item.icon}
              </div>
              <div className="usp2-body">
                <div className="usp2-title">{item.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && item.title.includes('\n') && <br />}</span>
                ))}</div>
                <div className="usp2-desc">{item.desc}</div>
              </div>
              <div className="usp2-tag">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="7"/><polyline points="5 8 7 10 11 6"/>
                </svg>
                {item.tag}
              </div>
            </button>
          ))}
        </div>

        <div className="usp2-stats">
          {stats.map((s) => (
            <button
              className="usp2-stat"
              key={s.value}
              onClick={() => openModal(s.modal)}
              aria-label={`Подробнее: ${s.value.replace('\n', ' ')}`}
            >
              <div className="usp2-stat-icon">{s.icon}</div>
              <div className="usp2-stat-text">
                <div className="usp2-stat-value">{s.value.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && s.value.includes('\n') && <br />}</span>
                ))}</div>
                <div className="usp2-stat-label">{s.label.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && s.label.includes('\n') && <br />}</span>
                ))}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeModal && (
        <div className="usp-modal-overlay" onClick={closeModal}>
          <div className="usp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="usp-modal-close" onClick={closeModal} aria-label="Закрыть">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="usp-modal-imgs">
              <img
                src={activeModal.images[activeImg]}
                alt={activeModal.title}
                className="usp-modal-main-img"
              />
              {activeModal.images.length > 1 && (
                <div className="usp-modal-thumbs">
                  {activeModal.images.map((img, i) => (
                    <button
                      key={i}
                      className={`usp-modal-thumb${i === activeImg ? ' active' : ''}`}
                      onClick={() => setActiveImg(i)}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="usp-modal-body">
              <div className="usp-modal-label">{activeModal.subtitle}</div>
              <h2 className="usp-modal-title">{activeModal.title}</h2>
              <ul className="usp-modal-points">
                {activeModal.points.map((point, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="8" r="7"/><polyline points="5 8 7 10 11 6"/>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
