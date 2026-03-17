"use client";
// Add a email receiving API
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import config from "@/lib/config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up to your email service / API route
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Let's Start a Conversation</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within one business day with a free consultation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Message Sent!</h2>
                  <p className="text-slate-500">
                    Thanks for reaching out. We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Smith Plumbing Co."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="jane@smithplumbing.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="(512) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      What are you interested in?
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-700">
                      <option value="">Select a service…</option>
                      <option value="service-one">Service One</option>
                      <option value="service-two">Service Two</option>
                      <option value="service-three">Service Three</option>
                      <option value="service-four">Service Four</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Tell us about your business <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      placeholder="Share a little about your business, your goals, and any questions you have…"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending…" : "Send My Message"}
                  </Button>
                  <p className="text-xs text-slate-400 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Prefer to Reach Out Directly?</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Phone</p>
                    <a href={config.phoneHref} className="text-blue-600 hover:underline">{config.phone}</a>
                    <p className="text-slate-400 text-xs mt-0.5">Mon–Fri, {config.hours.open}–{config.hours.close}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Email</p>
                    <a href={`mailto:${config.email}`} className="text-blue-600 hover:underline">
                      {config.email}
                    </a>
                    <p className="text-slate-400 text-xs mt-0.5">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Location</p>
                    <p className="text-slate-600 text-sm">{config.address.city}, {config.address.state} {config.address.zip}</p>
                    <p className="text-slate-400 text-xs mt-0.5">Serving clients everywhere</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="font-bold text-slate-900 mb-2">What Happens Next?</p>
                <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
                  <li>We review your message within one business day</li>
                  <li>We schedule a free 30-minute consultation call</li>
                  <li>We send you a custom proposal at no cost</li>
                  <li>You decide if we're the right fit — no pressure</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
