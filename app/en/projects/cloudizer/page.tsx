import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import cloudizerBanner from "../../../../public/projects/inside/Cloudizer1.webp";

export const metadata: Metadata = {
  title: "Cloudizer — Valera Sirotkin",
  description: "Case study: personal project Cloudizer, 2026.",
};

export default function CloudizerProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Cloudizer</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2026 · personal project</p>

      <ProjectBanner src={cloudizerBanner} alt="Cloudizer" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Cloudizer is a small browser extension that turns your Mail Cloud into a Pinterest.
          It adds a save button to every image on the web — or you can save it via the context
          menu — straight into Mail Cloud. Images can be sorted into categories and saved into
          separate subfolders.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
        <p>
          I used to actively rely on a similar extension for Yandex Disk and built up a large
          collection of references there. When I needed the same kind of tool for Mail Cloud, I
          decided to build it myself with the help of AI tools.
        </p>
        <h2 className="font-medium mb-1 mt-10">Development process:</h2>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
          <li>First prototypes in ChatGPT: the basic script already created a folder in Mail Cloud, but uploading images needed debugging. It also took extra work to overlay the save icon correctly on top of images on websites.</li>
          <li>Refactoring and scaling with Claude Code: rewrote the code architecture and added new features.</li>
        </ul>
        <h2 className="font-medium mb-1 mt-10">What the extension can do now:</h2>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
          <li>Sorting by category: creating subfolders and choosing where to save.</li>
          <li>Quick access: saving images straight from the right-click context menu.</li>
        </ul>
        <p>
          The project keeps evolving. You can check out the current code and try the extension
          in <Link href="https://github.com/Fliqle/Cloudizer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">the GitHub repository.</Link>
        </p>
      </div>
    </main>
  );
}
