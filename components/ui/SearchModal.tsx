'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const searchPosts = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(searchPosts, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl animate-slide-up">
          {/* Search Input */}
          <div className="p-6 border-b">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={24} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, destinations, food..."
                autoFocus
                className="w-full pl-14 pr-12 py-4 text-lg border-2 border-neutral-200 rounded-xl focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto p-6">
            {loading && (
              <div className="text-center py-8 text-neutral-500">
                Searching...
              </div>
            )}

            {!loading && query.length > 0 && results.length === 0 && (
              <div className="text-center py-8 text-neutral-500">
                No results found for "{query}"
              </div>
            )}

            {!loading && query.length > 0 && results.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm text-neutral-600 mb-4">
                  Found {results.length} {results.length === 1 ? 'result' : 'results'}
                </p>
                {results.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    onClick={onClose}
                    className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
                  >
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-neutral-600 line-clamp-2 mb-2">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500">
                        <span className="bg-neutral-100 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {query.length === 0 && (
              <div className="text-center py-8">
                <p className="text-neutral-500 mb-4">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Sigiriya', 'Ella', 'Beaches', 'Food', 'Culture', 'Wildlife'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
