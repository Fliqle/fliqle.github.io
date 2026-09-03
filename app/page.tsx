import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    href: "/projects/mail",
    title: "Почта Mail",
    dates: "2019–2026",
    description: "Работал над ключевыми пользовательскими сценариями Почты и руководил командой дизайнеров",
    image: "/projects/mail.png",
  },
  {
    href: "/projects/paradigm",
    title: "Дизайн-система Paradigm",
    dates: "2019–2026",
    description: "От библиотеки компонентов до архитектуры токенов, процессов и команды, которая поддерживает систему.",
    image: "/projects/paradigm.png",
  },
  {
    href: "/projects/vkui",
    title: "Дизайн-система VKUI",
    dates: "2021–2024",
    description: "Спроектировал архитектуру токенов и участвовал в объединении Paradigm и VKUI в общий системный фундамент для продуктов VK.",
    image: "/projects/vkui.png",
  },
  {
    href: "/projects/vkdobro",
    title: "VK Добро",
    dates: "2022–2023",
    description: "Благотворительный проект VK. Помогал с ребрендингом проекта и переводом на общую дизайн-систему",
    image: "/projects/vkdobro.png",
  },
  {
    href: "/projects/rdc",
    title: "Russian Design Cup",
    dates: "2021–2026",
    description: "Самый масштабный конкурс для дизайнеров в России",
    image: "/projects/rdc.png",
  },
  {
    href: "/projects/vkeducation",
    title: "VK Education",
    dates: "2021–2026",
    description: "Лекции по основам дизайна интерфейсов и практика по Figma",
    image: "/projects/vkeducation.png",
  },
  {
    href: "/projects/cloudizer",
    title: "Cloudizer",
    dates: "2026",
    description: "Личный проект — приложение для браузера, которое делает из Облака Mail аналог Pinterest",
    image: "/projects/cloudizer.png",
  },
  {
    href: "/projects/ladoga",
    title: "Ladoga UI",
    dates: "2025",
    description: "Совместный проект с командой VKUI по созданию базовой дизайн-системы",
    image: "/projects/ladoga.png",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 antialiased ">
      <h1 className="sr-only">Валера Сироткин — продуктовый дизайнер и дизайн-лидер</h1>
      {/* Сейчас */}
      <section className="max-w-4xl mx-auto py-16">
        <p className="mb-2">15+ лет в дизайне. Работал с Mail и VK, развивал дизайн-системы Paradigm и VKUI, последние годы — руководил командами продуктовых дизайнеров.</p>
        <p className="mb-6">Помогаю превращать сложные продукты и процессы в понятные системы — от пользовательского сценария до дизайн-команды.</p>
        <h2 id="2019-2021" className="font-medium mb-1 mt-16">Чем я занимаюсь</h2>
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

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-custom no-underline transition-shadow hover:shadow-custom-hover dark:bg-neutral-900"
              >
                <div className="flex h-44 items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      width={360}
                      height={192}
                      className="aspect-[360/192] w-3/5 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="aspect-[360/192] w-3/5 rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800" />
                  )}
                </div>
                <div>
                  <h3 className="inline-block">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Видео */}
        <section className="mt-16">
          <h2 className="font-medium mb-1">Выступления</h2>

          <div className="space-y-2">
            <a
              href="https://vkvideo.ru/video-60345511_456239051"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">Октябрь 2025 · Russian Design Cup 2025 Финал</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Был ведущим финала RDC, представлял участников, модерировал работу жюри
              </p>
            </a>


            <a
              href="https://vk.com/video_ext.php?oid=-152990965&id=456239715&hd=2"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">Май 2025 · Кубок дизайн-систем</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Участвовал как представитель компании VK в первом кубке дизайн-систем
              </p>
            </a>

            <a
              href="https://vk.com/video_ext.php?oid=-147415323&id=456240496&hd=2"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">Октябрь 2024 · VK Design Conf’24</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Рассказал про работу с доступностью на уровне дизайн-системы
              </p>
            </a>

            <a
              href="https://vk.com/video_ext.php?oid=-156923926&id=456239244&hd=2&autoplay=0"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">Ноябрь 2023 · VK Design Conf’23</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Вместе с Лешей Зайцевым рассказали как устроена работа VKUI
              </p>
            </a>

            <a
              href="https://vk.com/video_ext.php?oid=-60345511&id=456239047&hash=2b1935d9afebcab5"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">Апрель 2022 · Russian Design Cup X2</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Выступил в финале Russian Design Cup и рассказал про фишки в Figma
              </p>
            </a>

          </div>
        </section>

      </section>
    </main>
  );
}
