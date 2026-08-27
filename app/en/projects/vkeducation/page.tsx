import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../../project-banner";
import { ZoomableImage } from "../../../zoomable-image";

export const metadata: Metadata = {
  title: "VK Education — Valera Sirotkin",
  description: "Case study: VK Education, 2021–2026.",
};

export default function VkEducationProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/en"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        Back home
      </Link>

      <h1 className="text-xl sm:text-3xl font-bold mt-4 mb-1">VK Education</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src="/projects/inside/Education/DN-109.jpg" alt="VK Education" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          5 years teaching design to Tekhnopark students — from the basics of visual thinking to working independently in Figma
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48">
        <p className="mb-4">
          For five years now I&apos;ve been giving lectures and running hands-on design workshops for students of Tekhnopark — an educational program for students of Bauman Moscow State Technical University.
        </p>
        <p className="mb-4">
          Over that time, around 400 students have gone through my classes. I help developers understand the basics of design, learn Figma, and build interfaces on their own — not just copying ready-made mockups, but understanding the elements and decisions behind them.
        </p>
        <h2 className="font-medium mb-1">The task</h2>
        <p className="mb-4">
          Students come to Tekhnopark primarily as developers. Over the course of a semester they work on large projects, which they defend at the end.
        </p>
        <p className="mb-4">
          At the same time, it&apos;s important for a modern developer not only to be able to implement a ready-made interface, but also to understand why it&apos;s built the way it is: how visual hierarchy works, what an interface is made of, how its elements relate to one another, and how to keep a product consistent as it scales.
        </p>
        <p className="mb-4">
          My goal is to give students a basic understanding of design and a practical tool they can use to work on the interfaces of their own projects.
        </p>
        <h2 className="font-medium mb-1">Approach</h2>
        <p className="mb-4">
          The course consists of a lecture on design fundamentals and two hands-on Figma workshops.
        </p>
        <p className="mb-4">
          Instead of learning the tool for its own sake, we build an interface step by step: from simple primitives to components, and then from components to full pages. This approach helps students see design as a system rather than just a set of visual choices.
        </p>
        <ZoomableImage
          src="/projects/inside/Education/figma-education.png"
          alt="Screenshot of a component list from Figma"
          width={968}
          height={512}
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
        <p className="mb-4">
          They apply these skills in their semester projects. I originally taught frontend development groups, and since last year I&apos;ve also been teaching mobile development students.
        </p>
        <p className="mb-4">
          Over five years, around 400 students have taken the course, and the feedback has been consistently positive. Many Tekhnopark graduates go on to join our company — so for me this isn&apos;t just an educational project, but also a chance to meet future colleagues while they&apos;re still studying.
        </p>
      </div>

    </main>
  );
}
