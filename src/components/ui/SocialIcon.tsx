type Props = {
  label: string;
  href: string;
};

export default function SocialIcon({ label, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm hover:underline"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </a>
  );
}


