"use client";

import { useState, useMemo } from "react";

// ── Beitragssätze & Grenzen 2025 ─────────────────────────────────────────────

const GFB          = 12096;   // Grundfreibetrag
const ANP          = 1230;    // Arbeitnehmer-Pauschbetrag
const SOPA         = 36;      // Sonderausgaben-Pauschbetrag
const EAB          = 4260;    // Entlastungsbetrag Alleinerziehende (Klasse II)
const RV_AN        = 0.0930;  // Rentenversicherung Arbeitnehmer
const ALV_AN       = 0.0130;  // Arbeitslosenversicherung Arbeitnehmer
const KV_AN        = 0.0730;  // Krankenversicherung Arbeitnehmer (Hälfte von 14,6 %)
const PV_BASE      = 0.0180;  // Pflegeversicherung Basisanteil (2025: 3,6 % gesamt)
const PV_KINDERLOS = 0.0060;  // Pflegeversicherung Kinderlosenzuschlag
const PV_SACHSEN   = 0.0050;  // Pflegeversicherung Sachsen-Sonderregelung
const BBG_RV       = 7600;    // Beitragsbemessungsgrenze RV/ALV monatlich
const BBG_KV       = 5512.50; // Beitragsbemessungsgrenze KV/PV monatlich
const SOLI_FREI    = 18130;   // Soli-Freigrenze jährlich (Kl. I/II/IV/V/VI)
const SOLI_FREI_3  = 36260;   // Soli-Freigrenze Steuerklasse III

// ── Steuerformel §32a EStG 2025 ──────────────────────────────────────────────

function grundsteuer(zvE: number): number {
  if (zvE <= 12096) return 0;
  if (zvE <= 17443) {
    const y = (zvE - 12096) / 10000;
    return Math.floor((979.18 * y + 1400) * y);
  }
  if (zvE <= 66760) {
    const z = (zvE - 17443) / 10000;
    return Math.floor((192.59 * z + 2397) * z + 966.53);
  }
  if (zvE <= 277825) return Math.floor(0.42 * zvE - 10911.92);
  return Math.floor(0.45 * zvE - 19246.67);
}

// Vorsorgepauschale §39b Abs. 2 Satz 5 Nr. 3 EStG
function calcVSP(bruttoJaehrlich: number, kvJaehrlich: number, pvJaehrlich: number): number {
  const rvVSP = RV_AN * Math.min(bruttoJaehrlich, BBG_RV * 12);
  const kvVSP = Math.max(
    Math.min(0.12 * bruttoJaehrlich, 13680),
    kvJaehrlich + pvJaehrlich,
  );
  return Math.round(rvVSP + kvVSP);
}

function calcLohnsteuer(bruttoJaehrlich: number, klasse: number, vsp: number): number {
  switch (klasse) {
    case 1:
    case 4:
      return grundsteuer(Math.max(0, bruttoJaehrlich - ANP - SOPA - vsp));
    case 2:
      return grundsteuer(Math.max(0, bruttoJaehrlich - ANP - SOPA - vsp - EAB));
    case 3: {
      const zvE = Math.max(0, bruttoJaehrlich - 2 * ANP - 2 * SOPA - 2 * vsp);
      return zvE <= 0 ? 0 : grundsteuer(zvE / 2) * 2;
    }
    case 5:
      return grundsteuer(Math.max(0, bruttoJaehrlich - SOPA - vsp + GFB));
    case 6:
      return grundsteuer(Math.max(0, bruttoJaehrlich - SOPA - vsp + GFB));
    default:
      return grundsteuer(Math.max(0, bruttoJaehrlich - ANP - SOPA - vsp));
  }
}

function calcSoli(lstJahr: number, klasse: number): number {
  const frei = klasse === 3 ? SOLI_FREI_3 : SOLI_FREI;
  if (lstJahr <= frei) return 0;
  return Math.min(lstJahr * 0.055, (lstJahr - frei) * 0.119);
}

function calcPvRate(kinder: number, bundesland: string, alter: number): number {
  let rate: number;
  if (alter < 23) {
    rate = PV_BASE;
  } else if (kinder >= 5)     rate = PV_BASE - 0.0100;
  else if (kinder === 4) rate = PV_BASE - 0.0075;
  else if (kinder === 3) rate = PV_BASE - 0.0050;
  else if (kinder === 2) rate = PV_BASE - 0.0025;
  else if (kinder === 1) rate = PV_BASE;
  else                   rate = PV_BASE + PV_KINDERLOS;
  if (bundesland === "sn") rate += PV_SACHSEN;
  return rate;
}

