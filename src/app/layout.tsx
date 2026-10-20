import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn, Jomhuria, Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jomhuria = Jomhuria({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-jomhuria",
  display: "swap",
});

const neopixel = localFont({
  src: "./fonts/neopixel-regular.otf",
  variable: "--font-neopixel",
  display: "swap",
});

const corgan = localFont({
  src: "./fonts/Corgan-BL4vG.otf",
  variable: "--font-corgan",
  display: "swap",
});

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مهدی — طراح محصول، مهندس فرانت‌اند و هوش مصنوعی",
  description:
    "پورتفولیوی شخصی مهدی: مهندسی فرانت‌اند، طراحی سیستم‌های هوش مصنوعی و طراحی محصول مدرن.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${neopixel.variable} ${orbitron.variable} ${jomhuria.variable} ${vazir.variable} ${geistSans.variable} ${geistMono.variable} ${corgan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-persian">{children}</body>
    </html>
  );
}
