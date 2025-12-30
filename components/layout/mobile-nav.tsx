"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navKeys = ["home", "services", "portfolio", "about"] as const;

const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "/",
  services: "/services",
  portfolio: "/portfolio",
  about: "/about",
};

const navItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.15 } },
};

export function MobileNav() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer"
          aria-label={t("nav.toggleMenu")}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">{t("nav.toggleMenu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
        <SheetHeader className="mb-2 p-0">
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          <AnimatePresence>
            {isOpen &&
              navKeys.map((key, i) => (
                <motion.div
                  key={key}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <SheetClose asChild>
                    <Link
                      href={navHrefs[key]}
                      className="block text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t(`nav.${key}`)}
                    </Link>
                  </SheetClose>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* CTA Button */}
          <SheetClose asChild>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:bg-primary/90"
            >
              {t("common.getInTouch")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SheetClose>

          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
