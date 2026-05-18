import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Section } from "./Section";
import { personal } from "@/lib/portfolio-data";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Section
      id="contact"
      label="contact"
      title="Let's Connect"
      description="I am actively seeking internships and opportunities in cybersecurity and cloud security."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
          >
            <div className="h-10 w-10 rounded-md grid place-items-center bg-primary/10 text-primary border border-primary/30">
              <Mail className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium truncate">{personal.email}</p>
            </div>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
          >
            <div className="h-10 w-10 rounded-md grid place-items-center bg-primary/10 text-primary border border-primary/30">
              <Linkedin className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium truncate">dhruv-sharma-a377952ba</p>
            </div>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
          >
            <div className="h-10 w-10 rounded-md grid place-items-center bg-primary/10 text-primary border border-primary/30">
              <Github className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium truncate">dhruvsharma757914-eng</p>
            </div>
          </a>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 rounded-lg border border-border bg-card p-6 space-y-4"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Name
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full h-11 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full h-11 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
              placeholder="Tell me about the opportunity or just say hi…"
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Opening your email…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send message
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}
