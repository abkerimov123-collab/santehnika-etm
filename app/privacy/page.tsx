import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — сантехника • етм',
  description: 'Политика обработки персональных данных сайта сантехника-етм.рф',
}

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <Link href="/" className="privacy-back">← На главную</Link>

        <h1 className="privacy-h1">Политика конфиденциальности</h1>
        <p className="privacy-lead">
          Настоящая политика обработки персональных данных действует в отношении всей информации,
          которую сайт сантехника-етм.рф может получить от пользователя.
        </p>

        <section className="privacy-section">
          <h2 className="privacy-h2">1. Оператор персональных данных</h2>
          <p>Индивидуальный предприниматель Абкеримов Абляким Шебибович</p>
          <p>ИНН: 911005332108</p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-h2">2. Какие данные собираются</h2>
          <p>Через формы обратной связи сайт собирает следующие данные:</p>
          <ul className="privacy-list">
            <li>номер телефона пользователя.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-h2">3. Цели обработки данных</h2>
          <p>Персональные данные используются исключительно для:</p>
          <ul className="privacy-list">
            <li>связи с пользователем;</li>
            <li>обработки заявок;</li>
            <li>предоставления консультаций по товарам и услугам.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-h2">4. Передача данных третьим лицам</h2>
          <p>
            Персональные данные не передаются третьим лицам, за исключением случаев,
            предусмотренных законодательством Российской Федерации.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-h2">5. Защита данных</h2>
          <p>
            Оператор принимает необходимые организационные и технические меры для
            защиты персональных данных пользователей.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-h2">6. Cookies и аналитика</h2>
          <p>
            Сайт может использовать файлы cookie и сервисы аналитики для улучшения
            качества работы сайта и анализа посещаемости.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-h2">7. Права пользователя</h2>
          <p>
            Пользователь вправе запросить уточнение, изменение или удаление своих
            персональных данных.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-h2">8. Заключительные положения</h2>
          <p>
            Продолжая пользоваться сайтом и отправляя данные через формы обратной
            связи, пользователь подтверждает согласие с настоящей Политикой
            конфиденциальности.
          </p>
        </section>
      </div>
    </div>
  )
}
