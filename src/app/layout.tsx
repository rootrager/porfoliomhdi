import type { Metadata } from "next";
import { IBM_Plex_Mono, Jomhuria, Orbitron, Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

const jomhuria = Jomhuria({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-jomhuria",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
});

const SITE_URL = "https://mhdi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "مهدی — از سخت‌افزار آیفون تا سیستم‌های هوش مصنوعی",
    template: "%s | مهدی",
  },
  description:
    "پورتفولیوی مهدی؛ کارهایی که توی سخت‌افزار آیفون، مهندسی معکوس، ایجنت‌های هوش مصنوعی و وب ساختم.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: "مهدی — MHDI",
    title: "مهدی — از سخت‌افزار آیفون تا سیستم‌های هوش مصنوعی",
    description:
      "از کارشناسی سخت‌افزار آیفون و مهندسی معکوس تا ساختن ایجنت‌های هوش مصنوعی و ابزارهای وب.",
  },
  twitter: {
    card: "summary_large_image",
    title: "مهدی — از سخت‌افزار آیفون تا سیستم‌های هوش مصنوعی",
    description:
      "پورتفولیوی مهدی؛ کارهایی که توی سخت‌افزار آیفون، مهندسی معکوس، ایجنت‌های هوش مصنوعی و وب ساختم.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${vazir.variable} ${jomhuria.variable} ${orbitron.variable} ${ibmMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-persian text-fg selection:bg-accent selection:text-accent-fg">
        {children}
      </body>
    </html>
  );
}
