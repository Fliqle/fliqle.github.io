import type { Metadata } from "next";
import Link from "next/link";

const itemClass =
  "-mx-3 flex flex-col rounded-xl px-3 py-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-neutral-800";

const talks = [
  {
    href: "https://vkvideo.ru/live-60345511_456239064?list=19d771be8bf022641a",
    title: "October 2026 · Russian Design Cup 2026 Final",
    description: "The Russian Design Cup 2026 final",
  },
  {
    href: "https://team.vk.company/a11y_training/design/",
    title: "VK Course · Digital Accessibility for Designers",
    description: "Created a course on designing accessible digital products",
  },
  {
    href: "https://vkvideo.ru/video-60345511_456239051",
    title: "October 2025 · Russian Design Cup 2025 Final",
    description: "Hosted the RDC final, introduced the participants, and moderated the jury",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-152990965&id=456239715&hd=2",
    title: "May 2025 · Design Systems Cup",
    description: "Represented VK at the first Design Systems Cup",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-147415323&id=456240496&hd=2",
    title: "October 2024 · VK Design Conf’24",
    description: "Talked about working with accessibility at the design system level",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-156923926&id=456239244&hd=2&autoplay=0",
    title: "November 2023 · VK Design Conf’23",
    description: "Together with Lyosha Zaytsev, told the story of how VKUI works",
  },
  {
    href: "https://vk.com/video_ext.php?oid=-60345511&id=456239047&hash=2b1935d9afebcab5",
    title: "April 2022 · Russian Design Cup X2",
    description: "Spoke in the Russian Design Cup final about Figma tricks",
  },
];

export const metadata: Metadata = {
  title: "Publications — Valera Sirotkin",
  description: "Articles and talks by Valera Sirotkin about product design and design systems.",
};

export default function Materials() {
  return (
    <main className="mx-auto mt-12 max-w-[692px] px-6 antialiased">
      <Link
        href="/en"
        className="mb-12 inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Home
      </Link>
      <h1 className="text-2xl font-medium">Publications</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Articles and talks about product design, design systems, and emerging tools.
      </p>

      <section className="mt-6">
        <h2 className="font-medium">Articles</h2>
        <div className="mt-3">
          <a
            href="https://vc.ru/design/3239654-podgotovka-dizajn-sistemy-k-rabote-s-ii-agentami"
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
          >
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">vc.ru · In Russian</p>
            <h3>What design systems never said out loud: preparing them for AI agents</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              How to remove ambiguity, give agents the knowledge they need, and validate their output.
            </p>
          </a>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-medium">Talks</h2>
        <div className="mt-3 space-y-2">
          {talks.map((talk) => (
            <a
              key={talk.href}
              href={talk.href}
              target="_blank"
              rel="noopener noreferrer"
              className={itemClass}
            >
              <h3>{talk.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{talk.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
