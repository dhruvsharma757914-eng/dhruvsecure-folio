import { Section } from "./Section";
import { achievements } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <Section id="achievements" label="achievements" title="Highlights">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors"
          >
            <p className="text-3xl font-bold text-gradient">{a.label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
