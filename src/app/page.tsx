import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { WorkSection } from "@/components/work-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Untouched Hero with Background Video as requested */}
        <Hero />
        {/* Section 02: O Que Eu Faço (What I Build) */}
        <WorkSection />
        {/* Section 03: Meu Estilo (My Craft & Bento Grid) */}
        <ServicesSection />
        {/* Section 04: Faça Seu Pedido (Start A Project / Contact) */}
        <ContactSection />
      </main>
    </>
  );
}
