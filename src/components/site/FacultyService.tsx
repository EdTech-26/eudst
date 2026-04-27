import { motion } from "framer-motion";
import { Search, LayoutPanelTop, Rocket, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type WorkflowStep = {
  title: string;
  body: string;
};

const icons = [Search, LayoutPanelTop, Rocket];

export const FacultyService = () => {
  const { t } = useTranslation();
  const steps = t("faculty.workflowSteps", { returnObjects: true }) as WorkflowStep[];

  return (
    <section id="faculty-services" className="relative overflow-hidden bg-gradient-dark py-24 text-primary-foreground md:py-32">
      <div className="container relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{t("faculty.workflowEyebrow")}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            {t("faculty.workflowTitle")}
          </h2>
          <p className="mt-5 max-w-md text-primary-foreground/75">
            {t("faculty.workflowBody")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" className="bg-accent text-accent-foreground shadow-elegant hover:bg-accent/90">
              {t("faculty.workflowPrimary")} <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/courses">{t("faculty.workflowSecondary")}</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-7">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex items-start gap-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur transition-smooth hover:bg-primary-foreground/10"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-primary-foreground/70">{step.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
