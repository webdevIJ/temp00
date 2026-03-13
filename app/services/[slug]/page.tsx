import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllServices, getServiceBySlug } from "@/lib/services";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Monitor, TrendingUp, BarChart2, Shield, CheckCircle2 } from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";
import { SITE_URL } from "@/lib/seo";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  TrendingUp,
  BarChart2,
  Shield,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Monitor;
  const schema = serviceSchema(
    service.title,
    service.description,
    `${SITE_URL}/services/${slug}`
  );

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/30 flex items-center justify-center">
              <Icon className="w-7 h-7 text-blue-300" />
            </div>
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Our Services</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{service.title}</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-2xl">{service.shortDescription}</p>
          <p className="text-blue-400 font-bold text-lg">{service.price}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">About This Service</h2>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 mb-5">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading={`Ready to Get Started with ${service.title}?`}
        subheading="Contact us today for a free consultation and quote — no obligation."
      />
    </>
  );
}
