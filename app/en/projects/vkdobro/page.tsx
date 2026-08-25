import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";

export const metadata: Metadata = {
  title: "VK Dobro — Valera Sirotkin",
  description: "Case study: VK Dobro, 2022–2023.",
};

export default function VkDobroProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">VK Dobro</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2022–2023</p>

      <ProjectBanner src={null} alt="VK Dobro" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VK Dobro is VK&apos;s platform for charity fundraising and volunteer projects. Helped
          with the product rebrand and the migration of its interfaces to the shared design system.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Contributed to the project&apos;s rebrand: visual language, identity, key screens.</li>
        <li>Migrated interfaces to the shared design system&apos;s components and tokens.</li>
        <li>Aligned decisions with the product and engineering teams.</li>
      </ul>
    </main>
  );
}
