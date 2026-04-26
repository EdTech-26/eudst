import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

export const Hero = () => {
  return (
    <section className="relative bg-background">
      <div className="container pt-10 md:pt-14">
        {/* Banner with text overlay */}
        <div className="relative overflow-hidden rounded-2xl shadow-lift">
          <img
            src={heroBanner}
            alt="Professional learning online at the University of Doha for Science and Technology"
            className="h-[520px] w-full object-cover md:h-[600px] lg:h-[680px]"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-8 md:px-14 lg:px-20">
              <div className="max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl"
                >
                  Applied online learning,{" "}
                  <span className="font-secondary-title font-normal italic">
                    built for the way you work.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-6 max-w-md text-base text-primary-foreground/90 text-balance md:text-lg"
                >
                  eUDST is the gateway to UDST's online and professional courses — register,
                  enroll and learn through D2L Brightspace. Faculty can request and manage
                  blended, online and HyFlex course development, all in one portal.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <Button variant="hero" size="xl" asChild>
                    <a href="#learners">
                      Browse courses <ArrowRight className="ml-1" />
                    </a>
                  </Button>
                  <Button variant="soft" size="xl" asChild>
                    <a href="#faculty">
                      <PlayCircle className="mr-1" /> Faculty portal
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar below banner */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {[
            { k: "6", v: "Colleges" },
            { k: "120+", v: "Courses ready" },
            { k: "3", v: "Delivery modes" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <dt className="font-display text-3xl font-semibold text-primary md:text-4xl">
                {s.k}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
