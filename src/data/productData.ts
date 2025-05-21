// src/data/productData.ts
import type { Product } from "@/types/product";

const productData: Product[] = [
  {
    id: 1,
    name: "Café Papamín Strong",
    subtitle: "Blend Tipo Italiano",
    description:
      "Elaborado en Puerto Rico con puro café de Puerto Rico. Blend de Robusta y Arábica.",
    price: "$12.99",
    size: "14oz",
    roast: "Tueste Alto (Dark Roasted)",
    features: [
      "Cuerpo fuerte e intenso",
      "Aroma equilibrado",
      "Acidez baja-moderada",
      "Alto contenido de cafeína",
      "Ideal para mañanas y tardes",
    ],
    images: [
      "/papamin-strong.jpeg",
      "/products/strong-back.jpg",
      "/products/strong-beans.jpg",
    ],
    mainImage: "/papamin-strong.jpeg",
  },
  {
    id: 2,
    name: "Café Papamín 100% Arábico",
    subtitle: "Grano Selecto",
    description:
      "Los mejores granos arábicos con fermentación natural controlada. Seleccionado por tamaños.",
    price: "$15.99",
    size: "8oz / 14oz",
    roast: "Tueste Medio",
    features: [
      "Sensación suave y delicada",
      "Notas florales y chocolate",
      "Cuerpo cremoso y balanceado",
      "Ideal para espresso y filtrado",
      "Granos seleccionados #18, 17, 16",
    ],
    images: [
      "/papamin-arabico-medio.jpeg",
      "/products/arabico-back.jpg",
      "/products/arabico-beans.jpg",
    ],
    mainImage: "/papamin-arabico-medio.jpeg",
  },
  {
    id: 3,
    name: "Café Papamín Blend 80/20 Medio",
    subtitle: "Arábica y Robusta",
    description:
      "Combinación perfecta de 80% Arábica y 20% Robusta. Tostado artesanalmente.",
    price: "$10.99",
    size: "8oz / 14oz / 2lbs / 5lbs",
    roast: "Tueste Medio",
    features: [
      "Cuerpo ligero y suave",
      "Aroma alto de variedad arábica",
      "Acidez moderada",
      "Notas a nuez y chocolate",
      "Disponible molido o en grano",
    ],
    images: [
      "/papamin-80-20-medio.jpeg",
      "/products/blend-back.jpg",
      "/products/blend-beans.jpg",
    ],
    mainImage: "/papamin-80-20-medio.jpeg",
  },
  {
    id: 4,
    name: "Café Papamín Blend 80/20 Medio Alto",
    subtitle: "Arábica y Robusta",
    description:
      "Combinación perfecta de 80% Arábica y 20% Robusta. Tostado artesanalmente.",
    price: "$10.99",
    size: "8oz / 14oz / 2lbs / 5lbs",
    roast: "Tueste Medio Alto",
    features: [
      "Cuerpo medio con mayor intensidad",
      "Aroma equilibrado",
      "Acidez baja-moderada",
      "Notas a chocolate negro y frutos secos",
      "Disponible molido o en grano",
    ],
    images: [
      "/papamin-80-20-medio-alto.jpeg",
      "/products/blend-back.jpg",
      "/products/blend-beans.jpg",
    ],
    mainImage: "/papamin-80-20-medio-alto.jpeg",
  },
];

export default productData;
