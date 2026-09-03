import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ArticleNav } from "../../../article-nav";
import RDCbanner from "../../../../public/projects/inside/rdc/eUDrPv_L4LMGvDPzFp2CTBctUZbNen1w-XeS_hvcyy7q2NN1Dydem0BlroM8hfHje01dZE1tMTp9yOk8fqJRiYkp.webp";
import rdc1 from "../../../../public/projects/inside/rdc/Slide 4.webp";
import rdc2 from "../../../../public/projects/inside/rdc/Slide 5.webp";
import rdc3 from "../../../../public/projects/inside/rdc/Slide 6.webp";
import { ZoomableImage } from "../../../zoomable-image";

export const metadata: Metadata = {
  title: "Russian Design Cup — Valera Sirotkin",
  description: "Case study: Russian Design Cup, 2021–2026.",
};

export default function RdcProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "what-i-did", label: "What I did" },
          { id: "pr-communications", label: "PR and communications" },
          { id: "running-competition", label: "Running the competition" },
          { id: "budget", label: "Budget" },
          { id: "landing", label: "Landing page" },
          { id: "jury", label: "Jury" },
          { id: "platforms", label: "Platforms" },
          { id: "final-broadcasts", label: "Final and broadcasts" },
          { id: "content-promotion", label: "Content and promotion" },
        ]}
      />
      <Link
        href="/en"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Russian Design Cup</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src={RDCbanner} alt="Russian Design Cup" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Russian Design Cup is a design competition that has been running for 15 years.
          I&apos;ve been helping organize it since 2020.
        </p>
      </div>
      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
      <p className="mb-6">
        Over the years my role changed a lot: from PR and email campaigns to running the competition end to end. In recent years, together with Pasha Karpov, we were the main drivers of RDC inside VK, responsible for everything from the concept and budget to the jury, platform, communications, and the final.
      </p>
              <ZoomableImage
          src={rdc1}
          alt="Slide from the Russian Design Cup presentation showing the start of the competition"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <h2 id="what-i-did" className="font-medium mb-1 mt-10">What I did</h2>
      <h3 id="pr-communications" className="font-medium mb-1 mt-6">PR and communications</h3>
      <p className="mb-6">
        I started on the promotional side: handling email campaigns, PR, and communication with participants. I helped draw attention to the competition and keep people engaged through every stage.
      </p>
      <h3 id="running-competition" className="font-medium mb-1 mt-6">Running the competition</h3>
      <p className="mb-6">
        Together with Pasha, I was responsible for running the entire competition: planning, coordinating teams and contractors, timelines, budget, and general organizational issues.
      </p>
                    <ZoomableImage
          src={rdc2}
          alt="Slide from the Russian Design Cup presentation showing the start of the competition"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <h3 id="budget" className="font-medium mb-1 mt-6">Budget</h3>
      <p className="mb-6">
        Helped put together the competition&apos;s overall budget, bringing together budgets from different areas.
      </p>
      <h3 id="landing" className="font-medium mb-1 mt-6">Landing page</h3>
      <p className="mb-6">
        Organized the move of the main landing page to a website builder. This removed the need to constantly involve developers: I could make most changes myself, which noticeably sped up releasing updates.
      </p>
                    <ZoomableImage
          src={rdc3}
          alt="Slide from the Russian Design Cup presentation showing the start of the competition"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <h3 id="jury" className="font-medium mb-1 mt-6">Jury</h3>
      <p className="mb-6">
        Organized the jury&apos;s work, arranged for experts to take part in the competition and the final, and coordinated the judging of entries. I also took part in judging myself.
      </p>
      <h3 id="platforms" className="font-medium mb-1 mt-6">Platforms</h3>
      <p className="mb-6">
        Negotiated with the platforms hosting the competition. During my time on the project, RDC has run on Studio by PROSTOR — a VKontakte mini app — and, since 2026, on Dprofile.
      </p>
      <h3 id="final-broadcasts" className="font-medium mb-1 mt-6">Final and broadcasts</h3>
      <p className="mb-6">
        Took part in preparing and running the online broadcasts and hosted the final on behalf of the organizers. Helped organize the offline final and coordinate the finalists.
      </p>
      <h3 id="content-promotion" className="font-medium mb-1 mt-6">Content and promotion</h3>
      <p className="mb-6">
        Created creatives, wrote copy, and prepared materials to promote the competition. Depending on the task, I combined the roles of organizer, designer, copywriter, developer, and host.
      </p>
    </div>
    </main>
  );
}
