import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaStudents from "@/assets/cta-students.png";
import logoWhite from "@/assets/eudst-logo-white.png";

export const CTABanner = () => {
  const { t } = useTranslation();

  return (
    <section className="container pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground shadow-elegant md:px-16 md:py-24"
      >
        <motion.img
          src={ctaStudents}
          alt="Students collaborating on a laptop"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-65" />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="relative mx-auto max-w-2xl"
        >
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            src={logoWhite}
            alt="eUDST · Applied Online Learning"
            className="mx-auto mb-12 h-16 w-auto md:mb-16 md:h-20"
          />
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="mt-8 text-primary-foreground/85"
          >
            {t("cta.body")}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="mt-12 flex justify-center md:mt-14"
          >
            <Button
              size="xl"
              className="group/cta bg-background text-primary shadow-lift transition-smooth hover:bg-background/90 hover:shadow-elegant"
              asChild
            >
              <Link to="/courses">
                {t("cta.button")}
                <ArrowRight className="ms-1 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 rtl:rotate-180 rtl:group-hover/cta:-translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
