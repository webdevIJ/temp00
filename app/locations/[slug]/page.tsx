import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllLocations, getLocationBySlug } from "@/lib/locations";
import { getAllServices } from "@/lib/services";
import CtaBanner from "@/components/sections/CtaBanner";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocations().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: `Web Design & SEO in ${location.city}, ${location.stateAbbr}`,
    description: location.description,
    path: `/locations/${slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  const services = getAllServices();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            {location.city}, {location.state}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">{location.headline}</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{location.description}</p>
        </div>
      </section>

      {/* Services in this location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Services We Offer in {location.city}
            </h2>
            <p className="text-slate-500">
              We serve businesses throughout {location.city} and surrounding areas including{" "}
              {location.neighborhoods.join(", ")}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.slug} className="bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors">
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-800"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO keywords section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            Why {location.city} Businesses Trust Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {[
                `Deep knowledge of the ${location.city} market`,
                "Locally-targeted keyword strategies",
                "Google Business Profile optimization",
                "Citation building for local directories",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <p className="font-semibold text-slate-900 mb-3">Areas We Serve</p>
              <div className="flex flex-wrap gap-2">
                {location.neighborhoods.map((n) => (
                  <span key={n} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading={`Get a Free Quote for Your ${location.city} Business`}
        subheading={`We're helping local businesses in ${location.city} get found on Google and grow. Let's talk.`}
      />
    </>
  );
}
