import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

export const Hero = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const stats: { value: string; label: string }[] = [
    { value: t("hero.stats.onlineCoursesValue"), label: t("hero.stats.onlineCoursesLabel") },
    { value: t("hero.stats.satisfactionValue"), label: t("hero.stats.satisfactionLabel") },
    { value: t("hero.stats.workReadyValue"), label: t("hero.stats.workReadyLabel") },
    { value: t("hero.stats.completionsValue"), label: t("hero.stats.completionsLabel") },
  ];

  return (
    <section className="relative bg-background">
      <div className="container pt-10 md:pt-14">
        <div className="relative overflow-hidden rounded-2xl shadow-lift">
          <motion.img
            src={heroBanner}
            alt="Professional learning online at the University of Doha for Science and Technology"
            className="h-[520px] w-full object-cover md:h-[600px] lg:h-[680px]"
            initial={reduce ? false : { scale: 1 }}
            animate={reduce ? undefined : { scale: 1.06 }}
            transition={{ duration: 14, ease: "easeOut" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />

          <div className="absolute inset-0 flex items-center" dir="ltr">
            <div className="w-full px-8 md:px-14 lg:px-20">
              <div className="max-w-xl text-left rtl:text-right" dir="auto">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl rtl:leading-[1.5] rtl:tracking-normal"
                >
                  {t("hero.titleLine1")}{" "}
                  <span className="font-secondary-title font-normal italic">
                    {t("hero.titleLine2")}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-6 max-w-md text-start text-base text-primary-foreground/90 text-balance md:text-lg rtl:leading-[1.9]"
                >
                  {t("hero.body")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/courses" className="group">
                      {t("hero.cta")}
                      <ArrowRight className="ms-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4"
          dir="ltr"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-center"
            >
              <dt className="font-display text-3xl font-semibold text-primary md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
