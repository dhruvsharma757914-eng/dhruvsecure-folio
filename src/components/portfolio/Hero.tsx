import { motion } from "framer-motion";
import { MapPin, Mail, Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { SiTryhackme, SiHackthebox } from "react-icons/si";
import { personal } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>~/whoami</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {personal.name}
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-gradient">
            {personal.headline}
          </p>

          <p className="mt-3 text-sm sm:text-base font-mono text-muted-foreground">
            {personal.subheadline}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {personal.location}
          </div>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border bg-card hover:bg-muted transition-colors font-medium"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: personal.github, icon: Github, label: "GitHub" },
              { href: personal.tryhackme, icon: SiTryhackme, label: "TryHackMe" },
              { href: personal.hackthebox, icon: SiHackthebox, label: "Hack The Box" },
              { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-md border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
