"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function ZoomableImage({ className, ...props }: ImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={typeof props.alt === "string" ? props.alt : "Открыть изображение"}
        className="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
      >
        <Image {...props} className={className} />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-6"
        >
          <Image {...props} className="max-h-full max-w-full rounded-xl object-contain" />
        </div>
      )}
    </>
  );
}
