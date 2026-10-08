import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeInUp } from "@/components/ui/motion";

export function PageHero({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24">
      <FadeInUp>
        <Eyebrow className="mb-8">{badge}</Eyebrow>
        <h1 className="max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] font-extrabold leading-[1] tracking-[-0.04em]">
          {title}
        </h1>
      </FadeInUp>
      <FadeInUp delay={0.15} className="mt-12 md:mt-16 pt-10 border-t border-border">
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      </FadeInUp>
    </section>
  );
}
