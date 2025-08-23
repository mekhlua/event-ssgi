// app/page.tsx
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
          src="/bg-stars.jpg"
          alt="Starry background"
          fill
          className="object-cover object-center animate-zoomSlow"
          priority
        />
        <div className="absolute inset-0 bg-black/50 animate-twinkle" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black/60 backdrop-blur-lg shadow-lg">
        <h1 className="text-xl md:text-3xl font-extrabold tracking-wide text-teal-300 drop-shadow-lg">
  Space Science & Geo Institute
</h1>

        <nav className="hidden md:flex space-x-4">
          <Link
            href="#boxes"
            className="px-4 py-2 border border-transparent hover:border-white rounded transition font-semibold text-sm text-gray-200 hover:text-white"
          >
            Explore
          </Link>
          <Link
            href="#register"
            className="px-4 py-2 bg-green-600 rounded font-semibold text-sm hover:bg-green-700 transition"
          >
            Register
          </Link>
          
        </nav>
      </header>

      {/* Hero */}
      <section className={`flex flex-col justify-center items-center text-center h-screen px-6 transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Abby&apos;s Space Event 2025
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow">
          August 20–22 • Addis Ababa International Convention Centre
        </p>
        <Link
          href="#register"
          className="px-8 py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition shadow-lg"
        >
          Register Now
        </Link>
      </section>
        {/* About the Event Section */}
<section className={`px-6 py-12 max-w-4xl mx-auto text-center bg-black/40 backdrop-blur-md rounded-xl shadow-xl border border-teal-500 transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
  <h3 className="text-4xl font-bold mb-6 text-teal-300 drop-shadow">About the Event</h3>
  <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
    Join global experts in space science, satellite technology, and geospatial intelligence for three days of inspiring talks, hands-on workshops, and networking opportunities at the most anticipated space technology event of the year.
  </p>
  <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-4">
    This year's theme <span className="font-semibold text-white">"Beyond Horizons: Mapping the Future"</span> will explore breakthroughs in space exploration, Earth observation, and the integration of AI with geospatial technologies.
  </p>
</section>

      {/* Boxes Section */}
      <section id="boxes" className={`max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        {/* Schedule Box */}
        <Link href="/schedule" className="bg-black/70 backdrop-blur-md rounded-xl p-8 shadow-lg hover:scale-105 transition transform hover:shadow-2xl flex flex-col items-center text-center group">
          <div className="bg-blue-600 p-5 rounded-full mb-4 text-2xl group-hover:animate-bounce">📅</div>
          <h3 className="text-2xl font-semibold mb-2">Schedule</h3>
          <p className="text-gray-300 mb-4">View the full schedule of talks, workshops, and networking events.</p>
          <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold hover:bg-blue-700 transition">See More</span>
        </Link>

        {/* Speakers Box */}
        <Link href="/speakers" className="bg-black/70 backdrop-blur-md rounded-xl p-8 shadow-lg hover:scale-105 transition transform hover:shadow-2xl flex flex-col items-center text-center group">
          <div className="bg-purple-600 p-5 rounded-full mb-4 text-2xl group-hover:animate-bounce">🎤</div>
          <h3 className="text-2xl font-semibold mb-2">Speakers</h3>
          <p className="text-gray-300 mb-4">Meet our featured experts from NASA, ESA, and SpaceX sharing their insights.</p>
          <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold hover:bg-purple-700 transition">See More</span>
        </Link>

        {/* Location Box */}
        <Link href="/location" className="bg-black/70 backdrop-blur-md rounded-xl p-8 shadow-lg hover:scale-105 transition transform hover:shadow-2xl flex flex-col items-center text-center group">
          <div className="bg-green-600 p-5 rounded-full mb-4 text-2xl group-hover:animate-bounce">📍</div>
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <p className="text-gray-300 mb-4">Find the venue, accommodation, and how to get there in Addis Ababa.</p>
          <span className="px-4 py-2 bg-green-600 rounded-full text-sm font-semibold hover:bg-green-700 transition">See More</span>
        </Link>
      </section>

      {/* Call to Action Section */}
      <section id="register" className={`px-6 py-20 max-w-4xl mx-auto text-center bg-black/60 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-1000 ${showSections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Explore the Future With Us?
        </h3>
        <p className="text-gray-300 mb-6">
          Register now to secure your spot at the premier space science and geospatial technology event of 2025.
        </p>
        <Link
          href="/register"
          className="px-8 py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition shadow-lg"
        >
          Register Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <p className="text-gray-400 text-sm">
              Bringing together global experts in satellite technology, space science, and geospatial intelligence for inspiring talks, workshops, and networking.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">📧 info@spacesciencegeo.org</p>
            <p className="text-gray-400 text-sm">📞 +251 11 551 5901</p>
            <p className="text-gray-400 text-sm">Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Code of Conduct</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
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
