// src/app/(legal)/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Café Papamín",
  description: "Política de privacidad de Café Papamín LLC",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <article className="prose prose-lg prose-gray max-w-none">
      {/* Page Header */}
      <div className="not-prose mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg inline-block">
          <strong>Última actualización:</strong>{" "}
          {new Date().toLocaleDateString("es-PR")}
        </p>
      </div>

      <div className="text-gray-800 leading-relaxed">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            1. Información que Recopilamos
          </h2>
          <p className="mb-4">
            Café Papamín LLC (&quot;<strong>nosotros</strong>&quot;, &quot;
            <strong>nuestro</strong>&quot; o &quot;<strong>la empresa</strong>
            &quot;) recopila información cuando usted visita nuestro sitio web o
            interactúa con nuestros servicios.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Información Personal
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Nombre y información de contacto</li>
              <li>Dirección de entrega</li>
              <li>Información de pedidos a través de WhatsApp</li>
              <li>Preferencias de productos</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Información Automática
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Páginas visitadas</li>
              <li>Tiempo de visita</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            2. Cómo Utilizamos Su Información
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Procesar y completar sus pedidos</li>
              <li>Comunicarnos con usted sobre sus pedidos</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            3. Compartir Información
          </h2>
          <p className="mb-4 text-gray-700">
            <strong>No vendemos, intercambiamos ni transferimos</strong> su
            información personal a terceros, excepto en las siguientes
            circunstancias:
          </p>
          <div className="bg-red-50 p-6 rounded-lg">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Para completar su pedido (servicios de entrega)</li>
              <li>Cuando sea requerido por ley</li>
              <li>Para proteger nuestros derechos legales</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            4. Servicios de Terceros
          </h2>
          <p className="mb-4 text-gray-700">
            Utilizamos los siguientes servicios de terceros:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Google Analytics
              </h4>
              <p className="text-sm text-gray-600">
                Para análisis de sitio web
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                WhatsApp Business
              </h4>
              <p className="text-sm text-gray-600">
                Para comunicación y pedidos
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Facebook/Instagram
              </h4>
              <p className="text-sm text-gray-600">Para redes sociales</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            5. Sus Derechos
          </h2>
          <div className="bg-amber-50 p-6 rounded-lg">
            <p className="mb-4 text-gray-700 font-medium">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Acceder a su información personal</li>
              <li>Corregir información incorrecta</li>
              <li>Solicitar eliminación de sus datos</li>
              <li>Limitar el procesamiento de sus datos</li>
              <li>Recibir una copia de sus datos</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            6. Seguridad de Datos
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700">
              Implementamos medidas de seguridad apropiadas para proteger su
              información personal contra acceso no autorizado, alteración,
              divulgación o destrucción.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            7. Cookies
          </h2>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <p className="text-gray-700">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio
              web. Puede configurar su navegador para rechazar cookies, pero
              esto puede afectar la funcionalidad del sitio.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            8. Cambios a Esta Política
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              Podemos actualizar esta política de privacidad ocasionalmente. Los
              cambios se publicarán en esta página con una nueva fecha de
              &quot;última actualización&quot;.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-200 pb-2">
            9. Contacto
          </h2>
          <div className="bg-amber-100 p-6 rounded-lg">
            <p className="mb-4 text-gray-700 font-medium">
              Si tiene preguntas sobre esta política de privacidad, contáctenos:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 font-semibold">Email:</p>
                <p className="text-gray-600">cafepapamin.lic@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">WhatsApp:</p>
                <p className="text-gray-600">+1 (939) 777-9642</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 font-semibold">Dirección:</p>
                <p className="text-gray-600">San Sebastián, Puerto Rico</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
