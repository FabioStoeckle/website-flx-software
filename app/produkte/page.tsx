import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Produkte | FLX-Software",
  description: "Produkte & Lösungen sind auf der Startseite übersichtlich gebündelt.",
};

export default function ProduktePage() {
  redirect("/#produkte");
}

