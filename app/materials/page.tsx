import type { Metadata } from "next";
import Link from "next/link";

const itemClass =
  "-mx-3 flex flex-col rounded-xl px-3 py-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800";

const talks = [
  {
    href: "https://vkvideo.ru/live-60345511_456239064?list=19d771be8bf022641a",
    title: "Октябрь 2026 · Russian Design Cup 2026 Финал",
    description: "Финал конкурса Russian Design Cup 2026",
  },
  {
    href: "https://team.vk.company/a11y_training/design/",
    title: "VK · Цифровая доступность для дизайнеров",
    description: "Записал курс о том, как проектировать доступные цифровые продукты",
  },
  {
    href: "https://vkvideo.ru/video-60345511_456239051",
    title: "Октябрь 2025 · Russian Design Cup 2025 Финал",
    description: "Был ведущим финала RDC, представлял участников, модерировал работу жюри",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-152990965&id=456239715&hd=2",
    title: "Май 2025 · Кубок дизайн-систем",
    description: "Участвовал как представитель компании VK в первом кубке дизайн-систем",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-147415323&id=456240496&hd=2",
    title: "Октябрь 2024 · VK Design Conf’24",
    description: "Рассказал про работу с доступностью на уровне дизайн-системы",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-156923926&id=456239244&hd=2&autoplay=0",
    title: "Ноябрь 2023 · VK Design Conf’23",
    description: "Вместе с Лешей Зайцевым рассказали как устроена работа VKUI",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-60345511&id=456239047&hash=2b1935d9afebcab5",
    title: "Апрель 2022 · Russian Design Cup X2",
    description: "Выступил в финале Russian Design Cup и рассказал про фишки в Figma",
  },
];

export const metadata: Metadata = {
  title: "Публикации — Валера Сироткин",
  description: "Статьи и выступления Валеры Сироткина о продуктовом дизайне и дизайн-системах.",
};

export default function Materials() {
  return (
    <main className="mx-auto mt-12 max-w-[692px] px-6 antialiased">
      <Link
        href="/"
        className="mb-12 inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>
      <h1 className="text-2xl font-medium">Публикации</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Статьи и выступления о продуктовом дизайне, дизайн-системах и новых инструментах.
      </p>

      <section className="mt-6">
        <h2 className="font-medium">Статьи</h2>
        <div className="mt-3">
          <a
            href="https://vc.ru/design/3239654-podgotovka-dizajn-sistemy-k-rabote-s-ii-agentami"
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
          >
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">vc.ru · Дизайн</p>
            <h3>О чём дизайн-система раньше молчала: как подготовить её к работе с ИИ-агентами</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Как устранить неоднозначности в дизайн-системе, передать агентам знания о ней и проверять результат.
            </p>
          </a>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-medium">Выступления</h2>
        <div className="mt-3 space-y-2">
          {talks.map((talk) => (
            <a
              key={talk.href}
              href={talk.href}
              target="_blank"
              rel="noopener noreferrer"
              className={itemClass}
            >
              <h3>{talk.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{talk.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
