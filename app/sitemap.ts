import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/portfolio", "/about", "/contact"];
  const locales = routing.locales;

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteConfig.url}/${l}${route}`])
          ),
        },
      });
    }
  }

  return sitemapEntries;
}
