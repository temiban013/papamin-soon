// src/components/ImageRotator.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageRotatorProps {
  images: {
    src: string;
    title: string;
    desc: string;
    alt: string;
  }[];
  interval?: number; // Rotation interval in milliseconds
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

const ImageRotator: React.FC<ImageRotatorProps> = ({
  images,
  interval = 4000, // Default 4 seconds
  className = "",
  imageClassName = "",
  priority = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const rotationInterval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 150); // Quick fade duration
    }, interval);

    return () => clearInterval(rotationInterval);
  }, [images.length, interval]);

  if (images.length === 0) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`transition-opacity duration-150 ${
          isTransitioning ? "opacity-60" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          title={images[currentImageIndex].title}
          aria-description={images[currentImageIndex].desc}
          className={imageClassName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority && currentImageIndex === 0}
          quality={90}
        />
      </div>

      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1} of ${images.length}`}
            />
          ))}
        </div>
      )}

      {/* Image counter for accessibility */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Image {currentImageIndex + 1} of {images.length}:{" "}
        {images[currentImageIndex].alt}
      </div>
    </div>
  );
};

export default ImageRotator;
