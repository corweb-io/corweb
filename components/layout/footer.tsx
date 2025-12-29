"use client";

import { Terminal, Github, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-border py-12 md:py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-bold text-lg">
                <span className="text-primary">Cor</span>
                <span className="text-foreground">web</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-mono">
              {t("common.buildingTheFuture")}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {siteConfig.links.github && (
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {siteConfig.links.twitter && (
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {siteConfig.links.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
            {t("common.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
