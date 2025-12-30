import {
  Users,
  Target,
  Lightbulb,
  Heart,
  ArrowRight,
  Zap,
  Code2,
  Sparkles,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { BreadcrumbSchema } from "@/components/seo";

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <AboutContent params={params} />;
}

async function AboutContent({
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
          { name: t("about"), href: "/about" },
        ]}
      />
      <AboutUI />
    </>
  );
}

function AboutUI() {
  const t = useTranslations("aboutPage");

  const values = [
    {
      icon: Target,
      title: t("values.value1.title"),
      description: t("values.value1.description"),
    },
    {
      icon: Lightbulb,
      title: t("values.value2.title"),
      description: t("values.value2.description"),
    },
    {
      icon: Heart,
      title: t("values.value3.title"),
      description: t("values.value3.description"),
    },
    {
      icon: Zap,
      title: t("values.value4.title"),
      description: t("values.value4.description"),
    },
  ];

  const whyNow = [
    {
      icon: Code2,
      title: t("whyNow.reason1.title"),
      description: t("whyNow.reason1.description"),
    },
    {
      icon: Sparkles,
      title: t("whyNow.reason2.title"),
      description: t("whyNow.reason2.description"),
    },
    {
      icon: Globe,
      title: t("whyNow.reason3.title"),
      description: t("whyNow.reason3.description"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary/10" />
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                <Users className="w-3 h-3" />
                {t("badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t("title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("description")}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center">
                {t("story.title")}
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("story.paragraph1")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("story.paragraph2")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("story.paragraph3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-card/50 border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  {t("mission.title")}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t("mission.statement")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("values.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("values.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/30 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("whyNow.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("whyNow.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyNow.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/50 border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-card/50 border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-primary/10" />
              </div>

              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("cta.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t("cta.description")}
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
                >
                  {t("cta.button")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
