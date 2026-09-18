import Link from "next/link";

import ProductFeed from "@/components/product-feed";
import Section from "@/components/section";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-line bg-ink text-paper">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-end gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-20">
          <div className="max-w-3xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              A place for considered things
            </p>
            <h1 className="max-w-3xl text-6xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-8xl">
              Useful things for a life well lived.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-paper/65">
              Fieldwork is a small collection of everyday products made to be used, kept, and
              enjoyed for a long time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                Browse the collection
              </Link>
              <Link
                href="/about"
                className="rounded-sm border border-paper/40 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper"
              >
                Our approach
              </Link>
            </div>
          </div>
          <div className="relative hidden min-h-[30rem] lg:block">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-72 w-72 border border-paper/25 bg-[#69736d]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-10 h-64 w-52 rotate-[-8deg] border-8 border-accent bg-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute right-12 top-24 h-80 w-56 rotate-[8deg] border border-paper/40 bg-paper/10"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-7 right-2 text-[10rem] font-semibold leading-none tracking-[-0.12em] text-paper/10"
            >
              FW
            </span>
          </div>
        </div>
      </section>

      <Section
        eyebrow="The collection"
        title="Made to earn its place"
        description="Objects with a clear purpose, a generous lifespan, and enough personality to make the everyday feel considered."
      >
        <ProductFeed products={products.slice(0, 3)} />
        <div className="mt-12">
          <Link
            href="/products"
            className="text-sm font-semibold text-accent-deep underline decoration-accent underline-offset-4 hover:text-ink"
          >
            See all products
          </Link>
        </div>
      </Section>

      <section className="bg-surface-muted">
        <Section
          eyebrow="A better rhythm"
          title="Less noise. More useful."
          description="We believe the things around us can make space for better habits, clearer thinking, and the small rituals that keep a day moving."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Thoughtful by default", "We edit carefully so you can choose confidently."],
              ["02", "Built for repeat use", "Good materials and simple forms make products last."],
              ["03", "Small details, felt daily", "The right texture, weight, and shape matter."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t border-line pt-5">
                <span className="text-sm font-semibold text-accent-deep">{number}</span>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{text}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section eyebrow="Questions, answered" title="A few good things to know">
        <div className="divide-y divide-line border-y border-line">
          {[
            [
              "Where do you ship?",
              "We currently ship across Brazil, with delivery details shown at checkout.",
            ],
            [
              "Can I see the products in person?",
              "Yes. Send us a note and we will share the next studio open day.",
            ],
            [
              "Do you offer wholesale?",
              "We do. Contact us with a little context about your shop and we will reply soon.",
            ],
          ].map(([question, answer]) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold marker:hidden">
                {question}
                <span
                  aria-hidden="true"
                  className="text-2xl font-normal text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-7 text-ink-muted">{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-line bg-surface-muted px-8 py-12 sm:px-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Stay curious
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Find something good for your everyday.
            </h2>
          </div>
          <Link
            href="/products"
            className="shrink-0 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-paper hover:bg-accent-deep"
          >
            Explore products
          </Link>
        </div>
      </section>
    </>
  );
}
