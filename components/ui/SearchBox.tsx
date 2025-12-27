'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search destinations, food, culture..."
          className="w-full px-6 py-4 pr-14 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:border-white/40 transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </form>
  );
}
