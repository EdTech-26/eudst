import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FacultyService } from "@/components/site/FacultyService";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Monitor, ScanSearch, Sparkles, Blocks } from "lucide-react";
import facultyImg from "@/assets/faculty.jpg";

type SupportCard = {
  title: string;
  body: string;
};

const icons = [Monitor, ScanSearch, Sparkles, Blocks];

const Faculty = () => {
  const { t } = useTranslation();
  const supportCards = t("faculty.supportCards", { returnObjects: true }) as SupportCard[];

  useEffect(() => {
    document.title = t("faculty.pageTitle");
    const desc = t("faculty.metaDescription");
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [t]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <section className="container pt-10 md:pt-14">
          <div className="relative overflow-hidden rounded-2xl bg-ink text-primary-foreground shadow-lift">
            <div className="absolute inset-0 opacity-65">
              <img src={facultyImg} alt="Faculty support" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-primary/70" />
            </div>
            <div className="relative grid gap-10 px-8 py-16 md:px-14 md:py-24 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                  {t("faculty.heroBadge")}
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl rtl:leading-[1.5] rtl:tracking-normal"
                >
                  {t("faculty.titleLine1")}{" "}
                  <span className="font-secondary-title italic">
                    {t("faculty.titleLine2")}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-6 max-w-2xl text-lg text-primary-foreground/85"
                >
                  {t("faculty.body")}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/faculty/auth">{t("faculty.primaryCta")}</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="xl"
                    asChild
                    className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <Link to="/courses">
                      {t("faculty.secondaryCta")} <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("faculty.supportEyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
              {t("faculty.supportTitle")}
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              {t("faculty.supportIntro")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {supportCards.map((card, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-xl border border-border bg-card p-8 shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <FacultyService />

        <section className="container py-20">
          <div className="rounded-xl border border-border bg-secondary/50 p-10 text-center md:p-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl text-balance">
              {t("faculty.ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t("faculty.ctaBody")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="xl">{t("faculty.ctaPrimary")}</Button>
              <Button variant="soft" size="xl" asChild>
                <Link to="/courses">{t("faculty.ctaSecondary")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
