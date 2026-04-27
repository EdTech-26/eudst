import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X, LogOut, GraduationCap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/auth";

type NavLinkItem = { to: string; key: string; hash?: boolean };

const links: NavLinkItem[] = [
  { to: "/courses", key: "nav.courses" },
  { to: "/faculty", key: "nav.faculty" },
  { to: "/#how", key: "nav.howItWorks", hash: true },
  { to: "/#faq", key: "nav.faq", hash: true },
];

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

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
                {t(l.key)}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full border border-border bg-card px-2 py-1 transition-smooth hover:border-primary/40">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                      {initialsOf(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="pe-2 text-sm font-medium text-ink">
                    {user.name.split(" ")[0]}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/my-learning">
                    <GraduationCap className="me-2 h-4 w-4" />
                    {t("nav.myLearning")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="me-2 h-4 w-4" />
                  {t("nav.signOut")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth?mode=signin">{t("nav.signIn")}</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/auth">{t("nav.getStarted")}</Link>
              </Button>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            aria-label={t("nav.toggleMenu")}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
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
                  {t(l.key)}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {t(l.key)}
                </Link>
              )
            )}
            <div className="flex gap-2 pt-2">
              {user ? (
                <>
                  <Button variant="soft" size="sm" className="flex-1" asChild>
                    <Link to="/my-learning" onClick={() => setOpen(false)}>
                      {t("nav.myLearning")}
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      setOpen(false);
                      handleSignOut();
                    }}
                  >
                    {t("nav.signOut")}
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="soft" size="sm" className="flex-1" asChild>
                    <Link to="/auth?mode=signin" onClick={() => setOpen(false)}>
                      {t("nav.signIn")}
                    </Link>
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1" asChild>
                    <Link to="/auth" onClick={() => setOpen(false)}>
                      {t("nav.getStarted")}
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
