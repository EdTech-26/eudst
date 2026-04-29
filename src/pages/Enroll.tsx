import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sampleCourses } from "@/components/site/courseData";
import { useAuth, useEnrollments } from "@/lib/auth";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";

const Enroll = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const course = sampleCourses.find((c) => c.code === code);
  const { user, loading: authLoading } = useAuth();
  const { enroll, isEnrolled, loading: enrollLoading } = useEnrollments();

  const [paying, setPaying] = useState(false);

  useEffect(() => {
    document.title = course ? `Enrol · ${course.title}` : "Enrol · eUDST";
  }, [course]);

  useEffect(() => {
    if (!authLoading && !user && code) {
      navigate(`/auth?redirect=/enroll/${code}`, { replace: true });
    }
  }, [authLoading, user, code, navigate]);

  useEffect(() => {
    if (course && !enrollLoading && isEnrolled(course.code)) {
      navigate("/my-learning", { replace: true });
    }
  }, [course, enrollLoading, isEnrolled, navigate]);

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

  if (!user) return null;

  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaying(true);
    setTimeout(async () => {
      const result = await enroll(course.code);
      setPaying(false);
      if ("error" in result && result.error) {
        toast.error(result.error.message);
        return;
      }
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
            <ArrowLeft className="h-3 w-3 rtl:rotate-180" /> Back to course
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]"
          >
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Lock className="h-3 w-3" /> Secure checkout
              </div>
              <h1 className="mt-3 font-display text-2xl font-semibold text-ink">
                Complete your enrolment
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
                  <ShieldCheck className="me-1 inline h-3 w-3 text-primary" />
                  This is a demo. No real payment is processed.
                </div>
                <Button type="submit" variant="hero" className="w-full" disabled={paying}>
                  {paying
                    ? "Processing…"
                    : `Pay ${course.price?.toLocaleString()} ${course.currency} & enrol`}
                </Button>
              </form>
            </div>

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
