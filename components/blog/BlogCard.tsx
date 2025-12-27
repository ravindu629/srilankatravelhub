import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block relative overflow-hidden rounded-2xl h-[500px] card-hover"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="gradient-overlay" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="mb-4">
            <span className="bg-primary-600 text-white text-sm px-4 py-1.5 rounded-full font-medium">
              {post.category}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-300 transition-colors">
            {post.title}
          </h2>
          <p className="text-neutral-200 mb-4 line-clamp-2">{post.description}</p>
          <div className="flex items-center space-x-6 text-neutral-300 text-sm">
            <div className="flex items-center space-x-2">
              <FiUser size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCalendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiClock size={16} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md card-hover"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white text-primary-600 text-sm px-3 py-1 rounded-full font-medium shadow-md">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-neutral-600 mb-4 line-clamp-2">{post.description}</p>
        <div className="flex items-center justify-between text-sm text-neutral-500">
          <div className="flex items-center space-x-2">
            <FiCalendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiClock size={14} />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
