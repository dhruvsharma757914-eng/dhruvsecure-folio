import { Section } from "./Section";
import { FileText } from "lucide-react";

const placeholders = [
  { title: "Getting started with TryHackMe", tag: "Cybersecurity" },
  { title: "Cloud security fundamentals on AWS", tag: "Cloud" },
  { title: "Python scripts for everyday automation", tag: "Python" },
];

export function Blog() {
  return (
    <Section
      id="blog"
      label="blog"
      title="Writing — coming soon"
      description="Notes and write-ups on cybersecurity, cloud security, and AI as I learn."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {placeholders.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-dashed border-border bg-card/50 p-5 hover:border-primary/40 transition-colors"
          >
            <div className="h-9 w-9 rounded-md grid place-items-center bg-primary/10 text-primary border border-primary/30 mb-4">
              <FileText className="h-4 w-4" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {p.tag}
            </p>
            <h3 className="mt-1 font-semibold leading-snug">{p.title}</h3>
            <p className="mt-3 text-xs text-muted-foreground">Draft in progress</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
