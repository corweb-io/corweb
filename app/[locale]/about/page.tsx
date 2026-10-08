import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { BreadcrumbSchema } from "@/components/seo";
import { CtaPanel, PageHero } from "@/components/sections";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

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
      title: t("values.value1.title"),
      description: t("values.value1.description"),
    },
    {
      title: t("values.value2.title"),
      description: t("values.value2.description"),
    },
    {
      title: t("values.value3.title"),
      description: t("values.value3.description"),
    },
    {
      title: t("values.value4.title"),
      description: t("values.value4.description"),
    },
  ];

  const whyNow = [
    {
      title: t("whyNow.reason1.title"),
      description: t("whyNow.reason1.description"),
    },
    {
      title: t("whyNow.reason2.title"),
      description: t("whyNow.reason2.description"),
    },
    {
      title: t("whyNow.reason3.title"),
      description: t("whyNow.reason3.description"),
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

        {/* Story */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <FadeInUp className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em]">
                {t("story.title")}
              </h2>
            </FadeInUp>
            <FadeInUp className="space-y-6">
              <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight">
                {t("story.paragraph1")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("story.paragraph2")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("story.paragraph3")}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-accent text-accent-foreground">
          <FadeInUp className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-36">
            <Eyebrow className="mb-10 text-accent-foreground/70 [&>span]:bg-accent-foreground">
              {t("mission.title")}
            </Eyebrow>
            <p className="max-w-6xl font-display text-[clamp(2rem,4.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              {t("mission.statement")}
            </p>
          </FadeInUp>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeInUp className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em]">
                {t("values.title")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {t("values.description")}
              </p>
            </FadeInUp>

            <StaggerContainer className="grid gap-x-12 gap-y-14 md:grid-cols-2">
              {values.map((value, index) => (
                <StaggerItem
                  key={index}
                  className="border-t-2 border-foreground pt-6"
                >
                  <span className="font-display text-6xl font-extrabold leading-none tracking-[-0.05em] text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Now */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <FadeInUp className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em]">
                {t("whyNow.title")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {t("whyNow.description")}
              </p>
            </FadeInUp>

            <ul className="border-t border-border">
              {whyNow.map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-border py-8 md:py-10"
                >
                  <span className="text-sm font-semibold tabular-nums text-muted-foreground">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
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
