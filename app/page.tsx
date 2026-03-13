import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsBar from "@/components/sections/StatsBar";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
