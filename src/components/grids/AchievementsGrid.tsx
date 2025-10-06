"use client";

import { useMemo, useState } from "react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { Achievement } from "@/data/content";

type Props = { items: Achievement[] };

export default function AchievementsGrid({ items }: Props) {
  const allTags = useMemo(
    () => Array.from(new Set(items.flatMap((i) => i.tags))).sort(),
    [items]
  );
  const [selected, setSelected] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    if (selected === "all") return items;
    return items.filter((i) => i.tags.includes(selected));
  }, [items, selected]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 text-sm">
        <button className={`h-9 px-3 rounded-md border border-[color:var(--border)] ${selected === "all" ? "bg-black/5 dark:bg-white/10" : "hover:bg-black/5 dark:hover:bg-white/10"}`} onClick={() => setSelected("all")}>All</button>
        {allTags.map((t) => (
          <button key={t} className={`h-9 px-3 rounded-md border border-[color:var(--border)] ${selected === t ? "bg-black/5 dark:bg-white/10" : "hover:bg-black/5 dark:hover:bg-white/10"}`} onClick={() => setSelected(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}>
            <Card title={a.title} subtitle={a.timeframe} description={`${a.description}${a.impact ? ` — ${a.impact}` : ""}`} tags={a.tags} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}


