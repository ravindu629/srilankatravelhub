'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="my-8">
        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
          Photo Gallery
        </h3>
        <div className={`grid gap-4 ${
          images.length === 1 ? 'grid-cols-1' :
          images.length === 2 ? 'grid-cols-2' :
          images.length === 3 ? 'grid-cols-3' :
          'grid-cols-2 md:grid-cols-3'
        }`}>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
          >
            <FiX size={32} />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
            >
              <FiChevronLeft size={48} />
            </button>
          )}

          {/* Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={images[selectedIndex]}
              alt={`Gallery image ${selectedIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
            >
              <FiChevronRight size={48} />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
