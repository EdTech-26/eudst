import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Audiences } from "@/components/site/Audiences";
import { Courses } from "@/components/site/Courses";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FAQ } from "@/components/site/FAQ";
import { CTABanner } from "@/components/site/CTABanner";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "eUDST · Applied Online Learning | University of Doha for Science & Technology";
    const desc = "eUDST is UDST's eLearning Hub — explore applied, immersive online courses and microcredentials designed around real-world skills.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Audiences />
        <Courses />
        <HowItWorks />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
