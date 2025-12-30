import { siteConfig } from "@/lib/constants";

interface ServiceSchemaProps {
  locale: string;
}

export function ServiceSchema({ locale }: ServiceSchemaProps) {
  const services = [
    {
      name: locale === "fr" ? "Applications Web" : "Web Applications",
      description:
        locale === "fr"
          ? "Applications web modernes et réactives"
          : "Modern, responsive web applications",
    },
    {
      name: locale === "fr" ? "Applications Mobiles" : "Mobile Applications",
      description:
        locale === "fr"
          ? "Applications mobiles natives et multiplateformes"
          : "Native and cross-platform mobile apps",
    },
    {
      name: locale === "fr" ? "Outils Sur-Mesure" : "Custom Tools",
      description:
        locale === "fr"
          ? "Tableaux de bord internes et outils d'automatisation"
          : "Internal dashboards and automation tools",
    },
    {
      name: locale === "fr" ? "Intégrations API" : "API Integrations",
      description:
        locale === "fr"
          ? "Connectez vos systèmes de manière transparente"
          : "Connect your systems seamlessly",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Corweb",
          url: siteConfig.url,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

