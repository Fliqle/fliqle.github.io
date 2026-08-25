import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";

export const metadata: Metadata = {
  title: "Russian Design Cup — Valera Sirotkin",
  description: "Case study: Russian Design Cup, 2021–2026.",
};

export default function RdcProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Russian Design Cup</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src={null} alt="Russian Design Cup" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Russian Design Cup is the largest design competition in Russia. For several years I&apos;ve
          taken part in organizing and judging the competition, as well as speaking in the finals.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Took part in organizing the competition and judging entries.</li>
        <li>Gave talks at the competition finals.</li>
        <li>Helped shape the judging criteria and challenge structure.</li>
      </ul>
    </main>
  );
}
