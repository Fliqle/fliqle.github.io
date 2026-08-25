import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./site-header";

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
      <SiteHeader />
      {children}
      </body>
    </html>
  );
}
