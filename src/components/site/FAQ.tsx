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
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">{t("faq.eyebrow")}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
            {t("faq.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            ​
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-soft"
              >
                <AccordionTrigger className="py-5 text-start font-display text-lg font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
