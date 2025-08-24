"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSections(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden scroll-smooth">
      {/* Animated Star Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://img.freepik.com/premium-photo/abstract-space-scene-with-glowing-celestial-bodies_1060272-1807.jpg"
          alt="Starry background"
          fill
          className="object-cover object-center animate-zoomSlow"
          priority
          sizes="100vw"
        />
        {/* Twinkling overlay */}
        <div className="absolute inset-0 bg-black/50 animate-twinkle" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 bg-black/60 backdrop-blur-lg shadow-lg border-b border-gray-800">
        {/* Logo / Title */}
        <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide text-white">
          <span className="text-green-400">Space</span> Science & Geo
        </h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex space-x-3 lg:space-x-4">
          <a
            href="#boxes"
            className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-blue-400 text-blue-300 font-semibold text-xs lg:text-sm hover:bg-blue-500 hover:text-white shadow-md transition-all duration-300"
          >
            Explore
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className={`flex flex-col justify-center items-center text-center h-screen px-4 sm:px-6 transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
          Abby&apos;s Space Event 2025
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 drop-shadow px-2">
          August 20–22 • Addis Ababa International Convention Centre
        </p>
        <Link
          href="/register"
          className="px-6 py-2.5 sm:px-8 sm:py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition shadow-lg text-sm sm:text-base"
        >
          Register Now
        </Link>
      </section>

      {/* About Section */}
      <section className={`px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-5xl mx-auto transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl border border-teal-500/40 p-6 sm:p-8 md:p-10 hover:scale-[1.02] transition-transform duration-500">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-teal-300 tracking-wide text-center sm:text-left">
            About The Event
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-left">
            Join global experts in space science, satellite technology, and geospatial 
            intelligence for three days of inspiring talks, hands-on workshops, 
            and networking opportunities at the most anticipated space technology event of the year.
            This year&apos;s theme &quot;Beyond Horizons: Mapping the Future&quot; 
            will explore breakthroughs in space exploration, 
            Earth observation, and the integration of AI with geospatial technologies.
          </p>
        </div>
      </section>

      {/* Boxes Section */}
      <section id="boxes" className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        {/* Schedule Box */}
        <Link href="/schedule" className="bg-black/70 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg md:hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex flex-col items-center text-center group">
          <div className="bg-blue-600 p-3 sm:p-4 md:p-5 rounded-full mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:animate-bounce">📅</div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Schedule</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">View the full schedule of talks, workshops, and networking events.</p>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition">See More</span>
        </Link>

        {/* Speakers Box */}
        <Link href="/speakers" className="bg-black/70 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg md:hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex flex-col items-center text-center group">
          <div className="bg-purple-600 p-3 sm:p-4 md:p-5 rounded-full mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:animate-bounce">🎤</div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Speakers</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">Meet our featured experts from NASA, ESA, and SpaceX sharing their insights.</p>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600 rounded-full text-xs sm:text-sm font-semibold hover:bg-purple-700 transition">See More</span>
        </Link>

        {/* Location Box */}
        <Link href="/location" className="bg-black/70 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg md:hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex flex-col items-center text-center group">
          <div className="bg-green-600 p-3 sm:p-4 md:p-5 rounded-full mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:animate-bounce">📍</div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Location</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">Find the venue, accommodation, and how to get there in Addis Ababa.</p>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 rounded-full text-xs sm:text-sm font-semibold hover:bg-green-700 transition">See More</span>
        </Link>
      </section>

      {/* Call to Action Section */}
      <section id="register" className={`px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-4xl mx-auto text-center bg-black/60 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Ready to Explore the Future With Us?
        </h3>
        <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
          Register now to secure your spot at the premier space science and geospatial technology event of 2025.
        </p>
        <Link
          href="/register"
          className="px-6 py-2.5 sm:px-8 sm:py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition shadow-lg text-sm sm:text-base inline-block"
        >
          Register Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 mt-12 sm:mt-16 md:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">About</h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              Bringing together global experts in satellite technology, space science, and geospatial intelligence for inspiring talks, workshops, and networking.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
            <p className="text-gray-400 text-xs sm:text-sm">📧 info@spacesciencegeo.org</p>
            <p className="text-gray-400 text-xs sm:text-sm">📞 +251 11 551 5901</p>
            <p className="text-gray-400 text-xs sm:text-sm">Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Links</h4>
            <ul className="text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Code of Conduct</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
          © 2025 Space Science & Geospatial Institute. All rights reserved.
        </div>
      </footer>

      {/* Tailwind Animations */}
      <style jsx global>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-zoomSlow {
          animation: zoomSlow 20s infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite alternate;
        }
      `}</style>
    </main>
  );
}