import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, label, title, description, children }: Props) {
  return (
    <section id={id} className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="font-mono text-xs text-primary mb-2">&gt; {label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
