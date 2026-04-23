import { GraduationCap } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  const color = variant === "light" ? "text-primary-foreground" : "text-ink";
  return (
    <a href="#" className={`inline-flex items-center gap-2.5 ${color} ${className}`} aria-label="eUDST home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
        <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight">eUDST</span>
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">Applied Online Learning</span>
      </span>
    </a>
  );
};
