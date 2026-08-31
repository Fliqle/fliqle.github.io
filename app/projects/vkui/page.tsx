import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";

export const metadata: Metadata = {
  title: "Дизайн-система VKUI — Валера Сироткин",
  description: "Кейс: дизайн-система VKUI, 2021–2024.",
};

export default function VkuiProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Дизайн-система VKUI</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2024</p>

      <ProjectBanner src={null} alt="Дизайн-система VKUI" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VKUI — основная дизайн-система VK для веб- и мобильных интерфейсов. Участвовал в
          разработке и развитии библиотеки компонентов и токенов, которыми пользуются десятки
          продуктовых команд.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Разрабатывал и поддерживал ключевые компоненты библиотеки.</li>
        <li>Формировал принципы токенизации и синхронизации визуального языка между продуктами.</li>
        <li>Помогал продуктовым командам внедрять систему в реальных интерфейсах.</li>
      </ul>
    </main>
  );
}
