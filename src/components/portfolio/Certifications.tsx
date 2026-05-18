import { Section } from "./Section";
import { certifications } from "@/lib/portfolio-data";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <Section
      id="certifications"
      label="certifications"
      title="Certifications & workshops"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="h-9 w-9 rounded-md grid place-items-center bg-accent/10 text-accent border border-accent/30">
                <Award className="h-4 w-4" />
              </div>
              {c.inProgress && (
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                  In Progress
                </span>
              )}
            </div>
            <h3 className="font-semibold leading-snug">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            {c.date && !c.inProgress && (
              <p className="mt-2 font-mono text-xs text-primary">{c.date}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
