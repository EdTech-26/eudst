import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const courses = [
  {
    code: "DACS2101",
    college: "CCIT",
    title: "Applied Data Analytics for Business",
    desc: "Hands-on data wrangling, visualisation and decision-making with industry tools.",
    type: "Academic · Online",
    duration: "14 weeks",
    accent: "bg-primary/10 text-primary",
  },
  {
    code: "PROF1042",
    college: "FPU",
    title: "Cybersecurity Essentials Certificate",
    desc: "Foundational practitioner skills covering threats, controls and incident response.",
    type: "Professional",
    duration: "40 hrs",
    accent: "bg-accent/15 text-[hsl(38_60%_36%)]",
  },
  {
    code: "DAEN3210",
    college: "CET",
    title: "Sustainable Engineering Systems",
    desc: "Apply lifecycle thinking and energy modelling to real engineering problems.",
    type: "Academic · HyFlex",
    duration: "12 weeks",
    accent: "bg-primary/10 text-primary",
  },
  {
    code: "PROF2200",
    college: "CB",
    title: "AI for Managers: Strategy & Adoption",
    desc: "Translate AI capabilities into operating models, governance and business value.",
    type: "Professional",
    duration: "24 hrs",
    accent: "bg-accent/15 text-[hsl(38_60%_36%)]",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="bg-secondary/50 py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Catalogue preview</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
              Online & professional courses, delivered through Brightspace.
            </h2>
          </div>
          <Button variant="soft">
            View all courses <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c, i) => (
            <motion.article
              key={c.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${c.accent}`}>
                  {c.college}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">{c.code}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{c.type}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {c.duration}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
