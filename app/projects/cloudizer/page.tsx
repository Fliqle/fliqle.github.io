import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";

export const metadata: Metadata = {
  title: "Cloudizer — Валера Сироткин",
  description: "Кейс: личный проект Cloudizer, 2026.",
};

export default function CloudizerProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Cloudizer</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2026 · личный проект</p>

      <ProjectBanner src={null} alt="Cloudizer" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Cloudizer — расширение для браузера, которое превращает Облако Mail в визуальную
          ленту в духе Pinterest: файлы и фото отображаются в виде мудборда, который удобно
          листать и группировать. Делаю в свободное время как личный pet-проект, от идеи и
          интерфейса до первых пользователей.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Спроектировал концепцию и пользовательские сценарии с нуля.</li>
        <li>Самостоятельно проработал интерфейс расширения и визуальный язык.</li>
        <li>Собираю обратную связь от первых пользователей и итеративно дорабатываю продукт.</li>
      </ul>
    </main>
  );
}
