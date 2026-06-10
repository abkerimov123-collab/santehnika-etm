# Сантехника ЕТМ — Landing Page

Одностраничный сайт магазина сантехники и инженерных систем в Евпатории.

## Стек

- **Next.js 14.2** (App Router, статический экспорт `output: 'export'`)
- **React 18** + **TypeScript**
- Стили — кастомный CSS в `app/globals.css` (никаких UI-библиотек)
- Деплой — **рег.ру хостинг Host-Lite** (FTP-загрузка папки `out/`)

## Структура

```
app/
  page.tsx              — главная страница, все секции собраны здесь
  layout.tsx            — HTML-обёртка, метатеги
  globals.css           — все стили проекта
  HeroCarousel.tsx      — карусель на hero-секции
  ProductsSection.tsx   — сетка товаров с карточками
  ProductModal.tsx      — модальное окно с деталями товара
  UspSection.tsx        — секция преимуществ (динамический import, no SSR)
  ProjectsSection.tsx   — секции «С нами работают» и «Реализованные проекты»
  CallButton.tsx        — FAB-кнопка звонка: мобайл — прямой звонок, десктоп — встроенная модалка (своя, не CallbackModal)
  StickyCallWidget.tsx  — альтернативная sticky-кнопка «Заказать звонок» → CallbackModal (не используется на странице, заготовка)
  HeaderPhoneButton.tsx — кнопка телефона в хедере → CallbackModal
  CallbackModal.tsx     — общая модалка связи (props: open, phone, phoneDisplay, onClose): каналы + форма → Битрикс24
  YandexMap.tsx         — встроенная Яндекс.Карта (динамический import, no SSR)
  privacy/page.tsx      — страница «Политика конфиденциальности» (маршрут /privacy)
  CookieBanner.tsx      — cookie-уведомление внизу экрана (localStorage: cookie_consent_v1)
  api/callback/route.ts — старый Telegram-эндпоинт (не используется, игнорируется при сборке)
public/
  hero-1.webp, hero-2.webp      — слайды карусели (WebP, ~100KB каждый)
  edisson-50.webp               — товар Edisson 50L
  shuft-09.webp                 — товар SHUFT 09
  client-teploservice.webp      — логотип СЦ Теплосервис
  client-sian.webp              — логотип СИАН
  client-ozero.webp             — логотип «Озеро Сновидений»
  client-tes.webp               — логотип ТЭС Отель
  Client-prestizh.webp          — логотип УК «Престиж»
  client-uyut.webp              — логотип УК «Уют»
  client-tavr.webp              — логотип Санаторий «Таврия»
  client-consol.webp            — логотип «Консоль-Строй»
```

## Форма обратного звонка → Битрикс24

Форма в `CallbackModal.tsx` и `CallButton.tsx` отправляет лид напрямую из браузера через Битрикс24 REST API (входящий вебхук):

```
POST https://etmevp.bitrix24.ru/rest/1/yqxbteshp2g3y8kh/crm.lead.add
```

Поля: `FIELDS[TITLE]`, `FIELDS[PHONE][0][VALUE]`, `FIELDS[SOURCE_ID]=WEB`, `FIELDS[ASSIGNED_BY_ID]=1`

Бэкенд не нужен — вызов идёт прямо из JS в браузере. Переменные окружения для Telegram больше не используются.

## Контакты в коде (константы в `app/page.tsx`)

