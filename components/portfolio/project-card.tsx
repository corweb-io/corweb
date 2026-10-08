import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

function BrowserFrame({
  project,
  priority = false,
  sizes,
}: {
  project: Project;
  priority?: boolean;
  sizes: string;
}) {
  const t = useTranslations("projects.items");
  const host = new URL(project.url).host;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-black/5 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-secondary/60">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-3 min-w-0 truncate rounded-md bg-background/80 px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
          {host}
        </span>
      </div>
      <Image
        src={project.image}
        alt={t(`${project.slug}.tagline`)}
        width={1600}
        height={1000}
        sizes={sizes}
        priority={priority}
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}

function KindBadge({ project }: { project: Project }) {
  const t = useTranslations("portfolioPage");

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        project.kind === "product"
          ? "border-primary/30 bg-primary/10 text-primary"
          : "border-border bg-secondary text-muted-foreground",
      )}
    >
      {t(`kinds.${project.kind}`)}
    </span>
  );
}

export function ProjectShowcase({
  project,
  reverse = false,
  priority = false,
}: {
  project: Project;
  reverse?: boolean;
  priority?: boolean;
}) {
  const t = useTranslations("projects.items");
  const page = useTranslations("portfolioPage");
  const highlights = t.raw(`${project.slug}.highlights`) as string[];

  return (
    <article className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t(`${project.slug}.name`)} – ${page("visit")}`}
        className={cn(
          "block min-w-0 transition-transform duration-300 hover:-translate-y-1",
          reverse && "lg:order-2",
        )}
      >
        <BrowserFrame
          project={project}
          priority={priority}
          sizes="(min-width: 1024px) 640px, 100vw"
        />
      </a>

      <div className="min-w-0">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <KindBadge project={project} />
          <span className="text-sm text-muted-foreground">
            {t(`${project.slug}.client`)} · {project.year}
          </span>
        </div>
        <h2 className="mb-3 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
          {t(`${project.slug}.name`)}
        </h2>
        <p className="mb-4 text-lg font-medium">
          {t(`${project.slug}.tagline`)}
        </p>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          {t(`${project.slug}.description`)}
        </p>
        {project.metric && (
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t(`${project.slug}.metric`)}
          </p>
        )}

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {page("highlightsLabel")}
        </p>
        <ul className="mb-6 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        <ul className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary"
        >
          {page("visit")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export function ProjectPreview({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const t = useTranslations("projects.items");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block min-w-0 text-left"
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <BrowserFrame
          project={project}
          sizes={
            large
              ? "(min-width: 1024px) 800px, 100vw"
              : "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          }
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3
            className={cn(
              "font-semibold tracking-tight",
              large ? "text-2xl md:text-3xl" : "text-lg",
            )}
          >
            {t(`${project.slug}.name`)}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t(`${project.slug}.tagline`)}
          </p>
        </div>
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
    </a>
  );
}
