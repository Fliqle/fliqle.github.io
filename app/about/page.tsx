import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Опыт — Валера Сироткин",
  description:
    "Опыт работы Валеры Сироткина: VK, Mail.ru Group и компания «Тензор» — дизайн-системы, продуктовый и системный дизайн.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <h1 className="sr-only">Опыт работы</h1>

      <article className="md:flex">
        {/* Дата слева */}
        <p className="min-w-[120px] mt-2 text-sm text-gray-500 dark:text-gray-400">2023 – сейчас</p>

        {/* Контент справа */}
        <div className="relative pl-0 sm:pl-10">
          <div className="absolute left-0 top-4 h-full w-px bg-gray-200 hidden sm:block"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute left-[-4px] top-4 hidden sm:block"></div>

          {/* Заголовок */}
          <h2 className="text-xl sm:text-3xl font-bold mb-2 mt-2 sm:mt-0">
            VK
          </h2>

          {/* Описание */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Руководитель направления дизайна Disrupt и дизайн-системы Mail
            </p>
          </div>

          <Image
            src="/VK.png"
            alt="Баннер VK"
            width={968}
            height={512}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-3 w-full h-auto"
          />

          {/* Список фич */}
          <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
            <li>Разрабатываю и внедряю дизайн-системные решения, которые упрощают работу продуктовых команд: темы, токены, Figma-библиотеки и компоненты с высокой степенью повторного использования.</li>
            <li>Веду унификацию визуального языка между продуктами: синхронизирую цветовые палитры, типографику и паттерны для единообразия пользовательского опыта.</li>
            <li>Оптимизирую процессы внутри команд: создаю инструменты, которые позволяют вносить дизайн-изменения без прямого участия дизайнеров, снижая операционную нагрузку.</li>
            <li>Развиваю внутреннее и внешнее дизайн-комьюнити: провожу конкурсы, участвую в хакатонах, инициирую обмен практиками между командами.</li>
          </ul>
        </div>
      </article>

      <article className="md:flex">
        {/* Дата слева */}
        <p className="min-w-[120px] mt-2 text-sm text-gray-500 dark:text-gray-400">2019–2023</p>

        {/* Контент справа */}
        <div className="relative pl-0 sm:pl-10">
          <div className="absolute left-0 top-4 h-full w-px bg-gray-200  hidden sm:block"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute left-[-4px] top-4  hidden sm:block"></div>

          {/* Заголовок */}
          <h2 className="text-xl sm:text-3xl font-bold mb-2 mt-2 sm:mt-0">
            Mail.ru Group
          </h2>

          {/* Описание */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Ведущий дизайнер, Арт-директор
            </p>
          </div>

          <Image
            src="/Mail.png"
            alt="Баннер Mail.ru Group"
            width={968}
            height={512}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-3 w-full h-auto"
          />

          {/* Список фич */}
          <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
            <li>Работал над системным дизайном для продуктов Mail и Облако, выстраивая кросс-продуктовые паттерны, компоненты и навигационные принципы.</li>
            <li>Создавал новые разделы — например, полностью спроектировал и <a href="https://www.sostav.ru/publication/mail-ru-zapustila-platformu-dlya-oplaty-uslug-pryamo-v-pochte-41094.html" className="text-blue-500 hover:text-blue-800 dark:text-blue-400">
              отрисовал новый раздел «Оплаты» в Почте.
            </a></li>
            <li>Переработал раздел настроек почтового клиента, улучшив структуру, визуальный язык и пользовательский сценарий.</li>
            <li>Участвовал в разработке конструктора лендингов, который затем стал основой конструктора рассылок — от UX-фреймворков до финального визуального слоя.</li>
            <li>Внёс вклад в ребрендинг Mail/VK — работал над адаптацией визуальных решений в продуктовых интерфейсах.</li>
            <li>Занимался дизайном внутренних интерфейсов: интранет-системы, админки и платформы обучения Стади, с учётом внутренних процессов и специфики корпоративного UX.</li>
          </ul>
        </div>
      </article>

      <article className="md:flex">
        {/* Дата слева */}
        <p className="min-w-[120px] mt-2 text-sm text-gray-500 dark:text-gray-400">2016–2019</p>

        {/* Контент справа */}
        <div className="relative pl-0 sm:pl-10">
          <div className="absolute left-0 top-4 h-full w-px bg-gray-200 hidden sm:block"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute left-[-4px] top-4 hidden sm:block"></div>

          {/* Заголовок */}
          <h2 className="text-xl sm:text-3xl font-bold mb-2 mt-2 sm:mt-0">
            Компания «Тензор»
          </h2>

          {/* Описание */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Ведущий проектировщик интерфейсов
            </p>
          </div>

          <Image
            src="/Tensor.png"
            alt="Баннер компании «Тензор»"
            width={968}
            height={512}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-3 w-full h-auto"
          />

          {/* Список фич */}
          <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
            <li>Полностью спроектировал раздел «Бухгалтерия» — от концептуальной идеи и пользовательских сценариев до финального ТЗ для разработчиков.</li>
            <li>Активно участвовал в сопровождении разработки: поддерживал команду на всех этапах, уточнял детали, тестировал реализацию и проверял соответствие требованиям.</li>
            <li>Участвовал в создании системных интерфейсных стандартов: продумывал логику поведения компонентов, описывал UX-паттерны и согласовывал их с заказчиками и командами.</li>
            <li>Был активным участником дизайн-комьюнити внутри компании: делился новостями индустрии, выступал с докладами, собрал и вел группу с дизайн-дайджестом во внутренней соцсети.</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
