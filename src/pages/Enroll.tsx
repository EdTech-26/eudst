import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sampleCourses } from "@/components/site/courseData";
import { useDemoAuth, useEnrollments } from "@/lib/demoAuth";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";

const signUpSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(6, "Use at least 6 characters").max(100),
});
const signInSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(1, "Enter your password").max(100),
});

const Enroll = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const course = sampleCourses.find((c) => c.code === code);
  const { user, signUp, signIn } = useDemoAuth();
  const { enroll, isEnrolled } = useEnrollments();

  const [authError, setAuthError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    document.title = course ? `Enroll · ${course.title}` : "Enroll · eUDST";
  }, [course]);

  useEffect(() => {
    if (course && isEnrolled(course.code)) {
      navigate("/my-learning", { replace: true });
    }
  }, [course, isEnrolled, navigate]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main className="container py-32 text-center">
          <h1 className="font-display text-3xl font-semibold text-ink">Course not found</h1>
          <Button variant="soft" className="mt-8" asChild>
            <Link to="/courses">Back to catalogue</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = signUpSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      password: fd.get("password"),
    });
    if (!parsed.success) {
      setAuthError(parsed.error.issues[0].message);
      return;
    }
    signUp(parsed.data.name, parsed.data.email);
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = signInSchema.safeParse({
      email: fd.get("email"),
      password: fd.get("password"),
    });
    if (!parsed.success) {
      setAuthError(parsed.error.issues[0].message);
      return;
    }
    signIn(parsed.data.email);
  };

  const handlePay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaying(true);
    setTimeout(() => {
      enroll(course.code);
      toast.success(`You're enrolled in ${course.title}`);
      navigate("/my-learning");
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="bg-secondary/40 py-16 md:py-20">
        <div className="container max-w-5xl">
          <Link
            to={`/courses/${course.code}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-smooth hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3" /> Back to course
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]"
          >
            {/* Left: Auth or Checkout */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              {!user ? (
                <>
                  <h1 className="font-display text-2xl font-semibold text-ink">
                    Create your eUDST account
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Sign up to enroll in <strong>{course.title}</strong>. Already have an account?
                    Switch to sign in.
                  </p>

                  <Tabs defaultValue="signup" className="mt-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="signup">Sign up</TabsTrigger>
                      <TabsTrigger value="signin">Sign in</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signup" className="mt-6">
                      <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="name">Full name</Label>
                          <Input id="name" name="name" placeholder="Aisha Al-Thani" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" name="password" type="password" placeholder="At least 6 characters" />
                        </div>
                        {authError && <p className="text-sm text-destructive">{authError}</p>}
                        <Button type="submit" variant="hero" className="w-full">
                          Create account & continue
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="signin" className="mt-6">
                      <form onSubmit={handleSignIn} className="space-y-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="si-email">Email</Label>
                          <Input id="si-email" name="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="si-password">Password</Label>
                          <Input id="si-password" name="password" type="password" />
                        </div>
                        {authError && <p className="text-sm text-destructive">{authError}</p>}
                        <Button type="submit" variant="hero" className="w-full">
                          Sign in & continue
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Lock className="h-3 w-3" /> Secure checkout
                  </div>
                  <h1 className="mt-3 font-display text-2xl font-semibold text-ink">
                    Complete your enrollment
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Signed in as <strong>{user.email}</strong>
                  </p>

                  <form onSubmit={handlePay} className="mt-6 space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="card">Card number</Label>
                      <Input
                        id="card"
                        placeholder="4242 4242 4242 4242"
                        defaultValue="4242 4242 4242 4242"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="exp">Expiry</Label>
                        <Input id="exp" placeholder="MM / YY" defaultValue="12 / 28" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" defaultValue="123" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cardname">Name on card</Label>
                      <Input id="cardname" defaultValue={user.name} />
                    </div>
                    <div className="rounded-md bg-secondary/60 p-3 text-xs text-muted-foreground">
                      <ShieldCheck className="mr-1 inline h-3 w-3 text-primary" />
                      This is a demo — no real payment is processed.
                    </div>
                    <Button type="submit" variant="hero" className="w-full" disabled={paying}>
                      {paying
                        ? "Processing…"
                        : `Pay ${course.price?.toLocaleString()} ${course.currency} & enroll`}
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Right: Order summary */}
            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft h-fit">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Order summary
              </p>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink">{course.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {course.college} · {course.code}
                  </p>
                </div>
                <span className="font-display text-lg font-semibold text-ink">
                  {course.price?.toLocaleString()}
                </span>
              </div>
              <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{course.price?.toLocaleString()} {course.currency}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>VAT</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 font-semibold text-ink">
                  <span>Total</span>
                  <span>{course.price?.toLocaleString()} {course.currency}</span>
                </div>
              </div>
            </aside>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enroll;
