import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { sampleCourses } from "@/components/site/courseData";
import { useAuth, useEnrollments } from "@/lib/auth";
import { BookOpen, PlayCircle } from "lucide-react";

const MyLearning = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const { enrollments } = useEnrollments();
  const navigate = useNavigate();
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  useEffect(() => {
    document.title = "My Learning · eUDST";
  }, []);

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth?redirect=/my-learning", { replace: true });
  }, [user, authLoading, navigate]);

  if (!user) return null;

  const enrolledCourses = sampleCourses.filter((c) => enrollments.includes(c.code));
  const opened = sampleCourses.find((c) => c.code === openCourse);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">My Learning</p>
              <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Welcome back, {user.name.split(" ")[0]}
              </h1>
              <p className="mt-3 text-muted-foreground">
                {enrolledCourses.length > 0
                  ? `You're enrolled in ${enrolledCourses.length} course${enrolledCourses.length === 1 ? "" : "s"}.`
                  : "You haven't enrolled in any courses yet."}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
            >
              Sign out
            </Button>
          </motion.div>

          <div className="mt-12">
            {enrolledCourses.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
                <BookOpen className="mx-auto h-10 w-10 text-muted-foreground" />
                <p className="mt-4 font-display text-xl font-semibold text-ink">
                  Nothing here yet
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Browse the catalogue and enroll in your first course.
                </p>
                <Button variant="hero" className="mt-6" asChild>
                  <Link to="/courses">Browse catalogue</Link>
                </Button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {enrolledCourses.map((c) => (
                  <article
                    key={c.code}
                    className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${c.accent}`}>
                        {c.college}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">{c.code}</span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
                    <div className="mt-5 flex items-center gap-2">
                      <Button
                        variant="hero"
                        size="sm"
                        className="flex-1"
                        onClick={() => setOpenCourse(c.code)}
                      >
                        <PlayCircle className="mr-1 h-4 w-4" />
                        Continue learning
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Dialog open={!!openCourse} onOpenChange={(o) => !o && setOpenCourse(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{opened?.title}</DialogTitle>
            <DialogDescription className="pt-3">
              Your learning environment will open here in the live product — including lessons,
              applied exercises, and your progress dashboard.
            </DialogDescription>
          </DialogHeader>
          <Button variant="soft" onClick={() => setOpenCourse(null)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default MyLearning;
