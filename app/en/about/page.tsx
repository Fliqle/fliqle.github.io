import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experience — Valera Sirotkin",
  description:
    "Valera Sirotkin's work experience: VK, Mail.ru Group and Tensor — design systems, product and systemic design.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <h1 className="sr-only">Experience</h1>

      <article className="md:flex">
        {/* Date */}
        <p className="min-w-[120px] mt-2 text-sm text-gray-500 dark:text-gray-400">2025 – present</p>

        {/* Content */}
        <div className="relative pl-0 sm:pl-10">
          <div className="absolute left-0 top-4 h-full w-px bg-gray-200 hidden sm:block"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute left-[-4px] top-4 hidden sm:block"></div>

          {/* Title */}
          <h2 className="text-lg sm:text-2xl font-medium mb-2 mt-2 sm:mt-0">
            VK
          </h2>

          {/* Description */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Head of Design and Design System for Mail
            </p>
          </div>

          <Image
            src="/VK.png"
            alt="VK banner"
            width={968}
            height={512}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-3 w-full h-auto"
          />

          {/* Highlights */}
          <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
            <li>Led a team of 5 product designers: distributed areas of responsibility, ran performance reviews and team development.</li>
            <li>Took part in hiring and brought 2 new designers onto the team.</li>
            <li>Worked with Product to set priorities and goals for the design team and contributed to Mail&apos;s 2026 strategy.</li>
            <li>Over this period the team moved from experiments in the Mail mobile app to owning the key user scenarios across all of Mail.</li>
            <li>Worked on transforming the mobile Mail experience, including experiments with the home screen and core user scenarios.</li>
            <li>Planned and managed the department&apos;s budget over two years, including tools, software, subscriptions, conferences and training.</li>
            <li>Continue engaging with the broader Mail design community, including product, communications and design-system teams.</li>
          </ul>
        </div>
      </article>

      <article className="md:flex">
        {/* Date */}
        <p className="min-w-[120px] mt-2 text-sm text-gray-500 dark:text-gray-400">2021–2025</p>

        {/* Content */}
        <div className="relative pl-0 sm:pl-10">
          <div className="absolute left-0 top-4 h-full w-px bg-gray-200  hidden sm:block"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute left-[-4px] top-4  hidden sm:block"></div>

          {/* Title */}
          <h2 className="text-lg sm:text-2xl font-medium mb-2 mt-2 sm:mt-0">
            VK
          </h2>

          {/* Description */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Design System Lead
            </p>
          </div>

          <Image
            src="/VK.png"
            alt="VK banner"
            width={968}
            height={512}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-3 w-full h-auto"
          />

          {/* Highlights */}
          <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
            <li>Led the development and rollout of a shared design system for B2B and B2C.</li>
            <li>Worked with a community of about 25 designers contributing to and using the design system.</li>
            <li>Developed tokens, platform libraries and reusable components.</li>
            <li>Built processes between Design, Product and Engineering.</li>
            <li>Built tools and processes that reduced designers&apos; operational load and sped up handoff to development.</li>
            <li>Aligned the visual language and patterns across several product lines.</li>
          </ul>
        </div>
      </article>

      <article className="md:flex">
        {/* Date */}
        <p className="min-w-[120px] mt-2 text-sm text-gray-500 dark:text-gray-400">2019–2021</p>

        {/* Content */}
        <div className="relative pl-0 sm:pl-10">
          <div className="absolute left-0 top-4 h-full w-px bg-gray-200  hidden sm:block"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute left-[-4px] top-4  hidden sm:block"></div>

          {/* Title */}
          <h2 className="text-lg sm:text-2xl font-medium mb-2 mt-2 sm:mt-0">
            Mail.ru Group
          </h2>

          {/* Description */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Lead Designer, Art Director
            </p>
          </div>

          <Image
            src="/Mail.png"
            alt="Mail.ru Group banner"
            width={968}
            height={512}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-3 w-full h-auto"
          />

          {/* Highlights */}
          <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
            <li>Developed systemic design for Mail and Cloud products, building cross-product patterns, components and navigation principles.</li>
            <li>Built new sections — for example, fully designed and <a href="https://www.sostav.ru/publication/mail-ru-zapustila-platformu-dlya-oplaty-uslug-pryamo-v-pochte-41094.html" className="text-blue-500 hover:text-blue-800 dark:text-blue-400">
              shipped the new &laquo;Payments&raquo; section in Mail.
            </a></li>
            <li>Redesigned the mail client&apos;s settings section, improving structure, visual language and user flow.</li>
            <li>Contributed to the landing-page builder, which later became the foundation of the email-campaign builder — from UX frameworks to the final visual layer.</li>
            <li>Contributed to the Mail/VK rebrand — adapted visual solutions across product interfaces.</li>
            <li>Designed internal interfaces: intranet systems, admin panels and the Stady learning platform, accounting for internal processes and corporate UX specifics.</li>
          </ul>
        </div>
      </article>

      <article className="md:flex">
        {/* Date */}
        <p className="min-w-[120px] mt-2 text-sm text-gray-500 dark:text-gray-400">2016–2019</p>

        {/* Content */}
        <div className="relative pl-0 sm:pl-10">
          <div className="absolute left-0 top-4 h-full w-px bg-gray-200 hidden sm:block"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute left-[-4px] top-4 hidden sm:block"></div>

          {/* Title */}
          <h2 className="text-lg sm:text-2xl font-medium mb-2 mt-2 sm:mt-0">
            Tensor
          </h2>

          {/* Description */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Lead Interface Designer
            </p>
          </div>

          <Image
            src="/Tensor.png"
            alt="Tensor banner"
            width={968}
            height={512}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-3 w-full h-auto"
          />

          {/* Highlights */}
          <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-12 px-4">
            <li>Designed the &laquo;Accounting&raquo; section end to end — from concept and user scenarios to the final spec and implementation support.</li>
            <li>Actively supported development: helped the team at every stage, clarified details, tested implementation and checked it against requirements.</li>
            <li>Contributed to systemic interface standards: designed component behavior logic, documented UX patterns and aligned them with clients and teams.</li>
            <li>Was an active member of the in-house design community: shared industry news, gave talks, and started and ran an internal design-digest group.</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
