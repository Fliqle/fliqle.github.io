import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";
import mailBanner from "../../../public/Mail.png";

export const metadata: Metadata = {
  title: "Почта Mail — Валера Сироткин",
  description: "Кейс: системный дизайн Почты Mail, 2019–2026.",
};

export default function MailProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Почта Mail</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2019–2026</p>

      <ProjectBanner src={mailBanner} alt="Почта Mail" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Долгосрочная работа над продуктом Почта — с перерывом на дизайн-систему Paradigm вернулся
          к Почте уже в роли руководителя направления дизайна. За это время команда прошла путь от
          отдельных интерфейсных доработок до владения ключевыми пользовательскими сценариями всего продукта.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Развивал системный дизайн Mail и Облака, выстраивая кросс-продуктовые паттерны, компоненты и навигационные принципы.</li>
        <li>Полностью спроектировал и отрисовал новый раздел «Оплаты» в Почте.</li>
        <li>Переработал раздел настроек почтового клиента, улучшив структуру, визуальный язык и пользовательский сценарий.</li>
        <li>Руководил командой из 5 продуктовых дизайнеров: распределял зоны ответственности, участвовал в найме и развитии команды.</li>
        <li>Работал над трансформацией мобильного опыта Почты, включая эксперименты с главной страницей и основными пользовательскими сценариями.</li>
        <li>Совместно с Product определял приоритеты и цели дизайн-команды, участвовал в формировании стратегии Почты.</li>
      </ul>
    </main>
  );
}
