import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";

export const metadata: Metadata = {
  title: "VK Добро — Валера Сироткин",
  description: "Кейс: проект VK Добро, 2022–2023.",
};

export default function VkDobroProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">VK Добро</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2022–2023</p>

      <ProjectBanner src={null} alt="VK Добро" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VK Добро — платформа для благотворительных сборов и волонтёрских проектов VK. Помогал
          с ребрендингом продукта и переводом интерфейсов на общую дизайн-систему.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Участвовал в ребрендинге проекта: визуальный язык, айдентика, ключевые экраны.</li>
        <li>Перевёл интерфейсы на компоненты и токены общей дизайн-системы.</li>
        <li>Синхронизировал решения с командой продукта и разработкой.</li>
      </ul>
    </main>
  );
}
