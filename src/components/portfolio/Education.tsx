import { Section } from "./Section";
import { education } from "@/lib/portfolio-data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" label="education" title="Academic background">
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border" aria-hidden />
        <ul className="space-y-6">
          {education.map((e, i) => (
            <li key={i} className="relative pl-12">
              <span className="absolute left-0 top-1 h-8 w-8 rounded-full grid place-items-center bg-card border border-primary/40 text-primary">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-semibold">{e.institution}</h3>
                  <span className="font-mono text-xs text-primary">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                {e.detail && <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
