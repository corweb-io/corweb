import { Scale } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Header, Footer } from "@/components/layout";

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

  return <LegalUI />;
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] bg-primary/10" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                <Scale className="w-3 h-3" />
                {t("badge")}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
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
                  <h2 className="text-xl font-semibold mb-4 text-foreground">
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

