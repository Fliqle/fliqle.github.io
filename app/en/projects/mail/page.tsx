import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import mailBanner from "../../../../public/Mail.png";

export const metadata: Metadata = {
  title: "Mail — Valera Sirotkin",
  description: "Case study: systemic design of Mail, 2019–2026.",
};

export default function MailProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">Mail</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2019–2026</p>

      <ProjectBanner src={mailBanner} alt="Mail" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          A long-term engagement with Mail — with a break to lead the Paradigm design system —
          returning to Mail as head of the design direction. Over this time the team moved from
          individual interface improvements to owning the key user scenarios across the entire product.
        </p>
      </div>

      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
        <li>Developed systemic design for Mail and Cloud, building cross-product patterns, components and navigation principles.</li>
        <li>Fully designed and shipped the new &laquo;Payments&raquo; section in Mail.</li>
        <li>Redesigned the mail client&apos;s settings section, improving structure, visual language and user flow.</li>
        <li>Led a team of 5 product designers: distributed areas of responsibility, took part in hiring and team development.</li>
        <li>Worked on transforming the mobile Mail experience, including experiments with the home screen and core user scenarios.</li>
        <li>Worked with Product to set priorities and goals for the design team, contributing to Mail&apos;s strategy.</li>
      </ul>
    </main>
  );
}
