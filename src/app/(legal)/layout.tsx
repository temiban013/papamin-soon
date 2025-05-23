// src/app/(legal)/layout.tsx
import Image from "next/image";
import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header Section */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src="/papamin-logo-rd.png"
                  alt="Café Papamín Logo"
                  className="rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  priority
                />
              </div>
              <div className="text-white">
                <h1 className="text-xl md:text-2xl font-bold">Café Papamín</h1>
                <p className="text-sm md:text-base text-white/80">
                  Herencia de buen café
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/#productos"
                className="text-white/80 hover:text-white transition-colors"
              >
                Productos
              </Link>
              <Link
                href="/#contacto"
                className="text-white/80 hover:text-white transition-colors"
              >
                Contacto
              </Link>
              <a
                href="https://wa.me/19397779642"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                WhatsApp
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <Link
              href="/"
              className="md:hidden text-white/80 hover:text-white text-sm font-medium"
            >
              Inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">{children}</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-white/80 text-sm">
            <p className="mb-2">
              © 2024 Café Papamín LLC. Todos los derechos reservados.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Términos
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
