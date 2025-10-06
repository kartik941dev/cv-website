import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-70">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {profile.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="hover:underline">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}


