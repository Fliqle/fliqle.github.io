import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ArticleNav } from "../../../article-nav";
import vkuiBanner from "../../../../public/projects/vkui2.webp";

export const metadata: Metadata = {
  title: "VKUI Design System — Valera Sirotkin",
  description: "Case study: VKUI design system, 2021–2024.",
};

export default function VkuiProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "context-merge", label: "Context and the push to merge" },
          { id: "workshop", label: "A workshop at VKontakte's office: 4 days, 160 tokens" },
          { id: "components", label: "Building the components and a shared language (design × dev)" },
          { id: "scaling", label: "Scaling and rolling out to Mail products" },
          { id: "results", label: "Results" },
        ]}
      />
      <Link
        href="/en"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">VKUI Design System</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2024</p>

      <ProjectBanner src={vkuiBanner} alt="VKUI Design System" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VKUI is VK&apos;s core design system for web and mobile interfaces. Contributed to
          developing and evolving the component library and tokens used by dozens of product teams.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">

        <h2 id="context-merge" className="font-medium mb-1 mt-10">Context and the push to merge</h2>
        <p className="mb-6">
          It all started as the company was entering a phase of large-scale ecosystem rebranding. At the time, we had two fundamental design systems:
        </p>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-6 px-4">
          <li><strong>VKUI</strong> — a React component library maintained by a dedicated team specifically for VKontakte&apos;s mobile app and web version.</li>
          <li><strong>Paradigm</strong> — a system that had been evolving since 2012 and served as the visual core for Mail products (Mail, Cloud, the homepage).</li>
        </ul>
        <p className="mb-6">
          Maintaining and developing two independent design systems in parallel demanded enormous frontend resources and created a visual gap whenever users moved between services. To fix both problems, we decided to merge the systems into one — making <strong>VKUI</strong> the company&apos;s core technical and component standard, and integrating <strong>Paradigm</strong> as one of its base themes.
        </p>

        <h2 id="workshop" className="font-medium mb-1 mt-10">A workshop at VKontakte&apos;s office: 4 days, 160 tokens</h2>
        <p className="mb-6">
          You can&apos;t merge two mature systems by decree in Jira. To reach common ground, we got together with VKontakte&apos;s development and design team at their office and started a complex process of joint alignment.
        </p>
        <p className="mb-6">
          The core task was to drop down to the lowest level — color and typography tokens. We literally went through every shade by hand, compared naming, looked for overlaps, and removed duplicates.
        </p>
        <blockquote className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 mb-6">
          After 4 days of continuous discussion and analysis, we agreed on an MVP token set. It included around 160 tokens across light and dark themes, fully covering the visual needs of Mail and VKontakte products.
        </blockquote>
        <p className="mb-6">
          I was trusted to put together <strong>the very first version of the library</strong> and fill it with colors. Together with Vanya Baryshev and Lesha Zaytsev from VKontakte, I designed the logic behind how tokens relate to each other, set the naming convention, and then wrote the documentation myself. That became the foundation for a shared token repository supporting both global themes (light/dark) and custom themes for individual products.
        </p>

        <h2 id="components" className="font-medium mb-1 mt-10">Building the components and a shared language (design × dev)</h2>
        <p className="mb-6">
          Once the token layer was locked in, we moved on to the component base. As a pilot, we took the <strong>Button</strong> and, step by step, built out all of its possible states, sizes, icon variations, and effects. It&apos;s where we refined our approach to naming parameters. It was critical for us to establish a <strong>single source of truth</strong> — a shared vocabulary so that a designer in Figma and an engineer in React code worked with exactly the same props and terms.
        </p>
        <p className="mb-6">
          From there the library grew rapidly:
        </p>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-6 px-4">
          <li>Basic UI primitives: Input, Checkbox, Switch, Radio, Avatar, Badge.</li>
          <li>Complex elements: Modal Card, Action Sheet, Segmented Control, Tabs.</li>
        </ul>
        <p className="mb-6">
          Throughout the build we worked in very close coordination with the VKUI platform team. We strictly checked how well each new component matched the token system we&apos;d built, and reviewed spacing.
        </p>

        <h2 id="scaling" className="font-medium mb-1 mt-10">Scaling and rolling out to Mail products</h2>
        <p className="mb-6">
          My key hands-on task during the rollout phase was scaling the updated VKUI to Mail products (Mail, Cloud). We structured the migration in stages so we wouldn&apos;t have to pause product feature work:
        </p>
        <ol className="list-decimal list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-6 px-4">
          <li><strong>Migrating layouts to tokens:</strong> first we moved existing Figma files and screens onto the new token system.</li>
          <li><strong>Rolling out product themes:</strong> there were cases where the standard palette wasn&apos;t enough for specific scenarios. In those cases I added and defined product themes directly in the <Link href="https://github.com/VKCOM/vkui-tokens" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">shared token repository</Link> myself.</li>
          <li><strong>Swapping components in code:</strong> during development, engineers gradually replaced outdated interface elements with base components from the VKUI library (Button, Input, Checkbox, etc.).</li>
        </ol>
        <p className="mb-6">
          The biggest upside of the new foundation was that Mail products got <strong>built-in responsiveness</strong> and <strong>automatic light/dark theme switching</strong> out of the box, with no need to write custom code for every screen. Throughout the process I acted as the connecting link, keeping up steady communication between the VKUI engineers and the Mail product teams.
        </p>

        <h2 id="results" className="font-medium mb-1 mt-10">Results</h2>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
          <li><strong>Unified ecosystem:</strong> two isolated design systems turned into a single platform standard, available as Open Source and on Figma Community.</li>
          <li><strong>Unified token architecture:</strong> built a structure of 160+ tokens supporting dark, light, and the company&apos;s product themes.</li>
          <li><strong>Faster development:</strong> Mail products gained flexible theming and a ready-made component base, meaningfully cutting time-to-market for new features.</li>
          <li><strong>Shared vocabulary:</strong> Mail and VK design and engineering teams aligned their terminology and interface-assembly processes.</li>
        </ul>
        <p className="mb-6">
          Key links: <Link href="https://vkcom.github.io/VKUI/" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">the official VKUI site</Link>, <Link href="https://github.com/VKCOM/vkui-tokens" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">the tokens repository</Link>, <Link href="https://github.com/VKCOM/VKUI" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">the components repository</Link>, <Link href="https://www.figma.com/@vkui" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">VKUI on Figma Community</Link>, and <Link href="https://www.figma.com/@paradigm" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">the Paradigm UI Kit on Figma Community</Link>.
        </p>
      </div>
    </main>
  );
}
