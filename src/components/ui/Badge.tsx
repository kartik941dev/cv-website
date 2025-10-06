type Props = { children: React.ReactNode };

export default function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center text-[11px] px-2 py-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]">
      {children}
    </span>
  );
}


