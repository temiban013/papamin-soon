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
  title: "Café Papamín - Herencia de buen café | Muy Pronto",
  description:
    "Café Papamín de Puerto Rico estará disponible en línea muy pronto. Herencia de buen café, tradición familiar desde generaciones.",
  keywords: [
    "café",
    "Puerto Rico",
    "café puertorriqueño",
    "Papamín",
    "café premium",
    "café artesanal",
  ],
  openGraph: {
    title: "Café Papamín - Muy Pronto",
    description:
      "Café Papamín de Puerto Rico estará disponible en línea muy pronto.",
    type: "website",
    images: [
      {
        url: "/papamin2.jpg",
        width: 400,
        height: 300,
        alt: "Café Papamín Logo",
      },
    ],
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
