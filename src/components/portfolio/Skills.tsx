import { Section } from "./Section";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      label="skills"
      title="Technical toolkit"
      description="Skills built through coursework, certifications, and continuous hands-on practice."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors"
          >
            <h3 className="font-semibold mb-3 text-sm font-mono text-primary">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted border border-border text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
