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
  const t = await getTranslations({ locale, namespace: "privacyPage" });

  return {
    title: t("title"),
    description: t("intro"),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/privacy`,
      languages: {
        en: `${siteConfig.url}/en/privacy`,
        fr: `${siteConfig.url}/fr/privacy`,
      },
    },
  };
}

export default function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <PrivacyContent params={params} />;
}

async function PrivacyContent({
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
          { name: t("privacy") || "Privacy", href: "/privacy" },
        ]}
      />
      <PrivacyUI />
    </>
  );
}

function PrivacyUI() {
  const t = useTranslations("privacyPage");

  const sections = [
    {
      title: t("sections.dataCollection.title"),
      content: t("sections.dataCollection.content"),
    },
    {
      title: t("sections.dataUse.title"),
      content: t("sections.dataUse.content"),
    },
    {
      title: t("sections.dataStorage.title"),
      content: t("sections.dataStorage.content"),
    },
    {
      title: t("sections.cookies.title"),
      content: t("sections.cookies.content"),
    },
    {
      title: t("sections.thirdParties.title"),
      content: t("sections.thirdParties.content"),
    },
    {
      title: t("sections.rights.title"),
      content: t("sections.rights.content"),
    },
    {
      title: t("sections.contact.title"),
      content: t("sections.contact.content"),
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("intro")}
              </p>

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
