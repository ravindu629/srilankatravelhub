'use client';

import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first, last, current, and nearby pages
      if (currentPage <= 3) {
        // Near start
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near end
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 hover:border-primary-500 hover:text-primary-600 transition-colors"
        >
          <FiChevronLeft size={18} />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-400 cursor-not-allowed"
        >
          <FiChevronLeft size={18} />
          <span className="hidden sm:inline">Previous</span>
        </button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {pages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-neutral-400">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={`${basePath}?page=${pageNum}`}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white border border-neutral-200 hover:border-primary-500 hover:text-primary-600'
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 hover:border-primary-500 hover:text-primary-600 transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <FiChevronRight size={18} />
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-400 cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next</span>
          <FiChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
