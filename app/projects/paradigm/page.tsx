import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";

export const metadata: Metadata = {
  title: "Дизайн-система Paradigm — Валера Сироткин",
  description: "Кейс: дизайн-система Paradigm, 2021–2026.",
};

export default function ParadigmProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Дизайн-система Paradigm</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src="/projects/paradigm.png" alt="Дизайн-система Paradigm" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Единая дизайн-система для B2B и B2C продуктов Mail и VK Workspace — токены,
          платформенные библиотеки и переиспользуемые компоненты, объединяющие визуальный
          язык нескольких продуктовых направлений и сообщество из десятков дизайнеров.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Руководил развитием и внедрением общей дизайн-системы для B2B и B2C.</li>
        <li>Работал с сообществом примерно из 25 дизайнеров, участвующих в развитии и использовании дизайн-системы.</li>
        <li>Развивал токены, платформенные библиотеки и переиспользуемые компоненты.</li>
        <li>Выстраивал процессы между Design, Product и Engineering.</li>
        <li>Развивал инструменты и процессы, снижающие операционную нагрузку дизайнеров и ускоряющие передачу решений в разработку.</li>
        <li>Синхронизировал визуальный язык и паттерны между несколькими продуктовыми направлениями.</li>
      </ul>
    </main>
  );
}
