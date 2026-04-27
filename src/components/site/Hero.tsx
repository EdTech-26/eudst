import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-background">
      <div className="container pt-10 md:pt-14">
        <div className="relative overflow-hidden rounded-2xl shadow-lift">
          <img
            src={heroBanner}
            alt="Professional learning online at the University of Doha for Science and Technology"
            className="h-[520px] w-full object-cover md:h-[600px] lg:h-[680px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-8 md:px-14 lg:px-20" dir="ltr">
              <div className="max-w-xl text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl"
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
                  className="mt-6 max-w-md text-left text-base text-primary-foreground/90 text-balance md:text-lg"
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
                    <Link to="/courses">
                      {t("hero.cta")} <ArrowRight className="ms-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-8"
          dir="ltr"
        >
          {[
            { k: "6", v: t("hero.stats.colleges") },
            { k: "60+", v: t("hero.stats.coursesReady") },
            { k: t("hero.stats.appliedLabel"), v: t("hero.stats.immersive") },
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