// ── Hauptrechnung ────────────────────────────────────────────────────────────

interface Ergebnis {
  brutto: number;
  rv: number;
  alv: number;
  kv: number;
  pv: number;
  lst: number;
  soli: number;
  kist: number;
  netto: number;
}

function berechne(p: {
  brutto: number;
  klasse: number;
  bundesland: string;
  kirchensteuer: boolean;
  kvTyp: "gkv" | "pkv";
  kvZusatz: number;
  pkvBetrag: number;
  kinder: number;
  alter: number;
}): Ergebnis {
  const rv  = Math.min(p.brutto, BBG_RV) * RV_AN;
  const alv = Math.min(p.brutto, BBG_RV) * ALV_AN;

  const kvBasis = Math.min(p.brutto, BBG_KV);
  const kv = p.kvTyp === "gkv"
    ? kvBasis * (KV_AN + p.kvZusatz / 200)
    : p.pkvBetrag;
  const pv = p.kvTyp === "gkv"
    ? kvBasis * calcPvRate(p.kinder, p.bundesland, p.alter)
    : 0;

  const vsp = calcVSP(p.brutto * 12, kv * 12, pv * 12);
  const lstJahr = calcLohnsteuer(p.brutto * 12, p.klasse, vsp);
  const lst  = lstJahr / 12;
  const soli = calcSoli(lstJahr, p.klasse) / 12;

  const kistSatz = p.bundesland === "by" || p.bundesland === "bw" ? 0.08 : 0.09;
  const kist = p.kirchensteuer ? lst * kistSatz : 0;

  const netto = Math.max(0, p.brutto - rv - alv - kv - pv - lst - soli - kist);
  return { brutto: p.brutto, rv, alv, kv, pv, lst, soli, kist, netto };
}

// ── Hilfsfunktionen ──────────────────────────────────────────────────────────

const BUNDESLAENDER = [
  { value: "bw", label: "Baden-Württemberg" },
  { value: "by", label: "Bayern" },
  { value: "be", label: "Berlin" },
  { value: "bb", label: "Brandenburg" },
  { value: "hb", label: "Bremen" },
  { value: "hh", label: "Hamburg" },
  { value: "he", label: "Hessen" },
  { value: "mv", label: "Mecklenburg-Vorpommern" },
  { value: "ni", label: "Niedersachsen" },
  { value: "nw", label: "Nordrhein-Westfalen" },
  { value: "rp", label: "Rheinland-Pfalz" },
  { value: "sl", label: "Saarland" },
  { value: "sn", label: "Sachsen" },
  { value: "st", label: "Sachsen-Anhalt" },
  { value: "sh", label: "Schleswig-Holstein" },
  { value: "th", label: "Thüringen" },
];

