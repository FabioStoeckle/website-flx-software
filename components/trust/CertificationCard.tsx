import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";

type CertificationCardProps = {
  title: string;
  subtitle: string;
  issuer: string;
  description: string;
  thumbnailSrc: string;
  documentHref: string;
  variant?: "dark" | "light";
};

export function CertificationCard({
  title,
  subtitle,
  issuer,
  description,
  thumbnailSrc,
  documentHref,
  variant = "dark",
}: CertificationCardProps) {
  const isLight = variant === "light";

  return (
    <div
      className={
        isLight
          ? "flx-angle-card flex h-full flex-col bg-white p-7 shadow-lg shadow-slate-900/10"
          : "glass flex h-full flex-col rounded-lg border border-white/10 p-7"
      }
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/15 ring-1 ring-flx-cyan/20">
            <FileCheck className="h-6 w-6 text-flx-cyan" />
          </div>
          <div>
            <div className={isLight ? "text-sm text-slate-500" : "text-sm text-gray-400"}>{subtitle}</div>
            <h3
              className={
                isLight ? "mt-1 text-2xl font-semibold text-slate-950" : "mt-1 text-2xl font-medium text-white"
              }
            >
              {title}
            </h3>
            <div className="mt-2 text-sm text-flx-cyan">{issuer}</div>
          </div>
        </div>

        <a
          href={documentHref}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isLight
              ? "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:border-flx-cyan hover:text-flx-cyan"
              : "raycast-button inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white smooth-transition"
          }
        >
          Zertifikat ansehen
          <ArrowRight size={16} />
        </a>
      </div>

      <p
        className={
          isLight
            ? "mt-5 break-words leading-relaxed text-slate-700"
            : "mt-5 break-words leading-relaxed text-gray-400"
        }
      >
        {description}
      </p>

      <div className="mt-auto grid items-stretch gap-6 md:grid-cols-5">
        <div
          className={
            isLight
              ? "relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 md:col-span-2"
              : "relative overflow-hidden rounded-lg border border-white/10 bg-white/5 md:col-span-2"
          }
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={thumbnailSrc}
              alt={`Vorschau: ${title}`}
              fill
              sizes="(max-width:768px) 100vw, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <div
            className={
              isLight
                ? "rounded-lg border border-slate-200 bg-slate-100 p-5"
                : "rounded-lg border border-white/10 bg-white/5 p-5"
            }
          >
            <div className={isLight ? "text-xs uppercase tracking-wider text-slate-500" : "text-xs uppercase tracking-wider text-gray-400"}>
              Nachweis
            </div>
            <p className={isLight ? "mt-2 text-sm leading-relaxed text-slate-700" : "mt-2 text-sm leading-relaxed text-gray-300"}>
              Das Zertifikat bestätigt Grundlagen rund um Online Marketing und ergänzt die Arbeit von FLX-Software,
              damit Websites klarer aufgebaut und für Kunden verständlicher werden.
            </p>

            <div className="mt-5">
              <Link
                href={documentHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-flx-cyan transition-colors hover:text-flx-cyan/90"
              >
                PDF öffnen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
