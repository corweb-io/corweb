import {
  Code2,
  Smartphone,
  Wrench,
  Link2,
  ArrowRight,
  Zap,
  Shield,
  Headphones,
  GitBranch,
  Database,
  Cloud,
  Layers,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/layout";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo";

export default function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ServicesContent params={params} />;
}

async function ServicesContent({
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
          { name: t("services"), href: "/services" },
        ]}
      />
      <ServiceSchema locale={locale} />
      <ServicesUI />
    </>
  );
}

function ServicesUI() {
  const t = useTranslations("servicesPage");

  const services = [
    {
      icon: Code2,
      title: t("services.webApps.title"),
      description: t("services.webApps.description"),
      features: [
        t("services.webApps.feature1"),
        t("services.webApps.feature2"),
        t("services.webApps.feature3"),
      ],
    },
    {
      icon: Smartphone,
      title: t("services.mobileApps.title"),
      description: t("services.mobileApps.description"),
      features: [
        t("services.mobileApps.feature1"),
        t("services.mobileApps.feature2"),
        t("services.mobileApps.feature3"),
      ],
    },
    {
      icon: Wrench,
      title: t("services.customTools.title"),
      description: t("services.customTools.description"),
      features: [
        t("services.customTools.feature1"),
        t("services.customTools.feature2"),
        t("services.customTools.feature3"),
      ],
    },
    {
      icon: Link2,
      title: t("services.apiIntegrations.title"),
      description: t("services.apiIntegrations.description"),
      features: [
        t("services.apiIntegrations.feature1"),
        t("services.apiIntegrations.feature2"),
        t("services.apiIntegrations.feature3"),
      ],
    },
  ];

  const techStack = [
    { icon: GitBranch, name: "React / Next.js" },
    { icon: Smartphone, name: "React Native" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Cloud, name: "Vercel / AWS" },
    { icon: Layers, name: "TypeScript" },
    { icon: Zap, name: "AI Integration" },
  ];

  const approach = [
    {
      icon: Zap,
      title: t("approach.speed.title"),
      description: t("approach.speed.description"),
    },
    {
      icon: Shield,
      title: t("approach.quality.title"),
      description: t("approach.quality.description"),
    },
    {
      icon: Headphones,
      title: t("approach.support.title"),
      description: t("approach.support.description"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary/10" />
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
                <Code2 className="w-3 h-3" />
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

        {/* Services Grid */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("techStack.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("techStack.description")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card/30 border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("approach.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("approach.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/30 border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Philosophy Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-card/50 border border-border relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-primary/5" />
              </div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("pricing.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t("pricing.description")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                  >
                    {t("pricing.cta")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
