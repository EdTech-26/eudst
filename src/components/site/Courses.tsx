import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { sampleCourses } from "./courseData";

export const Courses = () => {
  const featured = sampleCourses.slice(0, 4);

  return (
    <section id="courses" className="bg-secondary/50 py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Catalogue preview</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
              Online, applied & professional courses for every learner.
            </h2>
          </div>
          <Button variant="soft" asChild>
            <Link to="/courses">
              View all courses <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c, i) => (
            <CourseCard key={c.code} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
