import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 antialiased ">
      <h1 className="sr-only">Валера Сироткин — дизайнер, арт-директор, музыкант</h1>
      {/* Сейчас */}
      <section className="max-w-4xl mx-auto py-16">
        <p className="mb-2">Я дизайнер с опытом больше 15 лет — люблю простые решения, за которыми стоит большая работа. Сейчас работаю в VK над продуктами Mail: начинал с системных продуктовых интерфейсов, сейчас руковожу направлением дизайна Disrupt и дизайн-системой Paradigm. Участвовал в крупных редизайнах, ребрендингах и помогал разрабатывать VKUI — основную дизайн-систему VK.</p>
        <span>
          Подробнее узнать о моей работе дизайнера <Link href="/about" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">можно тут</Link>
        </span>

        {/* Заметки */}
        <section className="max-w-4xl mx-auto py-16">
          <h2 className="font-medium mb-1">Заметки</h2>
          <div className="-mx-3 flex flex-col rounded-xl px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800 sm:py-2">
            <h3 className="inline-block">Цветовые пространства</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Что такое цвет и как устроены современные экраны</p>
          </div>
        </section>

        {/* Видео */}
        <section>
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
