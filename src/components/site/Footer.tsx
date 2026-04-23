import { Logo } from "./Logo";

const groups = [
  {
    title: "Learners",
    links: ["Browse courses", "Professional certificates", "How enrolment works", "Payment & refunds"],
  },
  {
    title: "Faculty",
    links: ["Sign in", "Submit a course request", "Delivery modes", "Design resources"],
  },
  {
    title: "About",
    links: ["About UDST", "About eUDST", "Contact", "Privacy"],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              eUDST is the University of Doha for Science & Technology eLearning Hub —
              applied online learning that builds skills and careers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="font-display text-sm font-semibold text-ink">{g.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} University of Doha for Science & Technology. All rights reserved.</p>
          <p>Powered by D2L Brightspace · Doha, Qatar</p>
        </div>
      </div>
    </footer>
  );
};
