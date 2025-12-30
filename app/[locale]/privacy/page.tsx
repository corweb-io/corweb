import { Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Header, Footer } from "@/components/layout";

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

  return <PrivacyUI />;
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] bg-primary/10" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                <Shield className="w-3 h-3" />
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("intro")}
              </p>

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

