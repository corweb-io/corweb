import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { ContactForm } from "@/components/forms/contact-form";
import { BreadcrumbSchema } from "@/components/seo";

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ContactContent params={params} />;
}

async function ContactContent({
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
          { name: t("contact"), href: "/contact" },
        ]}
      />
      <ContactUI />
    </>
  );
}

function ContactUI() {
  const t = useTranslations("contactPage");

  const contactInfo = [
    {
      icon: Mail,
      label: t("info.emailLabel"),
      value: "hello@corweb.io",
      href: "mailto:hello@corweb.io",
    },
    {
      icon: MapPin,
      label: t("info.locationLabel"),
      value: t("info.locationValue"),
    },
    {
      icon: Clock,
      label: t("info.responseLabel"),
      value: t("info.responseValue"),
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
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] bg-primary/10" />
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
                <MessageSquare className="w-3 h-3" />
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

        {/* Contact Form & Info Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border">
                  <h2 className="text-2xl font-bold mb-6">{t("formTitle")}</h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 space-y-6">
                  <h2 className="text-2xl font-bold mb-6">{t("infoTitle")}</h2>

                  {/* Contact Info Cards */}
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-card/30 border border-border"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="font-medium text-foreground hover:text-primary transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="font-medium">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold mb-2">
                      {t("whyContact.title")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {t("whyContact.reason1")}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {t("whyContact.reason2")}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {t("whyContact.reason3")}
                      </li>
                    </ul>
                  </div>
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
