import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import paradigmBanner from "../../../../public/projects/paradigm.png";

export const metadata: Metadata = {
  title: "Paradigm Design System — Valera Sirotkin",
  description: "Case study: Paradigm design system, 2021–2026.",
};

export default function ParadigmProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Paradigm Design System</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src={paradigmBanner} alt="Paradigm Design System" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          A unified design system for Mail and VK Workspace B2B and B2C products — tokens,
          platform libraries and reusable components aligning the visual language across
          several product lines and a community of dozens of designers.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Led the development and rollout of a shared design system for B2B and B2C.</li>
        <li>Worked with a community of about 25 designers contributing to and using the design system.</li>
        <li>Developed tokens, platform libraries and reusable components.</li>
        <li>Built processes between Design, Product and Engineering.</li>
        <li>Built tools and processes that reduced designers&apos; operational load and sped up handoff to development.</li>
        <li>Aligned the visual language and patterns across several product lines.</li>
      </ul>
    </main>
  );
}
