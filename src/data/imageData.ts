// src/data/imageData.ts

export interface RotatorImage {
  src: string;
  desc: string;
  title: string;
  alt: string;
  category: "professional" | "farmer" | "farm";
}

export const heroRotatorImages: RotatorImage[] = [
  // Professional images
  {
    src: "/papamin-professional1.jpg",
    desc: "Una bolsa de Café Papamín, con su distintivo empaque rojo y etiqueta 'Herencia de buen café', rodeada de granos de café tostados, lista para ser disfrutada.",
    alt: "Una bolsa de Café Papamín, con su distintivo empaque rojo y etiqueta 'Herencia de buen café', rodeada de granos de café tostados, lista para ser disfrutada.",
    title: "Café Papamín - Presentación profesional del producto premium",
    category: "professional",
  },
  {
    src: "/papamin-professional2.jpg",
    desc: "Un empaque de Café Papamín en rojo vibrante, recostado sobre un lecho de granos de café tostados, evocando la calidad y frescura de nuestro producto.",
    alt: "Un empaque de Café Papamín en rojo vibrante, recostado sobre un lecho de granos de café tostados, evocando la calidad y frescura de nuestro producto.",
    title: "Café Papamín - Empaque profesional artesanal",
    category: "professional",
  },
  {
    src: "/papamin-professional3.jpg",
    desc: "Dos bolsas de Café Papamín, una roja y una azul, junto a una taza de café humeante con arte latte, invitando a experimentar la rica tradición y el delicioso sabor de nuestro café.",
    alt: "Dos bolsas de Café Papamín, una roja y una azul, junto a una taza de café humeante con arte latte, invitando a experimentar la rica tradición y el delicioso sabor de nuestro café.",
    title: "Café Papamín - Granos selectos tostado artesanal",
    category: "professional",
  },

  // Farmer images
  {
    src: "/papamin-farmer1.jpeg",
    desc: "Agricultor trabajando entre las plantas de café, inspeccionando y recogiendo los frutos maduros.",
    alt: "Agricultor trabajando entre las plantas de café, inspeccionando y recogiendo los frutos maduros.",
    title: "Entre Cafetos: La Labor de la Cosecha",
    category: "farmer",
  },
  {
    src: "/papamin-farmer2.jpeg",
    desc: "Una caficultora selecciona y recoge a mano las cerezas de café de las ramas, utilizando una cesta tradicional.",
    alt: "Un caficultor selecciona y recoge a mano las cerezas de café de las ramas, utilizando una cesta tradicional.",
    title: "Finca Papamín entre las montañas verdes de Puerto Rico",
    category: "farmer",
  },
  {
    src: "/papamin-farmer3.jpeg",
    desc: "Agricultor recolectando cerezas de café maduras en el campo, llenando cuidadosamente su cubeta.",
    alt: "Agricultor/a recolectando cerezas de café maduras en el campo, llenando cuidadosamente su cubeta.",
    title: "Recolección Manual de Café",
    category: "farmer",
  },
  {
    src: "/papamin-farmer4.jpeg",
    desc: "Varias cubetas y recipientes llenos de cerezas de café recién recolectadas, mostrando la abundancia de la cosecha.",
    alt: "Varias cubetas y recipientes llenos de cerezas de café recién recolectadas, mostrando la abundancia de la cosecha.",
    title: "Frutos de la Cosecha: Café Listo para Procesar",
    category: "farmer",
  },
  {
    src: "/papamin-farmer5.jpeg",
    desc: "Joven sonriente muestra con orgullo su cesta llena de cerezas de café, rodeada de cafetos cargados.",
    alt: "Joven sonriente muestra con orgullo su cesta llena de cerezas de café, rodeada de cafetos cargados.",
    title: "Cosechando Café con Esmero",
    category: "farmer",
  },
  {
    src: "/papamin-farmer6.jpeg",
    desc: "Dos caficultores clasificando cerezas de café y plátanos, una escena que evoca las prácticas agrícolas tradicionales.",
    alt: "Dos caficultores clasificando cerezas de café y plátanos, una escena que evoca las prácticas agrícolas tradicionales.",
    title: "Selección Tradicional del Grano de Café Papamín",
    category: "farmer",
  },

  // Farm images
  {
    src: "/papamin-farm1.jpg",
    desc: "Primer plano de una rama de cafeto cargada de cerezas rojas y verdes, listas para la cosecha.",
    alt: "Primer plano de una rama de cafeto cargada de cerezas rojas y verdes, listas para la cosecha.",
    title: "Cerezas de Café Madurando",
    category: "farm",
  },
  {
    src: "/papamin-farm2.jpg",
    desc: "Extenso cultivo de cafetos en hileras, con árboles más altos proporcionando sombra en un día soleado.",
    alt: "Extenso cultivo de cafetos en hileras, con árboles más altos proporcionando sombra en un día soleado.",
    title: "Plantación de Café Bajo Sombra y Sol",
    category: "farm",
  },
  {
    src: "/papamin-farm3.jpg",
    desc: "Delicadas flores blancas de café en plena floración, prometiendo una futura cosecha.",
    alt: "Delicadas flores blancas de café en plena floración, prometiendo una futura cosecha.",
    title: "Floración del Cafeto",
    category: "farm",
  },
  {
    src: "/papamin-farm4.jpg",
    desc: "Campo recién sembrado con jóvenes plantas de café, cuidadosamente plantadas en hileras sobre tierra rojiza.",
    alt: "Campo recién sembrado con jóvenes plantas de café, cuidadosamente plantadas en hileras sobre tierra rojiza.",
    title: "Nuevas Vidas en el Cafetal",
    category: "farm",
  },
  {
    src: "/papamin-farm5.jpg",
    desc: "Bayas de café, el fruto precioso de una plantación dedicada a la excelencia.",
    alt: "Bayas de café, el fruto precioso de una plantación dedicada a la excelencia.",
    title: "El tesoro de la plantación",
    category: "farm",
  },
];

// Alternative configurations for different use cases
export const professionalImages = heroRotatorImages.filter(
  (img) => img.category === "professional"
);
export const farmImages = heroRotatorImages.filter(
  (img) => img.category === "farm"
);
export const farmerImages = heroRotatorImages.filter(
  (img) => img.category === "farmer"
);
