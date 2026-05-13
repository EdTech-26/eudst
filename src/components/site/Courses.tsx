import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { sampleCourses } from "./courseData";

export const Courses = () => {
  const { t } = useTranslation();
  const featured = sampleCourses.filter((c) => !c.parentCode).slice(0, 4);

  return (
    <section id="courses" className="bg-secondary/50 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("courses.eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
              {t("courses.title")}
            </h2>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Button variant="soft" asChild>
              <Link to="/courses" className="group/btn">
                {t("courses.viewAll")}
                <ArrowRight className="ms-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c, i) => (
            <CourseCard key={c.code} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
