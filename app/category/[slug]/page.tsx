import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/ui/Pagination";
import { getAllPosts } from "@/lib/posts";

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams: { page?: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const categorySet = new Set(posts.map((post) => post.category));
  const categories = Array.from(categorySet);

  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${categoryName} Articles`,
    description: `Browse all ${categoryName.toLowerCase()} articles on Sri Lanka Travel Hub`,
  };
}

const POSTS_PER_PAGE = 9;

export default function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const allPosts = getAllPosts();
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const posts = allPosts.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (posts.length === 0) {
    notFound();
  }

  const currentPage = parseInt(searchParams.page || "1", 10);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-16 mb-12">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-xl">
            {posts.length} {posts.length === 1 ? "article" : "articles"} in this
            category
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={`/category/${params.slug}`}
        />
      </div>
    </div>
  );
}
