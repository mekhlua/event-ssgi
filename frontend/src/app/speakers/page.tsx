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
    return <p className="text-white text-center mt-20">Loading speakers...</p>;
  if (error)
    return (
      <p className="text-red-500 text-center mt-20">{error}</p>
    );

  return (
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
        <div className="absolute inset-0 bg-black/50 animate-twinkle" />
      </div>

      {/* Page Title */}
      <header className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Meet the Speakers
        </h1>
      </header>

      {/* Speakers Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-black/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition transform text-center"
          >
            {speaker.photo && (
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  className="object-cover rounded-full border-2 border-teal-400"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = '/placeholder-speaker.jpg';
                  }}
                />
              </div>
            )}
            
            <h2 className="text-xl font-semibold mb-2">{speaker.name}</h2>
            <p className="text-gray-300 mb-4 whitespace-pre-line">{speaker.bio}</p>

            <div className="flex justify-center gap-4 mt-2 text-gray-400 text-xl">
              {speaker.twitter && (
                <a 
                  href={speaker.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
              )}
              {speaker.linkedin && (
                <a 
                  href={speaker.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>
              )}
              {speaker.github && (
                <a 
                  href={speaker.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

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
