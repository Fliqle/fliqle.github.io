import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    href: "/projects/mail",
    title: "Почта Mail",
    dates: "2019–2026",
    description: "Системный дизайн продукта: от интерфейсов почтового клиента до ключевых пользовательских сценариев всей Почты.",
    image: "/projects/mail.png",
  },
  {
    href: "/projects/paradigm",
    title: "Дизайн-система Paradigm",
    dates: "2021–2026",
    description: "Единая дизайн-система для B2B и B2C продуктов Mail и VK Workspace: токены, библиотеки компонентов, процессы.",
    image: "/projects/paradigm.png",
  },
    {
    href: "/projects/vkui",
    title: "Дизайн-система VKUI",
    dates: "2021–2024",
    description: "Единая дизайн-система VK: токены, библиотеки компонентов",
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
        <p className="mb-2">Я дизайнер с опытом больше 15 лет — люблю простые решения, за которыми стоит большая работа. Сейчас работаю в VK над продуктами Mail: начинал с системных продуктовых интерфейсов, сейчас руковожу направлением дизайна Mail и дизайн-системой Paradigm. Участвовал в крупных редизайнах, ребрендингах и помогал разрабатывать VKUI — основную дизайн-систему VK.</p>
        <span>
          Подробнее узнать о моей работе дизайнера <Link href="/about" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">можно тут</Link>
        </span>

        {/* Заметки */}
        {/*
        <section className="max-w-4xl mx-auto py-16">
          <h2 className="font-medium mb-1">Заметки</h2>
          <div className="-mx-3 flex flex-col rounded-xl px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800 sm:py-2">
            <h3 className="inline-block">Цветовые пространства</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Что такое цвет и как устроены современные экраны</p>
          </div>
        </section>
        */}

        {/* Проекты */}
        <section className="mt-16">
          <h2 className="font-medium mb-1">Проекты</h2>

          <div className="space-y-2">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="-mx-3 flex items-center gap-4 rounded-xl px-3 py-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    width={180}
                    height={96}
                    className="h-24 w-[180px] shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <div className="h-24 w-[180px] shrink-0 rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800" />
                )}
                <div>
                  <h3 className="inline-block">{project.title} · {project.dates}</h3>
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
