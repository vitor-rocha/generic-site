import Link from "next/link";

import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article id={product.slug} className="group flex flex-col">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-sm border border-line ${product.color}`}
      >
        <span className="absolute left-4 top-4 border border-ink/25 bg-paper/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink backdrop-blur">
          {product.category}
        </span>
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-3/4 w-3/4 border-l border-t border-ink/15 bg-white/20 transition-transform duration-500 group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-5 left-5 text-6xl font-semibold tracking-[-0.08em] text-ink/20"
        >
          {product.mark}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">{product.name}</h3>
          <p className="mt-1 text-sm leading-6 text-ink-muted">{product.description}</p>
        </div>
        <span className="shrink-0 text-sm font-medium text-ink-muted">{product.price}</span>
      </div>
      <Link
        href={`/products#${product.slug}`}
        className="mt-4 text-sm font-semibold text-accent underline decoration-accent underline-offset-4 transition-colors hover:text-accent-deep"
      >
        View product
      </Link>
    </article>
  );
}
