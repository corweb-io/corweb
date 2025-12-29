"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navKeys = ["home", "services", "portfolio", "about", "contact"] as const;

const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "/",
  services: "/services",
  portfolio: "/portfolio",
  about: "/about",
  contact: "/contact",
};

export function MobileNav() {
  const t = useTranslations();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={navHrefs[key]}
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
