import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";

export const metadata: Metadata = {
  title: "Ladoga UI — Валера Сироткин",
  description: "Кейс: проект Ladoga UI, 2025.",
};

export default function LadogaProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Ladoga UI</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2025</p>

      <ProjectBanner src="/projects/ladoga.png" alt="Ladoga UI" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Ladoga UI — совместный проект с командой VKUI по созданию базовой дизайн-системы,
          независимой от конкретного продукта и упрощающей старт новых проектов.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Участвовал в проектировании базовой архитектуры системы.</li>
        <li>Помогал определить набор ключевых компонентов и токенов.</li>
        <li>Работал в связке с командой VKUI над согласованностью решений.</li>
      </ul>
    </main>
  );
}
