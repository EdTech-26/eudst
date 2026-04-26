import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export type Course = {
  code: string;
  college: string;
  title: string;
  desc: string;
  type: string;
  duration: string;
  accent: string;
};

export const CourseCard = ({ c, index = 0 }: { c: Course; index?: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
    >
      <div className="flex items-center justify-between">
        <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${c.accent}`}>
          {c.college}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">{c.code}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
        {c.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>{c.type}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> {c.duration}
        </span>
      </div>
    </motion.article>
  );
};
