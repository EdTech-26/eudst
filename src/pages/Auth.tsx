import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
import { useAuth } from "@/lib/auth";
import { ArrowLeft } from "lucide-react";

const signUpSchema = z
  .object({
    name: z.string().trim().min(1).max(80),
    email: z.string().trim().email().max(255),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(1).max(100),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "passwordMismatch",
  });
const signInSchema = z.object({
  email: z.string().trim().email().max(255),
  password: z.string().min(1).max(100),
});

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z"
    />
  </svg>
);

const Auth = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/my-learning";
  const initialTab = searchParams.get("mode") === "signin" ? "signin" : "signup";

  const { user, signUp, signIn, signInWithGoogle } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = t("auth.pageTitle");
  }, [t]);

  useEffect(() => {
    if (user) navigate(redirectTo, { replace: true });
  }, [user, navigate, redirectTo]);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = signUpSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      password: fd.get("password"),
      confirmPassword: fd.get("confirmPassword"),
    });
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      if (issue.message === "passwordMismatch") {
        setError(t("auth.errors.passwordMismatch", "Passwords do not match"));
      } else {
        setError(t(`auth.errors.${issue.path[0]}`, t("auth.errors.invalid")));
      }
      return;
    }
    setSubmitting(true);
    const result = await signUp(parsed.data.name, parsed.data.email, parsed.data.password);
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
    toast.success(t("auth.toast.welcome", { name: parsed.data.name.split(" ")[0] }));
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
      setError(t("auth.errors.invalid"));
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

  const handleGoogle = async () => {
    setError(null);
    const result = await signInWithGoogle();
    if ("error" in result && result.error) {
      setError(result.error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="bg-secondary/40 py-16 md:py-24">
        <div className="container max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-smooth hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3 rtl:rotate-180" /> {t("auth.backHome")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-soft"
          >
            <h1 className="font-display text-2xl font-semibold text-ink">
              {t("auth.title")}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{t("auth.subtitle")}</p>


            <Tabs defaultValue={initialTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">{t("auth.signUp")}</TabsTrigger>
                <TabsTrigger value="signin">{t("auth.signIn")}</TabsTrigger>
              </TabsList>

              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t("auth.fields.name")}</Label>
                    <Input id="name" name="name" autoComplete="name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">{t("auth.fields.email")}</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="password">{t("auth.fields.password")}</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      placeholder={t("auth.fields.passwordHint")}
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button type="submit" variant="hero" className="w-full" disabled={submitting}>
                    {submitting ? t("auth.creating") : t("auth.createAccount")}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signin" className="mt-6">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="si-email">{t("auth.fields.email")}</Label>
                    <Input id="si-email" name="email" type="email" autoComplete="email" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="si-password">{t("auth.fields.password")}</Label>
                    <Input
                      id="si-password"
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
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
