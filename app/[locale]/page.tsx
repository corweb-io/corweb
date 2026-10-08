"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/projects";
import { ProjectPreview } from "@/components/portfolio/project-card";
import { Header, Footer } from "@/components/layout";
import { CtaPanel } from "@/components/sections";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/ui/motion";

export default function Home() {
  return <HomeUI />;
}

// Lime highlighter that sweeps across a word on load. The plain word stays
// underneath so it's readable before (and without) the animation.
function Marker({ children }: { children: string }) {
  return (
    <span className="relative inline-block">
      <span className="px-[0.08em]">{children}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-[0.08em] bg-accent px-[0.08em] text-accent-foreground"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function HomeUI() {
  const t = useTranslations();

  const featuredProjects = projects.filter((project) => project.featured);

  const benefits = [
    {
      title: t("mission.benefit1Title"),
      description: t("mission.benefit1Description"),
    },
    {
      title: t("mission.benefit2Title"),
      description: t("mission.benefit2Description"),
    },
    {
      title: t("mission.benefit3Title"),
      description: t("mission.benefit3Description"),
    },
  ];

  const services = [
    {
      title: t("services.webAppsTitle"),
      description: t("services.webAppsDescription"),
    },
    {
      title: t("services.mobileAppsTitle"),
      description: t("services.mobileAppsDescription"),
    },
    {
      title: t("services.customToolsTitle"),
      description: t("services.customToolsDescription"),
    },
    {
      title: t("services.apiIntegrationsTitle"),
      description: t("services.apiIntegrationsDescription"),
    },
  ];

  const processSteps = [
    {
      title: t("process.step1Title"),
      description: t("process.step1Description"),
    },
    {
      title: t("process.step2Title"),
      description: t("process.step2Description"),
    },
    {
      title: t("process.step3Title"),
      description: t("process.step3Description"),
    },
    {
      title: t("process.step4Title"),
      description: t("process.step4Description"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <FadeInUp>
            <Eyebrow className="mb-10">{t("hero.badge")}</Eyebrow>
            <h1 className="text-[clamp(2.75rem,7.5vw,7rem)] font-extrabold leading-[1] tracking-[-0.04em]">
              {t("hero.title1")} <Marker>{t("hero.titleHighlight1")}</Marker>{" "}
              {t("hero.title2")}{" "}
              <span className="underline decoration-accent decoration-[0.08em] underline-offset-[0.14em]">
                {t("hero.titleHighlight2")}
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp
            delay={0.2}
            className="mt-14 md:mt-20 pt-10 border-t border-border grid gap-10 md:grid-cols-[1fr_auto] md:items-end"
          >
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-accent-foreground font-semibold transition-transform hover:-translate-y-0.5"
              >
                {t("common.startYourProject")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border font-semibold transition-colors hover:border-foreground/40"
              >
                {t("common.learnMore")}
              </a>
            </div>
          </FadeInUp>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="scroll-mt-20 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeInUp className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
              <div className="max-w-3xl">
                <Eyebrow className="mb-5">{t("portfolio.badge")}</Eyebrow>
                <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em]">
                  {t("portfolio.title")}
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {t("portfolio.description")}
                </p>
              </div>
              <Link
                href="/portfolio"
                className="group inline-flex shrink-0 items-center gap-2 font-semibold hover:text-primary"
              >
                {t("portfolio.viewAll")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInUp>

            <StaggerContainer className="grid gap-x-8 gap-y-12 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <StaggerItem
                  key={project.slug}
                  className={
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : undefined
                  }
                >
                  <ProjectPreview project={project} large={index === 0} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
            <FadeInUp className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
              <div>
                <Eyebrow className="mb-6 text-accent-foreground/70 [&>span]:bg-accent-foreground">
                  {t("mission.badge")}
                </Eyebrow>
                <h2 className="text-[clamp(2.75rem,6.5vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
                  {t("mission.title")}
                </h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-accent-foreground/80">
                {t("mission.description")}
              </p>
            </FadeInUp>

            <FadeInUp className="mt-16 md:mt-24">
              <p className="font-display text-[clamp(4.5rem,15vw,13rem)] font-extrabold leading-[0.9] tracking-[-0.05em] line-through decoration-[0.07em]">
                {t("mission.oldPrice")}
              </p>
              <p className="mt-4 text-lg font-semibold">
                {t("mission.oldPriceLabel")}
              </p>
            </FadeInUp>

            <StaggerContainer className="mt-16 md:mt-24 grid gap-10 md:grid-cols-3 border-t border-accent-foreground/20 pt-10">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <span className="text-sm font-semibold tabular-nums text-accent-foreground/60">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-accent-foreground/75">
                    {benefit.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <FadeInUp className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow className="mb-5">{t("services.badge")}</Eyebrow>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em]">
                {t("services.title")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {t("services.description")}
              </p>
              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 font-semibold hover:text-primary"
              >
                {t("services.seeAll")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInUp>

            <ul className="border-t border-border">
              {services.map((service, index) => (
                <li key={index} className="border-b border-border">
                  <Link
                    href="/services"
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-8 md:py-10"
                  >
                    <span className="text-sm font-semibold tabular-nums text-muted-foreground">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process Section */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeInUp className="max-w-3xl mb-16">
              <Eyebrow className="mb-5">{t("process.badge")}</Eyebrow>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em]">
                {t("process.title")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {t("process.description")}
              </p>
            </FadeInUp>

            <StaggerContainer className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <StaggerItem key={index} className="border-t-2 border-foreground pt-6">
                  <span className="font-display text-7xl md:text-8xl font-extrabold leading-none tracking-[-0.05em] text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <CtaPanel
          badge={t("cta.badge")}
          title={t("cta.title")}
          description={t("cta.description")}
          button={t("cta.primaryButton")}
        />
      </main>

      <Footer />
    </div>
  );
}
