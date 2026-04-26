import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CourseCard } from "@/components/site/CourseCard";
import { Organisations } from "@/components/site/Organisations";
import { sampleCourses } from "@/components/site/courseData";
import { Button } from "@/components/ui/button";

const colleges = ["All", "CB", "CCIT", "CET", "CGE", "CHS", "FPU"];
const types = ["All", "Academic · Online", "Academic · Applied", "Professional", "Microcredential"];

const Catalogue = () => {
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
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Course Catalogue</p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl text-balance">
                Explore applied, immersive online learning.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                Browse academic courses, professional learning and stackable microcredentials
                from the University of Doha for Science & Technology — designed for real-world
                outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="sticky top-[72px] z-30 border-y border-border bg-background/85 py-5 backdrop-blur">
          <div className="container flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                College
              </span>
              {colleges.map((c) => (
                <button
                  key={c}
                  onClick={() => setCollege(c)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-smooth ${
                    college === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Type
              </span>
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-smooth ${
                    type === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {t}
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
                No courses match these filters yet.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different combination — or request a custom course below.
              </p>
              <Button
                variant="soft"
                className="mt-6"
                onClick={() => {
                  setCollege("All");
                  setType("All");
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8 text-sm text-muted-foreground">
                Showing <span className="font-semibold text-ink">{filtered.length}</span> course{filtered.length !== 1 && "s"}
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
