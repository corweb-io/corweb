"use client";

import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { MobileNav } from "./mobile-nav";

const navKeys = ["home", "services", "portfolio", "about", "contact"] as const;

const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "/",
  services: "/services",
  portfolio: "/portfolio",
  about: "/about",
  contact: "/contact",
};

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-xl">
            <span className="text-primary">Cor</span>
            <span className="text-foreground">web</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={navHrefs[key]}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg transition-all hover:bg-primary/90"
          >
            {t("common.getInTouch")}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
