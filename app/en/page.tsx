import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valera Sirotkin — Designer and Art Director",
  description:
    "Valera Sirotkin's personal site: a designer with 15+ years of experience, art director and musician. Working at VK on Mail products.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 antialiased ">
      <h1 className="sr-only">Valera Sirotkin — designer, art director, musician</h1>
      {/* Now */}
      <section className="max-w-4xl mx-auto py-16">
        <p className="mb-2">I&apos;m a designer with more than 15 years of experience — I love simple solutions backed by serious work. I currently work at VK on Mail products: I started with systemic product interfaces, and now lead the Disrupt design direction and the Paradigm design system. I&apos;ve taken part in major redesigns, rebrandings, and helped build VKUI — VK&apos;s core design system.</p>
        <span>
          You can read more about my work as a designer <Link href="/en/about" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">here</Link>
        </span>

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
