import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ArticleNav } from "../../../article-nav";
import { ZoomableImage } from "@/app/zoomable-image";
import mailBanner from "../../../../public/Mail.png";
import mailspeed from "../../../../public/projects/inside/mail/mail-speed.webp";
import mailmailings from "../../../../public/projects/inside/mail/mail-mailings.webp";
import mailpayments from "../../../../public/projects/inside/mail/mail-payments.webp";
import mailportal from "../../../../public/projects/inside/mail/mail-portal.webp";
import mailrebrand from "../../../../public/projects/inside/mail/mail-rebrand.webp";
import mailrebrand2 from "../../../../public/projects/inside/mail/mail-rebrand2.webp";

export const metadata: Metadata = {
  title: "Mail — Valera Sirotkin",
  description: "Case study: systemic design of Mail, 2019–2026.",
};

export default function MailProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "2019-2021", label: "2019–2021: building Mail's product experience" },
          { id: "unified-nav", label: "Unified navigation" },
          { id: "mail-settings", label: "Mail settings" },
          { id: "payments-center", label: "Launching the Payments hub inside Mail" },
          { id: "rebrand", label: "Rebrand and product updates" },
          { id: "guide-to-tool", label: "From guideline to tool" },
          { id: "2021-2025", label: "2021–2025: from individual products to systems" },
          { id: "typography", label: "New typography across all products" },
          { id: "speed", label: "Cutting app launch time by 30%" },
          { id: "newsletter-source", label: "Helping users understand where a newsletter came from" },
          { id: "2025-2026", label: "2025–2026: from designer to manager" },
          { id: "experiments", label: "Experiments with new scenarios" },
          { id: "new-home-screen", label: "Mail's new home screen" },
          { id: "b2b-b2c-nav", label: "Unified navigation for B2B and B2C" },
          { id: "team-leadership", label: "Leading the team" },
          { id: "conclusion", label: "From doing it myself to creating the conditions for a team" },
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
          A long-term engagement with Mail — with a break to lead the Paradigm design system —
          returning to Mail as head of the design direction. Over this time the team moved from
          individual interface improvements to owning the key user scenarios across the entire product.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
      <p className="mb-6">
        Over seven years working on Mail, my role moved from lead product designer to head of a product design team. I worked on individual user scenarios and large product changes, then focused on design systems and shared solutions across several products, and in the last two years gradually shifted toward working with the team, product priorities, and strategy.
      </p>

      <h2 id="2019-2021" className="font-medium mb-1 mt-10">2019–2021: building Mail&apos;s product experience</h2>
      <p className="mb-6">
        In the early years I mostly did product design, though many tasks quickly outgrew individual screens or features. Mail was made up of several products and business lines, and some parts of the experience evolved independently from each other — so the need for shared approaches to navigation, profile, settings, and other key elements gradually emerged.
      </p>

      <h3 id="unified-nav" className="font-medium mb-1 mt-6">Unified navigation</h3>
      <p className="mb-6">
        One of the first systemic tasks was updating the navigation and the &laquo;All projects&raquo; dropdown menu — at the time, different products and business lines handled the same scenarios differently. I reworked the navigation structure and core interactions, helped roll the new approach out to other business lines, and in parallel started working on the idea of unified navigation and a shared user profile as a common entry point across products. This was one of the first tasks where I had to look at an interface not as part of a single product, but as a shared experience across several services.
      </p>

      <ZoomableImage
        src={mailportal}
        alt="Portal navigation and the new dropdown menu"
        sizes="(max-width: 692px) 100vw, 692px"
        className="rounded-xl mt-3 mb-12 w-full h-auto"
      />

      <h3 id="mail-settings" className="font-medium mb-1 mt-6">Mail settings</h3>
      <p className="mb-6">
        Another major systemic task was redesigning the settings page. Over time it had accumulated a large number of parameters and scenarios — the job wasn&apos;t just to change how the page looked, but to rebuild its structure and make the settings easier to understand and find. I reworked the information architecture and interface and gradually brought it to the structure that&apos;s now the basis of Mail&apos;s current settings experience.
      </p>

      <h3 id="payments-center" className="font-medium mb-1 mt-6">Launching the Payments hub inside Mail</h3>
      <p className="mb-6">
        One of the bigger product initiatives of this period was launching a new &laquo;Payments&raquo; section inside Mail. The idea was to use the information that already shows up in incoming emails — bills, receipts, and other financial documents — and let users act on it right inside Mail.
      </p>
      <p className="mb-6">
        The new section let users pay for services, manage recurring payments, and keep a history of transactions. At launch, it supported paying thousands of companies and covered several categories of everyday payments. I designed the section from scratch: its structure, core scenarios, and user flows — one of the few projects where I got to go all the way from the idea for a new product section to a finished user experience.
      </p>

      <ZoomableImage
        src={mailpayments}
        alt="Payments hub promo"
        sizes="(max-width: 692px) 100vw, 692px"
        className="rounded-xl mt-3 mb-12 w-full h-auto"
      />

      <h3 id="rebrand" className="font-medium mb-1 mt-6">Rebrand and product updates</h3>
      <p className="mb-6">
        During the same period I was actively involved in the company&apos;s rebrand: the new visual identity had to be quickly carried over to existing digital products, including a large number of internal interfaces. I redesigned Mail&apos;s interfaces and adapted existing products to the new visual language — often under very tight deadlines, when instead of a full redesign I had to quickly bring an existing interface up to the new brand principles: updating typography, colors, components, and other visual elements while keeping existing scenarios working.
      </p>
      <p className="mb-6">
        This experience later strongly shaped how I approach design systems: when you have to manually carry the same visual language across a large number of products, it becomes especially clear which decisions truly need to be systemic.
      </p>

      <ZoomableImage
        src={mailrebrand}
        alt="Rebrand of all Mail products"
        sizes="(max-width: 692px) 100vw, 692px"
        className="rounded-xl mt-3 mb-12 w-full h-auto"
      />

      <h3 id="guide-to-tool" className="font-medium mb-1 mt-6">From guideline to tool</h3>
      <p className="mb-6">
        Another task grew out of a fairly simple problem: email newsletter designs were produced regularly, but there was no single approach to their visual structure. I put together a guideline for newsletter design and, together with the development team, helped build a tool that made assembling email designs significantly faster. The tool was later integrated into the existing &laquo;Рассыльщик&raquo; mailing tool — so the rules from the guideline ended up not just in documentation, but directly in the workflow, and the team no longer had to solve the newsletter design problem from scratch every time.
      </p>

      <ZoomableImage
        src={mailmailings}
        alt="VK rebrand"
        sizes="(max-width: 692px) 100vw, 692px"
        className="rounded-xl mt-3 mb-12 w-full h-auto"
      />

      <h2 id="2021-2025" className="font-medium mb-1 mt-10">2021–2025: from individual products to systems</h2>
      <p className="mb-6">
        In 2021 my focus shifted significantly toward design systems. The scale of Mail and the company&apos;s other products meant that many design tasks were constantly being solved independently by different teams, and my work gradually became less about individual screens and more about building shared infrastructure that let solutions be reused across products. Product tasks kept coming up too — I stepped in whenever they needed research, prototyping, or deeper work on a user scenario.
      </p>

      <h3 id="typography" className="font-medium mb-1 mt-6">New typography across all products</h3>
      <p className="mb-6">
        As part of the rebrand, the company moved to new fonts and a new typographic system. I worked on integrating the new typography into Mail&apos;s products and helped migrate existing interfaces to the new approach — this included not just defining rules for how the font was used within interfaces, but also working with outside vendors and specialists who were refining the font for product scenarios. It meant accounting for a large number of existing products, platforms, and interfaces while still keeping a single visual language.
      </p>

      <ZoomableImage
        src={mailrebrand2}
        alt="Rebrand of all Mail products"
        sizes="(max-width: 692px) 100vw, 692px"
        className="rounded-xl mt-3 mb-12 w-full h-auto"
      />

      <h3 id="speed" className="font-medium mb-1 mt-6">Cutting app launch time by 30%</h3>
      <p className="mb-6">
        One of the tasks I worked on during this period was app launch speed. I decided to look at the problem not just from a technical angle, but also from what the user sees in the first seconds after opening the app: I studied our existing launch process, looked at how competitors solved similar problems, and broke down the interface states during loading. Along the way I also found an existing Python script that could speed up part of the process — we turned what we found into concrete engineering tasks and worked with engineers on optimizing the launch.
      </p>
      <p className="mb-6">
        The work ran on two tracks at once: technical optimization and improving how the app communicates the loading process to the user — including work on the loader and skeleton states. As a result, we managed to <strong>cut app launch time by roughly 30%</strong>.
      </p>

      <ZoomableImage
        src={mailspeed}
        alt="Rebrand of all Mail products"
        sizes="(max-width: 692px) 100vw, 692px"
        className="rounded-xl mt-3 mb-12 w-full h-auto"
      />

      <h3 id="newsletter-source" className="font-medium mb-1 mt-6">Helping users understand where a newsletter came from</h3>
      <p className="mb-6">
        During this period I also looked into the problem of unconfirmed newsletters: a user could accidentally subscribe to a mailing list, or not understand where promotional emails were coming from, which left them feeling like Mail itself had started showing them unwanted content. We looked into how to explain where such emails came from and give users more control over their subscriptions — I put together prototypes of different interface options and took part in two user studies.
      </p>
      <p className="mb-6">
        One of the solutions was the ability to flag a newsletter as unconfirmed — after that, promotional emails from that subscription stopped arriving. What mattered here wasn&apos;t so much building a new interface element as understanding how users perceive an unwanted subscription, and giving them clear control back over their inbox.
      </p>

      <h2 id="2025-2026" className="font-medium mb-1 mt-10">2025–2026: from designer to manager</h2>
      <p className="mb-6">
        In 2025 my role changed again: I moved from mostly systemic and product work to leading a team of product designers. I first took over a team of two designers looking for new product opportunities and running experiments around Mail; the team later grew to five people. The team&apos;s work came to combine researching new scenarios, product experiments, and improving Mail&apos;s core user scenarios, while my own role gradually shifted — from working through every decision myself to setting direction, distributing tasks, working closely with Product, and creating the conditions for other designers to own large parts of the product on their own.
      </p>

      <h3 id="experiments" className="font-medium mb-1 mt-6">Experiments with new scenarios</h3>
      <p className="mb-6">
        One of the team&apos;s first focus areas was experiments around receipts, payments, and discounts — as part of the VK Cashback project, we explored what new scenarios could be built from receipt data. In parallel, the team worked on other Mail scenarios, including the &laquo;Important&raquo; tab in the mobile app and optimizing core mail scenarios. These were research projects: the goal wasn&apos;t to immediately build a new product, but to test whether new scenarios could make Mail more useful beyond the classic inbox.
      </p>

      <h3 id="new-home-screen" className="font-medium mb-1 mt-6">Mail&apos;s new home screen</h3>
      <p className="mb-6">
        One of the team&apos;s boldest experiments was a new approach to the mobile app&apos;s home screen: we were testing the hypothesis that it doesn&apos;t necessarily have to stay just a list of emails. We experimented with a <strong>split-screen</strong> and a more widget-based approach, where the home screen could give access to several important scenarios at once — a hybrid interface instead of the usual inbox. At this stage it&apos;s still an experiment, not a final product redesign.
      </p>
      <p className="mb-6">
        This project matters a lot to me as an example of how my role changed: I was no longer just designing the interface myself — together with the team, I was shaping the direction, working through the hypothesis, and deciding how far we were willing to move away from Mail&apos;s familiar model.
      </p>

      <h3 id="b2b-b2c-nav" className="font-medium mb-1 mt-6">Unified navigation for B2B and B2C</h3>
      <p className="mb-6">
        Another large task was bringing together the products for business and regular users — moving them onto a single new navigation and shared layout approach. The task wasn&apos;t to build a completely new interface, but to find a shared structure that could work in both contexts: the main constraint was keeping the familiar B2C scenarios intact without creating a separate UX for B2B.
      </p>
      <p className="mb-6">
        I worked on the new navigation and rebuilt Mail&apos;s layout logic. In the early stage I worked on the task myself and got hands-on with the hardest parts of the solution — this helped define the direction and work through the key constraints. After that I handed the work off to another designer, who continued developing it. For me, this handoff was an important part of growing as a manager: instead of continuing to design every screen myself, I needed to shape a direction clear enough for another designer to take ownership of.
      </p>

      <h3 id="team-leadership" className="font-medium mb-1 mt-6">Leading the team</h3>
      <p className="mb-6">
        Alongside product work, I took on responsibility for the team&apos;s people and workflows. I now lead a team of <strong>five product designers</strong>. My responsibilities include:
      </p>
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
      <p className="mb-6">
        Over this time I also took part in hiring and brought in <strong>two new designers</strong>, and worked with the product team on setting goals and strategy for 2026.
      </p>

      <h2 id="conclusion" className="font-medium mb-1 mt-10">From doing it myself to creating the conditions for a team</h2>
      <p>
        Over seven years, my work changed from designing individual interfaces to setting direction, working on product strategy, and leading a team. Now I care less and less about being the person who builds every screen myself — my job is to frame the problem, set the direction, build a team around it, and create the conditions for designers to move the product forward on their own.
      </p>
      </div>
    </main>
  );
}
