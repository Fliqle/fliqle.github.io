Личный сайт Валеры Сироткина — дизайнера, арт-директора и музыканта. Главная страница с кратким «о себе» и выступлениями, страница `/about` с историей опыта работы.

## Стек

- [Next.js 15](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript
- Tailwind CSS 4

## Запуск локально

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

## Структура

- `app/page.tsx` — главная страница
- `app/about/page.tsx` — страница с опытом работы
- `app/layout.tsx` — общий layout (шапка с аватаром и именем)
- `public/` — изображения (аватар, баннеры компаний)

## Другие команды

```bash
npm run build   # продакшн-сборка
npm run start   # запуск собранного приложения
npm run lint    # линтер
```
