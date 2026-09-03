"use client";

import { useEffect, useRef, useState } from "react";

type Section = {
  id: string;
  label: string;
  /** "h2" — основной раздел (жирным, с отступом от предыдущей группы),
   *  "h3" — подраздел. По умолчанию "h3". */
  level?: "h2" | "h3";
};

/**
 * Боковая навигация по заголовкам статьи: в свёрнутом виде — просто
 * короткие полоски (по одной на каждый заголовок). При наведении на
 * блок навигации полоски разворачиваются в текст заголовков, по
 * клику — плавный скролл к разделу. Полоска текущего (видимого на
 * экране) раздела подсвечена ещё ДО наведения — работает как
 * индикатор прогресса чтения.
 *
 * Использование на странице проекта:
 *   1) Добавь id каждому заголовку в самой статье:
 *      <h2 id="what-i-did">Что я делал</h2>
 *   2) Подключи компонент с тем же списком секций:
 *      <ArticleNav sections={[
 *        { id: "what-i-did", label: "Что я делал" },
 *        { id: "budget", label: "Бюджет" },
 *      ]} />
 *
 * Показывается только на широких экранах (справа от текста) — на
 * мобильных для боковой панели обычно нет места.
 */
export function ArticleNav({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingEls = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingEls.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Активным считаем самый верхний заголовок, который сейчас
        // пересекает условную "линию чтения" в верхней трети экрана
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    headingEls.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  function handleClick(e: React.MouseEvent, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  }

  return (
    <nav
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-2 lg:flex"
      aria-label="Оглавление статьи"
    >
      {sections.map((section, index) => {
        const isActive = section.id === activeId;
        const isMain = section.level === "h2";
        // Отступ перед новым основным разделом (кроме самого первого
        // пункта) — визуально отделяет группы друг от друга
        const isNewGroup = isMain && index !== 0;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className={`flex flex-col items-end gap-1.5 ${isNewGroup ? "mt-3" : ""}`}
          >
            <span
              className={`
                h-px w-6 transition-all duration-150 ease-out
                ${hovered ? "opacity-0" : "opacity-100"}
                ${
                  isActive
                    ? "bg-neutral-800 dark:bg-neutral-200"
                    : "bg-neutral-300 hover:bg-neutral-500 dark:bg-neutral-700 dark:hover:bg-neutral-400"
                }
              `}
            />
            {/* grid-template-rows 0fr -> 1fr — стандартный CSS-трюк для
                плавной анимации высоты блока с неизвестной заранее
                высотой (тут текст может переноситься на несколько строк) */}
            <div
              className={`
                grid overflow-hidden transition-[grid-template-rows] duration-150 ease-out
                ${hovered ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
            >
              <div className="min-h-0">
                <span
                  className={`
                    block max-w-[200px] text-right text-xs leading-snug
                    ${isMain ? "font-semibold" : "font-medium"}
                    ${
                      isActive
                        ? "text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-500 dark:text-neutral-400"
                    }
                  `}
                >
                  {section.label}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </nav>
  );
}
