import { Link } from "react-router-dom";
import { Logo } from "./Logo";

type Group = {
  title: string;
  links: { label: string; to: string; external?: boolean }[];
};

const groups: Group[] = [
  {
    title: "Learners",
    links: [
      { label: "Browse courses", to: "/courses" },
      { label: "Microcredentials", to: "/courses" },
      { label: "How enrolment works", to: "/#how" },
      { label: "FAQ", to: "/#faq" },
    ],
  },
  {
    title: "Faculty",
    links: [
      { label: "Faculty home", to: "/faculty" },
      { label: "Sign in", to: "/faculty" },
      { label: "Submit a course request", to: "/faculty" },
      { label: "Design resources", to: "/faculty" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About UDST", to: "/" },
      { label: "About eUDST", to: "/" },
      { label: "Contact", to: "/" },
      { label: "Privacy", to: "/" },
    ],
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
              applied, immersive online learning that builds skills and careers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="font-display text-sm font-semibold text-ink">{g.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} University of Doha for Science & Technology. All rights reserved.</p>
          <p>Doha, Qatar</p>
        </div>
      </div>
    </footer>
  );
};
