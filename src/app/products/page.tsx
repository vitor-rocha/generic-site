import type { Metadata } from "next";

import Breadcrumb from "@/components/breadcrumb";
import ProductFeed from "@/components/product-feed";
import Section from "@/components/section";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the Fieldwork collection of useful everyday products.",
};

export default function Products() {
  return (
    <Section>
      <Breadcrumb items={[{ label: "Products" }]} />
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
          The collection
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
          Things worth keeping around.
        </h1>
        <p className="mt-6 text-lg leading-8 text-ink-muted">
          A considered edit of tools, objects, and small comforts for the rhythm of everyday life.
        </p>
      </div>
      <ProductFeed products={products} />
    </Section>
  );
}
