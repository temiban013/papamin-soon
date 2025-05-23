import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafepapaminllc.com"),
  applicationName: "Café Papamín",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "es-PR": "/",
      es: "/",
    },
  },
  title: "Café Papamín - Herencia de buen café | Puerto Rico",
  description:
    "Café Papamín de Puerto Rico - Herencia de buen café, tradición familiar desde generaciones. Ordena nuestros cafés artesanales directamente por WhatsApp. Tostado artesanal en lotes pequeños desde las montañas de San Sebastián y Las Marías.",
  keywords: [
    "café",
    "Puerto Rico",
    "café puertorriqueño",
    "Papamín",
    "café premium",
    "café artesanal",
    "WhatsApp",
    "pedidos WhatsApp",
    "café online",
    "San Sebastián",
    "Las Marías",
    "tostado artesanal",
    "café de montaña",
    "café gourmet",
    "café local",
    "finca cafetera",
    "granos selectos",
    "café fresco",
    "comprar café",
    "café directo",
    "tradición cafetera",
    "café puertorriqueño auténtico",
    "especialidad de café",
    "café de origen",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/papamin-logo-rd.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/papamin-logo-rd.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Café Papamín - Herencia de buen café desde Puerto Rico",
    description:
      "Café artesanal puertorriqueño de las montañas de San Sebastián y Las Marías. Ordena directamente por WhatsApp. Tradición familiar, tostado artesanal en lotes pequeños.",
    url: "https://cafepapaminllc.com",
    siteName: "Café Papamin",
    locale: "es_PR",
    type: "website",
    images: [
      {
        url: "/papamin-logo-sq.png",
        width: 1200,
        height: 630,
        alt: "Café Papamín - Herencia de buen café desde Puerto Rico",
      },
    ],
  },
  authors: [
    { name: "Café Papamín", url: "https://cafepapaminllc.com" },
    { name: "Mario R. Ayala", url: "https://mariorafaelayala.com" },
  ],
  creator: "Café Papamín",
  publisher: "Mario R. Ayala",
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Papamín - Herencia de buen café desde Puerto Rico",
    description:
      "Café artesanal puertorriqueño de las montañas de San Sebastián y Las Marías. Ordena directamente por WhatsApp. Tradición familiar, tostado artesanal en lotes pequeños.",
    images: [
      {
        url: "/papamin-logo-sq.png",
        width: 1200,
        height: 630,
        alt: "Café Papamín - Herencia de buen café desde Puerto Rico",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Café Papamín - Herencia de buen café",
    statusBarStyle: "default",
    startupImage: [
      {
        url: "/papamin-logo-sq.png",
      },
    ],
  },
  category: "food",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#d97706" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Café Papamín",
            description:
              "Café artesanal puertorriqueño de las montañas de San Sebastián y Las Marías",
            url: "https://www.cafepapamin.com",
            logo: "https://www.cafepapamin.com/papamin-logo-sq.png",
            image: [
              "https://www.cafepapamin.com/papamin-logo-sq.png",
              "https://www.cafepapamin.com/papamin-logo-rd.png",
            ],
            address: {
              "@type": "PostalAddress",
              addressRegion: "PR",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "18.291708159501376",
              longitude: "-66.95898948747538",
            },
            areaServed: "Puerto Rico",
            telephone: "+1-939-777-9642",
            priceRange: "$10-$16",
            currenciesAccepted: "USD",
            paymentAccepted: "WhatsApp Orders",
            openingHours: "Mo-Su 08:00-18:00",
            serviceType: "Coffee Roastery",
            brand: {
              "@type": "Brand",
              name: "Café Papamín",
            },
            foundingDate: "2020",
            founder: {
              "@type": "Person",
              name: "Familia Papamín",
            },
            location: {
              "@type": "Place",
              name: "San Sebastián, Puerto Rico",
            },
            makesOffer: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Café Artesanal Puertorriqueño",
                category: "Coffee",
              },
            },
            sameAs: [
              "https://www.facebook.com/share/195Vem9oWh/",
              "https://www.instagram.com/papamincoffee/",
            ],
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
