"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative group">
      <button
        className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
        aria-label={t("label")}
      >
        <Globe className="w-4 h-4" />
      </button>
      <div className="absolute right-0 top-full mt-2 py-1 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[120px]">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`w-full px-3 py-1.5 text-left text-sm hover:bg-accent transition-colors cursor-pointer ${
              locale === loc
                ? "text-primary font-medium"
                : "text-muted-foreground"
            }`}
          >
            {t(loc)}
          </button>
        ))}
      </div>
    </div>
  );
}
