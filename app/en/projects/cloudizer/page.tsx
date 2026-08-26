import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";

export const metadata: Metadata = {
  title: "Cloudizer — Valera Sirotkin",
  description: "Case study: personal project Cloudizer, 2026.",
};

export default function CloudizerProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Cloudizer</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2026 · personal project</p>

      <ProjectBanner src="/projects/inside/Cloudizer1.png" alt="Cloudizer" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Cloudizer is a small browser extension that turns your Mail Cloud into a Pinterest.
          It adds a save button to every image on the web — or you can save it via the context
          menu — straight into Mail Cloud. Images can be sorted into categories and saved into
          separate subfolders.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-12">
        <p>
          Cloudizer is a small browser extension that turns your Mail Cloud into a Pinterest.
          It adds a save button to every image on the web — or you can save it via the context
          menu — straight into Mail Cloud. Images can be sorted into categories and saved into
          separate subfolders.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Designed the concept and user scenarios from scratch.</li>
        <li>Designed the extension&apos;s interface and visual language on my own.</li>
        <li>Gathering feedback from early users and iterating on the product.</li>
      </ul>
    </main>
  );
}
