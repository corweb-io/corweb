import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/providers";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = messages.metadata;

  return {
    title: {
      default: t.title || siteConfig.name,
      template: `%s | ${t.title || siteConfig.name}`,
    },
    description: t.description || siteConfig.description,
    keywords: [
      "web development",
      "mobile development",
      "software agency",
      "Corweb",
      "app development",
      "custom software",
    ],
    authors: [{ name: "Corweb" }],
    creator: "Corweb",
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: siteConfig.url,
      title: t.title || siteConfig.name,
      description: t.description || siteConfig.description,
      siteName: t.title || siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: t.title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title || siteConfig.name,
      description: t.description || siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@corweb",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Provide messages to client components
  const messages = await getMessages();

  // JSON-LD structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Corweb",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description:
      locale === "fr"
        ? "Développement de logiciels sur-mesure pour les PME"
        : "Custom software development for small and medium businesses",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@corweb.com",
      contactType: "customer service",
      availableLanguage: ["English", "French"],
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ].filter(Boolean),
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <CookieBanner />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
