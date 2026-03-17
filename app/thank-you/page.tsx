import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import config from "@/lib/config";

export const metadata: Metadata = {
  title: `Thank You | ${config.businessName}`,
  description: "Thank you for contacting us.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Thank You — We'll Be in Touch!
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed mb-8">
          Your message has been received. We typically respond within one business day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            View Our Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
