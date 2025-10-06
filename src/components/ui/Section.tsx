type Props = {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
};

export default function Section({ id, title, description, children, className = "", divider = true }: Props) {
  return (
    <section id={id} className={`${divider ? "border-t border-[color:var(--border)]" : ""} px-6 py-20 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
          {description ? (
            <p className="mt-3 text-[color:var(--foreground)]/90 font-medium">{description}</p>
          ) : null}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  );
}


