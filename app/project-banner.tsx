"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

export function ProjectBanner({ src, alt }: { src: StaticImageData | null; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={alt}
        className="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            sizes="(max-width: 692px) 100vw, 692px"
            className="rounded-xl mt-3 mb-6 w-full h-auto"
          />
        ) : (
          <div className="h-64 w-full rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 mt-3 mb-6" />
        )}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-6"
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              className="max-h-full max-w-full rounded-xl object-contain"
            />
          ) : (
            <div className="aspect-[968/512] w-full max-w-3xl rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800" />
          )}
        </div>
      )}
    </>
  );
}
