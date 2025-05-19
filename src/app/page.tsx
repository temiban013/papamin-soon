import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Now using papamin.jpg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/papamin.jpg"
          alt="Café Papamín Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Enhanced overlay for 25% fade + better text readability */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Logo - Now using papamin2.jpg with rounded edges */}
        <div className="mb-8 md:mb-12">
          <div className="relative w-64 h-48 md:w-80 md:h-60 rounded-3xl overflow-hidden drop-shadow-2xl">
            <Image
              src="/papamin2.jpg"
              alt="Café Papamín Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Coming Soon Text */}
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Muy Pronto
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-md font-light">
            Nuestra tienda online estará disponible pronto
          </p>
          <p className="text-lg md:text-xl text-white/80 drop-shadow-md font-light">
            Herencia de buen café
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 md:mt-12 text-center space-y-4">
          <p className="text-base md:text-lg text-white/90 drop-shadow-md">
            Mientras tanto, síguenos en redes sociales
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://www.facebook.com/share/195Vem9oWh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 drop-shadow-md"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/papamincoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 drop-shadow-md"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/19397779642"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 drop-shadow-md"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
