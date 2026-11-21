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
    default: "مهدی — مهندس نرم‌افزار، سخت‌افزار و سیستم‌های هوش مصنوعی",
    template: "%s | مهدی",
  },
  description:
    "پورتفولیوی شخصی مهدی: کالبدشکافی سخت‌افزار آیفون، مهندسی معکوس، معماری سیستم‌های چندایجنتی هوش مصنوعی و توسعه محصولات وب.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: "مهدی — MHDI",
    title: "مهدی — مهندس نرم‌افزار، سخت‌افزار و سیستم‌های هوش مصنوعی",
    description:
      "تبدیل ایده‌ها به سیستم‌های زنده؛ از عیب‌یابی سخت‌افزار آیفون و مهندسی معکوس تا ایجنت‌های هوشمند و محصولات وب.",
  },
  twitter: {
    card: "summary_large_image",
    title: "مهدی — مهندس نرم‌افزار، سخت‌افزار و سیستم‌های هوش مصنوعی",
    description:
      "پورتفولیوی شخصی مهدی: مهندسی سخت‌افزار آیفون، امنیت، سیستم‌های چندایجنتی و توسعه وب.",
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
