import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, Award, FileCheck } from "lucide-react";
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-xs uppercase tracking-[0.2em] text-primary"
        >
          {t("audiences.eyebrow")}
        </motion.p>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance"
        >
          {t("audiences.title")}
        </motion.h2>
      </motion.div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 0.06, delayChildren: 0.25 },
            },
          }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-lift md:p-10 lg:col-span-2"
        >
          <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {t("audiences.cardTitle")}
          </h3>
          <p className="mt-4 max-w-xl text-muted-foreground">
            {t("audiences.cardBody")}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map(({ i: Icon, key }) => (
              <motion.li
                key={key}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {t(key)}
              </motion.li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" asChild>
              <Link to="/courses" className="group/btn">
                {t("audiences.browse")}
                <ArrowUpRight className="ms-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 rtl:rotate-[270deg]" />
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
          className="group relative overflow-hidden rounded-2xl shadow-elegant"
        >
          <motion.img
            src={femaleStudentNotes}
            alt="Student taking notes while studying online"
            className="h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </section>
  );
};
