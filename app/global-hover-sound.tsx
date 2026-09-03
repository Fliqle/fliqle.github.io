"use client";

import { useEffect } from "react";
import { useHoverSound } from "./hooks/useHoverSound";

/**
 * Глобальный "слушатель" кликов: играет звук при клике на ЛЮБУЮ
 * ссылку или кнопку на сайте — без необходимости вручную добавлять
 * onClick в каждый компонент.
 *
 * Работает через делегирование событий на уровне document: один
 * обработчик на весь сайт вместо десятков отдельных.
 *
 * Подключается один раз в app/layout.tsx.
 *
 * Чтобы ИСКЛЮЧИТЬ какой-то конкретный элемент из озвучки, добавь ему
 * атрибут data-no-click-sound.
 *
 * Чтобы добавить звук элементу, который не <a>/<button> (например
 * div с onClick), добавь ему атрибут data-click-sound.
 */
export function GlobalHoverSound() {
  const playClick = useHoverSound("/sounds/hover.wav", { volume: 0.1 });

  useEffect(() => {
    const SELECTOR = "a, button, [data-click-sound]";

    function handleClick(e: MouseEvent) {
      const target = (e.target as Element)?.closest(SELECTOR);
      if (!target) return;
      if (target.closest("[data-no-click-sound]")) return;

      playClick();
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [playClick]);

  return null;
}
