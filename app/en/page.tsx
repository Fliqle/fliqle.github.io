import type { Metadata } from "next";
import { ProjectGrid } from "../project-grid";

const title = "Valera Sirotkin — Designer and Art Director";
const description =
  "Valera Sirotkin's personal site: a designer with 15+ years of experience, art director and musician. Working at VK on Mail products.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image-en.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image-en.png"],
  },
};

const projects = [
  {
    href: "/en/projects/mail",
    title: "Mail",
    dates: "2019–2026",
    description: "Worked on Mail's key user scenarios and led a team of designers",
    image: "/projects/mail.png",
    previews: [
      "/projects/inside/mail/mail-interface.webp",
      "/projects/inside/mail/mail-speed.webp",
      "/projects/inside/mail/mail-payments.webp",
    ],
  },
  {
    href: "/en/projects/paradigm",
    title: "Paradigm Design System",
    dates: "2019–2026",
    description: "From a component library to token architecture, processes, and the team that maintains the system.",
    image: "/projects/paradigm.png",
    previews: [
      "/projects/inside/paradigm/paradigm1.webp",
      "/projects/inside/paradigm/paradigm4.webp",
      "/projects/inside/paradigm/paradigm6.webp",
    ],
  },
  {
    href: "/en/projects/vkui",
    title: "VKUI Design System",
    dates: "2021–2024",
    description: "Designed the token architecture and took part in merging Paradigm and VKUI into a shared systemic foundation for VK's products.",
    image: "/projects/vkui.png",
    previews: [
      "/projects/inside/vkui/vkui1.webp",
      "/projects/inside/vkui/vkui2.webp",
      "/projects/inside/vkui/vkui3.webp",
    ],
  },
  {
    href: "/en/projects/vkdobro",
    title: "VK Dobro",
    dates: "2022–2023",
    description: "VK's charity platform. Helped with the rebrand and the migration to the shared design system.",
    image: "/projects/vkdobro.png",
    previews: [
      "/projects/inside/dobro/vkdobro1.webp",
      "/projects/inside/dobro/vkdobro3.webp",
      "/projects/inside/dobro/vkdobro5.webp",
    ],
  },
  {
    href: "/en/projects/rdc",
    title: "Russian Design Cup",
    dates: "2021–2026",
    description: "The largest design competition in Russia.",
    image: "/projects/rdc.png",
    previews: [
      "/projects/inside/rdc/Slide 4.webp",
      "/projects/inside/rdc/Slide 5.webp",
      "/projects/inside/rdc/Slide 6.webp",
    ],
  },
  {
    href: "/en/projects/vkeducation",
    title: "VK Education",
    dates: "2021–2026",
    description: "Lectures on interface design fundamentals and Figma practice.",
    image: "/projects/vkeducation.png",
    previews: [
      "/projects/inside/Education/figma-education.webp",
      "/projects/inside/Education/DN-109.webp",
      "/projects/vkeducation.png",
    ],
  },
  {
    href: "/en/projects/cloudizer",
    title: "Cloudizer",
    dates: "2026",
    description: "Personal project — a browser extension that turns Mail Cloud into a Pinterest-like feed.",
    image: "/projects/cloudizer.png",
    previews: [
      "/projects/inside/Cloudizer1.webp",
      "/projects/cloudizer.png",
      "/projects/inside/Cloudizer1.webp",
    ],
  },
  {
    href: "/en/projects/ladoga",
    title: "Ladoga UI",
    dates: "2025",
    description: "A joint project with the VKUI team to build a foundational design system.",
    image: "/projects/ladoga.png",
    previews: [
      "/projects/inside/Ladoga/main.webp",
      "/projects/inside/Ladoga/button.webp",
      "/projects/inside/Ladoga/components.webp",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 antialiased ">
      <h1 className="sr-only">Valera Sirotkin — product designer and design leader</h1>
      {/* Now */}
      <section className="max-w-4xl mx-auto py-12">
        <p className="mb-2">15+ years in design. I&apos;ve worked with Mail and VK, grown the Paradigm and VKUI design systems, and in recent years led product design teams.</p>
        <p className="mb-6">I help turn complex products and processes into clear systems — from a single user scenario to a design team.</p>
        <h2 id="2019-2021" className="font-medium mb-1 mt-12">What I do</h2>
        <h3 className="inline-block">Product Design</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Complex user scenarios, information architecture, product experiments.
        </p>
        <h3 className="inline-block mt-3">Design systems</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Architecture, tokens, components, theming, Figma ↔ code.
        </p>
        <h3 className="inline-block mt-3">Design leadership</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Teams, hiring, developing designers, processes, design quality.
        </p>
        <h3 className="inline-block mt-3">Design strategy</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Priorities, systemic change, aligning design and product.
        </p>

        {/* Projects */}
        <section className="mt-16">
          <h2 className="font-medium mb-1">Projects</h2>

          <ProjectGrid projects={projects} />
        </section>

      </section>
    </main>
  );
}
