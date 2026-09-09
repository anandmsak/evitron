export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
        <span className="text-metal-gradient">{title}</span>
      </h2>
      {description && <p className="mt-3 text-sm text-muted-foreground sm:text-base">{description}</p>}
    </div>
  );
}
