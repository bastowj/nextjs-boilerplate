import { getAllBlogPosts, getAllCategories } from "@/lib/blog";
import { BlogLayout } from "@/components/BlogLayout";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
  title: `blog | ${SITE_CONFIG.defaultTitle}`,
  description: SITE_CONFIG.description,
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return <BlogLayout posts={posts} categories={categories} showHeader />;
}
