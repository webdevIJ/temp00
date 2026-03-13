import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import testimonials from "@/content/testimonials.json";
import { StarRating } from "@/components/ui/StarRating";
import { Card, CardContent } from "@/components/ui/Card";
import CtaBanner from "@/components/sections/CtaBanner";
import { Star } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Client Reviews",
  description:
    "See what local business owners say about working with Apex Digital. Real reviews from real clients.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Reviews</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Our Clients Love the Results</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            We let our work speak for itself. Here are real stories from real local business owners.
          </p>
          {/* Overall score */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 rounded-2xl px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white text-xl">5.0</span>
            <span className="text-slate-300 text-sm">Average Rating</span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.id} className="hover:shadow-md transition-shadow">
                <CardContent>
                  <StarRating rating={t.rating} className="mb-4" />
                  <blockquote className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.business}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Be Our Next Success Story?"
        subheading="Join local businesses growing online with Apex Digital. Get your free consultation today."
      />
    </>
  );
}
