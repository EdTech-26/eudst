import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FacultyService } from "@/components/site/FacultyService";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Award, FileCheck, BookOpen } from "lucide-react";
import facultyImg from "@/assets/faculty.jpg";

const Faculty = () => {
  useEffect(() => {
    document.title = "Faculty · eUDST";
    const desc = "UDST faculty: design and manage applied, immersive online courses with eUDST.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="container pt-10 md:pt-14">
          <div className="relative overflow-hidden rounded-2xl bg-ink text-primary-foreground shadow-lift">
            <div className="absolute inset-0 opacity-30">
              <img src={facultyImg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-primary/70" />
            </div>
            <div className="relative grid gap-10 px-8 py-16 md:px-14 md:py-24 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                  <Award className="h-3.5 w-3.5" /> UDST Faculty
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance"
                >
                  Design the next generation of{" "}
                  <span className="font-secondary-title font-normal italic">
                    digital courses.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-6 max-w-xl text-lg text-primary-foreground/85"
                >
                  Create engaging online and blended learning experiences with support from the
                  University of Doha for Science & Technology. Access the tools, guidance, and
                  resources you need to develop high-quality courses in one place.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Button variant="hero" size="xl">Faculty sign in</Button>
                  <Button
                    variant="ghost"
                    size="xl"
                    className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    New course request <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What faculty get */}
        <section className="container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">What faculty get</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
              Everything you need to build applied online learning.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                i: BookOpen,
                t: "Develop online & blended experiences",
                d: "Partner with the eUDST design team to map outcomes, build content and launch with confidence.",
              },
              {
                i: FileCheck,
                t: "Tools, resources and support",
                d: "Templates, design guidance and dedicated specialists across every step of course development.",
              },
              {
                i: Award,
                t: "Manage your courses in one place",
                d: "See the status of every active course — from concept to launch — without leaving the portal.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <f.i className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <FacultyService />

        {/* Bottom CTA */}
        <section className="container py-20">
          <div className="rounded-3xl border border-border bg-secondary/50 p-10 text-center md:p-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl text-balance">
              Ready to start a new course?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Submit a request and the eUDST team will be in touch to scope your applied online
              learning experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="xl">Submit a request</Button>
              <Button variant="soft" size="xl" asChild>
                <Link to="/courses">Browse the catalogue</Link>
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
