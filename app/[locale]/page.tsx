"use client";

import {
  ArrowRight,
  Terminal,
  Sparkles,
  Code2,
  Smartphone,
  Wrench,
  Link2,
  Search,
  Palette,
  Rocket,
  Headphones,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Header, Footer } from "@/components/layout";
import {
  FadeInUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

export default function Home() {
  return <HomeUI />;
}

function HomeUI() {
  const t = useTranslations();

  const benefits = [
    {
      icon: Sparkles,
      title: t("mission.benefit1Title"),
      description: t("mission.benefit1Description"),
    },
    {
      icon: Code2,
      title: t("mission.benefit2Title"),
      description: t("mission.benefit2Description"),
    },
    {
      icon: Clock,
      title: t("mission.benefit3Title"),
      description: t("mission.benefit3Description"),
    },
  ];

  const services = [
    {
      icon: Code2,
      title: t("services.webAppsTitle"),
      description: t("services.webAppsDescription"),
    },
    {
      icon: Smartphone,
      title: t("services.mobileAppsTitle"),
      description: t("services.mobileAppsDescription"),
    },
    {
      icon: Wrench,
      title: t("services.customToolsTitle"),
      description: t("services.customToolsDescription"),
    },
    {
      icon: Link2,
      title: t("services.apiIntegrationsTitle"),
      description: t("services.apiIntegrationsDescription"),
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: t("process.step1Title"),
      description: t("process.step1Description"),
    },
    {
      number: "02",
      icon: Palette,
      title: t("process.step2Title"),
      description: t("process.step2Description"),
    },
    {
      number: "03",
      icon: Code2,
      title: t("process.step3Title"),
      description: t("process.step3Description"),
    },
    {
      number: "04",
      icon: Rocket,
      title: t("process.step4Title"),
      description: t("process.step4Description"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary/10" />
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />
            {/* Code decoration */}
            <div className="absolute top-32 left-10 font-mono text-xs text-foreground/5 select-none hidden lg:block">
              <pre>{`const yourBusiness = {
  needs: "custom",
  budget: "realistic",
  timeline: "fast"
};`}</pre>
            </div>
            <div className="absolute bottom-32 right-10 font-mono text-xs text-foreground/5 select-none hidden lg:block">
              <pre>{`// AI-accelerated development
async function build(vision) {
  return await ship(vision);
}`}</pre>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <FadeInUp className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono mb-8 bg-primary/10 text-primary border border-primary/20">
                <Terminal className="w-4 h-4" />
                <span className="text-muted-foreground">~/</span>
                {t("hero.badge")}
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                {t("hero.title1")}{" "}
                <span className="relative inline-block text-primary">
                  {t("hero.titleHighlight1")}
                  <span className="absolute -right-1 top-0 h-full w-[3px] bg-primary animate-pulse" />
                </span>
                <br />
                {t("hero.title2")}{" "}
                <span className="text-primary">
                  {t("hero.titleHighlight2")}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10 text-muted-foreground">
                {t("hero.description")}
              </p>

              {/* CTAs */}
              <FadeInUp delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <span className="font-mono text-sm">$</span>
                    {t("common.startYourProject")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                  >
                    {t("common.learnMore")}
                  </a>
                </div>
              </FadeInUp>
            </FadeInUp>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-3 h-3" />
                {t("mission.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {t("mission.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("mission.description")}
              </p>
            </FadeInUp>

            {/* Benefits Grid */}
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <StaggerItem
                  key={index}
                  className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                <Code2 className="w-3 h-3" />
                {t("services.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {t("services.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("services.description")}
              </p>
            </FadeInUp>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card/30 border border-border hover:border-primary/30 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                <Rocket className="w-3 h-3" />
                {t("process.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {t("process.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("process.description")}
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line (hidden on mobile and last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-linear-to-r from-primary/30 to-transparent" />
                  )}
                  <div className="relative p-6 rounded-xl bg-card/30 border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-3xl font-bold text-primary/20 font-mono">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Teaser Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-primary/5" />
                <div className="absolute top-10 right-10 font-mono text-xs text-foreground/5 select-none hidden md:block">
                  <pre>{`// projects.loading()
const portfolio = await
  fetchProjects();`}</pre>
                </div>
              </div>

              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                  <Terminal className="w-3 h-3" />
                  {t("portfolio.badge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("portfolio.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t("portfolio.description")}
                </p>

                {/* Placeholder project cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-xl bg-background/50 border border-dashed border-border/50 flex flex-col items-center justify-center min-h-[200px]">
                    <div className="w-16 h-16 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-4">
                      <Code2 className="w-8 h-8 text-primary/30" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {t("portfolio.projectPlaceholder")}
                    </span>
                  </div>
                  <div className="p-6 rounded-xl bg-background/50 border border-dashed border-border/50 flex flex-col items-center justify-center min-h-[200px]">
                    <div className="w-16 h-16 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-4">
                      <Smartphone className="w-8 h-8 text-primary/30" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {t("portfolio.projectPlaceholder")}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {t("portfolio.earlyBirdMessage")}
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                >
                  {t("portfolio.cta")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 bg-primary/10 text-primary border border-primary/20">
                <Headphones className="w-3 h-3" />
                {t("cta.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {t("cta.description")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                >
                  <span className="font-mono text-sm">$</span>
                  {t("cta.primaryButton")}
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
