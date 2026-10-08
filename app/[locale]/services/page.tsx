import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo";
import { CtaPanel, PageHero } from "@/components/sections";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

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
      title: t("services.webApps.title"),
      description: t("services.webApps.description"),
      features: [
        t("services.webApps.feature1"),
        t("services.webApps.feature2"),
        t("services.webApps.feature3"),
      ],
    },
    {
      title: t("services.mobileApps.title"),
      description: t("services.mobileApps.description"),
      features: [
        t("services.mobileApps.feature1"),
        t("services.mobileApps.feature2"),
        t("services.mobileApps.feature3"),
      ],
    },
    {
      title: t("services.customTools.title"),
      description: t("services.customTools.description"),
      features: [
        t("services.customTools.feature1"),
        t("services.customTools.feature2"),
        t("services.customTools.feature3"),
      ],
    },
    {
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
    "React / Next.js",
    "React Native",
    "TypeScript",
    "PostgreSQL",
    "Vercel / AWS",
    "AI Integration",
  ];

  const approach = [
    {
      title: t("approach.speed.title"),
      description: t("approach.speed.description"),
    },
    {
      title: t("approach.quality.title"),
      description: t("approach.quality.description"),
    },
    {
      title: t("approach.support.title"),
      description: t("approach.support.description"),
    },
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

        {/* Services */}
        <section className="pb-24 md:pb-32">
          <ul className="max-w-7xl mx-auto px-6 lg:px-8">
            {services.map((service, index) => (
              <li key={index} className="border-t border-border last:border-b">
                <FadeInUp className="grid gap-8 py-12 md:py-16 lg:grid-cols-[8rem_1.2fr_1fr] lg:gap-12">
                  <span className="font-display text-6xl md:text-7xl font-extrabold leading-none tracking-[-0.05em] text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em]">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <ul className="self-end border-t border-border">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 border-b border-border py-3.5 font-medium"
                      >
                        <Check className="w-4 h-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FadeInUp>
              </li>
            ))}
          </ul>
        </section>

        {/* Approach */}
        <section className="bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
            <FadeInUp className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
              <h2 className="text-[clamp(2.75rem,6.5vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
                {t("approach.title")}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-accent-foreground/80">
                {t("approach.description")}
              </p>
            </FadeInUp>

            <StaggerContainer className="mt-16 md:mt-24 grid gap-10 md:grid-cols-3 border-t border-accent-foreground/20 pt-10">
              {approach.map((item, index) => (
                <StaggerItem key={index}>
                  <span className="text-sm font-semibold tabular-nums text-accent-foreground/60">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-accent-foreground/75">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 md:py-32">
          <FadeInUp className="max-w-7xl mx-auto px-6 lg:px-8">
            <Eyebrow className="mb-5">{t("techStack.title")}</Eyebrow>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("techStack.description")}
            </p>
            <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
              {techStack.map((tech) => (
                <li key={tech} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </FadeInUp>
        </section>

        <CtaPanel
          title={t("pricing.title")}
          description={t("pricing.description")}
          button={t("pricing.cta")}
        />
      </main>

      <Footer />
    </div>
  );
}
