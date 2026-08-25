import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Валера Сироткин — дизайнер и арт-директор",
  description:
    "Личный сайт Валеры Сироткина: дизайнер с опытом 15+ лет, арт-директор и музыкант. Работаю в VK над продуктами Mail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <header className="mx-auto flex max-w-[692px] items-center gap-4 px-6 py-4 sm:py-4 md:py-16">
        <Link href="/" className="shrink-0">
          <Image
            src="/avatar.png"
            alt="Аватар Валеры Сироткина"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
        <section>
          <Link href="/" className="text-base inline-block font-medium no-underline">Валера Сироткин</Link>
          <p className="text-base leading-none text-gray-500 dark:text-gray-400">Дизайнер · Арт-директор · Музыкант</p>
          <div className="mt-2 flex items-center gap-3 text-base text-gray-500 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/vsirotkin/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600"
            >
              LinkedIn
            </a>
            <a
              href="https://vk.ru/fliqle"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600"
            >
              VK
            </a>
            <a
              href="https://cloud.mail.ru/public/ovum/cvjPJQ5KB"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600"
            >
              Resume
            </a>
            <a
              href="mailto:valera@internet.ru"
              className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600"
            >
              Email
            </a>
          </div>
        </section>
      </header>
      {children}
      </body>
    </html>
  );
}
