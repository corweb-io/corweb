"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = t("errors.nameRequired");
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = t("errors.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData)) {
      return;
    }

    setFormState("submitting");

    // Simulate form submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="p-8 rounded-2xl bg-card/50 border border-primary/30 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{t("successTitle")}</h3>
        <p className="text-muted-foreground">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name">{t("name")} *</Label>
          <Input
            id="name"
            name="name"
            placeholder={t("namePlaceholder")}
            aria-invalid={!!errors.name}
            disabled={formState === "submitting"}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">{t("email")} *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            aria-invalid={!!errors.email}
            disabled={formState === "submitting"}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company Field (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="company">
          {t("company")}{" "}
          <span className="text-muted-foreground font-normal">
            ({t("optional")})
          </span>
        </Label>
        <Input
          id="company"
          name="company"
          placeholder={t("companyPlaceholder")}
          disabled={formState === "submitting"}
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message">{t("message")} *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("messagePlaceholder")}
          className="min-h-[150px]"
          aria-invalid={!!errors.message}
          disabled={formState === "submitting"}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={formState === "submitting"}
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t("submit")}
          </>
        )}
      </Button>
    </form>
  );
}
