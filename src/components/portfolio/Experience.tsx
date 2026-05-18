import { Section } from "./Section";
import { experience } from "@/lib/portfolio-data";
import { Check } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      label="experience"
      title="Hands-on learning"
      description="Practical work outside the classroom that builds real cybersecurity intuition."
    >
      <ul className="grid sm:grid-cols-2 gap-3">
        {experience.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-accent/40 transition-colors"
          >
            <span className="h-6 w-6 rounded-md bg-accent/10 text-accent border border-accent/30 grid place-items-center shrink-0">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
