import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import config from "@/lib/config";

export default function Hero() {
  const { eyebrow, heading, headingAccent, subheading, highlights } = config.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[400px] h-[400px] rounded-full bg-blue-800/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-blue-400" />
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {heading} <br />
            <span className="text-blue-400">{headingAccent}</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {subheading}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link
              href={config.ctaButton.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-colors"
            >
              {config.ctaButton.label} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 hover:bg-white/10 font-semibold text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
