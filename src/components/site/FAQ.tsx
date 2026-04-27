import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: string };

export const FAQ = () => {
  const { t } = useTranslation();
  const items = (t("faq.items", { returnObjects: true }) as FaqItem[]) || [];

  return (
    <section id="faq" className="container py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="lg:col-span-4"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-xs uppercase tracking-[0.2em] text-primary"
          >
            {t("faq.eyebrow")}
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance"
          >
            {t("faq.title")}
          </motion.h2>
          <p className="mt-4 text-muted-foreground">​</p>
        </motion.div>
        <div className="lg:col-span-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
            }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {items.map((f, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="rounded-xl border border-border bg-card px-6 shadow-soft transition-smooth hover:border-primary/30 hover:shadow-elegant"
                  >
                    <AccordionTrigger className="py-5 text-start font-display text-lg font-semibold text-ink hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
