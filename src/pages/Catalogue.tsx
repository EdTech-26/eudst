import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CourseCard } from "@/components/site/CourseCard";
import { Organisations } from "@/components/site/Organisations";
import { sampleCourses } from "@/components/site/courseData";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const subjects = ["All", "Health", "Education", "Computing", "Business", "Engineering", "Communication"];
const typeKeys: { value: string; key: string }[] = [
  { value: "All", key: "catalogue.all" },
  { value: "Academic", key: "catalogue.types.academic" },
  { value: "Professional", key: "catalogue.types.professional" },
  { value: "Micro-credential", key: "catalogue.types.micro-credential" },
];

const Catalogue = () => {
  const { t } = useTranslation();
  const [subject, setSubject] = useState("All");
  const [type, setType] = useState("All");

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
          (type === "All" || c.type === type)
      ),
    [subject, type]
  );

  const labelForSubject = (s: string) => (s === "All" ? t("catalogue.all") : s);
  const labelForType = (value: string) => {
    const match = typeKeys.find((k) => k.value === value);
    return match ? t(match.key) : value;
  };

  const hasActiveFilter = subject !== "All" || type !== "All";

  const resetFilters = () => {
    setSubject("All");
    setType("All");
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
        <section className="sticky top-[72px] z-30 border-y border-border bg-background/85 py-3 backdrop-blur">
          <div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 md:flex md:items-center">
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue>
                    <span className="text-muted-foreground">{t("catalogue.subjectLabel")}:</span>{" "}
                    <span className="font-medium text-ink">{labelForSubject(subject)}</span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((s) => (
                    <SelectItem key={s} value={s}>
                      {labelForSubject(s)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue>
                    <span className="text-muted-foreground">{t("catalogue.typeLabel")}:</span>{" "}
                    <span className="font-medium text-ink">{labelForType(type)}</span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {typeKeys.map((tk) => (
                    <SelectItem key={tk.value} value={tk.value}>
                      {labelForType(tk.value)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={delivery} onValueChange={setDelivery}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue>
                    <span className="text-muted-foreground">{t("catalogue.deliveryLabel")}:</span>{" "}
                    <span className="font-medium text-ink">{labelForDelivery(delivery)}</span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {deliveryKeys.map((dk) => (
                    <SelectItem key={dk.value} value={dk.value}>
                      {labelForDelivery(dk.value)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilter && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-muted-foreground hover:text-ink"
                >
                  {t("catalogue.empty.reset")}
                </Button>
              )}
            </div>

            <div className="hidden text-sm text-muted-foreground md:block">
              <span className="font-semibold text-ink">{filtered.length}</span>{" "}
              {t("catalogue.courseCount", { count: filtered.length })}
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
              <Button variant="soft" className="mt-6" onClick={resetFilters}>
                {t("catalogue.empty.reset")}
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8 text-sm text-muted-foreground md:hidden">
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
