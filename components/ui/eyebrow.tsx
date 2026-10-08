import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
        className,
      )}
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
      {children}
    </p>
  );
}
