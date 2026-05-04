import { getAllBlogPosts } from "@/lib/blog";
import { BlogPostPreview } from "@/components/BlogPostPreview";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/config";

export default function Home() {
  // Get the latest 3 blog posts
  const latestPosts = getAllBlogPosts().slice(0, 3);

  return (
    <div className="main-content-wrapper">
      <section className="mb-16">
        <div className="mb-12">
          <h1 className="blog-h1">{SITE_CONFIG.defaultTitle}</h1>
        </div>
      </section>

      <section className="mb-16">
        <div className="home-latest-header">
          <h2 className="blog-h2">Latest texts</h2>
          <Link href="/texts" className="link">
            View all texts
          </Link>
        </div>

        <div className="blog-layout-posts">
          {latestPosts.map((post) => (
            <BlogPostPreview key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
