import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, Users, Award, FileCheck } from "lucide-react";
import femaleStudentNotes from "@/assets/female-student-notes.png";

export const Audiences = () => {
  const { t } = useTranslation();

  const bullets: { i: typeof BookOpen; key: string }[] = [
    { i: BookOpen, key: "audiences.bullets.selfPaced" },
    { i: Award, key: "audiences.bullets.stackable" },
    { i: FileCheck, key: "audiences.bullets.applied" },
    { i: BookOpen, key: "audiences.bullets.immersive" },
  ];

  return (
    <section id="learners" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("audiences.eyebrow")}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
          {t("audiences.title")}
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
            <Users className="h-3.5 w-3.5" /> {t("audiences.cardBadge")}
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {t("audiences.cardTitle")}
          </h3>
          <p className="mt-4 max-w-xl text-muted-foreground">
            {t("audiences.cardBody")}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map(({ i: Icon, key }) => (
              <li key={key} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {t(key)}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" asChild>
              <Link to="/courses">
                {t("audiences.browse")} <ArrowUpRight className="ms-1 h-4 w-4 rtl:rotate-[270deg]" />
              </Link>
            </Button>
            <Button variant="ghost">{t("audiences.createAccount")}</Button>
          </div>
          <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-smooth group-hover:scale-110" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl shadow-elegant"
        >
          <img
            src={femaleStudentNotes}
            alt="Student taking notes while studying online"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
