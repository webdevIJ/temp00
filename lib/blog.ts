export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  coverImage: string;
}

// In a real project this would be pulled from a CMS or MDX files.
// For now we export a static list of placeholder posts.
const posts: BlogPost[] = [
  {
    slug: "why-local-seo-matters-for-small-businesses",
    title: "Why Local SEO Matters for Small Businesses in 2026",
    excerpt:
      "If your business isn't showing up on the first page of Google for local searches, you're losing customers every day. Here's why local SEO is the highest-ROI marketing channel for service businesses.",
    content: `Local SEO is the practice of optimizing your online presence so that your business appears prominently in search results for location-based queries — things like "plumber near me" or "best dentist in [your city]."

## Why It Matters

Over 46% of all Google searches have local intent. When someone searches for a service in your area, Google shows a "Local Pack" — those three map listings at the top of the results page. Getting into that pack can dramatically increase your phone calls and website visits.

## The Key Pillars of Local SEO

1. **Google Business Profile** – Your most important local SEO asset. A fully optimized profile with photos, reviews, and accurate information is essential.
2. **On-page optimization** – Every page of your website should mention your city and services, and include structured data (schema markup).
3. **Citations** – Consistent Name, Address, and Phone (NAP) information across directories like Yelp, Yellow Pages, and industry-specific sites.
4. **Reviews** – Google uses review quantity and quality as a ranking signal. A strategy for earning reviews is non-negotiable.

## Getting Started

Local SEO is very achievable for small businesses, especially in less competitive markets. A focused 3–6 month effort can yield results that compound for years and give you a real edge over competitors who are ignoring this channel.`,
    author: "Alex Rivera",
    publishedAt: "2026-02-15",
    category: "SEO",
    tags: ["local seo", "small business", "google"],
    coverImage: "/images/blog-local-seo.jpg",
  },
  {
    slug: "5-website-mistakes-costing-you-clients",
    title: "5 Website Mistakes That Are Costing You Clients",
    excerpt:
      "Your website is your #1 sales tool — but only if it works correctly. These five common mistakes could be silently driving potential customers away.",
    content: `Your website works for you 24 hours a day, 7 days a week. But if it's making these mistakes, it might be working against you.

## 1. Slow Load Times

If your website takes more than 3 seconds to load, you're losing more than half your visitors before they ever see your offer. Speed is also a Google ranking factor.

## 2. No Clear Call to Action

Every page needs one clear next step — call us, get a free quote, schedule a consultation. Visitors who are confused about what to do next will leave.

## 3. Not Mobile-Friendly

Over 60% of web traffic is on mobile devices. If your site is hard to use on a phone, you're turning away the majority of your potential customers.

## 4. Missing Contact Information

Your phone number should be visible on every page, ideally in the header. Make it as easy as possible for a customer to reach you.

## 5. No Social Proof

Testimonials, reviews, and case studies build the trust required for someone to do business with you. Without them, you're asking for a leap of faith.`,
    author: "Alex Rivera",
    publishedAt: "2026-01-28",
    category: "Web Design",
    tags: ["web design", "conversion", "ux"],
    coverImage: "/images/blog-mistakes.jpg",
  },
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to Get More Google Reviews (Without Breaking the Rules)",
    excerpt:
      "Google reviews are one of the most powerful trust signals for local businesses. Here's an ethical, systematic approach to building your review profile.",
    content: `Google reviews influence both your search rankings and whether potential customers choose you over a competitor. But how do you get more of them consistently?

## Ask at the Right Moment

The best time to ask for a review is immediately after delivering your service, when the customer is happiest. Don't wait — the enthusiasm fades quickly.

## Make It Easy

Create a short, direct link to your Google review form and include it in follow-up texts or emails. The fewer clicks, the better.

## Use a Simple Script

"We really appreciate your business. If you're happy with the work, would you mind leaving us a Google review? It helps us reach more customers like you. Here's a direct link: [link]"

## Follow Up Once

If a customer said they would leave a review but didn't, a single polite follow-up is perfectly acceptable.

## Never Pay for or Fake Reviews

This violates Google's policies and can get your listing suspended. Focus on earning genuine reviews from real customers.`,
    author: "Alex Rivera",
    publishedAt: "2026-01-10",
    category: "SEO",
    tags: ["google reviews", "reputation", "local seo"],
    coverImage: "/images/blog-reviews.jpg",
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
