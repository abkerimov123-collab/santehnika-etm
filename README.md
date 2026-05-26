# сантехника • етм — лендинг

Сайт магазина сантехники в Евпатории. Next.js 14, задеплоен на Vercel.

**Живой сайт:** [santehnika-etm.vercel.app](https://santehnika-etm.vercel.app)

---

## Структура проекта

```
app/
  layout.tsx      — шрифты (Unbounded, Onest), метатеги
  page.tsx        — вся страница (Hero, USP, Товары, Бренды, Карта, Футер)
  globals.css     — все стили
  YandexMap.tsx   — Яндекс.Карты (клиентский компонент)
public/           — статические файлы (изображения и т.д.)
```

## Как вносить изменения

**Телефон, Telegram, ВКонтакте, Авито** — в начале `app/page.tsx`:
```ts
const PHONE = '+79785623232'
const TG_URL = 'https://t.me/XXXXXXX'
```

**Товары** — массив `products` в `app/page.tsx`.

**Стили** — `app/globals.css`.

**Фоновое изображение** — положите файл в `public/`, затем в `globals.css`:
```css
.hero-bg {
  background-image: url('/your-image.jpg');
  background-size: cover;
  background-position: center;
}
```

## Деплой

Любой `git push` в ветку `main` автоматически деплоит сайт через Vercel.

```bash
git add .
git commit -m "описание изменений"
git push
```
