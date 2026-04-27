import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Organisations = () => {
  return (
    <section className="container py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-elegant md:p-16"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 80% 20%, white, transparent 50%)" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
              <Building2 className="h-3.5 w-3.5" /> For Organisations
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
              Don't see the course your team needs?
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/85">
              Request a customised course built around your organisation's goals. Our team
              partners with you to design applied, immersive learning experiences and
              microcredentials tailored to the skills your people need most.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-primary-foreground/80 sm:grid-cols-2">
              <li>· Custom curriculum & outcomes</li>
              <li>· Flexible self-paced delivery</li>
              <li>· Industry-aligned microcredentials</li>
              <li>· Dedicated learning design support</li>
            </ul>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Button
              size="xl"
              className="bg-background text-primary hover:bg-background/90"
              asChild
            >
              <a href="mailto:elearning@udst.edu.qa?subject=Custom%20Course%20Request">
                Request a custom course <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
