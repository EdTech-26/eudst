import logoFull from "@/assets/eudst-logo.png";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  return (
    <a
      href="#"
      className={`inline-flex items-center ${className}`}
      aria-label="eUDST — Applied Online Learning"
    >
      <img
        src={logoFull}
        alt="eUDST · Applied Online Learning"
        className={`h-11 w-auto md:h-12 ${variant === "light" ? "brightness-0 invert" : ""}`}
        width={220}
        height={52}
      />
    </a>
  );
};
