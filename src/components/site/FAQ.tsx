import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can register on eUDST?",
    a: "Anyone — you don't need to be a UDST student. External learners and professionals can register for online academic and professional courses, and microcredentials.",
  },
  {
    q: "How do I access my course after enrolling?",
    a: "Once you complete payment, your course is unlocked from your eUDST dashboard. Launch any time from the same place — no extra logins, no extra setup.",
  },
  {
    q: "What types of learning are available?",
    a: "eUDST offers fully online, blended, and applied / immersive courses, plus stackable microcredentials designed around real-world skills and outcomes.",
  },
  {
    q: "What is a microcredential?",
    a: "A microcredential is a short, focused credential that proves a specific skill. They're designed to be stackable — combine several to build toward a larger qualification.",
  },
  {
    q: "Are eUDST courses recognised by UDST?",
    a: "Yes. All academic and professional courses offered through eUDST are developed and accredited by the University of Doha for Science and Technology.",
  },
  {
    q: "Which colleges offer courses through eUDST?",
    a: "Courses are available across all six UDST colleges: CB, CCIT, CET, CGE, CHS and FPU.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
            Questions, answered.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still curious? Reach out to the eUDST team — we typically reply within one business day.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-soft"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-ink hover:no-underline">
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
