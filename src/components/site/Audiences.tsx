import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, Users, Award, FileCheck } from "lucide-react";
import facultyImg from "@/assets/faculty.jpg";

export const Audiences = () => {
  return (
    <section id="learners" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Two paths · One portal</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
          Whether you're learning or teaching, eUDST is your starting point.
        </h2>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {/* Learners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-lift md:p-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Users className="h-3.5 w-3.5" /> External Learners
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Skills that move careers forward.
          </h3>
          <p className="mt-4 text-muted-foreground">
            Explore online academic and professional learning from the University of Doha for Science & Technology. Discover flexible courses, build in-demand skills, and take the next step with learning designed around real goals.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              { i: BookOpen, t: "Self-paced and cohort-based courses" },
              { i: Award, t: "Industry-relevant learning from UDST" },
              { i: FileCheck, t: "A simple, streamlined online learning experience" },
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
            <Button variant="hero">Create learner account</Button>
            <Button variant="ghost">
              Browse catalogue <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-smooth group-hover:scale-110" />
        </motion.div>

        {/* Faculty */}
        <motion.div
          id="faculty"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative overflow-hidden rounded-2xl bg-ink p-8 text-primary-foreground shadow-elegant md:p-10"
        >
          <div className="absolute inset-0 opacity-30">
            <img src={facultyImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-primary/70" />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
              <Award className="h-3.5 w-3.5" /> UDST Faculty
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Design the next generation of digital courses.
            </h3>
            <p className="mt-4 text-primary-foreground/75">
              Create engaging online and blended learning experiences with support from the University of Doha for Science & Technology. Access the tools, guidance, and resources you need to develop high-quality courses in one place.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Develop online and blended course experiences",
                "Access teaching tools, resources, and support",
                "Manage your digital course activity in one place",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-primary-foreground/85">
                  <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-md bg-accent/20 text-accent">
                    <FileCheck className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="hero">Faculty sign in</Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                New course request <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
