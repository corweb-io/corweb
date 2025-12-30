import { FileQuestion, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/layout";
import { GoBackButton } from "@/components/ui/go-back-button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1 flex items-center justify-center">
        <section className="relative py-20 md:py-28 overflow-hidden w-full">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary/10" />
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
            {/* 404 Icon */}
            <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
              <FileQuestion className="w-12 h-12 text-primary" />
            </div>

            {/* Error Code */}
            <div className="font-mono text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t("title")}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
              {t("description")}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                <Home className="w-4 h-4" />
                {t("backHome")}
              </Link>
              <GoBackButton />
            </div>

            {/* Code decoration */}
            <div className="mt-16 font-mono text-xs text-foreground/10 select-none">
              <pre className="inline-block text-left">{`// Error: Page not found
const response = {
  status: 404,
  message: "Not Found"
};`}</pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
