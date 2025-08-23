'use client';
import Head from 'next/head';
import Image from 'next/image';

export default function LocationPage() {
  return (
    <>
      <Head>
        <title>Event Location | SSGI 2025</title>
      </Head>

      <main className="relative min-h-screen text-white overflow-x-hidden">
        {/* Starry Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/bg-stars.jpg"
            alt="Starry background"
            fill
            className="object-cover object-center animate-zoomSlow"
            priority
          />
          <div className="absolute inset-0 bg-black/60 animate-twinkle" />
        </div>

        {/* Page Content */}
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 drop-shadow-lg">
            📍 Event Location
          </h1>

          <div className="space-y-6">
            {/* Venue */}
            <div className="bg-black/70 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <h2 className="text-2xl font-semibold mb-2 text-teal-300">Venue</h2>
              <p>Addis Ababa International Convention Centre, 4 kilo, Addis Ababa, Ethiopia</p>
            </div>

            {/* Date & Time */}
            <div className="bg-black/70 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <h2 className="text-2xl font-semibold mb-2 text-teal-300">Date & Time</h2>
              <p>August 20–22, 2025 | 9:00 AM – 6:00 PM daily</p>
            </div>

            {/* Contact */}
            <div className="bg-black/70 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <h2 className="text-2xl font-semibold mb-2 text-teal-300">Contact</h2>
              <p>
                Email: <a href="mailto:info@spacesciencegeo.org" className="text-blue-400 underline">info@spacesciencegeo.org</a> <br />
                Phone: <a href="tel:+251115515901" className="text-blue-400 underline">+251 11 551 5901</a>
              </p>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.6992959226795!2d38.7631313755437!3d9.019975552689353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8585f0126257%3A0x65dd1dc0f4bc9ffd!2sSpace%20Science%20and%20Geospatial%20Institute!5e0!3m2!1sen!2set!4v1755863375952!5m2!1sen!2set"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Tailwind Animations */}
        <style jsx global>{`
          @keyframes zoomSlow {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .animate-zoomSlow { animation: zoomSlow 20s infinite; }

          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.6; }
          }
          .animate-twinkle { animation: twinkle 3s infinite alternate; }
        `}</style>
      </main>
    </>
  );
}
