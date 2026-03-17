import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CtaBanner({
  heading = "Ready to Get Started?",
  subheading = "Contact us today to learn how we can help you.",
  buttonLabel = "Contact Us",
  buttonHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{heading}</h2>
        <p className="text-blue-100 text-lg mb-8">{subheading}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-blue-700 font-bold text-base hover:bg-blue-50 transition-colors"
        >
          {buttonLabel} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
