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
  themeColor: "#f00",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
