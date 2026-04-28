import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { useAuth, useUserRoles } from "@/lib/auth";
import { BookOpen, LifeBuoy, Sparkles, ArrowUpRight } from "lucide-react";

const FacultyDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isFaculty, loading: rolesLoading } = useUserRoles();

  useEffect(() => {
    document.title = t("facultyDashboard.pageTitle");
  }, [t]);

  useEffect(() => {
    if (authLoading || rolesLoading) return;
    if (!user) {
      navigate("/faculty/auth", { replace: true });
      return;
    }
    if (!isFaculty) {
      navigate("/faculty/auth", { replace: true });
    }
  }, [user, isFaculty, authLoading, rolesLoading, navigate]);

  if (authLoading || rolesLoading || !user || !isFaculty) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main className="container py-24 text-center text-sm text-muted-foreground">
          {t("facultyDashboard.loading")}
        </main>
        <Footer />
      </div>
    );
  }

  const cards = [
    { icon: BookOpen, title: t("facultyDashboard.cards.courses.title"), body: t("facultyDashboard.cards.courses.body") },
    { icon: LifeBuoy, title: t("facultyDashboard.cards.support.title"), body: t("facultyDashboard.cards.support.body") },
    { icon: Sparkles, title: t("facultyDashboard.cards.production.title"), body: t("facultyDashboard.cards.production.body") },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="bg-secondary/30">
        <section className="container py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              {t("facultyDashboard.eyebrow")}
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {t("facultyDashboard.greeting", { name: user.name.split(" ")[0] })}
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {t("facultyDashboard.intro")}
            </p>
          </motion.div>
        </section>

        <section className="container pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/faculty">
                {t("facultyDashboard.exploreSupport")} <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="soft" size="lg" asChild>
              <Link to="/courses">{t("facultyDashboard.browseCatalogue")}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FacultyDashboard;
