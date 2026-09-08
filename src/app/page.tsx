import React from "react";
import { Navbar, Footer } from "@/components/Navigation";
import { Hero, About, CategoryGrid, Services } from "@/components/MainSections";
import { FeaturedShowcase, Portfolio, WhyChooseUs, OnlinePresence } from "@/components/AdditionalSections";
import { Testimonials, FAQ, Contact, FinalCTA, FloatingContactBar } from "@/components/InteractiveSections";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col bg-white pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <CategoryGrid />
      <Services />
      <FeaturedShowcase />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <OnlinePresence />
      <FinalCTA />
      <Footer />
      <FloatingContactBar />
    </main>
  );
}
