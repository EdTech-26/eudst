import { forwardRef } from "react";
import logoFull from "@/assets/eudst-logo.png";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className = "", variant = "dark" }, ref) => {
    return (
      <a
        ref={ref}
        href="/"
        className={`inline-flex items-center justify-start ${className}`}
        aria-label="eUDST — Applied Online Learning"
      >
        <img
          src={logoFull}
          alt="eUDST · Applied Online Learning"
          className={`h-15 w-auto md:h-[4.375rem] ${variant === "light" ? "brightness-0 invert" : ""}`}
          width={165}
          height={39}
        />
      </a>
    );
  },
);

Logo.displayName = "Logo";
