import Link from "next/link";
import { Monitor, TrendingUp, BarChart2, Shield, ArrowRight } from "lucide-react";
import { getAllServices } from "@/lib/services";
import { Card, CardContent } from "@/components/ui/Card";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  TrendingUp,
  BarChart2,
  Shield,
};

export default function ServicesSection() {
  const services = getAllServices();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Everything You Need to Grow Online
          </h2>
          <p className="text-slate-500 text-lg">
            From your first website to a full digital marketing strategy — we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            return (
              <Card key={service.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.shortDescription}
                  </p>
                  <p className="text-blue-600 font-semibold text-sm mb-4">{service.price}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group-hover:gap-2"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
