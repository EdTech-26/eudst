import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, Users, Award, FileCheck } from "lucide-react";

export const Audiences = () => {
  return (
    <section id="learners" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">For learners & professionals</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
          Skills that move careers forward — built around how you actually learn.
        </h2>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-lift md:p-10 lg:col-span-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Users className="h-3.5 w-3.5" /> External Learners
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Applied, immersive learning from UDST.
          </h3>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Explore online academic and professional learning from the University of Doha for Science & Technology.
            Discover flexible courses, build in-demand skills, and take the next step with learning designed around real goals.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { i: BookOpen, t: "Self-paced and cohort-based courses" },
              { i: Award, t: "Stackable microcredentials" },
              { i: FileCheck, t: "Applied, project-based learning" },
              { i: BookOpen, t: "Immersive online experiences" },
            ].map(({ i: Icon, t }) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" asChild>
              <Link to="/courses">Browse catalogue <ArrowUpRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost">Create learner account</Button>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-smooth group-hover:scale-110" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant md:p-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
            <Award className="h-3.5 w-3.5" /> Microcredentials
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Short, stackable, career-ready.
          </h3>
          <p className="mt-4 text-sm text-primary-foreground/85">
            Earn focused credentials that build into bigger qualifications — proof of skill,
            on your schedule.
          </p>
          <Button
            variant="ghost"
            className="mt-8 px-0 text-primary-foreground hover:bg-transparent hover:text-primary-foreground/80"
            asChild
          >
            <Link to="/courses">
              Explore microcredentials <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
