import type { Metadata } from "next";
import CtaBanner from "@/components/sections/CtaBanner";
import { CheckCircle2, Target, Heart, Zap } from "lucide-react";
import config from "@/lib/config";

export const metadata: Metadata = {
  title: `About Us | ${config.businessName}`,
  description: config.description,
};

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We measure our success by the value we deliver to our clients — not vanity metrics.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description:
      "We prioritize understanding your unique needs to deliver solutions that work for you.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description:
      "We deliver quality results quickly without cutting corners.",
  },
  {
    icon: CheckCircle2,
    title: "Total Transparency",
    description:
      "No jargon, no hidden fees. You'll always know exactly what we're working on and why.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            {config.businessName}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {config.tagline}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {config.about.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <ul className="space-y-4">
                {config.about.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="text-3xl font-extrabold text-slate-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Let's Work Together"
        subheading="We're currently accepting a limited number of new clients. Get in touch to see if we're a good fit."
      />
    </>
  );
}
