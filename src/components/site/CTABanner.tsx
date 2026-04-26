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
      <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground shadow-elegant md:px-16 md:py-24">
        <img
          src={ctaStudents}
          alt="Students collaborating on a laptop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-65" />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
        <div className="relative mx-auto max-w-2xl">
          <img
            src={logoWhite}
            alt="eUDST · Applied Online Learning"
            className="mx-auto mb-12 h-16 w-auto md:mb-16 md:h-20"
          />
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            {t("cta.title")}
          </h2>
          <p className="mt-8 text-primary-foreground/85">
            {t("cta.body")}
          </p>
          <div className="mt-12 flex justify-center md:mt-14">
            <Button size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
              <Link to="/courses">
                {t("cta.button")} <ArrowRight className="ms-1 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
