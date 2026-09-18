import Link from "next/link";

import MobileMenu from "@/components/mobile-menu";

const navigation = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="Fieldwork home">
          <span className="flex size-9 items-center justify-center rounded-sm bg-accent text-sm font-bold text-paper transition-transform group-hover:-rotate-3">
            F
          </span>
          <span className="text-lg font-semibold tracking-tight">Fieldwork</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent py-1 text-sm font-medium text-ink-muted transition-colors hover:border-accent hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
          >
            Explore
          </Link>
        </nav>

        <MobileMenu items={navigation} />
      </div>
    </header>
  );
}
