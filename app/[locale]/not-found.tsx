import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/layout";
import { GoBackButton } from "@/components/ui/go-back-button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1 flex items-center">
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <p
            aria-hidden
            className="font-display text-[clamp(7rem,24vw,20rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-primary"
          >
            404
          </p>
          <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em]">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-accent-foreground font-semibold transition-transform hover:-translate-y-0.5"
            >
              {t("backHome")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <GoBackButton />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
