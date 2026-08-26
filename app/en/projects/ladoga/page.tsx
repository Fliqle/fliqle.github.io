import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ZoomableImage } from "../../../zoomable-image";

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

      <ProjectBanner src="/projects/inside/Ladoga/main.png" alt="Ladoga UI" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Ladoga UI is a joint project with the VKUI team to build a foundational design system
          that&apos;s independent of any single product and makes it easier to start new projects.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-12">
        <p>
          A lightweight headless foundation for quickly building your own design systems for new
          and internal products.
        </p>
        <p>
          VK already had a mature design system, VKUI, built primarily around VKontakte&apos;s needs
          and specifics. But not every smaller product or internal tool needed the full complexity,
          scale, and visual ties of a large ecosystem-wide system.

          We wanted to build a lightweight foundation that could be quickly adopted and extended
          whenever a project needed its own unique design system.
        </p>
        <p>
          I joined Ladoga at an early stage, when the engineering team didn&apos;t yet have a
          dedicated designer. I took full ownership of the design side of the project, running it
          alongside my main role.

          I designed the system&apos;s architecture and principles, developed the color palette and
          token system, built the Figma library, created the components and wrote their specs. In
          parallel, three engineers from the VKUI team implemented the system in code. A dedicated
          designer joined the project later.
        </p>
        <p>
          Ladoga wasn&apos;t designed for any specific interface. It was meant to become a universal
          foundation for products that didn&apos;t exist yet at the time.

          That meant clearly separating components&apos; functional behavior from their visual
          language, avoiding patterns tied to any single product.
        </p>
        <p>
          Instead of user research, we analyzed existing approaches to designing design systems.

          We looked at:

          Base UI — as an example of headless primitives;

          shadcn/ui — as an approach to composable components;

          VKUI — as an example of a mature product system.

          Our goal was to understand how lightweight, headless systems handle primitives,
          composition, and theming, and to rethink VKUI&apos;s component architecture.
        </p>
        <p>
          Since Ladoga wasn&apos;t tied to a single product, its color system had to be flexible
          enough to support a wide range of visual languages.

          We developed several shades for each base color so the system could fit a wide variety of
          projects, while keeping VK&apos;s signature blue as the main accent for continuity with the
          ecosystem.
        </p>
        <ZoomableImage
          src="/projects/inside/Ladoga/variables.png"
          alt="Color system"
          width={968}
          height={512}
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-3 w-full h-auto"
        />
        <p>
          In three months we completed the first working version of Ladoga: a headless foundation
          with a flexible color system, design tokens, 17 base components, and full documentation.

          The system was tested on internal admin interfaces and handed off to the team for further
          development.

          The initiative was later put on hold after the engineering lead who had been driving the
          project left the company.
        </p>
        <p>
          Working on Ladoga reinforced a principle that matters to me: a design system doesn&apos;t
          need to solve every single product problem to be useful.

          By keeping the foundation small, headless, and composable, we let very different products
          build their own visual language on one solid base.
        </p>
      </div>
    </main>
  );
}
