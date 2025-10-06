import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  image?: string;
  href?: string;
};

export default function Card({ title, subtitle, description, tags = [], image, href }: Props) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="group rounded-xl border border-[color:var(--border)] overflow-hidden bg-[color:var(--surface)] hover:border-black/20 dark:hover:border-white/20 transition-colors shadow-sm hover:shadow-md"
    >
      {image ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image src={image} alt="" fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        </div>
      ) : null}
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight">{title}</h3>
          {subtitle ? <span className="text-xs opacity-70">{subtitle}</span> : null}
        </div>
        {description ? (
          <p className="mt-2 text-sm text-[color:var(--foreground)]/90 font-medium">{description}</p>
        ) : null}
        {tags.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-black/5 dark:bg-white/10">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
}


