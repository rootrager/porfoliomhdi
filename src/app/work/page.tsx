import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { AgentSkillMap } from "@/components/agent-skill-map";
import { WorkSection } from "@/components/work-section";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "دنیای تخصصی و ایجنت هوش مصنوعی",
  description:
    "پروژه‌های واقعی مهدی، نقشه تعاملی اسکیل‌های ایجنت هوش مصنوعی، کارشناسی سخت‌افزار آیفون و مهندسی معکوس.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "دنیای تخصصی و ایجنت هوش مصنوعی | مهدی",
    description:
      "پروژه‌های واقعی مهدی، نقشه تعاملی اسکیل‌های ایجنت هوش مصنوعی، کارشناسی سخت‌افزار آیفون و مهندسی معکوس.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <div data-hemisphere="work" className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <AgentSkillMap />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
}
