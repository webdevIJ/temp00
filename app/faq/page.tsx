import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import faqs from "@/content/faqs.json";
import CtaBanner from "@/components/sections/CtaBanner";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about our web design and SEO services — pricing, timelines, contracts, and more.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Everything you want to know about working with us. Don't see your question? Just ask.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBanner
        heading="Still Have Questions?"
        subheading="We're happy to answer anything. Reach out and we'll get back to you within one business day."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
