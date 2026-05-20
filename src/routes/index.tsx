import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { personal } from "@/lib/portfolio-data";

const title = "Dhruv Sharma — Cybersecurity & Cloud Security Engineer";
const description =
  "Portfolio of Dhruv Sharma — BCA Cyber Security student at IMS Ghaziabad. Ethical hacking, cloud security, Python, Linux, and TryHackMe labs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: personal.name,
          jobTitle: "Cybersecurity & Cloud Security Student",
          email: `mailto:${personal.email}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          sameAs: [personal.linkedin, personal.github],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Experience />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
