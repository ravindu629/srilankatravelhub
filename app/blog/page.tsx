import { Metadata } from 'next';
import BlogCard from '@/components/blog/BlogCard';
import Pagination from '@/components/ui/Pagination';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { getAllPosts, getCategories } from '@/lib/posts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Blog',
  description: 'Read the latest articles about Sri Lankan travel, tourism, culture, and adventures',
};

const POSTS_PER_PAGE = 9;

interface BlogPageProps {
  searchParams: { page?: string; search?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = getAllPosts();
  const categories = getCategories();
  const searchQuery = searchParams.search?.toLowerCase() || '';
  
  // Filter posts by search query
  const filteredPosts = searchQuery
    ? allPosts.filter((post) => {
        const searchString = `${post.title} ${post.description} ${post.category} ${post.tags.join(' ')}`.toLowerCase();
        return searchString.includes(searchQuery);
      })
    : allPosts;
  
  const currentPage = parseInt(searchParams.page || '1', 10);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-16 mb-12">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Travel Blog
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover stories, tips, and guides for your Sri Lankan adventure
          </p>
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="container-custom mb-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
            <p className="text-neutral-700">
              Found <strong>{filteredPosts.length}</strong> result{filteredPosts.length !== 1 ? 's' : ''} for "<strong>{searchQuery}</strong>"
            </p>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 text-sm mt-2 inline-block">
              ← Clear search
            </Link>
          </div>
        </div>
      )}

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {posts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
                
                {/* Pagination */}
                {!searchQuery && (
                  <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    basePath="/blog" 
                  />
                )}
              </>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center">
                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                  {searchQuery ? 'No results found' : 'No articles yet'}
                </h2>
                <p className="text-neutral-600 mb-6">
                  {searchQuery 
                    ? `Try searching for something else or browse all articles.`
                    : `We're working on creating amazing content for you. Check back soon!`
                  }
                </p>
                {searchQuery && (
                  <Link 
                    href="/blog"
                    className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Browse All Articles
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                  >
                    <span className="text-neutral-700 group-hover:text-primary-600">
                      {category.name}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <NewsletterForm variant="inline" />
          </aside>
        </div>
      </div>
    </div>
  );
}
