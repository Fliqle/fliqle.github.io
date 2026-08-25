import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";

export const metadata: Metadata = {
  title: "Ladoga UI — Valera Sirotkin",
  description: "Case study: Ladoga UI, 2025.",
};

export default function LadogaProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Ladoga UI</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2025</p>

      <ProjectBanner src="/projects/ladoga.png" alt="Ladoga UI" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Ladoga UI is a joint project with the VKUI team to build a foundational design system
          that&apos;s independent of any single product and makes it easier to start new projects.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Contributed to designing the system&apos;s foundational architecture.</li>
        <li>Helped define the core set of components and tokens.</li>
        <li>Worked closely with the VKUI team to keep decisions consistent.</li>
      </ul>
    </main>
  );
}
