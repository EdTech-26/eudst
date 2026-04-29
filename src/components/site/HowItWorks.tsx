import { motion } from "framer-motion";
import {
  Search,
  UserPlus,
  CreditCard,
  Rocket,
  CheckCircle2,
  Layers,
  MonitorPlay,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const xrExperiences = [
  {
    title: "Cleaver Brooks Boiler Unit",
    src: "https://www.thinglink.com/view/scene/1951262043235418789",
    aspect: 1080 / 1920,
  },
  {
    title: "Sidra NICU Simulation Centre",
    src: "https://www.thinglink.com/view/scene/1989329705412592293",
    aspect: 1920 / 3840,
  },
];

const stepIcons = [Search, UserPlus, CreditCard, Rocket];
const immersiveIcons = [Layers, MonitorPlay, Briefcase, GraduationCap];

type Step = {
  title: string;
  body: string;
};

export const HowItWorks = () => {
  const { t } = useTranslation();
  const stepsRaw = t("howItWorks.steps", { returnObjects: true });
  const outcomesRaw = t("howItWorks.outcomes", { returnObjects: true });
  const chipsRaw = t("howItWorks.approach.chips", { returnObjects: true });
  const immersiveItemsRaw = t("howItWorks.immersive.items", { returnObjects: true });

  const steps: Step[] = Array.isArray(stepsRaw) ? (stepsRaw as Step[]) : [];
  const outcomes: string[] = Array.isArray(outcomesRaw) ? (outcomesRaw as string[]) : [];
  const chips: string[] = Array.isArray(chipsRaw) ? (chipsRaw as string[]) : [];
  const immersiveItems: string[] = Array.isArray(immersiveItemsRaw)
    ? (immersiveItemsRaw as string[])
    : [];

  return (
    <section id="how" className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="container">
        {/* Intro */}
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
            className="mt-5 text-base text-muted-foreground md:text-lg"
          >
            {t("howItWorks.intro")}
          </motion.p>
        </motion.div>

        {/* Approach block */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-border bg-card p-8 shadow-soft"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              {t("howItWorks.approach.eyebrow")}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl text-balance">
              {t("howItWorks.approach.title")}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              {t("howItWorks.approach.body")}
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {chips.map((chip) => (
              <motion.li
                key={chip}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="flex items-center gap-3 rounded-xl border border-primary/15 bg-card p-5 shadow-soft"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="font-display text-base font-medium text-ink">{chip}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Immersive learning band */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-12 overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="text-xs uppercase tracking-[0.2em] text-primary"
              >
                {t("howItWorks.immersive.eyebrow")}
              </motion.p>
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl text-balance"
              >
                {t("howItWorks.immersive.title")}
              </motion.h3>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="mt-4 text-sm leading-7 text-muted-foreground md:text-base"
              >
                {t("howItWorks.immersive.body")}
              </motion.p>
            </div>

            <motion.ul
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
              }}
              className="grid grid-cols-2 gap-4"
            >
              {immersiveItems.map((label, index) => {
                const Icon = immersiveIcons[index] ?? Layers;
                return (
                  <motion.li
                    key={label}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium leading-5 text-ink">{label}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          <div className="mt-10">
            <p className="font-display text-lg font-semibold text-ink">
              Sample our immersive learning experiences
            </p>
            <Accordion type="single" collapsible className="mt-4 space-y-3">
              {xrExperiences.map((xr, i) => (
                <AccordionItem
                  key={xr.title}
                  value={`xr-${i}`}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-soft"
                >
                  <AccordionTrigger className="px-5 py-4 text-left font-display text-base font-medium text-ink hover:no-underline">
                    {xr.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <div
                      className="relative w-full overflow-hidden rounded-lg bg-muted"
                      style={{ paddingTop: `${xr.aspect * 100}%` }}
                    >
                      <iframe
                        src={xr.src}
                        title={xr.title}
                        className="absolute inset-0 h-full w-full border-0"
                        allowFullScreen
                        scrolling="no"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-2xl font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl text-balance"
        >
          {t("howItWorks.stepsHeading")}
        </motion.h3>

        <div className="relative mt-10">
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
              const Icon = stepIcons[index];
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
                  <h4 className="mt-6 font-display text-xl font-semibold text-ink">{step.title}</h4>
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
