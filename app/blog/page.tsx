import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Web design and SEO tips for local businesses. Learn how to get more customers from Google with practical, actionable advice.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Tips to Grow Your Business Online
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Practical advice on web design, SEO, and digital marketing for local service businesses.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="blue">{post.category}</Badge>
                    <time className="text-slate-400 text-xs">{formatDate(post.publishedAt)}</time>
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-400">By {post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-800"
                    >
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
