"use client";

import { useState, useMemo } from "react";
import { Info } from "lucide-react";

// ── Konstanten §9 KraftStG ────────────────────────────────────────────────────

const HUBRAUM_BENZIN = 2.00;   // €/angefangene 100 ccm, Benzin/Hybrid/LPG
const HUBRAUM_DIESEL = 9.50;   // €/angefangene 100 ccm, Diesel

// CO₂-Freigrenzen je Erstzulassungsjahr
function co2Freigrenze(jahr: number): number {
  if (jahr >= 2014) return 95;
  if (jahr >= 2012) return 110;
  return 120; // 2009–2011
}

// Staffelsätze CO₂-Anteil (je g/km über Freigrenze)
const CO2_BANDEN = [
  { breite: 20, satz: 2.00 },
  { breite: 20, satz: 2.20 },
  { breite: 20, satz: 2.50 },
  { breite: 20, satz: 2.90 },
  { breite: 20, satz: 3.40 },
  { breite: Infinity, satz: 4.00 },
];

function calcCO2Anteil(co2: number, jahr: number): number {
  let ueber = Math.max(0, co2 - co2Freigrenze(jahr));
  if (ueber === 0) return 0;
  let steuer = 0;
  for (const band of CO2_BANDEN) {
    if (ueber <= 0) break;
    const inBand = band.breite === Infinity ? ueber : Math.min(ueber, band.breite);
    steuer += inBand * band.satz;
    ueber -= inBand;
  }
  return steuer;
}

// ── Typen ─────────────────────────────────────────────────────────────────────

type Kraftstoff = "benzin" | "diesel" | "hybrid" | "lpg" | "elektro";

const KRAFTSTOFFE: { value: Kraftstoff; label: string }[] = [
  { value: "benzin",  label: "Benzin" },
  { value: "diesel",  label: "Diesel" },
  { value: "hybrid",  label: "Hybrid" },
  { value: "lpg",     label: "LPG / CNG" },
  { value: "elektro", label: "Elektro" },
];

interface Ergebnis {
  hubraumAnteil: number;
  co2Anteil: number;
  gesamt: number;
  befreit: boolean;
  neuesRecht: boolean;
}

function berechne(kraftstoff: Kraftstoff, hubraum: number, co2: number, jahr: number): Ergebnis {
  if (kraftstoff === "elektro") {
    return { hubraumAnteil: 0, co2Anteil: 0, gesamt: 0, befreit: true, neuesRecht: true };
  }

  const neuesRecht = jahr >= 2009;

  if (!neuesRecht) {
    // Vereinfacht ohne Schadstoffklasse (Euro 3+)
    const satz = kraftstoff === "diesel" ? 15.44 : 6.75;
    const hubraumAnteil = Math.ceil(hubraum / 100) * satz;
    return { hubraumAnteil, co2Anteil: 0, gesamt: hubraumAnteil, befreit: false, neuesRecht: false };
  }

  const hubraumSatz = kraftstoff === "diesel" ? HUBRAUM_DIESEL : HUBRAUM_BENZIN;
  const hubraumAnteil = Math.ceil(hubraum / 100) * hubraumSatz;
  const co2Anteil = calcCO2Anteil(co2, jahr);
  return { hubraumAnteil, co2Anteil, gesamt: hubraumAnteil + co2Anteil, befreit: false, neuesRecht: true };
}

