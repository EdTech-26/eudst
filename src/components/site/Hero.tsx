import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-learner.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="container relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-7">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.0] tracking-tight text-ink text-balance md:text-6xl lg:text-7xl"
          >
            Applied online learning,{" "}
            <span className="font-secondary-title text-primary">built for the way you work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground text-balance"
          >
            eUDST is the gateway to UDST's online and professional courses — register,
            enroll and learn through D2L Brightspace. Faculty can request and manage
            blended, online and HyFlex course development, all in one portal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
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

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              { k: "6", v: "Colleges" },
              { k: "120+", v: "Courses ready" },
              { k: "3", v: "Delivery modes" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-semibold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lift">
            <img
              src={heroImage}
              alt="Student learning online at the University of Doha for Science and Technology"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};
