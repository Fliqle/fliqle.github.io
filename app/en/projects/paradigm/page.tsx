import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ArticleNav } from "../../../article-nav";
import paradigmBanner from "../../../../public/projects/paradigm2.webp";

export const metadata: Metadata = {
  title: "Paradigm Design System — Valera Sirotkin",
  description: "Case study: Paradigm design system, 2019–2026.",
};

export default function ParadigmProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "2019-2021", label: "2019–2021: laying the foundation and migrating to Figma" },
          { id: "figma-migration", label: "Migrating from Sketch to Figma" },
          { id: "core-components", label: "Designing the core UI components" },
          { id: "2021-2023", label: "2021–2023: scaling up — VKUI tokens and a unified knowledge base" },
          { id: "vkui-tokens", label: "Rearchitecting VKUI's design tokens" },
          { id: "site-relaunch", label: "Relaunching the Paradigm website" },
          { id: "pixso-rd", label: "R&D: evaluating Pixso" },
          { id: "2024-2025", label: "2024–2025: one mobile experience — Paradigm Mobile" },
          { id: "paradigm-mobile", label: "Building Paradigm Mobile" },
          { id: "2025-2026", label: "2025–2026: from designer to head of the direction" },
          { id: "hiring-handoff", label: "Hiring and handing off day-to-day work" },
          { id: "strategy-ai", label: "Strategy, process, and adopting AI" },
          { id: "conclusion", label: "From building buttons to building an environment" },
        ]}
      />
      <Link
        href="/en"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Paradigm Design System</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2019–2026</p>

      <ProjectBanner src={paradigmBanner} alt="Paradigm Design System" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          A unified design system for Mail and VK Workspace B2B and B2C products — tokens,
          platform libraries and reusable components aligning the visual language across
          several product lines and a community of dozens of designers.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
        <p className="mb-6">
          Over six years working on the Paradigm design system, my role moved from lead designer to head of the direction. I started by migrating our system libraries to Figma and hand-crafting basic UI elements, then built the VKUI token architecture for the whole company, focused on launching the mobile design system, and over the last two years gradually shifted toward working with the team, strategy, and process automation.
        </p>

        <h2 id="2019-2021" className="font-medium mb-1 mt-10">2019–2021: laying the foundation and migrating to Figma</h2>

        <h3 id="figma-migration" className="font-medium mb-1 mt-6">Migrating from Sketch to Figma</h3>
        <p className="mb-6">
          My first big systemic task was fully moving Paradigm out of Sketch files and into Figma. The job wasn&apos;t just to copy the components over, but to rebuild their structure from scratch using Figma&apos;s auto-layout, states, and variants. This created a single source of truth for all Mail and Cloud designers, sped up assembling mockups, and significantly narrowed the gap between design and engineering.
        </p>

        <h3 id="core-components" className="font-medium mb-1 mt-6">Designing the core UI components</h3>
        <p className="mb-6">
          In parallel, I personally designed and built the key UI components: buttons, inputs, checkboxes, switches, modals, and cards. For each element I worked through the states, responsiveness, and wrote detailed technical documentation with usage rules. The UI kits I put together later became the foundation, and the VKUI and Paradigm libraries themselves were published on Figma Community as Open Source tools.
        </p>

        <h2 id="2021-2023" className="font-medium mb-1 mt-10">2021–2023: scaling up — VKUI tokens and a unified knowledge base</h2>
        <p className="mb-6">
          This period saw a company-wide rebrand. It became necessary to tie the company&apos;s products together with a single visual language and align B2C services with platform-level solutions.
        </p>

        <h3 id="vkui-tokens" className="font-medium mb-1 mt-6">Rearchitecting VKUI&apos;s design tokens</h3>
        <p className="mb-6">
          In 2021 we merged the Paradigm design system with the company-wide VKUI system, where Paradigm became one of its two base themes. Together with the VKontakte team, I developed a new design token structure: designed the logic of how tokens relate to each other, the naming system, and personally wrote the technical documentation. We built a shared repository that supported light and dark themes and also gave products their own local themes, which made it possible to flexibly customize an app&apos;s visual language without a large-scale code rewrite.
        </p>

        <h3 id="site-relaunch" className="font-medium mb-1 mt-6">Relaunching the Paradigm website</h3>
        <p className="mb-6">
          The design system&apos;s official website, paradigm.mail.ru, had grown outdated over time and needed constant work from the engineering team. To take that load off developers and make the knowledge base easier to keep alive, I moved the whole site onto a website builder. I updated its structure, filled it with component guidelines, and rebuilt the branding section. The site turned into a self-sufficient, unified wiki for designers, editors, and frontend engineers.
        </p>

        <h3 id="pixso-rd" className="font-medium mb-1 mt-6">R&amp;D: evaluating Pixso</h3>
        <p className="mb-6">
          When the company needed to check import-substitution alternatives to Figma, I led a pilot project evaluating the Pixso graphics editor. I put together a focus group of designers from different areas, drew up a testing plan, and handed out access. We ran a series of sessions and joint calls with load and stress tests of our libraries and tokens. Based on the data we gathered, I put together an analysis report and presented and defended the findings to the executive committee. As a result, the team made a considered decision to stay on Figma, avoiding risk to our design and engineering processes.
        </p>

        <h2 id="2024-2025" className="font-medium mb-1 mt-10">2024–2025: one mobile experience — Paradigm Mobile</h2>
        <p className="mb-6">
          As Mail and Cloud&apos;s mobile audience grew, a systemic gap opened up between the native apps: the platforms had been evolving in isolation, building up visual and technical debt.
        </p>

        <h3 id="paradigm-mobile" className="font-medium mb-1 mt-6">Building Paradigm Mobile</h3>
        <p className="mb-6">
          I designed <strong>Paradigm Mobile</strong> from scratch — a single mobile library that brought together all of Mail&apos;s native apps. As part of this project I built an end-to-end color and typography system inherited directly from the base Paradigm system. The library grew to more than 30 core system components, designed with iOS and Android specifics in mind, which let product teams assemble mobile screens from ready-made blocks and freed the apps from UI fragmentation.
        </p>

        <h2 id="2025-2026" className="font-medium mb-1 mt-10">2025–2026: from designer to head of the direction</h2>
        <p className="mb-6">
          Over time the system grew to a scale where it was no longer possible to keep building everything by hand while also developing the processes around it. My role changed: I moved from directly assembling components to leading the direction.
        </p>

        <h3 id="hiring-handoff" className="font-medium mb-1 mt-6">Hiring and handing off day-to-day work</h3>
        <p className="mb-6">
          In 2025 I opened a new role, ran the entire hiring process myself, and brought a dedicated design systems specialist onto the team. Over the first few months I onboarded them and gradually handed off the work of maintaining the master files, the routine assembly of components, and handling incoming requests. This was an important step in my growth as a manager: learning to let go of hands-on operational work, trust the team, and free up capacity for strategic-level tasks.
        </p>

        <h3 id="strategy-ai" className="font-medium mb-1 mt-6">Strategy, process, and adopting AI</h3>
        <p className="mb-6">
          From there I focused on management and infrastructure-level initiatives:
        </p>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-6 px-4">
          <li><strong>Design review and quality:</strong> introduced a systemic review process for shipped product work and quantified metrics for how well products were covered by design system components.</li>
          <li><strong>B2B and B2C streams:</strong> worked on strategically aligning the visual language between consumer products (Mail, Cloud) and B2B lines (VK Tech).</li>
          <li><strong>AI design system:</strong> kicked off a stream for automated component design using Claude Code and the Figma MCP, preparing the design system for integration with AI tools.</li>
        </ul>

        <h2 id="conclusion" className="font-medium mb-1 mt-10">From building buttons to building an environment</h2>
        <p>
          Over six years my focus shifted from drawing individual pixels and assembling files in Figma to building the rules, architecture, and environment that let products evolve faster and better. My main goal today isn&apos;t to build every component myself, but to build processes, grow the people on the team, and set the systemic direction that helps make the ecosystem&apos;s user experience cohesive and easy to use.
        </p>
      </div>
    </main>
  );
}
