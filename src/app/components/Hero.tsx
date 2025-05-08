'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* No Overlay */}
      {/* You can add bg-black/20 if you need slight readability */}

      {/* Content */}
      <div className="relative z-20 text-center max-w-2xl px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Nourish Your Body. <br /> Empower Your Life.
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8 drop-shadow-md">
          Discover personalized nutrition coaching tailored to your lifestyle.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/book"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
          >
            Book Consultation
          </Link>
          <Link
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
