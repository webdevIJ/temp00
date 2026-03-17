// ============================================================
//  SITE CONFIG — Edit this file to customize the template
// ============================================================

const config = {
  // ── Business Info ──────────────────────────────────────────
  businessName: "Business Name",
  tagline: "tagline goes here",
  description: "A brief description of your business for search engines and social sharing.",

  // ── Contact ────────────────────────────────────────────────
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "hello@example.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "ST",
    zip: "00000",
  },

  // ── Links ──────────────────────────────────────────────────
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  social: {
    facebook: "",
    linkedin: "",
    twitter: "",
  },

  // ── Hours ──────────────────────────────────────────────────
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    open: "09:00",
    close: "17:00",
  },

  // ── Homepage Hero ──────────────────────────────────────────
  hero: {
    eyebrow: "Welcome",
    heading: "Main Headline",
    headingAccent: "Goes Here",
    subheading: "A supporting sentence or two that explains what you do and why visitors should care.",
    highlights: [
      "Benefit or feature 1",
      "Benefit or feature 2",
      "Benefit or feature 3",
      "Benefit or feature 4",
    ],
  },

  // ── Stats Section ──────────────────────────────────────────
  stats: [
    { value: "100+", label: "Stat Label 1" },
    { value: "50+", label: "Stat Label 2" },
    { value: "5.0", label: "Stat Label 3" },
    { value: "24/7", label: "Stat Label 4" },
  ],

  // ── About Page ─────────────────────────────────────────────
  about: {
    headline: "About Us",
    intro: "A brief intro paragraph about your company.",
    story: [
      "First paragraph of your story.",
      "Second paragraph of your story.",
      "Third paragraph of your story.",
    ],
    bullets: [
      "Fact about your business",
      "Another fact",
      "One more fact",
    ],
  },

  // ── Footer ─────────────────────────────────────────────────
  footerTagline: "A short tagline for the footer.",

  // ── Navigation ─────────────────────────────────────────────
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],

  // ── CTA Button ─────────────────────────────────────────────
  ctaButton: {
    label: "Get Started",
    href: "/contact",
  },
};

export default config;
