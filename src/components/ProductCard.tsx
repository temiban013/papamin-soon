// src/components/ProductCard.tsx
"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onImageClick: (images: string[], productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onImageClick }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div className="w-full h-64 relative">
          <Image
            src={product.mainImage}
            alt={product.name}
            className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onClick={() => onImageClick(product.images, product.name)}
          />
        </div>
        <div className="absolute top-4 right-4">
          <button
            type="button"
            className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.subtitle}</p>
        <p className="text-gray-700 text-sm mb-4">{product.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Tamaño:</span>
            <span className="text-sm font-medium">{product.size}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Tueste:</span>
            <span className="text-sm font-medium">{product.roast}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Características:
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">
            {product.price}
          </span>
          <button
            type="button"
            className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors"
            onClick={() =>
              window.open(
                `https://wa.me/19397779642?text=Hola! Me interesa el ${product.name}`,
                "_blank"
              )
            }
            aria-label={`Comprar ${product.name}`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
