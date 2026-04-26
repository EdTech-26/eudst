import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaStudents from "@/assets/cta-students.png";
import logoWhite from "@/assets/eudst-logo-white.png";

export const CTABanner = () => {
  return (
    <section className="container pb-24">
      <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground shadow-elegant md:px-16 md:py-24">
        <img
          src={ctaStudents}
          alt="Students collaborating on a laptop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-65" />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
        <div className="relative mx-auto max-w-2xl">
          <img
            src={logoWhite}
            alt="eUDST · Applied Online Learning"
            className="mx-auto mb-8 h-16 w-auto md:h-20"
          />
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Start your applied learning journey today.
          </h2>
          <p className="mt-5 text-primary-foreground/85">
            Discover immersive online courses and microcredentials from UDST — built for skills that matter.
          </p>
          <div className="mt-9 flex justify-center">
            <Button size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
              <Link to="/courses">
                Explore the catalogue <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
