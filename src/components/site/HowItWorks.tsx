import { motion } from "framer-motion";
import { UserPlus, Search, CreditCard, Rocket } from "lucide-react";

const steps = [
  { i: Search, t: "Discover", d: "Explore courses across UDST's six colleges and professional pathways." },
  { i: UserPlus, t: "Register", d: "Create your eUDST account in minutes — learner or faculty." },
  { i: CreditCard, t: "Enroll", d: "Complete secure payment and confirm your seat in the cohort." },
  { i: Rocket, t: "Learn", d: "Launch directly into D2L Brightspace and start your course." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">How it works</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
          From browsing to Brightspace in four steps.
        </h2>
      </div>

      <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl font-semibold text-primary/20">
                0{i + 1}
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
                <s.i className="h-5 w-5" />
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
