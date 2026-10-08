import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { BreadcrumbSchema } from "@/components/seo";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/lib/projects";
import { ProjectShowcase } from "@/components/portfolio/project-card";
import { CtaPanel, PageHero } from "@/components/sections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolioPage" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/portfolio`,
      languages: {
        en: `${siteConfig.url}/en/portfolio`,
        fr: `${siteConfig.url}/fr/portfolio`,
      },
    },
  };
}

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

  const t = await getTranslations("nav");

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: t("home"), href: "" },
          { name: t("portfolio"), href: "/portfolio" },
        ]}
      />
      <PortfolioUI />
    </>
  );
}

function PortfolioUI() {
  const t = useTranslations("portfolioPage");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <PageHero
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        {/* Projects */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <ProjectShowcase
                key={project.slug}
                project={project}
                reverse={index % 2 === 1}
                priority={index === 0}
              />
            ))}
          </div>
        </section>

        <CtaPanel
          title={t("cta.title")}
          description={t("cta.description")}
          button={t("cta.button")}
        />
      </main>

      <Footer />
    </div>
  );
}
