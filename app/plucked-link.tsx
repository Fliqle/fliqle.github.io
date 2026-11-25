"use client";

import Link from "next/link";
import { type ComponentProps, type PointerEvent, useEffect, useRef } from "react";

type PluckedLinkProps = ComponentProps<typeof Link>;

const MS_PER_PIXEL = 13;
const MIN_DURATION = 400;
const MAX_DURATION = 1200;

export function PluckedLink({ className = "", children, ...props }: PluckedLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const releaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const underline = link.querySelector<SVGSVGElement>(".pluck-string");
    if (!underline) return;

    const resize = new ResizeObserver(() => {
      const width = underline.getBoundingClientRect().width;
      const duration = Math.min(Math.max(width * MS_PER_PIXEL, MIN_DURATION), MAX_DURATION);
      link.style.setProperty("--pluck-duration", `${Math.round(duration)}ms`);
    });

    resize.observe(link);
    return () => resize.disconnect();
  }, []);

  const settle = () => {
    const link = linkRef.current;
    const underline = link?.querySelector<SVGSVGElement>(".pluck-string");
    if (link && underline && !link.hasAttribute("data-plucked") && !underline.getAnimations().length) {
      link.removeAttribute("data-ringing");
    }
  };

  const pluck = (clientX: number) => {
    const link = linkRef.current;
    const underline = link?.querySelector<SVGSVGElement>(".pluck-string");
    const path = underline?.querySelector<SVGPathElement>("path");
    if (!link || !underline || !path) return;

    const box = underline.getBoundingClientRect();
    const x = Math.min(Math.max(((clientX - box.left) / box.width) * 100, 15), 85);
    const bend = Math.min(Math.max(box.width / 18, 2), 5);

    link.removeAttribute("data-plucked");
    link.removeAttribute("data-ringing");
    underline.style.transition = "none";
    path.style.transition = "none";
    link.style.setProperty("--pluck-x", `${x}%`);
    path.setAttribute("d", `M0 6 Q${x.toFixed(1)} ${(6 + bend * 2).toFixed(1)} 100 6`);
    void getComputedStyle(underline).clipPath;
    void getComputedStyle(path).transform;
    underline.style.transition = "";
    path.style.transition = "";
    link.setAttribute("data-plucked", "");
    link.setAttribute("data-ringing", "");
  };

  const release = () => {
    linkRef.current?.removeAttribute("data-plucked");
    settle();
  };

  const handlePointerEnter = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "mouse") pluck(event.clientX);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "mouse") release();
  };

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "mouse") return;
    pluck(event.clientX);
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
    const duration = parseFloat(linkRef.current?.style.getPropertyValue("--pluck-duration") || "") || MAX_DURATION;
    releaseTimer.current = setTimeout(release, duration + 400);
  };

  useEffect(() => () => {
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
  }, []);

  return (
    <Link
      {...props}
      ref={linkRef}
      className={`pluck-link ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
    >
      {children}
      <svg
        className="pluck-string"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        aria-hidden="true"
        onTransitionEnd={settle}
        onTransitionCancel={settle}
      >
        <path d="M0 6 Q50 16 100 6" />
      </svg>
    </Link>
  );
}
