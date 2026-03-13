import { StarRating } from "@/components/ui/StarRating";
import { Card, CardContent } from "@/components/ui/Card";
import testimonials from "@/content/testimonials.json";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Client Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-slate-500 text-lg">
            Don't take our word for it — here's what our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} className="hover:shadow-md transition-shadow">
              <CardContent>
                <StarRating rating={t.rating} className="mb-4" />
                <blockquote className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.business} · {t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