```ts
const PHONE = '+79785623232'
const PHONE_DISPLAY = '+7 978 562-32-32'
const WA_URL = `https://wa.me/${PHONE}`
const TG_URL = 'https://t.me/evpaterm'
const MAX_URL = 'https://max.ru/u/f9LHodD0cOJo41JUPgh8J_By2rnO8KkNawBUNBlsW5IYkABer3uiQLOy0vc'
```

Адрес: Евпатория, Интернациональная ул., 134, корп. 1. Пн–Пт 8:00–17:00, Сб 8:00–15:00.

## Бренды (бегущая строка)

`['Vaillant', 'Buderus', 'Grohe', 'Kermi', 'Roca', 'Rehau', 'Danfoss', 'Wilo', 'Viessmann', 'Giacomini', 'Теплосервис', 'СИАН']`

## Домены

- **Основной (canonical):** `сантехника-етм.рф` (punycode: `xn----7sbatcpotcb4boh9a.xn--p1ai`)
- A-запись `37.140.192.54` на рег.ру (NS: `ns1.reg.ru`, `ns2.reg.ru`)
- Ранее был Vercel (`216.198.79.1`) — переехали из-за блокировок в РФ
- Аккаунт рег.ру подтверждён через Госуслуги (домен `.рф` требует верификацию)
- Яндекс.Метрика подключена (id: 109497218) — счётчик с вебвизором

## Хостинг рег.ру

- **Тариф:** Host-Lite (`server79.hosting.reg.ru`)
- **IP сервера:** `37.140.192.54`
- **Панель управления:** https://server79.hosting.reg.ru:1500/ (Ispmanager)
- **Логин панели:** `u3534507`
- **FTP логин:** `u3534507`
- **FTP пароль:** `eJewmEO12MO7dfQ1`
- **Корневая директория сайта:** `/www/xn----7sbatcpotcb4boh9a.xn--p1ai/`
- **SSL:** Let's Encrypt (настроить в Ispmanager → Сайты → SSL-сертификаты)

## Что уже реализовано

- Hero с каруселью и блоком CTA (звонок, WhatsApp, Telegram, MAX)
- Карточки товаров с модальным окном (характеристики, цены, кнопка звонка)
- USP-секция с интерактивными карточками и статистикой
- Секции «С нами работают» и «Реализованные проекты» (карусель + модалка)
  - Карточки клиентов поддерживают логотипы (`logo?: string` в `ClientCard`) — при наличии показывает `<img>`, иначе инициалы
  - 8 клиентов с реальными логотипами: СЦ Теплосервис, СИАН, «Озеро Сновидений», ТЭС Отель, УК «Престиж», УК «Уют», Санаторий «Таврия», «Консоль-Строй»
- Бегущая строка брендов «Нам доверяют»
- Блок-цитата + адрес
- Ссылки на соцсети (VK, Авито, Яндекс.Карты, 2ГИС)
- Встроенная Яндекс.Карта
- Sticky FAB-кнопка звонка (зелёная, правый нижний угол, пульсирующая анимация)
- Кнопка телефона в хедере (зелёная рамка с glow) — открывает `CallbackModal`
- Форма обратного звонка → лид в Битрикс24 CRM (`etmevp.bitrix24.ru`)
- Адрес в модалках кликабелен — ведёт на Яндекс.Карты (`https://yandex.com/maps/-/CPHKZN13`), выделен голубым с подчёркиванием и стрелкой ↗
- Часы работы в футере сдвинуты влево и выделены ярче
- Страница «Политика конфиденциальности» (`/privacy`) — ИП Абкеримов А.Ш., ИНН 911005332108
- Ссылка на `/privacy` в футере (`.footer-privacy`, прижата вправо через `margin-left: auto`)
- Cookie-баннер (`CookieBanner.tsx`): фиксированный внизу экрана, текст + кнопка «Понятно» + ссылка «Подробнее» → `/privacy`; согласие сохраняется в `localStorage` под ключом `cookie_consent_v1`; `z-index: 190` (ниже FAB 200 и модалок 300); `padding-right: 110px` чтобы не перекрываться с FAB-кнопкой
- Чекбокс согласия на обработку ПД в обеих формах (`CallbackModal` и `CallButton`):
  - по умолчанию не отмечен
  - кнопка «Жду звонка» визуально серая (`.cm-submit--locked`) до постановки галочки
  - клик по кнопке без галочки: жёлтая подсветка чекбокса на 1.5 сек + подсказка «Поставьте галочку…»
  - после постановки галочки подсказка исчезает, кнопка активируется
  - факт согласия нигде не сохраняется — только UX-барьер

