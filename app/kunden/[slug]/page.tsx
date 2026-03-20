import type { Metadata } from "next";
import { redirect } from "next/navigation";
import customersData from "@/data/customers.json";

type CustomerPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return customersData.map((customer) => ({ slug: customer.slug }));
}

export async function generateMetadata({ params }: CustomerPageProps): Promise<Metadata> {
  const customer = customersData.find((c) => c.slug === params.slug);
  if (!customer) return { title: "Projekt nicht gefunden" };
  return { title: customer.name, description: customer.summary };
}

export default function CustomerPage({ params }: CustomerPageProps) {
  // Backwards-compatible route: we moved "kunden" to "referenzen".
  redirect(`/referenzen/${params.slug}`);
}

