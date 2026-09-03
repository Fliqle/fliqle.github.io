"use client";

import { useEffect } from "react";
import { useHoverSound } from "./hooks/useHoverSound";

/**
 * Глобальный "слушатель" нажатий: играет звук в момент НАЖАТИЯ на
 * ЛЮБУЮ ссылку или кнопку на сайте — без необходимости вручную
 * добавлять обработчик в каждый компонент.
 *
 * Используем pointerdown (а не click), чтобы звук совпадал по времени
 * с моментом старта CSS-анимации scale-down на :active — иначе звук
 * (который срабатывает при click, то есть при отпускании) заметно
 * отстаёт от визуального "нажатия" и ощущается рассинхроном.
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
  const playClick = useHoverSound("/Sounds/hover.wav", { volume: 0.1 });

  useEffect(() => {
    const SELECTOR = "a, button, [data-click-sound]";

    function handlePointerDown(e: PointerEvent) {
      // Проигрываем звук только на основной кнопке мыши/тапе,
      // чтобы не срабатывало на правый клик или колёсико
      if (e.button !== 0) return;

      const target = (e.target as Element)?.closest(SELECTOR);
      if (!target) return;
      if (target.closest("[data-no-click-sound]")) return;

      playClick();
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [playClick]);

  return null;
}
