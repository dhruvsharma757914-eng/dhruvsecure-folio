import { Section } from "./Section";
import { about } from "@/lib/portfolio-data";
import { GraduationCap, Target, Terminal } from "lucide-react";

const stats = [
  { icon: GraduationCap, title: "Education", text: "BCA Cyber Security — IMS Ghaziabad" },
  { icon: Target, title: "Focus", text: "Ethical Hacking · Cloud Security · Python" },
  { icon: Terminal, title: "Platforms", text: "TryHackMe · Hack The Box · CTFs" },
];

export function About() {
  return (
    <Section id="about" label="about" title="A quick introduction">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
          {about.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="lg:col-span-2 space-y-3">
          {stats.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-border bg-card p-4 flex gap-3 items-start hover:border-primary/40 transition-colors"
            >
              <div className="h-10 w-10 rounded-md grid place-items-center bg-primary/10 text-primary border border-primary/30 shrink-0">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
