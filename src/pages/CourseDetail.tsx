import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sampleCourses } from "@/components/site/courseData";
import { CourseCard } from "@/components/site/CourseCard";
import { useEnrollments } from "@/lib/auth";
import { ArrowLeft, Calendar, CheckCircle2, Clock, GraduationCap, Languages, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";

const CourseDetail = () => {
  const { code } = useParams();
  const { t } = useTranslation();
  const course = sampleCourses.find((c) => c.code === code);
  const { isEnrolled } = useEnrollments();
  const enrolled = course ? isEnrolled(course.code) : false;
  const parentCourse = course?.parentCode
    ? sampleCourses.find((c) => c.code === course.parentCode)
    : undefined;
  const subCourses = course?.isMicroCredential && course.subCourseCodes
    ? course.subCourseCodes
        .map((sc) => sampleCourses.find((c) => c.code === sc))
        .filter((c): c is NonNullable<typeof c> => Boolean(c))
    : [];

  useEffect(() => {
    if (course) {
      document.title = `${course.title} · eUDST`;
    }
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main className="container py-32 text-center">
          <h1 className="font-display text-3xl font-semibold text-ink">
            Course not found
          </h1>
          <p className="mt-3 text-muted-foreground">
            We couldn't find that course. It may have moved or been retired.
          </p>
          <Button variant="soft" className="mt-8" asChild>
            <Link to="/courses">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to catalogue
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const isPlaceholder = !course.longDesc;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Hero band */}
        <section className="bg-gradient-to-b from-secondary/60 to-background py-16 md:py-20">
          <div className="container">
            <Link
              to="/courses"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-smooth hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3" /> Back to catalogue
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-3xl"
            >
              <div className="flex items-center gap-3">
                <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${course.accent}`}>
                  {course.subject}
                </span>
                <span className="text-xs text-muted-foreground">{course.type}</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl text-balance">
                {course.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{course.desc}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {course.instructor?.name && (
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4" /> {course.instructor.name}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {course.duration}
                </span>
                {course.startDate && course.startDate !== "Enrol anytime" && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> Starts {course.startDate}
                  </span>
                )}
                {course.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <Languages className="h-4 w-4" /> {t(`course.languages.${course.language}`)}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {course.bannerImage && (
          <section className="container -mt-4 md:-mt-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-border shadow-soft"
            >
              <img
                src={course.bannerImage}
                alt={course.title}
                width={1600}
                height={640}
                loading="lazy"
                className="h-56 w-full object-cover md:h-80 lg:h-96"
              />
            </motion.div>
          </section>
        )}

        {/* Body */}
        <section className="container grid gap-12 py-16 lg:grid-cols-[1fr_360px]">
          <div className="space-y-12">
            {isPlaceholder && (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-ink">
                <span className="font-semibold text-primary">Placeholder content:</span>{" "}
                Full course details, syllabus and instructor bio are being finalised. You can still enrol to reserve your seat.
              </div>
            )}

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">About this course</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {course.longDesc ?? course.desc}
              </p>
            </div>

            {course.outcomes && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">What you'll learn</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {course.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.audience && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Who this course is for</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{course.audience}</p>
              </div>
            )}

            {course.structure && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">How the course is structured</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">{course.structure}</p>
              </div>
            )}

            {course.howYouLearn && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">How you will learn</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{course.howYouLearn}</p>
              </div>
            )}

            {course.syllabus && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Course modules</h2>
                <Accordion type="single" collapsible className="mt-5">
                  {course.syllabus.map((s, i) => (
                    <AccordionItem key={s.label + i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left">
                        <span>
                          <span className="font-mono text-xs text-muted-foreground">{s.label}</span>
                          <span className="ml-3 font-medium text-ink">{s.topic}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        Detailed module materials, applied exercises and assessments will be made
                        available in your learning environment once enrolled.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {course.instructor && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-2xl font-semibold text-ink">Your instructor</h2>
                <div className="mt-5 flex gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                      {course.instructor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-ink">{course.instructor.name}</p>
                    <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky pricing card */}
          <aside>
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-elegant">
              {course.academicOnly ? (
                <>
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    UDST academics only
                  </span>
                  <div className="mt-3 font-display text-2xl font-bold text-ink">
                    No fee
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    This course is offered to University of Doha for Science & Technology academic staff and students. There is no cost to enrol.
                  </p>
                </>
              ) : course.price ? (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-ink">
                      {course.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {course.currency}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    One-time payment · all materials included
                  </p>
                </>
              ) : (
                <>
                  <div className="font-display text-2xl font-bold text-ink">
                    Coming soon
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Pricing and start date will be announced shortly
                  </p>
                </>
              )}

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-medium text-ink">{course.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Delivery</dt>
                  <dd className="font-medium text-ink">{course.delivery}</dd>
                </div>
                {course.startDate && course.startDate !== "Enrol anytime" && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Starts</dt>
                    <dd className="font-medium text-ink">{course.startDate}</dd>
                  </div>
                )}
                {course.language && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{t("course.language")}</dt>
                    <dd className="font-medium text-ink">{t(`course.languages.${course.language}`)}</dd>
                  </div>
                )}
              </dl>

              {course.academicOnly ? (
                <>
                  <div className="mt-6 rounded-lg border border-border bg-secondary/40 p-4 text-sm">
                    <p className="font-semibold text-ink">Register your interest</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Contact the eUDST team to confirm eligibility and receive enrolment instructions for this academic course.
                    </p>
                    <dl className="mt-3 space-y-1.5 text-xs">
                      <div>
                        <dt className="text-muted-foreground">Email</dt>
                        <dd className="font-medium text-ink">eudst@udst.edu.qa</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Phone</dt>
                        <dd className="font-medium text-ink">+974 4495 2222</dd>
                      </div>
                    </dl>
                  </div>
                  <Button variant="hero" className="mt-4 w-full" asChild>
                    <a href="mailto:eudst@udst.edu.qa?subject=Academic course registration">
                      Email to register
                    </a>
                  </Button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    Open to UDST academic staff and students only
                  </p>
                </>
              ) : enrolled ? (
                <>
                  <Button variant="hero" className="mt-6 w-full" asChild>
                    <Link to="/my-learning">Go to My Learning</Link>
                  </Button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    Secure checkout · Cancel anytime before start
                  </p>
                </>
              ) : course.price ? (
                <>
                  <Button variant="hero" className="mt-6 w-full" asChild>
                    <Link to={`/enroll/${course.code}`}>Enrol now</Link>
                  </Button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    Secure checkout · Cancel anytime before start
                  </p>
                </>
              ) : (
                <>
                  <Button variant="hero" className="mt-6 w-full" disabled>
                    Enrolment opening soon
                  </Button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    Register interest with our team for first access
                  </p>
                </>
              )}
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
