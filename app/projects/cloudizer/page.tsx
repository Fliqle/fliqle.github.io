import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";
import { ArticleNav } from "../../article-nav";
import cloudizerBanner from "../../../public/projects/inside/Cloudizer1.webp";

export const metadata: Metadata = {
  title: "Cloudizer — Валера Сироткин",
  description: "Кейс: личный проект Cloudizer, 2026.",
};

export default function CloudizerProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "dev-process", label: "Процесс разработки" },
          { id: "features", label: "Что умеет расширение сейчас" },
        ]}
      />
      <Link
        href="/"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Cloudizer</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2026 · личный проект</p>

      <ProjectBanner src={cloudizerBanner} alt="Cloudizer" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Cloudizer — небольшое расширение для браузера которое делает из вашего Облака Mail - Pinterest. На каждую картинку в интернете добавляет кнопку, для сохранения в Облаке Mail, можно через контекстное меню. Картинки можно делить на категории и сохранять в отдельные подпапки.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
        <p>
          Раньше я активно пользовался похожим расширением для Яндекс Диска и собрал большую коллекцию референсов. Когда мне потребовался аналогичный инструмент для Облака Mail, я решил создать его самостоятельно с помощью AI-инструментов.
        </p>
        <h2 id="dev-process" className="font-medium mb-1 mt-10">Процесс разработки:</h2>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
          <li>Первые прототипы на ChatGPT: базовый скрипт уже создавал папку в Облаке, но загрузка изображений требовала отладки. Дополнительно пришлось потрудиться над версткой иконки поверх иллюстраций на сайтах.</li>
          <li>Рефакторинг и масштабирование с Claude Code: переписал архитектуру кода и добавил новые функции.</li>
        </ul>
        <h2 id="features" className="font-medium mb-1 mt-10">Что умеет расширение сейчас:</h2>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
          <li>Сортировка по категориям: создание подпапок и выбор места сохранения.</li>
          <li>Быстрый доступ: сохранение изображений прямо из контекстного меню по правой кнопке мыши.</li>
        </ul>
        <p>
          Проект продолжает развиваться. Ознакомиться с текущим кодом и протестировать расширение можно <Link href="https://github.com/Fliqle/Cloudizer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">в репозитории на GitHub.</Link>
        </p>
      </div>
    </main>
  );
}
