import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";

export const metadata: Metadata = {
  title: "VKUI Design System — Valera Sirotkin",
  description: "Case study: VKUI design system, 2021–2024.",
};

export default function VkuiProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">VKUI Design System</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2024</p>

      <ProjectBanner src={null} alt="VKUI Design System" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VKUI is VK&apos;s core design system for web and mobile interfaces. Contributed to
          developing and evolving the component library and tokens used by dozens of product teams.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Developed and maintained key library components.</li>
        <li>Shaped tokenization principles and aligned the visual language across products.</li>
        <li>Helped product teams adopt the system in real interfaces.</li>
      </ul>
    </main>
  );
}
