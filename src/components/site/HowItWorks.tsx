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
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("howItWorks.eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
              {t("howItWorks.title")}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              {t("howItWorks.intro")}
            </p>
          </div>

          <div className="rounded-xl border border-primary/15 bg-card p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("howItWorks.highlightLabel")}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink text-balance">
              {t("howItWorks.highlightTitle")}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t("howItWorks.highlightBody")}
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-border lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative rounded-xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-4xl font-semibold text-primary/15">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-xl border border-primary/15 bg-card p-6 shadow-soft md:grid-cols-3">
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
