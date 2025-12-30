import {
  Folder,
  Code2,
  Smartphone,
  Wrench,
  Link2,
  ArrowRight,
  Sparkles,
  Clock,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Header, Footer } from "@/components/layout";

export default function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <PortfolioContent params={params} />;
}

async function PortfolioContent({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PortfolioUI />;
}

function PortfolioUI() {
  const t = useTranslations("portfolioPage");

  const categories = [
    { icon: Code2, label: t("categories.webApps") },
    { icon: Smartphone, label: t("categories.mobileApps") },
    { icon: Wrench, label: t("categories.tools") },
    { icon: Link2, label: t("categories.integrations") },
  ];

  const earlyBenefits = [
    {
      icon: Star,
      title: t("earlyBenefits.benefit1.title"),
      description: t("earlyBenefits.benefit1.description"),
    },
    {
      icon: Clock,
      title: t("earlyBenefits.benefit2.title"),
      description: t("earlyBenefits.benefit2.description"),
    },
    {
      icon: Sparkles,
      title: t("earlyBenefits.benefit3.title"),
      description: t("earlyBenefits.benefit3.description"),
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
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary/10" />
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
                <Folder className="w-3 h-3" />
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

        {/* Categories Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border"
                >
                  <category.icon className="w-4 h-4 text-primary" />
                  {category.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Projects Grid */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-card/30 border border-dashed border-border/50 flex flex-col items-center justify-center min-h-[320px] hover:border-primary/30 transition-colors"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
                    {index === 1 && (
                      <Code2 className="w-10 h-10 text-primary/30" />
                    )}
                    {index === 2 && (
                      <Smartphone className="w-10 h-10 text-primary/30" />
                    )}
                    {index === 3 && (
                      <Wrench className="w-10 h-10 text-primary/30" />
                    )}
                  </div>
                  <span className="text-lg font-mono text-muted-foreground mb-2">
                    {t("projectPlaceholder")}
                  </span>
                  <span className="text-sm text-muted-foreground/60">
                    {t("projectStatus")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest Message Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                {t("honestSection.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("honestSection.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Early Adopter Benefits */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("earlyBenefits.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("earlyBenefits.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {earlyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/50 border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
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
