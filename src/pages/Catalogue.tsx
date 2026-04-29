import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CourseCard } from "@/components/site/CourseCard";
import { Organisations } from "@/components/site/Organisations";
import { sampleCourses } from "@/components/site/courseData";
import { Button } from "@/components/ui/button";

const subjects = ["All", "Health", "Education", "Computing", "Business", "Engineering", "Communication"];
const typeKeys: { value: string; key: string }[] = [
  { value: "All", key: "catalogue.all" },
  { value: "Academic", key: "catalogue.types.academic" },
  { value: "Professional", key: "catalogue.types.professional" },
  { value: "Micro-credential", key: "catalogue.types.microcredential" },
];
const deliveryKeys: { value: string; key: string }[] = [
  { value: "All", key: "catalogue.all" },
  { value: "Online", key: "catalogue.delivery.online" },
  { value: "Blended", key: "catalogue.delivery.blended" },
  { value: "HyFlex", key: "catalogue.delivery.hyflex" },
];

const Catalogue = () => {
  const { t } = useTranslation();
  const [subject, setSubject] = useState("All");
  const [type, setType] = useState("All");
  const [delivery, setDelivery] = useState("All");

  useEffect(() => {
    document.title = "Course Catalogue · eUDST";
    const desc = "Explore the eUDST catalogue: applied, immersive online courses and micro-credentials from the University of Doha for Science & Technology.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const filtered = useMemo(
    () =>
      sampleCourses.filter(
        (c) =>
          (subject === "All" || c.subject === subject) &&
          (type === "All" || c.type === type) &&
          (delivery === "All" || c.delivery === delivery)
      ),
    [subject, type, delivery]
  );

  const labelForSubject = (s: string) => (s === "All" ? t("catalogue.all") : s);
  const labelForType = (value: string) => {
    const match = typeKeys.find((k) => k.value === value);
    return match ? t(match.key) : value;
  };
  const labelForDelivery = (value: string) => {
    const match = deliveryKeys.find((k) => k.value === value);
    return match ? t(match.key) : value;
  };

  const pillBase =
    "rounded-full border px-3 py-1 text-xs font-medium transition-smooth";
  const pillActive = "border-primary bg-primary text-primary-foreground";
  const pillIdle =
    "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary";

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-b from-secondary/60 to-background py-20 md:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("catalogue.eyebrow")}</p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl text-balance">
                {t("catalogue.title")}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                {t("catalogue.body")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="sticky top-[72px] z-30 border-y border-border bg-background/85 py-5 backdrop-blur">
          <div className="container flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("catalogue.subjectLabel")}
              </span>
              {subjects.map((s) => (
                <button
                  key={s}
                  onClick={() => setSubject(s)}
                  className={`${pillBase} ${subject === s ? pillActive : pillIdle}`}
                >
                  {labelForSubject(s)}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("catalogue.typeLabel")}
              </span>
              {typeKeys.map((tk) => (
                <button
                  key={tk.value}
                  onClick={() => setType(tk.value)}
                  className={`${pillBase} ${type === tk.value ? pillActive : pillIdle}`}
                >
                  {labelForType(tk.value)}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("catalogue.deliveryLabel")}
              </span>
              {deliveryKeys.map((dk) => (
                <button
                  key={dk.value}
                  onClick={() => setDelivery(dk.value)}
                  className={`${pillBase} ${delivery === dk.value ? pillActive : pillIdle}`}
                >
                  {labelForDelivery(dk.value)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="container py-16 md:py-20">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-16 text-center">
              <p className="font-display text-xl font-semibold text-ink">
                {t("catalogue.empty.title")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("catalogue.empty.body")}
              </p>
              <Button
                variant="soft"
                className="mt-6"
                onClick={() => {
                  setSubject("All");
                  setType("All");
                  setDelivery("All");
                }}
              >
                {t("catalogue.empty.reset")}
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8 text-sm text-muted-foreground">
                {t("catalogue.showing")}{" "}
                <span className="font-semibold text-ink">{filtered.length}</span>{" "}
                {t("catalogue.courseCount", { count: filtered.length })}
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((c, i) => (
                  <CourseCard key={c.code} c={c} index={i} />
                ))}
              </div>
            </>
          )}
        </section>

        <Organisations />
      </main>
      <Footer />
    </div>
  );
};

export default Catalogue;
