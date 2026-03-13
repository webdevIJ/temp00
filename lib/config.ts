// ****************************************************
//  Central Configuration. Change here for each client
// ****************************************************

const config = {
  // --- Business Identity ---
  businessName: "",
  tagline: "short description of what you do",
  description:
    "A 1–2 sentence description used in Google search previews and social shares. Make it specific to the client's city and industry.",

  // --- Contact Details ---
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000", // E.164 format for <a href>
  email: "hello@yourbusiness.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "ST", // 2-letter abbreviation
    zip: "00000",
    country: "US",
  },

  // --- Online / Social Media Presence ---
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com",
  social: {
    facebook: "https://facebook.com/yourbusiness",
    linkedin: "https://linkedin.com/company/yourbusiness",
    twitter: "https://twitter.com/yourbusiness",
  },

  // --- Geographic Coordinates (for Google structured data) ---
  // Found at: https://www.latlong.net/
  geo: {
    latitude: 0.0,
    longitude: 0.0,
  },

  // --- Business Hours ---
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    open: "09:00",
    close: "17:00",
  },

  // --- Homepage banner (hero) ---
  hero: {
    eyebrow: "Web Design & Local SEO", // small label above the heading
    heading: "Get More Customers", // first line of the big heading
    headingAccent: "From Google.", // second line 
    subheading:
      "We build high-performing websites and local SEO strategies for local businesses that want to grow their revenue — without the big-agency price tag.",
    highlights: [
      "No long-term contracts",
      "Results-driven approach",
      "100% US-based team",
      "Free initial consultation",
    ],
  },

  // --- Stats Bar (shown just below the hero) ---
  stats: [
    { value: "50+",    label: "Clients Served" },
    { value: "3x",     label: "Avg. Traffic Increase" },
    { value: "5.0",    label: "Average Review Score" },
    { value: "< 2 wks", label: "Average Launch Time" },
  ],

  // --- About Page ---
  about: {
    story: [
      "Add a paragraph about how the business got started.",
      "Add a second paragraph about your approach or philosophy.",
      "Add a third paragraph about what makes you different.",
    ],
    bullets: [
      "Founded in [City, State]",
      "100% US-based team",
      "Focused on local businesses",
      "No long-term contracts required",
    ],
  },

  // --- Footer ---
  footerTagline: "Web design and local SEO for small businesses that want to grow.",
};

export default config;
