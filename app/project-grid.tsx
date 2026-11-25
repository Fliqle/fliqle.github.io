"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";

export type Project = {
  href: string;
  title: string;
  description: string;
  image: string;
  previews: string[];
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [displayedHref, setDisplayedHref] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showPreviews = useCallback((href: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setDisplayedHref(href);
    setActiveHref(href);
  }, []);

  const hidePreviews = useCallback(() => {
    setActiveHref(null);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setDisplayedHref(null), 220);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (displayedHref) hidePreviews();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [displayedHref, hidePreviews]);

  return (
    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {projects.map((project) => {
        const isActive = activeHref === project.href;
        const isDisplayed = displayedHref === project.href;

        return (
          <Link
            key={project.href}
            href={project.href}
            onMouseEnter={() => showPreviews(project.href)}
            onMouseLeave={hidePreviews}
            onFocus={() => showPreviews(project.href)}
            onBlur={hidePreviews}
            className={`relative flex flex-col rounded-2xl bg-white p-5 shadow-custom no-underline transition-shadow hover:shadow-custom-hover dark:bg-neutral-900 ${isDisplayed ? "z-50" : "z-0"}`}
          >
            {isDisplayed && <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 hidden h-[120px] w-80 -translate-x-1/2 sm:block"
            >
              {project.previews.slice(0, 2).map((preview, index) => {
                const direction = index === 0 ? -1 : 1;
                const style = {
                  "--preview-start-x": `${direction * 20}px`,
                  "--preview-x": `${direction * 46}px`,
                  "--preview-overshoot-x": `${direction * 50}px`,
                  "--preview-settle-x": `${direction * 45}px`,
                  "--preview-rotation": `${direction * 7}deg`,
                  "--preview-overshoot-rotation": `${direction * 7.7}deg`,
                  "--preview-settle-rotation": `${direction * 6.8}deg`,
                } as CSSProperties;

                return (
                  <span
                    key={`${preview}-${index}`}
                    className={`project-link-preview -ml-[84px] absolute bottom-0 left-1/2 block rounded-lg bg-white p-1 shadow-custom ${isActive ? "is-active" : "is-inactive"}`}
                    style={style}
                  >
                    <Image
                      src={preview}
                      alt=""
                      width={160}
                      height={120}
                      sizes="160px"
                      className="h-[120px] w-40 rounded-sm object-cover"
                    />
                  </span>
                );
              })}
            </span>}

            <div className="flex h-44 items-center justify-center">
              <Image
                src={project.image}
                alt=""
                width={360}
                height={192}
                className="aspect-[360/192] w-3/5 rounded-lg object-cover"
              />
            </div>
            <div>
              <h3 className="inline-block">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