function euro(n: number): string {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

// ── Komponente ───────────────────────────────────────────────────────────────

export function GehaltRechner() {
  const [bruttoInput, setBruttoInput] = useState("3000");
  const [eingabeModus, setEingabeModus] = useState<"monat" | "jahr">("monat");
  const [klasse, setKlasse] = useState(1);
  const [bundesland, setBundesland] = useState("nw");
  const [kirchensteuer, setKirchensteuer] = useState(false);
  const [kvTyp, setKvTyp] = useState<"gkv" | "pkv">("gkv");
  const [kvZusatz, setKvZusatz] = useState("1.7");
  const [pkvBetrag, setPkvBetrag] = useState("300");
  const [kinder, setKinder] = useState(0);
  const [alter, setAlter] = useState(30);
  const [ansicht, setAnsicht] = useState<"monat" | "jahr">("monat");

  const bruttoMonatlich = useMemo(() => {
    const val = parseFloat(bruttoInput.replace(",", ".")) || 0;
    return eingabeModus === "jahr" ? val / 12 : val;
  }, [bruttoInput, eingabeModus]);

  const ergebnis = useMemo(() =>
    berechne({
      brutto: bruttoMonatlich,
      klasse,
      bundesland,
      kirchensteuer,
      kvTyp,
      kvZusatz: parseFloat(kvZusatz) || 0,
      pkvBetrag: parseFloat(pkvBetrag) || 0,
      kinder,
      alter,
    }),
    [bruttoMonatlich, klasse, bundesland, kirchensteuer, kvTyp, kvZusatz, pkvBetrag, kinder, alter]
  );

  const faktor = ansicht === "jahr" ? 12 : 1;
  const nettoQuote = ergebnis.brutto > 0
    ? Math.round((ergebnis.netto / ergebnis.brutto) * 100)
    : 0;

  const STEUERKLASSEN = [
    { nr: 1, label: "I",   hint: "Ledig / getrennt" },
    { nr: 2, label: "II",  hint: "Alleinerziehend" },
    { nr: 3, label: "III", hint: "Verheiratet (Hauptverdiener)" },
    { nr: 4, label: "IV",  hint: "Verheiratet (beide berufstätig)" },
    { nr: 5, label: "V",   hint: "Verheiratet (Geringverdiener)" },
    { nr: 6, label: "VI",  hint: "Zweites Arbeitsverhältnis" },
  ];

  const posten: { label: string; wert: number; show: boolean }[] = [
    { label: "Rentenversicherung",       wert: ergebnis.rv,   show: true },
    { label: "Arbeitslosenversicherung", wert: ergebnis.alv,  show: true },
    { label: kvTyp === "gkv" ? "Krankenversicherung (GKV)" : "Krankenversicherung (PKV)",
      wert: ergebnis.kv,  show: true },
    { label: "Pflegeversicherung",       wert: ergebnis.pv,   show: kvTyp === "gkv" },
    { label: "Lohnsteuer",               wert: ergebnis.lst,  show: true },
    { label: "Solidaritätszuschlag",     wert: ergebnis.soli, show: ergebnis.soli > 0 },
    { label: "Kirchensteuer",            wert: ergebnis.kist, show: kirchensteuer },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

      {/* Eingaben */}
      <div className="order-2 lg:order-1 lg:col-span-3 space-y-4">

        {/* Gehalt */}
        <div className="glass rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-white">Bruttogehalt</h2>
            <div className="flex rounded-xl overflow-hidden border border-white/10 text-sm">
              {(["monat", "jahr"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setEingabeModus(m)}
                  className={`px-3 py-1.5 transition-colors ${eingabeModus === m ? "bg-flx-cyan text-white" : "bg-white/5 text-gray-400 hover:text-white"}`}
                >
                  {m === "monat" ? "Monatlich" : "Jährlich"}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <input
              type="number"
              min={0}
              value={bruttoInput}
              onChange={(e) => setBruttoInput(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-white text-xl font-light focus:outline-none focus:border-flx-cyan"
              placeholder="3000"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">€</span>
          </div>
          {eingabeModus === "jahr" && bruttoMonatlich > 0 && (
            <p className="mt-2 text-xs text-gray-500">
              entspricht {euro(bruttoMonatlich)} monatlich
            </p>
          )}
        </div>

        {/* Steuer */}
        <div className="glass rounded-2xl border border-white/10 p-6">
          <h2 className="text-lg font-medium text-white mb-4">Steuer</h2>

          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 mb-2 block">Steuerklasse</label>
              <div className="grid grid-cols-6 gap-1.5">
                {STEUERKLASSEN.map((sk) => (
                  <div key={sk.nr} className="group relative">
                    <button
                      onClick={() => setKlasse(sk.nr)}
                      className={`w-full py-2 rounded-xl text-sm font-medium transition-colors ${
                        klasse === sk.nr
                          ? "bg-flx-cyan text-white"
                          : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {sk.label}
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 pointer-events-none">
                      <div className="bg-gray-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-gray-300 whitespace-nowrap shadow-xl">
                        {sk.hint}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-2 block">Bundesland</label>
              <select
                value={bundesland}
                onChange={(e) => setBundesland(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-flx-cyan appearance-none cursor-pointer"
              >
                {BUNDESLAENDER.map((bl) => (
                  <option key={bl.value} value={bl.value} className="bg-gray-900">
                    {bl.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-300">Kirchensteuer</span>
                <p className="text-xs text-gray-500 mt-0.5">
                  {bundesland === "by" || bundesland === "bw" ? "8 % der Lohnsteuer" : "9 % der Lohnsteuer"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setKirchensteuer(!kirchensteuer)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${kirchensteuer ? "bg-flx-cyan" : "bg-white/20"}`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform transition duration-200 ease-in-out ${kirchensteuer ? "translate-x-5" : "translate-x-0"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Krankenversicherung */}
        <div className="glass rounded-2xl border border-white/10 p-6">
          <h2 className="text-lg font-medium text-white mb-4">Krankenversicherung</h2>

          <div className="space-y-4">
            <div className="flex gap-2">
              {(["gkv", "pkv"] as const).map((typ) => (
                <button
                  key={typ}
                  onClick={() => setKvTyp(typ)}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                    kvTyp === typ
                      ? "bg-flx-cyan text-white"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {typ.toUpperCase()}
                </button>
              ))}
            </div>

            {kvTyp === "gkv" ? (
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">
                  Zusatzbeitrag der Krankenkasse (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    max={5}
                    step={0.1}
                    value={kvZusatz}
                    onChange={(e) => setKvZusatz(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pr-10 text-white text-sm focus:outline-none focus:border-flx-cyan"
                    placeholder="1.7"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  Durchschnitt 2025 ca. 1,7 %. Du zahlst die Hälfte davon.
                </p>
              </div>
            ) : (
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">
                  Dein monatlicher PKV-Beitrag (nach Arbeitgeberzuschuss)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    value={pkvBetrag}
                    onChange={(e) => setPkvBetrag(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pr-10 text-white text-sm focus:outline-none focus:border-flx-cyan"
                    placeholder="300"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  Pflegeversicherung ist bei PKV in der Prämie enthalten.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Familie & Alter */}
        <div className="glass rounded-2xl border border-white/10 p-6">
          <h2 className="text-lg font-medium text-white mb-4">Familie & Alter</h2>

          <div className="space-y-5">
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Alter</label>
              <div className="relative">
                <input
                  type="number"
                  min={16}
                  max={99}
                  value={alter}
                  onChange={(e) => {
                    const v = parseInt(e.target.value) || 16;
                    setAlter(Math.max(16, Math.min(99, v)));
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pr-16 text-white text-sm focus:outline-none focus:border-flx-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Jahre</span>
              </div>
              {alter < 23 && (
                <p className="text-xs text-gray-500 mt-1.5">
                  Unter 23: kein Kinderlosenzuschlag auf die Pflegeversicherung.
                </p>
              )}
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Kinder</label>
              <p className="text-xs text-gray-500 mb-3">Beeinflusst den Pflegeversicherungsbeitrag</p>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setKinder(n)}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                      kinder === n
                        ? "bg-flx-cyan text-white"
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {n === 5 ? "5+" : n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ergebnis */}
      <div className="order-1 lg:order-2 lg:col-span-2">
        <div className="lg:sticky lg:top-24 space-y-4">

          {/* Netto-Karte */}
          <div className="glass rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-white">Nettolohn</h2>
              <div className="flex rounded-xl overflow-hidden border border-white/10 text-xs">
                {(["monat", "jahr"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setAnsicht(m)}
                    className={`px-3 py-1.5 transition-colors ${ansicht === m ? "bg-flx-cyan text-white" : "bg-white/5 text-gray-400 hover:text-white"}`}
                  >
                    {m === "monat" ? "Monat" : "Jahr"}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-4xl font-light text-white">
              {euro(ergebnis.netto * faktor)}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              von {euro(ergebnis.brutto * faktor)} brutto
            </div>

            {/* Balken */}
            <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-flx-cyan to-flx-blue rounded-full transition-all duration-300"
                style={{ width: `${nettoQuote}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5 text-xs text-gray-500">
              <span>{nettoQuote} % Netto</span>
              <span>{100 - nettoQuote} % Abzüge</span>
            </div>
          </div>

          {/* Aufschlüsselung */}
          <div className="glass rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-medium text-white mb-4">Aufschlüsselung</h2>

            <div className="space-y-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Bruttogehalt</span>
                <span className="text-white font-medium">{euro(ergebnis.brutto * faktor)}</span>
              </div>

              <div className="border-t border-white/10 my-2" />

              {posten.filter((p) => p.show).map((p) => (
                <div key={p.label} className="flex justify-between text-sm">
                  <span className="text-gray-400">{p.label}</span>
                  <span className="text-red-400 tabular-nums">
                    -{euro(p.wert * faktor)}
                  </span>
                </div>
              ))}

              <div className="border-t border-white/10 my-2" />

              <div className="flex justify-between text-sm font-medium">
                <span className="text-white">Nettogehalt</span>
                <span className="text-flx-cyan tabular-nums">{euro(ergebnis.netto * faktor)}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600 text-center px-2 leading-relaxed">
            Berechnung auf Basis der Sätze 2025. Ohne Gewähr. Für verbindliche Auskünfte bitte Steuerberater kontaktieren.
          </p>
        </div>
      </div>
    </div>
  );
}
