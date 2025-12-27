'use client';

import { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { incrementViewCount, formatViewCount, initializeViewCount } from '@/lib/viewCount';

interface ViewCounterProps {
  slug: string;
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize if needed (first time)
    initializeViewCount(slug);
    
    // Increment view count
    const newViews = incrementViewCount(slug);
    setViews(newViews);
  }, [slug]);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2 text-neutral-500">
        <FiEye size={16} />
        <span>---</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-neutral-500">
      <FiEye size={16} />
      <span>{formatViewCount(views)} views</span>
    </div>
  );
}
