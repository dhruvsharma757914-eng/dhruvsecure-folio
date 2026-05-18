import { personal } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiTryhackme, SiHackthebox } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} {personal.name} — built with care.
        </div>
        <div className="flex items-center gap-2">
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
              className="h-9 w-9 grid place-items-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
