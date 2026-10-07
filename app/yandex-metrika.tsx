"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

const YANDEX_METRIKA_ID = 113523375;

type YandexMetrikaWindow = Window & {
  ym?: (id: number, method: string, ...args: unknown[]) => void;
};

export function YandexMetrika() {
  const pathname = usePathname();
  const isFirstPage = useRef(true);

  useEffect(() => {
    if (isFirstPage.current) {
      isFirstPage.current = false;
      return;
    }

    const url = `${window.location.origin}${pathname}`;
    (window as YandexMetrikaWindow).ym?.(YANDEX_METRIKA_ID, "hit", url);
  }, [pathname]);

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${YANDEX_METRIKA_ID}, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });
        `}
      </Script>
      <noscript>
        <div>
          {/* Yandex Metrika requires its tracking pixel inside noscript. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