function euro(n: number): string {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

// ── Komponente ────────────────────────────────────────────────────────────────

export function KfzRechner() {
  const [kraftstoff, setKraftstoff] = useState<Kraftstoff>("benzin");
  const [hubraumInput, setHubraumInput] = useState("1400");
  const [co2Input, setCo2Input] = useState("130");
  const [jahrInput, setJahrInput] = useState("2018");

  const hubraum = parseInt(hubraumInput) || 0;
  const co2     = parseInt(co2Input) || 0;
  const jahr    = parseInt(jahrInput) || 2018;

  const ergebnis = useMemo(
    () => berechne(kraftstoff, hubraum, co2, jahr),
    [kraftstoff, hubraum, co2, jahr],
  );

  const freigrenze   = co2Freigrenze(jahr);
  const co2Ueber     = Math.max(0, co2 - freigrenze);
  const hubraumQuote = ergebnis.gesamt > 0
    ? Math.round((ergebnis.hubraumAnteil / ergebnis.gesamt) * 100)
    : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

      {/* Eingaben */}
      <div className="order-2 lg:order-1 lg:col-span-3 space-y-4">

        {/* Kraftstoffart */}
        <div className="flx-tool-card">
          <h2 className="text-lg font-medium text-white mb-3">Kraftstoffart</h2>
          <div className="grid grid-cols-5 gap-2">
            {KRAFTSTOFFE.map((k) => (
              <button
                key={k.value}
                onClick={() => setKraftstoff(k.value)}
                className={`py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  kraftstoff === k.value
                    ? "bg-flx-cyan text-white"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>
          {kraftstoff === "elektro" && (
            <p className="mt-3 text-xs text-gray-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 flex-shrink-0" />
              Elektrofahrzeuge sind aktuell bis mindestens 2030 von der Kfz-Steuer befreit.
            </p>
          )}
        </div>

        {/* Fahrzeugdaten */}
        {kraftstoff !== "elektro" && (
          <div className="flx-tool-card">
            <h2 className="text-lg font-medium text-white mb-4">Fahrzeugdaten</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Hubraum</label>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    max={10000}
                    value={hubraumInput}
                    onChange={(e) => setHubraumInput(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-16 text-white text-xl font-light focus:outline-none focus:border-flx-cyan"
                    placeholder="1400"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">ccm</span>
                </div>
                <p className="mt-1.5 text-xs text-gray-500">
                  Steht im Fahrzeugschein unter Feld P.1 (Hubraum).
                </p>
              </div>

              {ergebnis.neuesRecht && (
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">CO₂-Ausstoß</label>
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      max={500}
                      value={co2Input}
                      onChange={(e) => setCo2Input(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-16 text-white text-xl font-light focus:outline-none focus:border-flx-cyan"
                      placeholder="130"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">g/km</span>
                  </div>
                  <p className="mt-1.5 text-xs text-gray-500">
                    Steht im Fahrzeugschein unter Feld V.7 (CO₂-Emission).
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Erstzulassung */}
        <div className="flx-tool-card">
          <h2 className="text-lg font-medium text-white mb-3">Erstzulassung</h2>
          <div className="relative">
            <input
              type="number"
              min={1990}
              max={2026}
              value={jahrInput}
              onChange={(e) => setJahrInput(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-16 text-white text-xl font-light focus:outline-none focus:border-flx-cyan"
              placeholder="2018"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Jahr</span>
          </div>

          {ergebnis.neuesRecht && kraftstoff !== "elektro" && (
            <p className="mt-2 text-xs text-gray-500">
              CO₂-Freigrenze für {jahr}: {freigrenze} g/km
            </p>
          )}
          {!ergebnis.neuesRecht && (
            <p className="mt-2 text-xs text-flx-cyan/70 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 flex-shrink-0" />
              Altes Recht (vor 2009): nur Hubraum-Anteil, Schadstoffklasse nicht berücksichtigt.
            </p>
          )}
        </div>
      </div>

      {/* Ergebnis */}
      <div className="order-1 lg:order-2 lg:col-span-2">
        <div className="lg:sticky lg:top-24 space-y-4">

          {/* Hauptkarte */}
          <div className="flx-tool-card">
            <h2 className="text-lg font-medium text-white mb-4">Kfz-Steuer</h2>

            {ergebnis.befreit ? (
              <div className="py-2">
                <div className="text-4xl font-light text-flx-cyan">0,00 €</div>
                <div className="mt-1 text-sm text-gray-400">pro Jahr</div>
                <div className="mt-3 text-xs text-gray-500">
                  Elektrofahrzeuge sind steuerbefreit bis mindestens 2030.
                </div>
              </div>
            ) : (
              <>
                <div className="text-4xl font-light text-white">
                  {euro(ergebnis.gesamt)}
                </div>
                <div className="text-sm text-gray-400 mt-1">pro Jahr</div>

                <div className="mt-2 text-2xl font-light text-gray-300">
                  {euro(ergebnis.gesamt / 12)}
                  <span className="text-sm text-gray-500 ml-2 font-normal">pro Monat</span>
                </div>

                {ergebnis.neuesRecht && ergebnis.gesamt > 0 && (
                  <>
                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-flx-cyan to-flx-blue rounded-full transition-all duration-300"
                        style={{ width: `${hubraumQuote}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                      <span>{hubraumQuote} % Hubraum</span>
                      <span>{100 - hubraumQuote} % CO₂</span>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Aufschlüsselung */}
          {!ergebnis.befreit && (
            <div className="flx-tool-card">
              <h2 className="text-lg font-medium text-white mb-4">Aufschlüsselung</h2>
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Hubraum-Anteil</span>
                  <span className="text-white tabular-nums">{euro(ergebnis.hubraumAnteil)}</span>
                </div>
                {ergebnis.neuesRecht && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CO₂-Anteil</span>
                    <span className="text-white tabular-nums">{euro(ergebnis.co2Anteil)}</span>
                  </div>
                )}
                <div className="border-t border-white/10 my-2" />
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-white">Gesamt jährlich</span>
                  <span className="text-flx-cyan tabular-nums">{euro(ergebnis.gesamt)}</span>
                </div>
              </div>

              {ergebnis.neuesRecht && (
                <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3 space-y-1.5 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>CO₂-Freigrenze</span>
                    <span>{freigrenze} g/km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CO₂ über Freigrenze</span>
                    <span>{co2Ueber} g/km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hubraum-Satz</span>
                    <span>{kraftstoff === "diesel" ? "9,50" : "2,00"} €/100 ccm</span>
                  </div>
                </div>
              )}
            </div>
          )}

          <p className="text-xs text-gray-600 text-center px-2 leading-relaxed">
            Berechnung nach §9 KraftStG. Ohne Gewähr. Für verbindliche Auskünfte bitte Zulassungsstelle oder Steuerberater kontaktieren.
          </p>
        </div>
      </div>
    </div>
  );
}
