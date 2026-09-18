import type { Metadata } from "next";

import Breadcrumb from "@/components/breadcrumb";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Fieldwork chooses and makes useful everyday products.",
};

export default function About() {
  return (
    <>
      <Section>
        <Breadcrumb items={[{ label: "About" }]} />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
              Our approach
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              We make room for the things that make a day feel like yours.
            </h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-ink-muted">
            Fieldwork started with a simple question: what if everyday objects were chosen with the
            same care as the occasional ones?
          </p>
        </div>
      </Section>
      <section className="bg-ink text-paper">
        <Section
          eyebrow="What we believe"
          title="Useful can still be beautiful."
          description="We look for honest materials, calm forms, and details that reveal themselves over time. We work with people who care about making things properly, then we get out of the way and let the products do their work."
        >
          <div className="mt-4 grid gap-8 border-t border-paper/20 pt-8 sm:grid-cols-3">
            {[
              ["01", "Choose less"],
              ["02", "Use often"],
              ["03", "Keep longer"],
            ].map(([number, label]) => (
              <div key={number}>
                <span className="text-sm text-accent">{number}</span>
                <p className="mt-8 text-2xl font-semibold tracking-tight">{label}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
      <Section eyebrow="Behind the work" title="A small team with a wide curiosity.">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-8 text-ink-muted">
            We are designers, makers, writers, and perpetual note-takers based in São Paulo. Our
            studio is a place for testing ideas, sharing good references, and paying attention to
            the details most people rush past.
          </p>
          <p className="text-lg leading-8 text-ink-muted">
            Fieldwork is intentionally small. That lets us stay close to the products, the people
            who make them, and the people who bring them home.
          </p>
        </div>
      </Section>
    </>
  );
}
