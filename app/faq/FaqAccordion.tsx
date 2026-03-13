"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Faq {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-slate-400 shrink-0 transition-transform",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === i ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
