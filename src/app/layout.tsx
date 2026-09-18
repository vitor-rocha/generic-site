import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Fieldwork | Useful things, thoughtfully made",
    template: "%s | Fieldwork",
  },
  description: "A flexible landing page starter for thoughtful products and ideas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-paper">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
