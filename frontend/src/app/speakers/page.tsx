'use client';
import { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

type Speaker = {
  id: number;
  name: string;
  bio: string;
  photo: string;
  twitter: string | null;
  linkedin: string | null;
  github: string | null;
};

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://event-ssgi-4.onrender.com';
    
    fetch(`${API_URL}/api/speakers/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch speakers: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setSpeakers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching speakers:', error);
        setError('Failed to load speakers. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://img.freepik.com/premium-photo/abstract-space-scene-with-glowing-celestial-bodies_1060272-1807.jpg"
            alt="Starry background"
            fill
            className="object-cover object-center animate-zoomSlow"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 animate-twinkle" />
        </div>
        <p className="text-center text-white text-lg">Loading speakers...</p>
      </div>
    );
    
  if (error)
    return (
      <div className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://img.freepik.com/premium-photo/abstract-space-scene-with-glowing-celestial-bodies_1060272-1807.jpg"
            alt="Starry background"
            fill
            className="object-cover object-center animate-zoomSlow"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 animate-twinkle" />
        </div>
        <p className="text-red-400 text-center text-lg px-4">{error}</p>
      </div>
    );

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://img.freepik.com/premium-photo/abstract-space-scene-with-glowing-celestial-bodies_1060272-1807.jpg"
          alt="Starry background"
          fill
          className="object-cover object-center animate-zoomSlow"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 animate-twinkle" />
      </div>

      {/* Page Title */}
      <header className="text-center py-12 px-4 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Meet the Speakers
        </h1>
      </header>

      {/* Speakers Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-black/70 backdrop-blur-md border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl md:hover:scale-105 transition-transform duration-300 text-center"
          >
            {speaker.photo && (
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 relative">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  className="object-cover rounded-full border-2 border-teal-400"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-speaker.jpg';
                  }}
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                />
              </div>
            )}
            
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{speaker.name}</h2>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 whitespace-pre-line leading-relaxed">
              {speaker.bio}
            </p>

            <div className="flex justify-center gap-3 sm:gap-4 mt-2 text-gray-400 text-lg sm:text-xl">
              {speaker.twitter && (
                <a 
                  href={speaker.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200 p-1"
                  aria-label={`${speaker.name} Twitter`}
                >
                  <FaTwitter />
                </a>
              )}
              {speaker.linkedin && (
                <a 
                  href={speaker.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors duration-200 p-1"
                  aria-label={`${speaker.name} LinkedIn`}
                >
                  <FaLinkedin />
                </a>
              )}
              {speaker.github && (
                <a 
                  href={speaker.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors duration-200 p-1"
                  aria-label={`${speaker.name} GitHub`}
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {speakers.length === 0 && !loading && (
        <div className="text-center py-16 px-4">
          <p className="text-gray-400 text-lg">No speakers available yet. Check back later!</p>
        </div>
      )}

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
  );
}