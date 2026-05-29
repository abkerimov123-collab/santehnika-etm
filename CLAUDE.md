# Сантехника ЕТМ — Landing Page

Одностраничный сайт магазина сантехники и инженерных систем в Евпатории.

## Стек

- **Next.js 14.2** (App Router, SSR/SSG)
- **React 18** + **TypeScript**
- Стили — кастомный CSS в `app/globals.css` (никаких UI-библиотек)
- Деплой — **Vercel**

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
  CallbackModal.tsx     — общая модалка связи (props: open, phone, phoneDisplay, onClose): каналы + форма → Telegram
  YandexMap.tsx         — встроенная Яндекс.Карта (динамический import, no SSR)
  api/callback/route.ts — POST-эндпоинт: принимает телефон и отправляет в Telegram-бота
public/
  hero-1.png, hero-2.png        — слайды карусели
  edisson-50.png                — товар Edisson 50L
  shuft-09.png                  — товар SHUFT 09
  client-teploservice.png       — логотип СЦ Теплосервис
  client-sian.png               — логотип СИАН
  client-ozero.png              — логотип «Озеро Сновидений»
  client-tes.png                — логотип ТЭС Отель
  Client-prestizh.png           — логотип УК «Престиж»
  client-uyut.png               — логотип УК «Уют»
  client-tavr.png               — логотип Санаторий «Таврия»
  client-consol.png             — логотип «Консоль-Строй»
```

## Переменные окружения

Файл `.env.local` (не коммитится):

```
TELEGRAM_BOT_TOKEN=...   # токен бота для заявок с формы обратного звонка
TELEGRAM_CHAT_ID=...     # chat_id группового чата (-5224153929)
```

На Vercel переменные обновляются через CLI:

```bash
npx vercel env rm TELEGRAM_CHAT_ID production
echo "значение" | npx vercel env add TELEGRAM_CHAT_ID production
```

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
- Подключён через Vercel → Settings → Domains, A-запись `216.198.79.1` на рег.ру
- Планируется добавить латинский домен как алиас (не canonical)
- Аналитика подключается после того как домен полностью заработает

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
- API-роут `/api/callback` → Telegram-бот (уведомления уходят в групповой чат `-5224153929`)
- Адрес в модалках кликабелен — ведёт на Яндекс.Карты (`https://yandex.com/maps/-/CPHKZN13`), выделен голубым с подчёркиванием и стрелкой ↗
- Часы работы в футере сдвинуты влево и выделены ярче

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
- Левая колонка: каналы связи (Позвонить / WhatsApp / Telegram)
- Правая колонка: форма «Заказать звонок» (поле телефона → POST `/api/callback`)
- Внизу: часы работы (Пн–Пт 8:00–17:00, Сб 8:00–15:00) и адрес-ссылка на Яндекс.Карты

Форма отправляет номер в Telegram-бот. Уведомление приходит в групповой чат (`-5224153929`).

## Деплой

GitHub-интеграция Vercel **не всегда подхватывает пуш** с локальной машины (когда `git config user.email` не совпадает с аккаунтом Vercel). В этом случае деплоить вручную:

```bash
npx vercel --prod --yes
```

Проект слинкован: `abkerimov123-3754s-projects/santehnika-etm` (`.vercel/project.json` присутствует после первого `vercel link`).

## Команды

```bash
npm run dev    # локальный сервер на :3000 (если занят — автоматически :3001 и т.д.)
npm run build  # production-сборка
npm run lint   # ESLint
```
