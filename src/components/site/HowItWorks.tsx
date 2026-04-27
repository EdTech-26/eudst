import { motion } from "framer-motion";
import { Search, UserPlus, CreditCard, Rocket, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Search, UserPlus, CreditCard, Rocket];

type Step = {
  title: string;
  body: string;
};

export const HowItWorks = () => {
  const { t } = useTranslation();
  const stepsRaw = t("howItWorks.steps", { returnObjects: true });
  const outcomesRaw = t("howItWorks.outcomes", { returnObjects: true });
  const steps: Step[] = Array.isArray(stepsRaw) ? (stepsRaw as Step[]) : [];
  const outcomes: string[] = Array.isArray(outcomesRaw) ? (outcomesRaw as string[]) : [];

  return (
    <section id="how" className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="max-w-3xl"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-xs uppercase tracking-[0.2em] text-primary"
            >
              {t("howItWorks.eyebrow")}
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance"
            >
              {t("howItWorks.title")}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg"
            >
              {t("howItWorks.intro")}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-primary/15 bg-card p-6 shadow-soft"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("howItWorks.highlightLabel")}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink text-balance">
              {t("howItWorks.highlightTitle")}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t("howItWorks.highlightBody")}
            </p>
          </motion.div>
        </div>

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
            className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-border lg:block"
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid gap-6 lg:grid-cols-4"
          >
            {steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="group relative rounded-xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="flex items-center justify-between gap-4">
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                        delay: 0.2 + index * 0.12,
                      }}
                      className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: -6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                      className="font-display text-4xl font-semibold text-primary/15"
                    >
                      0{index + 1}
                    </motion.span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-8 grid gap-4 rounded-xl border border-primary/15 bg-card p-6 shadow-soft md:grid-cols-3"
        >
          {outcomes.map((outcome) => (
            <motion.div
              key={outcome}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{outcome}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
