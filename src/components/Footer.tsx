// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Café Papamín LLC</h3>
            <p className="text-gray-300 text-sm mb-2">
              San Sebastián, Puerto Rico 00685
            </p>
            <p className="text-gray-300 text-sm mb-2">
              Registro de Comerciante: [Número]
            </p>
            <p className="text-gray-300 text-sm mb-2">Registro IVU: [Número]</p>
            <p className="text-gray-300 text-sm">
              Horario: Lunes a Domingo, 8:00 AM - 6:00 PM AST
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Café Strong</li>
              <li>100% Arábico</li>
              <li>Blend 80/20 Medio</li>
              <li>Blend 80/20 Medio Alto</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>WhatsApp: +1 (939) 777-9642</li>
              <li>Email: cafepapamin.llc@gmail.com</li>
              <li>
                <a
                  href="https://www.facebook.com/share/195Vem9oWh/"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/papamincoffee/"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Café Papamín LLC. Todos los derechos reservados. Producto de
            Puerto Rico.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Este sitio web cumple con las regulaciones de la FDA. Los productos
            no han sido evaluados por la FDA.
          </p>
        </div>
      </div>
    </footer>
  );
}
