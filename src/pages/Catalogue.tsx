import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CourseCard } from "@/components/site/CourseCard";
import { Organisations } from "@/components/site/Organisations";
import { sampleCourses } from "@/components/site/courseData";
import { Button } from "@/components/ui/button";

const collegeCodes = ["All", "CB", "CCIT", "CET", "CGE", "CHS", "CPE"];
const typeKeys: { value: string; key: string }[] = [
  { value: "All", key: "catalogue.all" },
  { value: "Academic · Online", key: "catalogue.types.academicOnline" },
  { value: "Academic · Applied", key: "catalogue.types.academicApplied" },
  { value: "Professional", key: "catalogue.types.professional" },
  { value: "Microcredential", key: "catalogue.types.microcredential" },
];

const Catalogue = () => {
  const { t } = useTranslation();
  const [college, setCollege] = useState("All");
  const [type, setType] = useState("All");

  useEffect(() => {
    document.title = "Course Catalogue · eUDST";
    const desc = "Explore the eUDST catalogue — applied, immersive online courses and microcredentials from the University of Doha for Science & Technology.";
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
          (college === "All" || c.college === college) &&
          (type === "All" || c.type === type)
      ),
    [college, type]
  );

  const labelForCollege = (code: string) =>
    code === "All" ? t("catalogue.all") : code;

  const labelForType = (value: string) => {
    const match = typeKeys.find((k) => k.value === value);
    return match ? t(match.key) : value;
  };

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
          <div className="container flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("catalogue.collegeLabel")}
              </span>
              {collegeCodes.map((c) => (
                <button
                  key={c}
                  onClick={() => setCollege(c)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-smooth ${
                    college === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {labelForCollege(c)}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("catalogue.typeLabel")}
              </span>
              {typeKeys.map((tk) => (
                <button
                  key={tk.value}
                  onClick={() => setType(tk.value)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-smooth ${
                    type === tk.value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {labelForType(tk.value)}
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
                  setCollege("All");
                  setType("All");
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
