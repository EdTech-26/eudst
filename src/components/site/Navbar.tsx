import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

type NavLinkItem = { to: string; label: string; hash?: boolean };

const links: NavLinkItem[] = [
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/#how", label: "How it works", hash: true },
  { to: "/#faq", label: "FAQ", hash: true },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-18 items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = !l.hash && pathname === l.to;
            return l.hash ? (
              <a
                key={l.to}
                href={l.to}
                className="text-sm font-medium text-muted-foreground transition-smooth hover:text-primary"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/courses">Get started</Link>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((l) =>
              l.hash ? (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {l.label}
                </Link>
              )
            )}
            <div className="flex gap-2 pt-2">
              <Button variant="soft" size="sm" className="flex-1">Sign in</Button>
              <Button variant="hero" size="sm" className="flex-1" asChild>
                <Link to="/courses" onClick={() => setOpen(false)}>Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
