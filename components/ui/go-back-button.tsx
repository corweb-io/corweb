"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export function GoBackButton() {
  const t = useTranslations("notFound");

  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 px-7 py-4 font-semibold rounded-full border border-border transition-colors hover:border-foreground/40 cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      {t("goBack")}
    </button>
  );
}

