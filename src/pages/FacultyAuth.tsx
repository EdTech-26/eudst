import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth, useUserRoles } from "@/lib/auth";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import facultyImg from "@/assets/faculty.jpg";

const UDST_DOMAIN = "@udst.edu.qa";

const isUdstEmail = (email: string) => email.trim().toLowerCase().endsWith(UDST_DOMAIN);

const signUpSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z
    .string()
    .trim()
    .email()
    .max(255)
    .refine(isUdstEmail, { message: "udst-only" }),
  password: z.string().min(6).max(100),
});
const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .email()
    .max(255)
    .refine(isUdstEmail, { message: "udst-only" }),
  password: z.string().min(1).max(100),
});

const FacultyAuth = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, signUp, signIn } = useAuth();
  const { isFaculty, loading: rolesLoading } = useUserRoles();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = t("facultyAuth.pageTitle");
  }, [t]);

  useEffect(() => {
    if (!user || rolesLoading) return;
    if (isFaculty) {
      navigate("/faculty/dashboard", { replace: true });
    }
  }, [user, isFaculty, rolesLoading, navigate]);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = signUpSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      password: fd.get("password"),
    });
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      if (issue.message === "udst-only") {
        setError(t("facultyAuth.errors.udstOnly"));
      } else {
        setError(t(`auth.errors.${issue.path[0]}`, t("auth.errors.invalid")));
      }
      return;
    }
    setSubmitting(true);
    const result = await signUp(parsed.data.name, parsed.data.email, parsed.data.password, {
      signupSource: "faculty",
    });
    setSubmitting(false);
    if ("error" in result && result.error) {
      const msg = result.error.message;
      if (msg.toLowerCase().includes("already") || msg.toLowerCase().includes("registered")) {
        setError(t("auth.errors.alreadyRegistered"));
      } else {
        setError(msg);
      }
      return;
    }
    toast.success(t("facultyAuth.toast.welcome", { name: parsed.data.name.split(" ")[0] }));
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = signInSchema.safeParse({
      email: fd.get("email"),
      password: fd.get("password"),
    });
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      if (issue.message === "udst-only") {
        setError(t("facultyAuth.errors.udstOnly"));
      } else {
        setError(t("auth.errors.invalid"));
      }
      return;
    }
    setSubmitting(true);
    const result = await signIn(parsed.data.email, parsed.data.password);
    setSubmitting(false);
    if ("error" in result && result.error) {
      const msg = result.error.message;
      if (msg.toLowerCase().includes("invalid")) {
        setError(t("auth.errors.invalidCredentials"));
      } else {
        setError(msg);
      }
      return;
    }
    toast.success(t("auth.toast.signedIn"));
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="bg-ink/[0.03]">
        <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          {/* Left: faculty-branded panel */}
          <div className="relative hidden overflow-hidden rounded-2xl bg-ink text-primary-foreground shadow-lift lg:block">
            <div className="absolute inset-0 opacity-60">
              <img src={facultyImg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-primary/70" />
            </div>
            <div className="relative flex h-full flex-col justify-between gap-8 p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                <ShieldCheck className="h-3.5 w-3.5" />
                {t("facultyAuth.heroBadge")}
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                  {t("facultyAuth.heroTitle")}
                </h2>
                <p className="mt-4 max-w-md text-primary-foreground/85">
                  {t("facultyAuth.heroBody")}
                </p>
              </div>
              <p className="text-xs text-primary-foreground/70">
                {t("facultyAuth.heroNote")}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <Link
              to="/faculty"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-smooth hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3 rtl:rotate-180" /> {t("facultyAuth.backToFaculty")}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
                {t("facultyAuth.formBadge")}
              </div>
              <h1 className="mt-4 font-display text-2xl font-semibold text-ink">
                {t("facultyAuth.title")}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">{t("facultyAuth.subtitle")}</p>

              <Tabs defaultValue="signin" className="mt-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">{t("auth.signIn")}</TabsTrigger>
                  <TabsTrigger value="signup">{t("facultyAuth.requestAccount")}</TabsTrigger>
                </TabsList>

                <TabsContent value="signin" className="mt-6">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="fa-si-email">{t("facultyAuth.fields.workEmail")}</Label>
                      <Input
                        id="fa-si-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@udst.edu.qa"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="fa-si-password">{t("auth.fields.password")}</Label>
                      <Input
                        id="fa-si-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                      />
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    <Button type="submit" variant="hero" className="w-full" disabled={submitting}>
                      {submitting ? t("auth.signingIn") : t("auth.signIn")}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="mt-6">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="fa-name">{t("auth.fields.name")}</Label>
                      <Input id="fa-name" name="name" autoComplete="name" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="fa-email">{t("facultyAuth.fields.workEmail")}</Label>
                      <Input
                        id="fa-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@udst.edu.qa"
                      />
                      <p className="text-xs text-muted-foreground">
                        {t("facultyAuth.fields.workEmailHint")}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="fa-password">{t("auth.fields.password")}</Label>
                      <Input
                        id="fa-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder={t("auth.fields.passwordHint")}
                      />
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    <Button type="submit" variant="hero" className="w-full" disabled={submitting}>
                      {submitting ? t("auth.creating") : t("facultyAuth.createFacultyAccount")}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                {t("facultyAuth.learnerPrompt")}{" "}
                <Link to="/auth?mode=signin" className="font-medium text-primary hover:underline">
                  {t("facultyAuth.learnerLink")}
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FacultyAuth;
