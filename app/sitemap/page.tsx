import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCategories } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap of Sri Lanka Travel Hub - Find all pages, blog posts, and destinations.',
};

export default function SitemapPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  const destinations = [
    { name: 'Sigiriya', slug: 'sigiriya' },
    { name: 'Ella', slug: 'ella' },
    { name: 'Galle', slug: 'galle' },
    { name: 'Kandy', slug: 'kandy' },
    { name: 'Yala National Park', slug: 'yala' },
    { name: 'Mirissa', slug: 'mirissa' },
    { name: 'Anuradhapura', slug: 'anuradhapura' },
    { name: 'Nuwara Eliya', slug: 'nuwara-eliya' },
    { name: 'Polonnaruwa', slug: 'polonnaruwa' },
    { name: 'Arugam Bay', slug: 'arugam-bay' },
    { name: 'Dambulla', slug: 'dambulla' },
    { name: 'Trincomalee', slug: 'trincomalee' },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-16 mb-12">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Sitemap
          </h1>
          <p className="text-xl">
            Browse all pages and content on Sri Lanka Travel Hub
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Main Pages */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4 border-b-2 border-primary-600 pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-600 hover:text-primary-700 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4 border-b-2 border-accent-600 pb-2">
              Categories
            </h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link 
                    href={`/category/${category.slug}`}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {category.name} ({category.count})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4 border-b-2 border-primary-600 pb-2">
              Top Destinations
            </h2>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.slug}>
                  <span className="text-neutral-700">
                    {destination.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4 border-b-2 border-accent-600 pb-2">
              Legal & Info
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Blog Posts */}
          <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4 border-b-2 border-primary-600 pb-2">
              Recent Blog Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {posts.slice(0, 10).map((post) => (
                <div key={post.slug}>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 hover:underline text-sm"
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs text-neutral-500">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
            {posts.length > 10 && (
              <div className="mt-4 pt-4 border-t">
                <Link 
                  href="/blog"
                  className="text-primary-600 hover:text-primary-700 font-semibold hover:underline"
                >
                  View All {posts.length} Blog Posts →
                </Link>
              </div>
            )}
          </div>

        </div>

        {/* SEO Information */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
            About This Sitemap
          </h2>
          <p className="text-neutral-700 mb-4">
            This sitemap provides a comprehensive overview of all pages and content available on Sri Lanka Travel Hub. 
            Use it to quickly navigate to any section of our website or discover content you might have missed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {posts.length}+
              </div>
              <div className="text-neutral-700">Blog Posts</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-accent-600 mb-2">
                {categories.length}
              </div>
              <div className="text-neutral-700">Categories</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {destinations.length}
              </div>
              <div className="text-neutral-700">Destinations</div>
            </div>
          </div>
        </div>

        {/* XML Sitemap Note */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
            XML Sitemap for Search Engines
          </h3>
          <p className="text-neutral-700 mb-4">
            For search engines like Google, Bing, and others, we also provide an XML sitemap that helps them crawl and index our content efficiently.
          </p>
          <a 
            href="/sitemap.xml"
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            View XML Sitemap
          </a>
        </div>
      </div>
    </div>
  );
}
