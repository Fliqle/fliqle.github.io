import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "./site-header";
import { GlobalHoverSound } from "./global-hover-sound";

const GA_MEASUREMENT_ID = "G-33J2P6HKXG";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Валера Сироткин — продуктовый дизайнер и дизайн-лидер",
  description:
    "Личный сайт Валерия Сироткина: дизайнер с опытом 15+ лет, арт-директор и дизайн-лидер. Работаю в VK над продуктами Mail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <SiteHeader />
      <GlobalHoverSound />
      {children}
      </body>
    </html>
  );
}
