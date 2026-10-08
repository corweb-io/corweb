import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeInUp } from "@/components/ui/motion";

export function CtaPanel({
  badge,
  title,
  description,
  button,
}: {
  badge?: string;
  title: string;
  description: string;
  button: string;
}) {
  return (
    <section className="px-4 md:px-6 pb-4 md:pb-6">
      <FadeInUp className="max-w-7xl mx-auto rounded-[2rem] bg-accent text-accent-foreground px-8 py-20 md:px-16 md:py-28">
        {badge && (
          <Eyebrow className="mb-8 text-accent-foreground/70 [&>span]:bg-accent-foreground">
            {badge}
          </Eyebrow>
        )}
        <h2 className="max-w-4xl text-[clamp(2.75rem,6.5vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
          {title}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-accent-foreground/80">
            {description}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent-foreground text-accent font-semibold transition-transform hover:-translate-y-0.5"
          >
            {button}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </FadeInUp>
    </section>
  );
}
