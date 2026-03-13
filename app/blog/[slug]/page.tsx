import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { blogPostSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import CtaBanner from "@/components/sections/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const schema = blogPostSchema({
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    author: post.author,
    url: `${SITE_URL}/blog/${slug}`,
  });

  // Convert plain markdown-ish content to basic HTML paragraphs
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="blue">{post.category}</Badge>
            <time className="text-slate-400 text-sm">{formatDate(post.publishedAt)}</time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{post.title}</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">{post.excerpt}</p>
          <p className="text-slate-400 text-sm">By {post.author}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i}>{para.replace("## ", "")}</h2>;
              }
              if (para.startsWith("### ")) {
                return <h3 key={i}>{para.replace("### ", "")}</h3>;
              }
              if (para.startsWith("1. ") || para.startsWith("- ")) {
                const items = para.split("\n").filter(Boolean);
                const isOrdered = para.startsWith("1. ");
                const Tag = isOrdered ? "ol" : "ul";
                return (
                  <Tag key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\.\s|^-\s/, "")}</li>
                    ))}
                  </Tag>
                );
              }
              // Inline bold
              const boldParsed = para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
              return <p key={i} dangerouslySetInnerHTML={{ __html: boldParsed }} />;
            })}
          </article>
        </div>
      </section>

      <CtaBanner
        heading="Found This Helpful?"
        subheading="We offer free consultations for local businesses who want to grow online. No sales pressure, just honest advice."
      />
    </>
  );
}
