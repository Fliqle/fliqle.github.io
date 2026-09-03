import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valera Sirotkin — Designer and Art Director",
  description:
    "Valera Sirotkin's personal site: a designer with 15+ years of experience, art director and musician. Working at VK on Mail products.",
};

const projects = [
  {
    href: "/en/projects/mail",
    title: "Mail",
    dates: "2019–2026",
    description: "Worked on Mail's key user scenarios and led a team of designers",
    image: "/projects/mail.png",
  },
  {
    href: "/en/projects/paradigm",
    title: "Paradigm Design System",
    dates: "2019–2026",
    description: "From a component library to token architecture, processes, and the team that maintains the system.",
    image: "/projects/paradigm.png",
  },
  {
    href: "/en/projects/vkui",
    title: "VKUI Design System",
    dates: "2021–2024",
    description: "Designed the token architecture and took part in merging Paradigm and VKUI into a shared systemic foundation for VK's products.",
    image: "/projects/vkui.png",
  },
  {
    href: "/en/projects/vkdobro",
    title: "VK Dobro",
    dates: "2022–2023",
    description: "VK's charity platform. Helped with the rebrand and the migration to the shared design system.",
    image: "/projects/vkdobro.png",
  },
  {
    href: "/en/projects/rdc",
    title: "Russian Design Cup",
    dates: "2021–2026",
    description: "The largest design competition in Russia.",
    image: "/projects/rdc.png",
  },
  {
    href: "/en/projects/vkeducation",
    title: "VK Education",
    dates: "2021–2026",
    description: "Lectures on interface design fundamentals and Figma practice.",
    image: "/projects/vkeducation.png",
  },
  {
    href: "/en/projects/cloudizer",
    title: "Cloudizer",
    dates: "2026",
    description: "Personal project — a browser extension that turns Mail Cloud into a Pinterest-like feed.",
    image: "/projects/cloudizer.png",
  },
  {
    href: "/en/projects/ladoga",
    title: "Ladoga UI",
    dates: "2025",
    description: "A joint project with the VKUI team to build a foundational design system.",
    image: "/projects/ladoga.png",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 antialiased ">
      <h1 className="sr-only">Valera Sirotkin — product designer and design leader</h1>
      {/* Now */}
      <section className="max-w-4xl mx-auto py-16">
        <p className="mb-2">15+ years in design. I&apos;ve worked with Mail and VK, grown the Paradigm and VKUI design systems, and in recent years led product design teams.</p>
        <p className="mb-6">I help turn complex products and processes into clear systems — from a single user scenario to a design team.</p>
        <h2 id="2019-2021" className="font-medium mb-1 mt-16">What I do</h2>
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

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-custom no-underline transition-shadow hover:shadow-custom-hover dark:bg-neutral-900"
              >
                <div className="flex h-44 items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      width={360}
                      height={192}
                      className="aspect-[360/192] w-3/5 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="aspect-[360/192] w-3/5 rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800" />
                  )}
                </div>
                <div>
                  <h3 className="inline-block">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Talks */}
        <section className="mt-16">
          <h2 className="font-medium mb-1">Talks</h2>

          <div className="space-y-2">
            <a
              href="https://vk.com/video_ext.php?oid=-152990965&id=456239715&hd=2"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">May 2025 · Design Systems Cup</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Represented VK at the first Design Systems Cup
              </p>
            </a>

            <a
              href="https://vk.com/video_ext.php?oid=-147415323&id=456240496&hd=2"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">October 2024 · VK Design Conf&rsquo;24</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Talked about working with accessibility at the design system level
              </p>
            </a>

            <a
              href="https://vk.com/video_ext.php?oid=-156923926&id=456239244&hd=2&autoplay=0"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">November 2023 · VK Design Conf&rsquo;23</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Together with Lyosha Zaytsev, told the story of how VKUI works
              </p>
            </a>

            <a
              href="https://vk.com/video_ext.php?oid=-60345511&id=456239047&hash=2b1935d9afebcab5"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-xl px-3 py-2 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800"
            >
              <h3 className="inline-block">April 2022 · Russian Design Cup X2</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Spoke in the Russian Design Cup final about Figma tricks
              </p>
            </a>

          </div>
        </section>

      </section>
    </main>
  );
}
