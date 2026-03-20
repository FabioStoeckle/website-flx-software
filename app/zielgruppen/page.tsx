import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Zielgruppen | FLX-Software",
  description:
    "Diese Seite wurde in die Dachmarken-Architektur integriert. Für Projekte und Beispiele: siehe Referenzen.",
};

export default function ZielgruppenPage() {
  // Compatibility: previously used for niche messaging. Now we funnel users to the consolidated references.
  redirect("/referenzen");
}

