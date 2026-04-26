import { useTranslation } from "react-i18next";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle = ({ className = "" }: LanguageToggleProps) => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("ar") ? "ar" : "en";

  const setLang = (lng: "en" | "ar") => {
    if (lng !== current) void i18n.changeLanguage(lng);
  };

  const baseBtn =
    "px-2.5 py-1 text-xs font-semibold transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  const active = "bg-primary text-primary-foreground";
  const inactive = "text-muted-foreground hover:text-primary";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center overflow-hidden rounded-full border border-border bg-card ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${baseBtn} ${current === "en" ? active : inactive}`}
        aria-pressed={current === "en"}
        aria-label="English"
      >
        EN
      </button>
      <span className="h-4 w-px bg-border" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={`${baseBtn} ${current === "ar" ? active : inactive}`}
        aria-pressed={current === "ar"}
        aria-label="العربية"
        style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
      >
        ع
      </button>
    </div>
  );
};
