// src/components/LandingPage.tsx
"use client";

import { useState } from "react";
import { Star, Heart, Coffee, Award, Truck, Phone } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import GalleryModal from "./GalleryModal";
import productData from "@/data/productData";

const LandingPage: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryProductName, setGalleryProductName] = useState("");

  const openGallery = (images: string[], productName: string) => {
    setGalleryImages(images);
    setGalleryProductName(productName);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setGalleryImages([]);
    setGalleryProductName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/papamin.jpg"
            alt="Café Papamín Background"
            className="object-cover"
            fill
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative w-64 h-48 md:w-80 md:h-60 mx-auto">
              <Image
                src="/papamin2.jpg"
                alt="Café Papamín Logo"
                className="rounded-3xl shadow-2xl object-cover"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 300px"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Café Papamín
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light drop-shadow-md">
            Herencia de buen café desde Puerto Rico
          </p>
          <p className="text-lg md:text-xl mb-8 font-light drop-shadow-md">
            Descubre nuestros cafés artesanales tostados con tradición
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("productos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Explorar Productos
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Café Papamín representa la herencia cafetera puertorriqueña,
                cultivando y tostando granos selectos de las mejores montañas de
                San Sebastián y Las Marías.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Cada lote es tostado artesanalmente de 10 libras en 10 libras,
                garantizando la máxima calidad y frescura en cada taza.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">100% Puerto Rico</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Granos Selectos</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Tostado Artesanal</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96">
                <Image
                  src="/coffee-farm.jpg"
                  alt="Plantación de café"
                  className="rounded-3xl shadow-xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm font-semibold mt-1">Café Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Cafés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de cafés premium, cada uno con su
              personalidad única y sabor excepcional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productData.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onImageClick={openGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Café Papamín?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Origen Garantizado
              </h3>
              <p className="text-gray-600">
                100% café puertorriqueño de las mejores fincas de la isla, sin
                mezclas ni aditivos.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Calidad Superior
              </h3>
              <p className="text-gray-600">
                Granos seleccionados manualmente según estándares SCA para
                garantizar excelencia en cada taza.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Frescura Garantizada
              </h3>
              <p className="text-gray-600">
                Tostado en pequeños lotes para mantener la frescura y entregar
                el mejor sabor a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Probar Nuestro Café?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contáctanos directamente para realizar tu pedido o resolver
            cualquier duda
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/19397779642"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.facebook.com/share/195Vem9oWh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/papamincoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={closeGallery}
        images={galleryImages}
        productName={galleryProductName}
      />
    </div>
  );
};

export default LandingPage;
