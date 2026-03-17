import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/services";
import { Monitor, TrendingUp, BarChart2, Shield, ArrowRight } from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";
import config from "@/lib/config";

export const metadata: Metadata = {
  title: `Services | ${config.businessName}`,
  description: config.description,
};

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  TrendingUp,
  BarChart2,
  Shield,
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            What We Offer
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We have the right solution for every stage of your business.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Monitor;
              return (
                <div
                  key={service.slug}
                  className="rounded-2xl border border-slate-100 shadow-sm p-8 hover:shadow-md transition-shadow bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{service.title}</h2>
                  <p className="text-blue-600 font-semibold text-sm mb-4">{service.price}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-700 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
