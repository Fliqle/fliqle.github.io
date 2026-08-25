import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";

export const metadata: Metadata = {
  title: "VK Education — Валера Сироткин",
  description: "Кейс: проект VK Education, 2021–2026.",
};

export default function VkEducationProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">VK Education</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src={null} alt="VK Education" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VK Education — образовательное направление VK. Читаю лекции по основам дизайна
          интерфейсов и веду практику по Figma для студентов и начинающих дизайнеров.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Разработал курс лекций по основам интерфейсного дизайна.</li>
        <li>Провожу практические занятия по работе в Figma.</li>
        <li>Делюсь опытом с начинающими дизайнерами и студентами.</li>
      </ul>
    </main>
  );
}
