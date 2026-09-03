import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ArticleNav } from "../../../article-nav";
import { ZoomableImage } from "@/app/zoomable-image";
import mailBanner from "../../../../public/Mail.png";
import mailspeed from "../../../../public/projects/inside/mail/mail-speed.webp";
import mailpayments from "../../../../public/projects/inside/mail/mail-payments.webp";
import mailportal from "../../../../public/projects/inside/mail/mail-portal.webp";

export const metadata: Metadata = {
  title: "Mail — Valera Sirotkin",
  description: "Case study: systemic design of Mail, 2019–2026.",
};

export default function MailProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "2019-2021", label: "2019–2021: working on the product" },
          { id: "portal-nav", label: "Portal navigation" },
          { id: "payments-center", label: "Launching the Payments hub inside Mail" },
          { id: "2021-2025", label: "2021–2025: from individual products to systems" },
          { id: "speed", label: "Cutting app launch time by 30%" },
          { id: "paradigm-tech", label: "Paradigm Tech" },
          { id: "help-no-designers", label: "Help without designers" },
          { id: "2025-2026", label: "2025–2026: from designer to manager" },
          { id: "core-tasks", label: "My core responsibilities" },
          { id: "what-we-shipped", label: "What we shipped" },
          { id: "design-leadership", label: "Design leadership" },
        ]}
      />
      <Link
        href="/en"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Mail</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2019–2026</p>

      <ProjectBanner src={mailBanner} alt="Mail" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          7 years working on Mail products. Started as a product designer, shipping new scenarios
          inside Mail and working on portal navigation and payments. Later focused on design
          systems and scaling solutions across products. For the last two years, led Mail&apos;s
          product design team.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
        <h2 id="2019-2021" className="font-medium mb-1 mt-10">2019–2021: working on the product</h2>

        <h3 id="portal-nav" className="font-medium mb-1 mt-6">Portal navigation</h3>
        <p className="mb-6">
          Portal navigation tied together all of Mail.ru Group&apos;s products, but by the time I
          started working on it, it had grown visually and functionally outdated.
        </p>
        <p className="mb-6">
          I reworked the structure of the projects dropdown menu and the account menu. I added
          shared news and weather blocks to the navigation that worked across multiple products at
          once.
        </p>
        <p className="mb-6">
          The goal wasn&apos;t just to refresh the interface, but to turn navigation into a tool
          for moving between products in the ecosystem.
        </p>
        <p className="mb-6">
          <strong>My role:</strong> UX · UI · Information Architecture
        </p>

        <ZoomableImage
          src={mailportal}
          alt="Mail.ru Group portal navigation"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-12 w-full h-auto"
        />

        <h3 id="payments-center" className="font-medium mb-1 mt-6">Launching the Payments hub inside Mail</h3>
        <p className="mb-6">
          One of the major product initiatives of this period was launching a new
          &laquo;Payments&raquo; section inside Mail.
        </p>
        <p className="mb-6">
          The idea was to use information that already appears in incoming emails — bills,
          receipts, and other financial documents — and let users act on it right inside Mail.
        </p>
        <p className="mb-6">
          The new section let users pay for services, manage recurring payments, and keep a
          history of transactions. At launch, the service supported paying thousands of companies
          and covered several categories of everyday payments.
        </p>
        <p className="mb-6">
          I designed the section from scratch: its structure, core scenarios, and user flows.
        </p>
        <p className="mb-6">
          <strong>My role:</strong> Product Design · UX · User Flows
        </p>

        <ZoomableImage
          src={mailpayments}
          alt="Payments hub promo"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-12 w-full h-auto"
        />

        <h2 id="2021-2025" className="font-medium mb-1 mt-10">2021–2025: from individual products to systems</h2>
        <p className="mb-6">
          In 2021 my focus shifted significantly toward design systems. My work gradually became
          less about individual screens and more about building shared infrastructure that let
          solutions be reused across products.
        </p>

        <h3 id="speed" className="font-medium mb-1 mt-6">Cutting app launch time by 30%</h3>
        <p className="mb-6">
          App launch speed wasn&apos;t just a technical problem: the first seconds shaped how users
          perceived the product&apos;s speed.
        </p>
        <p className="mb-6">
          I studied the existing launch process, looked at how competitors solved it, and broke
          down the interface states during loading.
        </p>
        <p className="mb-6">
          Together with engineers, we turned what we found into concrete changes: we optimized the
          launch process and refined the loading, skeleton, and feedback states.
        </p>
        <p className="mb-6">
          <strong>Result:</strong> app launch time dropped by roughly <strong>30%</strong>.
          Complaints about speed in the App Store and Google Play also decreased.
        </p>
        <p className="mb-6">
          <strong>My role:</strong> Research · UX · Prototyping · Engineering Collaboration
        </p>

        <ZoomableImage
          src={mailspeed}
          alt="Cutting app launch time"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-12 w-full h-auto"
        />

        <h3 id="paradigm-tech" className="font-medium mb-1 mt-6">Paradigm Tech</h3>
        <p className="mb-6">
          VK Workspace products use Paradigm as their technological foundation, but need to match
          VK Tech&apos;s visual language.
        </p>
        <p className="mb-6">
          I designed the <strong>Paradigm Tech</strong> theme, which lets products use
          Paradigm&apos;s shared architecture while keeping VK Tech&apos;s visual identity.
        </p>
        <p className="mb-6">
          The theme includes color and typography tokens, is documented in Figma, and is
          integrated into the codebase as a separate module.
        </p>
        <p className="mb-6">
          <strong>Result:</strong> new products can build on a shared foundation without creating
          a separate design system or duplicating work.
        </p>
        <p className="mb-6">
          <strong>My role:</strong> Design Systems · Tokens · Figma · Collaboration with
          Engineering
        </p>

        <h3 id="help-no-designers" className="font-medium mb-1 mt-6">Help without designers</h3>
        <p className="mb-6">
          The Help team regularly came to designers for small changes. Instead of growing the
          stream of routine requests, I proposed handing part of these changes directly to the
          product team.
        </p>
        <p className="mb-6">
          I built a centralized master file with Help&apos;s core screens and templates. Predefined
          elements and constraints let the team make typical changes on their own while keeping the
          product&apos;s visual consistency.
        </p>
        <p className="mb-6">
          <strong>Result:</strong> designers stopped being a required step for routine changes and
          moved into an advisory role.
        </p>
        <p className="mb-6">
          <strong>My role:</strong> Design Enablement · Templates · Process
        </p>

        <h2 id="2025-2026" className="font-medium mb-1 mt-10">2025–2026: from designer to manager</h2>
        <p className="mb-6">In 2025 my role changed again.</p>
        <p className="mb-6">
          I moved from mostly systemic and product work to leading a team of product designers.
        </p>
        <p className="mb-6">
          I first took over a team of two designers looking for new product opportunities and
          running experiments around Mail. The team later grew to five product designers.
        </p>
        <p className="mb-6">
          My focus shifted from working through solutions myself to setting direction,
          distributing tasks, working with Product, and creating the conditions for designers to
          own large parts of the product on their own.
        </p>

        <h3 id="core-tasks" className="font-medium mb-1 mt-6">My core responsibilities</h3>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
          <li>setting design priorities together with Product;</li>
          <li>distributing tasks within the team;</li>
          <li>hiring and onboarding new designers;</li>
          <li>taking part in performance reviews;</li>
          <li>helping designers grow and move toward more independence;</li>
          <li>working with other design teams;</li>
          <li>managing the team&apos;s budget;</li>
          <li>planning spending on tools, software, conferences, and training.</li>
        </ul>

        <h3 id="what-we-shipped" className="font-medium mb-1 mt-6">What we shipped</h3>
        <p className="mb-6">
          One of the team&apos;s focus areas was new scenarios and experiments around Mail.
        </p>
        <p className="mb-6">
          In the mobile app, we rebuilt the navigation for the &laquo;Purchases&raquo; section to
          make key scenarios — cashback, the showcase, and discounts — more accessible and clear. I
          took part in shaping the solution, preparing the design for development, and running UX
          research with real users. <strong>84% of users rated the new interface as more
          convenient, 83% as clearer and better structured, and 81% responded positively to the new
          navigation.</strong>
        </p>
        <p className="mb-6">
          We also experimented with a new home screen for Mail — a split-screen, more widget-based
          approach instead of the familiar inbox. The idea was for the home screen to give access
          to several important scenarios at once, not just a list of emails. For me, this project
          became an example of moving from interface design to searching for new product models.
        </p>
        <p className="mb-6">
          Separately, we reworked Mail&apos;s Web navigation to increase usage of other products in
          the ecosystem. I took part in shaping the new structure and key interactions, after which
          the solution kept evolving with the product team. As a result, the number of products
          used per user grew.
        </p>

        <h3 id="design-leadership" className="font-medium mb-1 mt-6">Design leadership</h3>
        <p className="mb-6">
          As the team grew, it became important not just to manage individual tasks, but to make
          design&apos;s work more transparent and predictable.
        </p>
        <p className="mb-6">
          I set up a planning system for the team: detailed reports in Jira, an updated task
          template, weekly sprint reporting, and breaking down large product tasks. This helped us
          see the team&apos;s workload more clearly, plan resources, and catch tasks that started
          slipping past their expected timelines early.
        </p>
        <p className="mb-6">
          As a result, the share of tasks that carried over more than four sprints dropped by{" "}
          <strong>80%</strong>.
        </p>
        <p className="mb-6">
          In parallel, I set up regular designer participation in discovery meetings and a process
          for logging, scoring, and planning product hypotheses.
        </p>
        <p>
          Design hypotheses became part of the shared product roadmap rather than a separate
          stream of design initiatives. The target was 20% of hypotheses in the product backlog
          coming from design. The actual result was <strong>25%</strong>.
        </p>
      </div>
    </main>
  );
}
