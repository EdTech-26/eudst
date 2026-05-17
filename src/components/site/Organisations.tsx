import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export const Organisations = () => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    organisation: "",
    fullName: "",
    email: "",
    phone: "",
    details: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.organisation.trim() || !form.fullName.trim() || !form.email.trim() || !form.details.trim()) {
      toast({ title: "Please complete all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Custom Course Request — ${form.organisation}`);
    const body = encodeURIComponent(
      `Organisation: ${form.organisation}\nFull Name: ${form.fullName}\nContact Email: ${form.email}\nContact Number: ${form.phone}\n\nCourse request details:\n${form.details}`,
    );
    window.location.href = `mailto:elearning@udst.edu.qa?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      toast({ title: "Request ready to send", description: "Your email client has opened with the details." });
    }, 400);
  };

  return (
    <section className="container py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-elegant md:p-16"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 80% 20%, white, transparent 50%)" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
              <Building2 className="h-3.5 w-3.5" /> For Organisations
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
              Don't see the course your team needs?
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/85">
              Request a customised course built around your organisation's goals. Our team
              partners with you to design applied, immersive learning experiences and
              micro-credentials tailored to the skills your people need most.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-primary-foreground/80 sm:grid-cols-2">
              <li>· Custom curriculum & outcomes</li>
              <li>· Flexible self-paced delivery</li>
              <li>· Industry-aligned micro-credentials</li>
              <li>· Dedicated learning design support</li>
            </ul>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Button
              size="xl"
              className="bg-background text-primary hover:bg-background/90"
              onClick={() => setOpen(true)}
            >
              Request a custom course <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Request a custom course</DialogTitle>
            <DialogDescription>
              Share a few details and our team will be in touch to scope a tailored programme for your organisation.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="org">Organisation *</Label>
              <Input id="org" maxLength={150} value={form.organisation} onChange={update("organisation")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" maxLength={100} value={form.fullName} onChange={update("fullName")} required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email *</Label>
                <Input id="email" type="email" maxLength={255} value={form.email} onChange={update("email")} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number</Label>
                <Input id="phone" type="tel" maxLength={30} value={form.phone} onChange={update("phone")} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Course request details *</Label>
              <Textarea
                id="details"
                rows={5}
                maxLength={2000}
                value={form.details}
                onChange={update("details")}
                placeholder="Tell us about your team, learning goals, preferred topics, and timing."
                required
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="hero" disabled={submitting}>
                {submitting ? "Sending…" : "Send request"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
