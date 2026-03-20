import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Leistungen | FLX-Software",
  description: "Leistungen sind auf der Startseite gebündelt.",
};

export default function LeistungenPage() {
  redirect("/#leistungen");
}

