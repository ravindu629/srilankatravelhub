import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import Newsletter from '@/components/home/Newsletter';
import BlogCard from '@/components/blog/BlogCard';
import { getFeaturedPosts, getRecentPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  return (
    <>
      <Hero />

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-neutral-600">
                Our hand-picked collection of the best travel experiences
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>

            {featuredPosts[2] && (
              <div className="grid grid-cols-1">
                <BlogCard post={featuredPosts[2]} featured />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Categories Section */}
      <Categories />

      {/* Recent Posts Section */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-2">
                  Latest Articles
                </h2>
                <p className="text-xl text-neutral-600">
                  Fresh content to inspire your next adventure
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:block text-primary-600 hover:text-primary-700 font-semibold"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="text-center mt-12 md:hidden">
              <Link href="/blog" className="btn-primary">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Why Explore Sri Lanka?
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Sri Lanka, the teardrop island in the Indian Ocean, offers an unparalleled blend of ancient
              history, diverse wildlife, stunning landscapes, and warm hospitality. From the misty tea
              plantations of Nuwara Eliya to the golden beaches of Mirissa, from the ancient rock fortress
              of Sigiriya to the sacred city of Kandy, every corner of this island tells a unique story.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-primary-600 mb-2">8</div>
                <div className="text-neutral-600 font-medium">UNESCO World Heritage Sites</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-primary-600 mb-2">26</div>
                <div className="text-neutral-600 font-medium">National Parks</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-primary-600 mb-2">1,340+</div>
                <div className="text-neutral-600 font-medium">Kilometers of Coastline</div>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
}
