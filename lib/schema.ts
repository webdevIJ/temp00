import { SITE_NAME, SITE_URL } from "./seo";
import config from "./config";

// ── Local Business Schema ──────────────────────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    description: config.description,
    telephone: config.phoneHref.replace("tel:", ""),
    email: config.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      addressRegion: config.address.state,
      postalCode: config.address.zip,
      addressCountry: config.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.geo.latitude,
      longitude: config.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: config.hours.days,
        opens: config.hours.open,
        closes: config.hours.close,
      },
    ],
    sameAs: Object.values(config.social).filter(Boolean),
  };
}

// ── Service Schema ─────────────────────────────────────────────────────────
export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url,
  };
}

// ── FAQ Schema ─────────────────────────────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ── Blog Post Schema ───────────────────────────────────────────────────────
export function blogPostSchema({
  title,
  excerpt,
  publishedAt,
  author,
  url,
  image,
}: {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    author: { "@type": "Person", name: author },
    datePublished: publishedAt,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    url,
    ...(image && { image }),
  };
}
