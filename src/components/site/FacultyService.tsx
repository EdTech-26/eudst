import { motion } from "framer-motion";
import { Layers, Monitor, Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const modes = [
  {
    i: Layers,
    name: "Blended",
    desc: "A balanced mix of in-person sessions and structured online activities.",
  },
  {
    i: Monitor,
    name: "Fully Online",
    desc: "Self-paced or cohort-based learning delivered through a modern online environment.",
  },
  {
    i: Sparkles,
    name: "Applied & Immersive",
    desc: "Project-based, hands-on online experiences that connect learning to real practice.",
  },
];

export const FacultyService = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-24 text-primary-foreground md:py-32">
      <div className="container relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Faculty workflow</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Convert any course into an applied digital experience.
          </h2>
          <p className="mt-5 max-w-md text-primary-foreground/75">
            Submit a single request and our learning design team partners with you across
            every step — from course mapping to launch of immersive, applied online learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" className="bg-accent text-accent-foreground shadow-elegant hover:bg-accent/90">
              Submit a request <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              View my courses
            </Button>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-7">
          {modes.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start gap-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur transition-smooth hover:bg-primary-foreground/10"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                <m.i className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{m.name} learning</h3>
                <p className="mt-1.5 text-sm text-primary-foreground/70">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
