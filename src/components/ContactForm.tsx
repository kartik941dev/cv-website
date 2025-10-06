"use client";

import { useState } from "react";

type Props = {
  formspreeId?: string; // optional; if present, posts to Formspree
};

export default function ContactForm({ formspreeId }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Failed");
      } else {
        await new Promise((r) => setTimeout(r, 600)); // mock success
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="mt-8 grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm mb-1">Name</label>
        <input id="name" name="name" type="text" required className="w-full h-11 px-3 rounded-md border border-[color:var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-1">Email</label>
        <input id="email" name="email" type="email" required className="w-full h-11 px-3 rounded-md border border-[color:var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1">Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full p-3 rounded-md border border-[color:var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20" />
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-60">
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
        {status === "success" && <span className="text-sm text-green-600">Sent!</span>}
        {status === "error" && <span className="text-sm text-red-600">Something went wrong.</span>}
      </div>
    </form>
  );
}


