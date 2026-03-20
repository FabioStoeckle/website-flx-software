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
};

export function CertificationCard({
  title,
  subtitle,
  issuer,
  description,
  thumbnailSrc,
  documentHref,
}: CertificationCardProps) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-7">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-400/20 flex items-center justify-center">
            <FileCheck className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <div className="text-sm text-gray-400">{subtitle}</div>
            <h3 className="mt-1 text-2xl font-medium text-white">{title}</h3>
            <div className="mt-2 text-sm text-cyan-300">{issuer}</div>
          </div>
        </div>

        <div className="shrink-0">
          <a
            href={documentHref}
            target="_blank"
            rel="noopener noreferrer"
            className="raycast-button inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white smooth-transition"
          >
            Zertifikat ansehen
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <p className="mt-5 text-gray-400 leading-relaxed">{description}</p>

      <div className="mt-6 grid md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
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
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <div className="text-xs uppercase tracking-wider text-gray-400">Nachweis</div>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              Das Zertifikat bestätigt fundierte Grundlagen im digitalen Marketing und ergänzt die Projekte von FLX-Software um
              belastbares Know-how für Conversion, Content und Performance.
            </p>

            <div className="mt-5">
              <Link
                href={documentHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm font-medium inline-flex items-center gap-2"
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

