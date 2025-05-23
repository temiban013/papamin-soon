// src/app/(legal)/terms-of-service/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio | Café Papamín",
  description: "Términos y condiciones de uso de Café Papamín LLC",
  robots: { index: false, follow: false },
};

export default function TermsOfService() {
  return (
    <article className="prose prose-lg prose-gray max-w-none">
      {/* Page Header */}
      <div className="not-prose mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Términos de Servicio
        </h1>
        <p className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg inline-block">
          <strong>Última actualización:</strong>{" "}
          {new Date().toLocaleDateString("es-PR")}
        </p>
      </div>

      <div className="text-gray-800 leading-relaxed">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            1. Aceptación de Términos
          </h2>
          <div className="bg-amber-50 p-6 rounded-lg">
            <p className="text-gray-700">
              Al acceder y utilizar el sitio web de Café Papamín LLC, usted
              acepta estar sujeto a estos términos de servicio y todas las leyes
              y regulaciones aplicables.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            2. Información de la Empresa
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <strong>Nombre Legal:</strong> Café Papamín LLC
                </p>
                <p className="text-gray-700">
                  <strong>Registro:</strong> [Número de registro de negocio]
                </p>
                <p className="text-gray-700">
                  <strong>Dirección:</strong> San Sebastián, Puerto Rico 00685
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Licencia de Comerciante:</strong> [Si aplica]
                </p>
                <p className="text-gray-700">
                  <strong>Registro IVU:</strong> [Número de registro de IVU]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Continue with all other sections... */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            3. Productos y Servicios
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Descripción de Productos
            </h3>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Vendemos café artesanal puertorriqueño de alta calidad. Todas
                las descripciones de productos son precisas al momento de la
                publicación, pero pueden estar sujetas a cambios.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Disponibilidad
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Los productos están sujetos a disponibilidad. Nos reservamos el
                derecho de descontinuar productos en cualquier momento.
              </p>
            </div>
          </div>
        </section>

        {/* Add all remaining sections here - I'll provide the rest if needed */}

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            9. Contacto
          </h2>
          <div className="bg-amber-100 p-6 rounded-lg">
            <p className="mb-4 text-gray-700 font-medium">
              Para preguntas sobre estos términos, contáctenos:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-gray-700 font-semibold">WhatsApp:</p>
                <p className="text-gray-600">+1 (939) 777-9642</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Email:</p>
                <p className="text-gray-600">cafepapamin.lic@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Horario:</p>
                <p className="text-gray-600">
                  Lunes a Domingo
                  <br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
