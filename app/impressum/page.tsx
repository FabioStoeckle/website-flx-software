import type { Metadata } from "next";
import { Mail, MapPin, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von FLX Software.",
};

const sections = [
  {
    title: "Angaben gemäß § 5 TMG",
    content: (
      <p>
        FLX-Software, Inh. Fabio Stöckle
        <br />
        Winklerstr. 5
        <br />
        78176 Blumberg
        <br />
        Deutschland
      </p>
    ),
  },
  {
    title: "Kontakt",
    content: (
      <p>
        E-Mail:{" "}
        <a href="mailto:info@flx-software.de" className="font-medium text-flx-cyan hover:underline">
          info@flx-software.de
        </a>
      </p>
    ),
  },
  {
    title: "Verantwortlich für den Inhalt",
    content: (
      <p>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        <br />
        Fabio Stöckle
        <br />
        Winklerstr. 5
        <br />
        78176 Blumberg
        <br />
        Deutschland
      </p>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_30%,rgba(255,255,255,0.04)_30.3%,transparent_31%)]" />
        <div className="absolute right-[-14%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">Rechtliche Angaben zu FLX-Software.</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Impressum
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Hier findest du Anbieterkennzeichnung, Kontakt und die verantwortliche Person für diese Website.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-7 hidden h-[86%] w-[74%] -skew-x-12 border border-flx-cyan/30 bg-flx-cyan/10 lg:block" />
            <div className="relative flx-angle-card bg-white p-6 text-slate-950 shadow-2xl shadow-flx-cyan/10">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <Scale className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flx-cyan">FLX-Software</p>
                  <h2 className="text-2xl font-semibold">Fabio Stöckle</h2>
                </div>
              </div>
              <div className="mt-5 space-y-4">
                <div className="flex gap-3 rounded-lg bg-slate-100 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-flx-cyan" />
                  <span>Winklerstr. 5, 78176 Blumberg</span>
                </div>
                <div className="flex gap-3 rounded-lg bg-slate-100 p-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-flx-cyan" />
                  <a href="mailto:info@flx-software.de" className="font-medium hover:text-flx-cyan">
                    info@flx-software.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="flx-angle-card bg-white p-6 shadow-lg shadow-slate-900/10">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <div className="mt-4 leading-relaxed text-slate-700">{section.content}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flx-angle-card bg-white p-7 shadow-lg shadow-slate-900/10">
            <h2 className="text-3xl font-semibold">Haftungsausschluss</h2>

            <div className="mt-6 space-y-7 leading-relaxed text-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Haftung für Inhalte</h3>
                <p className="mt-3">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mt-3">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-950">Haftung für Links</h3>
                <p className="mt-3">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="mt-3">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
                  Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                  umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-950">Urheberrecht</h3>
                <p className="mt-3">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="mt-3">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                  Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
                  um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                  umgehend entfernen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
