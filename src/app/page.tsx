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
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
