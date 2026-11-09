"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const linkClass =
  "underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600";

export function SiteHeader() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    document.documentElement.lang = isEn ? "en" : "ru";
  }, [isEn]);

  const homeHref = isEn ? "/en" : "/";
  const aboutHref = isEn ? "/en/about" : "/about";
  const materialsHref = isEn ? "/en/materials" : "/materials";
  const switchHref = isEn
    ? pathname.replace(/^\/en/, "") || "/"
    : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <header className="mx-auto flex max-w-[692px] items-center gap-4 px-6 py-4 sm:py-4 md:py-16">
      <Link href={homeHref} className="shrink-0">
        <Image
          src="/avatar.webp"
          alt={isEn ? "Valera Sirotkin's avatar" : "Аватар Валеры Сироткина"}
          width={80}
          height={80}
          className="rounded-full border border-gray-300 dark:border-gray-700"
        />
      </Link>
      <section>
        <div className="flex items-center gap-2">
          <Link href={homeHref} className="text-base inline-block font-medium no-underline">
            {isEn ? "Valera Sirotkin" : "Валера Сироткин"}
          </Link>
          <Link
            href={switchHref}
            className="rounded-full border border-gray-300 px-2 py-1 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
          >
            {isEn ? "RU" : "EN"}
          </Link>
        </div>
        <p className="text-base leading-none text-gray-500 dark:text-gray-400">
          {isEn ? "Product Designer · Design Leader" : "Продуктовый дизайнер · Дизайн-лидер"}
        </p>
        <div className="mt-2 flex items-center gap-3 text-base text-gray-500 dark:text-gray-400">
          <Link href={aboutHref} className={linkClass}>
            {isEn ? "Work" : "Работа"}
          </Link>
          <Link href={materialsHref} className={linkClass}>
            {isEn ? "Publications" : "Публикации"}
          </Link>
          <a
            href={isEn ? "/Sirotkin_CV_eng.pdf" : "/Sirotkin_CV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {isEn ? "Resume" : "Резюме"}
          </a>
          <a href="mailto:valera@internet.ru" className={linkClass}>
            {isEn ? "Email" : "Почта"}
          </a>
          <a href="https://www.linkedin.com/in/vsirotkin/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
        </div>
      </section>
    </header>
  );
}
