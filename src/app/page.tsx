import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SocialIcon from "@/components/ui/SocialIcon";
import Reveal from "@/components/ui/Reveal";
import AchievementsGrid from "@/components/grids/AchievementsGrid";
import ProjectsGrid from "@/components/grids/ProjectsGrid";
import ContactForm from "@/components/ContactForm";
import { achievements, interests, profile, projects, skills } from "@/data/content";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-wide uppercase opacity-70">{profile.title} • {profile.location}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--foreground)]/90 font-medium">{profile.about[0]}</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-gradient-to-r from-indigo-500 to-emerald-500 text-white text-sm font-medium hover:opacity-90 shadow">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 text-sm font-medium">
              Get In Touch
            </a>
          </div>
          <div className="mt-16">
            <a href="#about" className="inline-flex flex-col items-center text-sm opacity-70 hover:opacity-100">
              <span>Scroll</span>
              <span aria-hidden className="mt-1 animate-bounce">▾</span>
            </a>
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_0%,rgba(0,0,0,0.05),transparent)] dark:[background:radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
        <div aria-hidden className="absolute -z-10 blur-3xl opacity-40 dark:opacity-30 w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-tr from-indigo-500/30 via-emerald-400/30 to-cyan-400/30 rounded-full -bottom-24 sm:-bottom-32 left-1/2 -translate-x-1/2" />
      </section>

      {/* About */}
      <Section id="about" title="About" description={profile.about[1]} divider={false}>
        <Reveal>
          <div className="grid gap-6">
            <p className="text-base leading-7 text-[color:var(--foreground)]/90 font-medium">{profile.about[2]}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="/resume.pdf" className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-[color:var(--border)] hover:bg-black/5 dark:hover:bg-white/10 text-sm">Download CV</a>
              {profile.socials.map((s) => (
                <SocialIcon key={s.href} label={s.label} href={s.href} />
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements" description="Selected highlights across product, open source, and community.">
        <AchievementsGrid items={achievements} />
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" description="A few work samples and case studies.">
        <ProjectsGrid items={projects} />
      </Section>

      {/* Interests */}
      <Section id="interests" title="Interests" description="Things I love to explore and talk about.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 80}>
              <div className="rounded-xl border border-[color:var(--border)] p-4 bg-[color:var(--surface)]">
                <h3 className="font-semibold">{i.title}</h3>
                <p className="mt-1 text-sm text-black/80 dark:text-white/70">{i.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" description="Core technical skills, tools, and collaboration strengths.">
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase opacity-70">Technical</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.technical.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase opacity-70">Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase opacity-70">Soft</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.soft.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 sm:py-24 border-t border-[color:var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
          <ContactForm formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_ID} />
          <div className="mt-3">
            <a href={`mailto:${profile.email}`} className="text-sm hover:underline">or email {profile.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
