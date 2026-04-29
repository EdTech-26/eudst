import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

type Group = {
  titleKey: string;
  links: { labelKey: string; to: string }[];
};

const groups: Group[] = [
  {
    titleKey: "footer.groups.learners",
    links: [
      { labelKey: "footer.links.browseCourses", to: "/courses" },
      { labelKey: "footer.links.microcredentials", to: "/courses" },
      { labelKey: "footer.links.howEnrolment", to: "/#how" },
      { labelKey: "footer.links.faq", to: "/#faq" },
    ],
  },
  {
    titleKey: "footer.groups.faculty",
    links: [
      { labelKey: "footer.links.facultyHome", to: "/faculty" },
      { labelKey: "footer.links.facultySignIn", to: "/faculty" },
      { labelKey: "footer.links.submitRequest", to: "/faculty" },
      { labelKey: "footer.links.designResources", to: "/faculty" },
    ],
  },
  {
    titleKey: "footer.groups.about",
    links: [
      { labelKey: "footer.links.aboutUdst", to: "/about-udst" },
      { labelKey: "footer.links.aboutEudst", to: "/" },
      { labelKey: "footer.links.contact", to: "/" },
      { labelKey: "footer.links.privacy", to: "/" },
    ],
  },
];

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.titleKey}>
                <h4 className="font-display text-sm font-semibold text-ink whitespace-pre-line">{t(g.titleKey)}</h4>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.labelKey}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                      >
                        {t(l.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap items-center gap-4">
            <p>{t("footer.location")}</p>
            <a
              href="https://www.udst.edu.qa/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary transition-smooth hover:text-primary/80"
            >
              {t("footer.website")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
