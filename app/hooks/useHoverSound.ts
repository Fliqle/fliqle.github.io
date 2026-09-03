"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Хук для проигрывания короткого звука при наведении курсора.
 *
 * Использует Web Audio API: звук загружается и декодируется один раз,
 * а дальше проигрывается из буфера — это даёт минимальную задержку
 * даже при быстром наведении на несколько элементов подряд (в отличие
 * от <audio>, который может "заикаться" при повторных вызовах).
 *
 * Важно: браузеры блокируют звук до первого взаимодействия пользователя
 * со страницей (клика/тапа) — это стандартная политика автоплея, не баг.
 * После первого клика где угодно на странице звук начнёт работать.
 *
 * Использование:
 *   const playHover = useHoverSound("/sounds/hover.mp3");
 *   <Link onMouseEnter={playHover} ...>
 */
export function useHoverSound(src: string, options?: { volume?: number }) {
  const volume = options?.volume ?? 0.4;

  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const lastPlayedRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    // AudioContext создаём лениво и только в браузере
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AudioCtx();
    ctxRef.current = ctx;

    fetch(src)
      .then((res) => res.arrayBuffer())
      .then((data) => ctx.decodeAudioData(data))
      .then((decoded) => {
        if (!cancelled) bufferRef.current = decoded;
      })
      .catch(() => {
        // Файл не найден/не декодировался — просто не будет звука,
        // остальной сайт не должен из-за этого падать
      });

    return () => {
      cancelled = true;
      ctx.close();
    };
  }, [src]);

  const play = useCallback(() => {
    const ctx = ctxRef.current;
    const buffer = bufferRef.current;
    if (!ctx || !buffer) return;

    // Троттлинг: не даём звуку срабатывать чаще, чем раз в 60мс
    // (защита от дребезга при быстром движении мыши по соседним элементам)
    const now = performance.now();
    if (now - lastPlayedRef.current < 60) return;
    lastPlayedRef.current = now;

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    gain.gain.value = volume;
    source.buffer = buffer;
    source.connect(gain).connect(ctx.destination);
    source.start(0);
  }, [volume]);

  return play;
}
