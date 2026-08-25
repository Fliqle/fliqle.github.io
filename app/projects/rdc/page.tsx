import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";

export const metadata: Metadata = {
  title: "Russian Design Cup — Валера Сироткин",
  description: "Кейс: Russian Design Cup, 2021–2026.",
};

export default function RdcProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Russian Design Cup</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src={null} alt="Russian Design Cup" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Russian Design Cup — самый масштабный конкурс для дизайнеров в России. Несколько лет
          участвовал в организации и жюри конкурса, а также выступал с докладами в финале.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Участвовал в организации конкурса и оценке работ участников.</li>
        <li>Выступал с докладами в финалах конкурса.</li>
        <li>Помогал формировать критерии оценки и структуру заданий.</li>
      </ul>
    </main>
  );
}
