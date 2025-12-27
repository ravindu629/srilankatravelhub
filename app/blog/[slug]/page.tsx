import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, getRecentPosts } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import ViewCounter from '@/components/blog/ViewCounter';
import NewsletterForm from '@/components/ui/NewsletterForm';
import ImageGallery from '@/components/blog/ImageGallery';
import { FiCalendar, FiClock, FiUser, FiTag } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const recentPosts = getRecentPosts(3);
  const shareUrl = `https://srilankatravelhub.com/blog/${post.slug}`;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12">
            <div className="max-w-4xl">
              <div className="mb-4">
                <Link
                  href={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  {post.category}
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <FiUser size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCalendar size={18} />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiClock size={18} />
                  <span>{post.readingTime}</span>
                </div>
                <ViewCounter slug={post.slug} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
              {/* Content */}
              <div
                className="blog-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* Image Gallery - NEW */}
              {post.images && post.images.length > 0 && (
                <ImageGallery images={post.images} />
              )}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-8 border-t mt-8">
                <FiTag className="text-neutral-500" size={18} />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 pt-6 border-t mt-6">
                <span className="text-neutral-600 font-medium">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-blue-700 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href={`https://wa.me/?text=${post.title} ${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-green-600 transition-colors"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((recentPost) => (
                  <Link
                    key={recentPost.slug}
                    href={`/blog/${recentPost.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={recentPost.image}
                        alt={recentPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2 text-sm">
                        {recentPost.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">
                        {new Date(recentPost.date).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <NewsletterForm variant="sidebar" />
          </aside>
        </div>
      </div>
    </div>
  );
}
