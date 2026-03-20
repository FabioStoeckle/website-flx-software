import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Produkt | FLX-Software",
  description: "Produkte sind auf der Startseite gebündelt.",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  redirect("/#produkte");
}

