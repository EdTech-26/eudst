import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

type ValueItem = {
  name: string;
  body: string;
};

const AboutUdst = () => {
  const { t } = useTranslation();
  const values = t("aboutUdst.values", { returnObjects: true }) as ValueItem[];

  useEffect(() => {
    document.title = t("aboutUdst.pageTitle");
    const desc = t("aboutUdst.metaDescription");
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
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("aboutUdst.eyebrow")}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl text-balance">
              {t("aboutUdst.title")}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              {t("aboutUdst.intro")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold text-primary">70+</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("aboutUdst.stats.programs")}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold text-primary">5</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("aboutUdst.stats.colleges")}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold text-primary">UDST</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("aboutUdst.stats.legacy")}</p>
            </div>
          </div>
        </section>

        <section className="container pb-20 md:pb-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("aboutUdst.visionTitle")}</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{t("aboutUdst.visionBody")}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("aboutUdst.missionTitle")}</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{t("aboutUdst.missionBody")}</p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
                {t("aboutUdst.valuesTitle")}
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="font-display text-xl font-semibold text-ink">{value.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="max-w-3xl rounded-xl border border-primary/15 bg-card p-8 shadow-soft md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("aboutUdst.legacyTitle")}</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              {t("aboutUdst.legacyBody")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUdst;
