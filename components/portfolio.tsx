"use client";

import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  SquareCode,
  Sparkles
} from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import type { ComponentType, MouseEvent, ReactNode, SVGProps } from "react";
import { useRef } from "react";
import {
  achievements,
  contact,
  education,
  heroFacts,
  hobbies,
  navItems,
  projects,
  skillGroups,
  storyCues,
  work
} from "@/data/profile";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function MotionSection({
  children,
  className = "",
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24 ${className}`}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

function MagneticButton({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isExternal = href.startsWith("http");

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${className} ${
        variant === "primary"
          ? "bg-signal text-ink shadow-glow hover:bg-white"
          : "border border-line bg-white/5 text-white hover:border-signal/70 hover:bg-white/10"
      }`}
    >
      {children}
    </motion.a>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />
      <div className="noise absolute inset-0 opacity-[0.08]" />
      <motion.div
        className="absolute left-[8%] top-[9%] h-80 w-80 rounded-full bg-signal/[0.12] blur-3xl"
        animate={{ x: [0, 42, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[6%] h-96 w-96 rounded-full bg-amberline/10 blur-3xl"
        animate={{ x: [0, -34, 0], y: [0, 28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-ink/[0.72] px-4 py-3 shadow-card backdrop-blur-xl">
        <a href="#top" className="font-display text-sm font-bold tracking-[0.18em] text-white">
          VG
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-steel transition hover:bg-white/[0.08] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-signal md:inline-flex"
        >
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-line bg-panel/70 p-6 shadow-card backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(112,240,200,0.16),transparent_34%)]" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">Portfolio flow</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white">Varun Garg</h2>
        <p className="mt-3 max-w-sm text-sm leading-7 text-steel">
          A clear path through who I am, where I have worked, what I have built, and what I care about.
        </p>
      </div>
      <div className="relative mt-8">
        <div className="absolute left-[0.95rem] top-4 h-[calc(100%-2rem)] w-px bg-line" />
        <motion.div
          className="absolute left-[0.95rem] top-4 h-[calc(100%-2rem)] w-px origin-top bg-signal"
          animate={{ scaleY: [0.12, 1, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="space-y-4">
          {storyCues.map((cue, index) => (
            <motion.div
              key={cue}
              className="relative flex items-center gap-4"
              animate={{ x: [0, index % 2 === 0 ? 5 : -2, 0] }}
              transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-signal/45 bg-ink text-xs font-bold text-signal">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 rounded-[8px] border border-white/[0.1] bg-white/[0.055] px-4 py-3 text-sm font-semibold text-white">
                {cue}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto min-h-screen w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:pt-36">
      <div className="grid min-h-[calc(100vh-9rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div transition={{ staggerChildren: 0.12 }}>
          <motion.div
            variants={fadeUp}
            className="inline-flex max-w-[350px] items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm text-signal md:max-w-none"
          >
            <Sparkles className="h-4 w-4" />
            <span>Full-stack engineer and AI builder</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-8 max-w-[350px] text-balance font-display text-5xl font-bold leading-[1.02] text-white md:max-w-4xl md:text-7xl lg:text-8xl">
            Varun Garg
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-[350px] text-lg leading-8 text-muted md:max-w-2xl md:text-xl">
            I am a full-stack engineer at Oracle Financial Services. I work across frontend, Java APIs, SQL execution, and GenAI workflows, with a focus on making complex financial and AI systems easier to use.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 grid max-w-[350px] grid-cols-1 gap-3 md:flex md:max-w-none md:flex-wrap">
            <MagneticButton href={`mailto:${contact.email}`} className="w-full md:w-auto">
              <Mail className="h-4 w-4" />
              Work with me
            </MagneticButton>
            <MagneticButton href={contact.resume} variant="secondary" className="w-full md:w-auto">
              <Download className="h-4 w-4" />
              Resume
            </MagneticButton>
            <MagneticButton href={contact.linkedin} variant="secondary" className="w-full md:w-auto">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 grid max-w-[350px] grid-cols-2 gap-3 md:max-w-3xl md:grid-cols-4">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="rounded-[8px] border border-line bg-white/[0.045] p-4 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.18em] text-amberline">{fact.label}</div>
                <div className="mt-2 text-sm font-semibold leading-6 text-white">{fact.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-signal">{eyebrow}</div>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-muted">{text}</p>
    </div>
  );
}

function InlineLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5 text-xs font-semibold text-signal transition hover:border-signal hover:bg-signal hover:text-ink"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

function About() {
  return (
    <MotionSection id="about" className="pt-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          eyebrow="Intro"
          title="A quick note about me."
          text="I like building complete products, not only isolated pieces. My work usually sits between interface design, backend logic, data execution, and AI-assisted automation."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "I currently work at Oracle Financial Services on Stress Testing and Scenario Analytics.",
            "I am comfortable moving across React, Java APIs, Oracle SQL, Python automation, and GenAI workflows.",
            "I care about clarity: turning complicated systems into screens, flows, and tools that people can actually understand.",
            "I also build AI side projects, including a RAG chatbot with document ingestion, vector search, and grounded GPT responses."
          ].map((text) => (
            <motion.div
              key={text}
              className="rounded-[8px] border border-line bg-white/[0.045] p-5 text-sm leading-7 text-muted backdrop-blur transition hover:border-signal/40 hover:bg-white/[0.07]"
              whileHover={{ y: -4 }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <MotionSection id="work">
      <SectionIntro
        eyebrow="Where I have worked"
        title="Work experience."
        text="Two roles that shaped how I build: enterprise financial systems at Oracle and real-time product engineering at PeerHook."
      />
      <div ref={ref} className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-line md:block" />
        <motion.div
          className="timeline-line absolute left-4 top-0 hidden h-full w-px origin-top md:block"
          style={{ scaleY }}
        />
        <div className="space-y-8">
          {work.map((item) => {
            const Icon = item.icon as IconType;
            return (
              <motion.article
                key={item.company}
                className="relative rounded-[8px] border border-line bg-panel/[0.72] p-6 shadow-card backdrop-blur md:ml-14 md:p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute -left-[3.35rem] top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-signal/50 bg-ink text-signal shadow-glow md:flex">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amberline">{item.period}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white">{item.role}</h3>
                    <p className="mt-2 text-muted">{item.company}</p>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-2 text-sm text-steel">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                </div>
                <p className="mt-6 max-w-4xl text-base leading-8 text-muted">{item.summary}</p>
                <div className="mt-6 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 text-sm leading-7 text-steel">
                      <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-signal" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

function Projects() {
  return (
    <MotionSection id="projects">
      <SectionIntro
        eyebrow="Projects"
        title="Projects I want people to notice."
        text="Three concrete builds: Stress Testing and Scenario Analytics, PeerHook, and VarBotChat."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon as IconType;
          return (
            <motion.article
              key={project.title}
              className="group flex min-h-[440px] flex-col rounded-[8px] border border-line bg-white/[0.045] p-6 backdrop-blur transition hover:border-signal/[0.45] hover:bg-white/[0.07]"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -7 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-signal/30 bg-signal/10 text-signal">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-steel transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-amberline">{project.type}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-line bg-ink/[0.45] px-3 py-1 text-xs text-steel">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {project.details.map((detail) => (
                  <div key={detail} className="flex gap-3 text-sm leading-6 text-steel">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amberline" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              {project.links.length > 0 ? (
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.links.map((link) => (
                    <InlineLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </div>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </MotionSection>
  );
}

function Education() {
  const Icon = education.icon as IconType;

  return (
    <MotionSection id="education">
      <SectionIntro
        eyebrow="Education"
        title="Academic background."
        text="Computer science and business systems foundation from Thapar Institute of Engineering and Technology."
      />
      <motion.article
        className="relative overflow-hidden rounded-[8px] border border-line bg-panel/70 p-6 shadow-card backdrop-blur sm:p-8"
        whileHover={{ y: -5 }}
      >
        <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-signal/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-[8px] border border-signal/30 bg-signal/10 text-signal">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">{education.degree}</h3>
              <p className="mt-2 text-muted">{education.school}</p>
              <p className="mt-2 text-sm text-steel">{education.location}</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:min-w-72">
            <div className="rounded-[8px] border border-line bg-white/[0.045] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-amberline">Period</p>
              <p className="mt-2 text-sm font-semibold text-white">{education.period}</p>
            </div>
            <div className="rounded-[8px] border border-line bg-white/[0.045] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-amberline">Score</p>
              <p className="mt-2 text-sm font-semibold text-white">{education.cgpa}</p>
            </div>
          </div>
        </div>
      </motion.article>
    </MotionSection>
  );
}

function Skills() {
  return (
    <MotionSection id="skills">
      <SectionIntro
        eyebrow="Skills"
        title="Technical skills."
        text="The stack I use across frontend, backend, databases, and AI workflows."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title} className="rounded-[8px] border border-line bg-panel/70 p-6 backdrop-blur">
            <h3 className="font-display text-xl font-bold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-white/[0.12] bg-white/[0.055] px-4 py-2 text-sm text-muted"
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.32, delay: groupIndex * 0.05 + skillIndex * 0.025 }}
                  whileHover={{ y: -3, color: "#ffffff", borderColor: "rgba(112,240,200,.55)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

function Achievements() {
  return (
    <MotionSection id="achievements">
      <SectionIntro
        eyebrow="Achievements and hobbies"
        title="A few things outside the job description."
        text="Recognition, academic strengths, and personal interests that say a little more about how I think."
      />
      <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((card) => {
            const Icon = card.icon as IconType;
            return (
              <motion.div
                key={card.title}
                className="rounded-[8px] border border-line bg-white/[0.045] p-6 backdrop-blur"
                whileHover={{ y: -5, borderColor: "rgba(112,240,200,.45)" }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-signal/10 text-signal">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="rounded-[8px] border border-line bg-panel/70 p-6 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amberline">Hobbies</p>
          <div className="mt-5 space-y-4">
            {hobbies.map((item) => {
              const Icon = item.icon as IconType;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-[8px] border border-white/[0.1] bg-white/[0.045] p-5"
                  whileHover={{ x: 4, borderColor: "rgba(246,193,119,.45)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-amberline/10 text-amberline">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-steel">{item.text}</p>
                      {"link" in item && item.link ? (
                        <div className="mt-3">
                          <InlineLink href={item.link.href} label={item.link.label} />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function Contact() {
  return (
    <MotionSection id="contact" className="pb-24">
      <div className="relative overflow-hidden rounded-[8px] border border-line bg-white/[0.055] p-6 shadow-card backdrop-blur sm:p-10 lg:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full bg-signal/15 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">Contact</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              Contact Varun Garg.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Reach out for full-stack, backend, AI product, or platform engineering conversations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href={`mailto:${contact.email}`}>
              <Mail className="h-4 w-4" />
              Email
            </MagneticButton>
            <MagneticButton href={contact.linkedin} variant="secondary">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
            <MagneticButton href={contact.github} variant="secondary">
              <Github className="h-4 w-4" />
              GitHub
            </MagneticButton>
            <MagneticButton href={contact.leetcode} variant="secondary">
              <SquareCode className="h-4 w-4" />
              LeetCode
            </MagneticButton>
            <MagneticButton href={contact.resume} variant="secondary">
              <Download className="h-4 w-4" />
              Resume
            </MagneticButton>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-signal"
      style={{ scaleX, opacity }}
    />
  );
}

export function Portfolio() {
  return (
    <main className="relative overflow-hidden">
      <AmbientBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
