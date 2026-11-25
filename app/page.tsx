import { ProjectGrid } from "./project-grid";

const projects = [
  {
    href: "/projects/mail",
    title: "Почта Mail",
    dates: "2019–2026",
    description: "Работал над ключевыми пользовательскими сценариями Почты и руководил командой дизайнеров",
    image: "/projects/mail.png",
    previews: [
      "/projects/inside/mail/mail-interface.webp",
      "/projects/inside/mail/mail-speed.webp",
      "/projects/inside/mail/mail-payments.webp",
    ],
  },
  {
    href: "/projects/paradigm",
    title: "Дизайн-система Paradigm",
    dates: "2019–2026",
    description: "От библиотеки компонентов до архитектуры токенов, процессов и команды, которая поддерживает систему.",
    image: "/projects/paradigm.png",
    previews: [
      "/projects/inside/paradigm/paradigm1.webp",
      "/projects/inside/paradigm/paradigm4.webp",
      "/projects/inside/paradigm/paradigm6.webp",
    ],
  },
  {
    href: "/projects/vkui",
    title: "Дизайн-система VKUI",
    dates: "2021–2024",
    description: "Спроектировал архитектуру токенов и участвовал в объединении Paradigm и VKUI в общий системный фундамент для продуктов VK.",
    image: "/projects/vkui.png",
    previews: [
      "/projects/inside/vkui/vkui1.webp",
      "/projects/inside/vkui/vkui2.webp",
      "/projects/inside/vkui/vkui3.webp",
    ],
  },
  {
    href: "/projects/vkdobro",
    title: "VK Добро",
    dates: "2022–2023",
    description: "Благотворительный проект VK. Помогал с ребрендингом проекта и переводом на общую дизайн-систему",
    image: "/projects/vkdobro.png",
    previews: [
      "/projects/inside/dobro/vkdobro1.webp",
      "/projects/inside/dobro/vkdobro3.webp",
      "/projects/inside/dobro/vkdobro5.webp",
    ],
  },
  {
    href: "/projects/rdc",
    title: "Russian Design Cup",
    dates: "2021–2026",
    description: "Самый масштабный конкурс для дизайнеров в России",
    image: "/projects/rdc.png",
    previews: [
      "/projects/inside/rdc/Slide 4.webp",
      "/projects/inside/rdc/Slide 5.webp",
      "/projects/inside/rdc/Slide 6.webp",
    ],
  },
  {
    href: "/projects/vkeducation",
    title: "VK Education",
    dates: "2021–2026",
    description: "Лекции по основам дизайна интерфейсов и практика по Figma",
    image: "/projects/vkeducation.png",
    previews: [
      "/projects/inside/Education/figma-education.webp",
      "/projects/inside/Education/DN-109.webp",
      "/projects/vkeducation.png",
    ],
  },
  {
    href: "/projects/cloudizer",
    title: "Cloudizer",
    dates: "2026",
    description: "Личный проект — приложение для браузера, которое делает из Облака Mail аналог Pinterest",
    image: "/projects/cloudizer.png",
    previews: [
      "/projects/inside/Cloudizer1.webp",
      "/projects/cloudizer.png",
      "/projects/inside/Cloudizer1.webp",
    ],
  },
  {
    href: "/projects/ladoga",
    title: "Ladoga UI",
    dates: "2025",
    description: "Совместный проект с командой VKUI по созданию базовой дизайн-системы",
    image: "/projects/ladoga.png",
    previews: [
      "/projects/inside/Ladoga/main.webp",
      "/projects/inside/Ladoga/button.webp",
      "/projects/inside/Ladoga/components.webp",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 antialiased ">
      <h1 className="sr-only">Валера Сироткин — продуктовый дизайнер и дизайн-лидер</h1>
      {/* Сейчас */}
      <section className="max-w-4xl mx-auto py-12">
        <p className="mb-2">15+ лет в дизайне. Работал с Mail и VK, развивал дизайн-системы Paradigm и VKUI, последние годы — руководил командами продуктовых дизайнеров.</p>
        <p className="mb-6">Помогаю превращать сложные продукты и процессы в понятные системы — от пользовательского сценария до дизайн-команды.</p>
        <h2 id="2019-2021" className="font-medium mb-1 mt-12">Чем я занимаюсь</h2>
        <h3 className="inline-block">Product Design</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Сложные пользовательские сценарии, информационная архитектура, продуктовые эксперименты.
        </p>
                <h3 className="inline-block mt-3">Design-systems</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Архитектура, токены, компоненты, темизация, связь Figma ↔ code.
        </p>
                        <h3 className="inline-block mt-3">Design leadership</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Команды, найм, развитие дизайнеров, процессы, design quality.
        </p>
                        <h3 className="inline-block mt-3">Design strategy</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Приоритеты, системные изменения, синхронизация дизайна и продукта.
        </p>

        {/* Проекты */}
        <section className="mt-16">
          <h2 className="font-medium mb-1">Проекты</h2>

          <ProjectGrid projects={projects} />
        </section>

      </section>
    </main>
  );
}