## CallButton — логика FAB

`app/CallButton.tsx` — клиентский компонент, определяет устройство через `window.innerWidth`:

- **Мобилка (≤700px):** рендерит `<a href="tel:+79785623232">` — нажатие сразу инициирует звонок
- **Десктоп (>700px):** рендерит `<button>` — нажатие открывает встроенную модалку (собственная, не `CallbackModal`)

Константы `PHONE`, `PHONE_DISPLAY`, `WA_URL`, `TG_URL` продублированы внутри компонента.

## StickyCallWidget — альтернативный виджет

`app/StickyCallWidget.tsx` — sticky-кнопка «Заказать звонок» (принимает `phone`, `phoneDisplay`), использует общий `CallbackModal`. В настоящее время **не подключён** в `page.tsx` (заготовка для возможной замены `CallButton`).

## HeaderPhoneButton — кнопка в хедере

`app/HeaderPhoneButton.tsx` — рендерит кнопку хедера (зелёная рамка с glow). Получает `phone` и `phoneDisplay` из `page.tsx`. Всегда открывает `CallbackModal` по клику.

**Мобильная адаптация (≤700px):** кнопка компактная — скрыты лейбл «Позвонить нам» и разделитель, остаётся только иконка + номер телефона в одну строку с `white-space: nowrap`. Стили в `globals.css` в блоке `@media (max-width: 700px)`.

## CallbackModal — общая модалка

`app/CallbackModal.tsx` — используется в `HeaderPhoneButton` (и в `StickyCallWidget`). Props: `open`, `phone`, `phoneDisplay`, `onClose`.

Содержит:
- Левая колонка: каналы связи (Позвонить / WhatsApp / Telegram / MAX)
- Правая колонка: форма «Заказать звонок» (поле телефона → чекбокс согласия → кнопка → Битрикс24 `crm.lead.add`)
- Внизу: часы работы (Пн–Пт 8:00–17:00, Сб 8:00–15:00) и адрес-ссылка на Яндекс.Карты

## Форма согласия на обработку ПД

Обе формы (`CallbackModal.tsx` и `CallButton.tsx`) содержат одинаковый чекбокс:

```
Я согласен на обработку персональных данных по [Политике конфиденциальности]
```

Состояния: `consent`, `showHint`, `highlight`. Логика в `handleSubmit` — при `!consent` блокирует отправку и показывает UX-подсказку. CSS-классы: `.cm-consent`, `.cm-consent--highlight`, `.cm-consent-hint`, `.cm-submit--locked`.

## Оптимизация изображений

Все публичные изображения конвертированы из PNG в WebP (было ~17 MB → стало ~640 KB, −95%).
Сборка использует `images: { unoptimized: true }` (статический экспорт не поддерживает Next.js Image Optimization).

При добавлении новых изображений — конвертировать через sharp:
```bash
node -e "require('sharp')('public/file.png').webp({quality:82}).toFile('public/file.webp')"
```

## Рабочий процесс (работа с двух ПК)

**После каждой сессии** говори Клоду: **«сохрани и задеплой»**
— сделает git add, commit, push и загрузит `out/` на рег.ру по FTP.

**Начиная работу на другом ПК** говори Клоду: **«подтяни последние изменения»**
— сделает git pull.

## Деплой на рег.ру (FTP)

```bash
npm run build   # собирает папку out/
# затем загрузить out/ по FTP:
# хост: 37.140.192.54
# логин: u3534507
# пароль: см. панель рег.ру → Хостинги → доступы
# путь: /www/xn----7sbatcpotcb4boh9a.xn--p1ai/
```

## Команды

```bash
npm run dev    # локальный сервер на :3000 (если занят — автоматически :3001 и т.д.)
npm run build  # production-сборка → папка out/
npm run lint   # ESLint
```
