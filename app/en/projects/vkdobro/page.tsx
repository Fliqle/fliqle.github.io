import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ZoomableImage } from "@/app/zoomable-image";
import dobrobanner from "../../../../public/projects/inside/dobro/vkdobro1.webp";
import dobroold from "../../../../public/projects/inside/dobro/vkdobro2.webp";
import dobronew from "../../../../public/projects/inside/dobro/vkdobro3.webp";
import dobrominiapp from "../../../../public/projects/inside/dobro/vkdobro4.webp";
import dobrods from "../../../../public/projects/inside/dobro/vkdobro5.webp";

export const metadata: Metadata = {
  title: "VK Dobro — Valera Sirotkin",
  description: "Case study: VK Dobro, 2022–2023.",
};

export default function VkDobroProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">VK Dobro</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2022–2023</p>

      <ProjectBanner src={dobrobanner} alt="VK Dobro" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VK Dobro is VK&apos;s platform for charity fundraising and volunteer projects. Helped
          with the product rebrand and the migration of its interfaces to the shared design system.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
      <p className="mb-6">
          VK Dobro (formerly Dobro Mail) is a major social service and charity platform within the VK ecosystem. I joined the project during a period of crisis management, when the product team was left without designers right in the middle of a large-scale rebrand.
      </p>
      <ZoomableImage
          src={dobroold}
          alt="Dobro Mail interface before the rebrand"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <p className="mb-6">
          The project had a tight deadline: it needed to go through a rebrand, move from Dobro Mail to VK Dobro, and migrate all interfaces to the ecosystem&apos;s shared visual language — VKUI — in a short amount of time.
      </p>
      <h2 className="font-medium mb-1 mt-10">Ecosystem and web platform</h2>
      <p className="mb-6">
          To keep the service running without interruption, I jumped straight into a hands-on design workflow and started the redesign with isolated content blocks:
      </p>
      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-1 px-4">
        <li>Web version: manually rebuilt the interfaces and logic of the &quot;Articles&quot; and &quot;Volunteering&quot; pages, then step by step transformed the entire main site along with its responsive mobile version.</li>
        <li>VK Mini App: together with the product team, designed and built a service inside VKontakte from scratch. Worked through end-to-end user scenarios, drew up the interfaces, and laid the groundwork for a new channel for charity fundraising.</li>
      </ul>
      <ZoomableImage
          src={dobronew}
          alt="VK Dobro service interface"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-12 w-full h-auto"
        />
      <p>
          The results of the transformation and the launch of the new platform were successfully announced <Link href="https://vk.company/ru/press/releases/11490/?ysclid=mth1ttbeq0830955724" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">in VK&apos;s official press release.</Link>
      </p>
      <ZoomableImage
          src={dobrominiapp}
          alt="VK Dobro service interface"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-12 w-full h-auto"
        />
      <h2 className="font-medium mb-1 mt-10">Leadership and project handover</h2>
      <p className="mb-6">
          When the team got an open headcount for a product designer, I got actively involved in the hiring process:
      </p>
      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
        <li>Screened portfolios and conducted product and technical interviews with candidates.</li>
        <li>Took part in the final hiring decision and the new specialist&apos;s onboarding.</li>
        <li>Smoothly handed over the context and the system, then mentored the designer&apos;s work for the first year, which let the project move to autonomous development.</li>
      </ul>
      <ZoomableImage
          src={dobrods}
          alt="VK Dobro service interface"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      </div>
    </main>
  );
}
