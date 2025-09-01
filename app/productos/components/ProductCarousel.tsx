import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel({ images, productName }: { images: string[], productName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${productName} - Imagen ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}