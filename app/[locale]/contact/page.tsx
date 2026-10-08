import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { ContactForm } from "@/components/forms/contact-form";
import { BreadcrumbSchema } from "@/components/seo";
import { PageHero } from "@/components/sections";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeInUp } from "@/components/ui/motion";

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ContactContent params={params} />;
}

async function ContactContent({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: t("home"), href: "" },
          { name: t("contact"), href: "/contact" },
        ]}
      />
      <ContactUI />
    </>
  );
}

function ContactUI() {
  const t = useTranslations("contactPage");

  const details = [
    {
      label: t("info.locationLabel"),
      value: t("info.locationValue"),
    },
    {
      label: t("info.responseLabel"),
      value: t("info.responseValue"),
    },
  ];

  const steps = [
    t("whyContact.reason1"),
    t("whyContact.reason2"),
    t("whyContact.reason3"),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <PageHero
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            {/* Contact Info */}
            <FadeInUp className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow className="mb-5 flex">{t("info.emailLabel")}</Eyebrow>
              <a
                href="mailto:hello@corweb.io"
                className="group inline-flex items-center gap-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] underline decoration-accent decoration-[0.08em] underline-offset-[0.2em] hover:text-primary"
              >
                hello@corweb.io
                <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <dl className="mt-12 border-t border-border">
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                  >
                    <dt className="text-muted-foreground">{item.label}</dt>
                    <dd className="text-right font-semibold">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-12 text-2xl font-bold tracking-tight">
                {t("whyContact.title")}
              </h2>
              <ol className="mt-5 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-baseline gap-4">
                    <span className="font-display text-2xl font-extrabold leading-none text-primary">
                      0{index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </FadeInUp>

            {/* Contact Form */}
            <FadeInUp
              delay={0.1}
              className="rounded-[2rem] border border-border bg-card p-6 md:p-10"
            >
              <h2 className="mb-8 text-3xl md:text-4xl font-bold tracking-[-0.03em]">
                {t("formTitle")}
              </h2>
              <ContactForm />
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
