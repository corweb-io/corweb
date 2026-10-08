// Portfolio projects. Copy lives in messages/*.json under `projects.items.<slug>`.

export type ProjectKind = "client" | "product";

export type Project = {
  slug:
    | "rallia"
    | "alfred"
    | "msm"
    | "nutrisoft"
    | "alize"
    | "madeWithPeace"
    | "creneauSport";
  kind: ProjectKind;
  year: number;
  url: string;
  image: string;
  stack: string[];
  // Shown in the homepage preview.
  featured?: boolean;
  // Has a `metric` line in messages.
  metric?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rallia",
    kind: "product",
    year: 2026,
    url: "https://rallia.app",
    image: "/images/projects/rallia.webp",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Next.js", "Stripe"],
    featured: true,
    metric: true,
  },
  {
    slug: "alfred",
    kind: "client",
    year: 2025,
    url: "https://alfred-web-olive.vercel.app/login",
    image: "/images/projects/alfred.webp",
    stack: ["React", "TypeScript", "Supabase", "TanStack Query", "Tailwind"],
    featured: true,
  },
  {
    slug: "msm",
    kind: "client",
    year: 2026,
    url: "https://msm.ca",
    image: "/images/projects/msm.webp",
    stack: ["Next.js", "TypeScript", "Tailwind", "PHP"],
    featured: true,
  },
  {
    slug: "nutrisoft",
    kind: "client",
    year: 2026,
    url: "https://www.nutrisoft.ca",
    image: "/images/projects/nutrisoft.webp",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "alize",
    kind: "product",
    year: 2025,
    url: "https://alize.corweb.io/login",
    image: "/images/projects/alize.webp",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "React PDF"],
  },
  {
    slug: "madeWithPeace",
    kind: "client",
    year: 2026,
    url: "https://made-with-peace-jeans-tool.vercel.app/",
    image: "/images/projects/made-with-peace.webp",
    stack: ["Next.js", "TypeScript", "Resend", "Python"],
  },
  {
    slug: "creneauSport",
    kind: "product",
    year: 2025,
    url: "https://creneau-sport.vercel.app/",
    image: "/images/projects/creneau-sport.webp",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: true,
  },
];
