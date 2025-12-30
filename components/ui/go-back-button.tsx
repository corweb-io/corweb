"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export function GoBackButton() {
  const t = useTranslations("notFound");

  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      {t("goBack")}
    </button>
  );
}

