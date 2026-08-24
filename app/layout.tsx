import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "./base-path";

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
      <header className="mx-auto max-w-[692px] px-6 py-4 sm:py-4 md:py-16">
        <Link href="/" className="flex items-center gap-4 no-underline">
          <Image
            src={`${basePath}/avatar.png`}
            alt="Аватар Валеры Сироткина"
            width={80}
            height={80}
            className="rounded-full"
          />
          <section>
            <span className="text-base inline-block font-medium">Валера Сироткин</span>
            <p className="text-base leading-none text-gray-500 dark:text-gray-400">Дизайнер · Арт-директор · Музыкант</p>
          </section>
        </Link>
      </header>
      {children}
      </body>
    </html>
  );
}
