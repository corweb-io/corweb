import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { BreadcrumbSchema } from "@/components/seo";
import { siteConfig } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/eyebrow";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPage" });

  return {
    title: t("title"),
    description:
      locale === "fr"
        ? "Mentions légales de Corweb"
        : "Legal notice for Corweb",
    alternates: {
      canonical: `${siteConfig.url}/${locale}/legal`,
      languages: {
        en: `${siteConfig.url}/en/legal`,
        fr: `${siteConfig.url}/fr/legal`,
      },
    },
  };
}

export default function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <LegalContent params={params} />;
}

async function LegalContent({
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
          { name: t("legal") || "Legal", href: "/legal" },
        ]}
      />
      <LegalUI />
    </>
  );
}

function LegalUI() {
  const t = useTranslations("legalPage");

  const sections = [
    {
      title: t("sections.publisher.title"),
      content: t("sections.publisher.content"),
    },
    {
      title: t("sections.hosting.title"),
      content: t("sections.hosting.content"),
    },
    {
      title: t("sections.intellectual.title"),
      content: t("sections.intellectual.content"),
    },
    {
      title: t("sections.liability.title"),
      content: t("sections.liability.content"),
    },
    {
      title: t("sections.links.title"),
      content: t("sections.links.content"),
    },
    {
      title: t("sections.law.title"),
      content: t("sections.law.content"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-24 md:pt-24 md:pb-32">

          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-12 pb-10 border-b border-border">
              <Eyebrow className="mb-8">{t("badge")}</Eyebrow>
              <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.04em] mb-6">
                {t("title")}
              </h1>
              <p className="text-muted-foreground">
                {t("lastUpdated")}: {t("lastUpdatedDate")}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {sections.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

