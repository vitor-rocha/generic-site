import type { Metadata } from "next";

import Breadcrumb from "@/components/breadcrumb";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Fieldwork team.",
};

export default function Contact() {
  return (
    <Section>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
            Come say hello
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Questions, ideas, good stories?
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink-muted">
            We would like to hear from you. Reach us through the details below and a member of our
            team will get back to you.
          </p>
        </div>
        <div className="grid gap-8 self-end sm:grid-cols-2 lg:grid-cols-1">
          <div className="border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
              Email
            </p>
            <a
              href="mailto:hello@fieldwork.example"
              className="mt-3 block text-lg font-semibold underline decoration-accent underline-offset-4 hover:text-accent-deep"
            >
              hello@fieldwork.example
            </a>
          </div>
          <div className="border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
              Phone
            </p>
            <a
              href="tel:+551140028922"
              className="mt-3 block text-lg font-semibold underline decoration-accent underline-offset-4 hover:text-accent-deep"
            >
              +55 11 4002-8922
            </a>
          </div>
          <div className="border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
              Studio
            </p>
            <p className="mt-3 text-lg font-semibold">
              Rua Harmonia, 797
              <br />
              São Paulo, SP
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
              Hours
            </p>
            <p className="mt-3 text-lg font-semibold">
              Monday to Friday
              <br />
              9:00 to 18:00
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
