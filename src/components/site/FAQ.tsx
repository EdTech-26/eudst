import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can register on eUDST?",
    a: "Anyone — you don't need to be a UDST student. External learners can register for online academic and professional courses, while UDST faculty access workflow tools for digital course development.",
  },
  {
    q: "How does the portal connect to D2L Brightspace?",
    a: "Once you enroll and complete payment, eUDST provisions your access to the relevant Brightspace course shell. You launch your course directly from your eUDST dashboard.",
  },
  {
    q: "What delivery modes are supported?",
    a: "Faculty can request three modes through the portal: Blended Learning, Fully Online Learning and HyFlex Learning — each with dedicated design support from the eUDST team.",
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
