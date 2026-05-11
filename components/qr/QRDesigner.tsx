"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Download, Upload, X } from "lucide-react";

type DotType = "rounded" | "dots" | "classy" | "classy-rounded" | "square" | "extra-rounded";
type CornerSquareType = "dot" | "square" | "extra-rounded";
type CornerDotType = "dot" | "square";

const DOT_STYLES: { value: DotType; label: string }[] = [
  { value: "square", label: "Quadrat" },
  { value: "rounded", label: "Abgerundet" },
  { value: "dots", label: "Punkte" },
  { value: "extra-rounded", label: "Rund" },
  { value: "classy", label: "Klassisch" },
  { value: "classy-rounded", label: "Klassisch R." },
];

const CORNER_SQUARE_STYLES: { value: CornerSquareType; label: string }[] = [
  { value: "square", label: "Quadrat" },
  { value: "dot", label: "Punkt" },
  { value: "extra-rounded", label: "Rund" },
];

const CORNER_DOT_STYLES: { value: CornerDotType; label: string }[] = [
  { value: "square", label: "Quadrat" },
  { value: "dot", label: "Punkt" },
];

export function QRDesigner() {
  const [url, setUrl] = useState("https://flx-software.de");
  const [dotStyle, setDotStyle] = useState<DotType>("rounded");
  const [fgColor, setFgColor] = useState("#006de7");
  const [bgColor, setBgColor] = useState("#0a0f1e");
  const [cornerSquareStyle, setCornerSquareStyle] = useState<CornerSquareType>("extra-rounded");
  const [cornerDotStyle, setCornerDotStyle] = useState<CornerDotType>("dot");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(0.3);
  const [useGradient, setUseGradient] = useState(true);
  const [gradientColor2, setGradientColor2] = useState("#0ea5e9");

  const qrRef = useRef<HTMLDivElement>(null);
  const qrInstance = useRef<any>(null); // qr-code-styling hat keine vollständigen Types
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getQROptions = useCallback(
    () => ({
      width: 300,
      height: 300,
      type: "canvas" as const,
      data: url || "https://flx-software.de",
      image: logoDataUrl ?? undefined,
      dotsOptions: useGradient
        ? {
            type: dotStyle,
            gradient: {
              type: "linear" as const,
              rotation: 0.785,
              colorStops: [
                { offset: 0, color: fgColor },
                { offset: 1, color: gradientColor2 },
              ],
            },
          }
        : { type: dotStyle, color: fgColor },
      backgroundOptions: { color: bgColor },
      cornersSquareOptions: { type: cornerSquareStyle, color: useGradient ? fgColor : fgColor },
      cornersDotOptions: { type: cornerDotStyle, color: useGradient ? gradientColor2 : fgColor },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: logoSize,
        margin: 6,
        crossOrigin: "anonymous" as const,
      },
    }),
    [url, dotStyle, fgColor, bgColor, cornerSquareStyle, cornerDotStyle, logoDataUrl, logoSize, useGradient, gradientColor2],
  );

  useEffect(() => {
    import("qr-code-styling").then(({ default: QRCodeStyling }) => {
      if (!qrRef.current) return;
      while (qrRef.current.firstChild) {
        qrRef.current.removeChild(qrRef.current.firstChild);
      }
      const qr = new QRCodeStyling(getQROptions());
      qr.append(qrRef.current);
      qrInstance.current = qr;
    });
  }, [getQROptions]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setLogoDataUrl(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDownload = async (ext: "png" | "svg") => {
    const { default: QRCodeStyling } = await import("qr-code-styling");
    const highRes = new QRCodeStyling({ ...getQROptions(), width: 1000, height: 1000 });
    highRes.download({ name: "qr-flx-software", extension: ext });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Steuerung */}
      <div className="order-2 lg:order-1 lg:col-span-3 space-y-4">
        {/* Inhalt */}
        <div className="flx-tool-card">
          <h2 className="text-lg font-medium text-white mb-3">Inhalt</h2>
          <textarea
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL oder Text eingeben..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-flx-cyan resize-none text-sm leading-relaxed"
            rows={2}
          />
        </div>

        {/* Punkt-Stil */}
        <div className="flx-tool-card">
          <h2 className="text-lg font-medium text-white mb-3">Punkt-Stil</h2>
          <div className="grid grid-cols-3 gap-2">
            {DOT_STYLES.map((s) => (
              <button
                key={s.value}
                onClick={() => setDotStyle(s.value)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  dotStyle === s.value
                    ? "bg-flx-cyan text-white"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Farben */}
        <div className="flx-tool-card">
          <h2 className="text-lg font-medium text-white mb-4">Farben</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Farbverlauf</span>
              <button
                onClick={() => setUseGradient(!useGradient)}
                className={`relative w-11 h-6 rounded-full transition-colors ${useGradient ? "bg-flx-cyan" : "bg-white/20"}`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${useGradient ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">{useGradient ? "Farbe 1" : "Vordergrund"}</label>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 p-0"
                  />
                  <span className="text-sm text-gray-300 font-mono">{fgColor}</span>
                </div>
              </div>

              {useGradient ? (
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Farbe 2</label>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
                    <input
                      type="color"
                      value={gradientColor2}
                      onChange={(e) => setGradientColor2(e.target.value)}
                      className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 p-0"
                    />
                    <span className="text-sm text-gray-300 font-mono">{gradientColor2}</span>
                  </div>
                </div>
              ) : null}

              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Hintergrund</label>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 p-0"
                  />
                  <span className="text-sm text-gray-300 font-mono">{bgColor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ecken */}
        <div className="flx-tool-card">
          <h2 className="text-lg font-medium text-white mb-4">Ecken</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 mb-2 block">Eckrahmen</label>
              <div className="flex gap-2">
                {CORNER_SQUARE_STYLES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setCornerSquareStyle(s.value)}
                    className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      cornerSquareStyle === s.value
                        ? "bg-flx-cyan text-white"
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-2 block">Eckpunkt</label>
              <div className="flex gap-2">
                {CORNER_DOT_STYLES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setCornerDotStyle(s.value)}
                    className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      cornerDotStyle === s.value
                        ? "bg-flx-cyan text-white"
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flx-tool-card">
          <h2 className="text-lg font-medium text-white mb-3">Logo (optional)</h2>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />

          {logoDataUrl ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoDataUrl} alt="Logo Vorschau" className="w-12 h-12 rounded-lg object-contain bg-white/10 p-1" />
                <div>
                  <p className="text-sm text-white">Logo aktiv</p>
                  <button
                    onClick={() => setLogoDataUrl(null)}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors mt-0.5"
                  >
                    <X className="w-3 h-3" /> Entfernen
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Größe: {Math.round(logoSize * 100)}%
                </label>
                <input
                  type="range"
                  min={10}
                  max={45}
                  value={Math.round(logoSize * 100)}
                  onChange={(e) => setLogoSize(Number(e.target.value) / 100)}
                  className="w-full accent-flx-cyan"
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 bg-white/5 border border-dashed border-white/20 rounded-xl px-4 py-4 text-gray-400 hover:text-white hover:border-white/40 transition-colors text-sm"
            >
              <Upload className="w-4 h-4" />
              Logo hochladen (PNG, SVG, JPG)
            </button>
          )}
        </div>
      </div>

      {/* Vorschau */}
      <div className="order-1 lg:order-2 lg:col-span-2">
        <div className="lg:sticky lg:top-24">
          <div className="flx-tool-card flex flex-col items-center">
            <h2 className="text-lg font-medium text-white mb-6 self-start">Vorschau</h2>

            <div
              ref={qrRef}
              className="rounded-xl overflow-hidden"
              style={{ background: bgColor, minWidth: 300, minHeight: 300 }}
            />

            <div className="mt-6 grid grid-cols-2 gap-3 w-full">
              <button
                onClick={() => handleDownload("png")}
                className="raycast-button flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white smooth-transition"
              >
                <Download className="w-4 h-4" />
                PNG
              </button>
              <button
                onClick={() => handleDownload("svg")}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                SVG
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500 text-center">
              Export in 1000 x 1000 px. Kostenlos und ohne Anmeldung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
