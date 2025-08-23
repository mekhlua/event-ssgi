'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Session = {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  day: string;
};

type ScheduleData = {
  [day: string]: Session[];
};

const SchedulePage: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  // Use environment variable instead of hardcoded localhost
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://event-ssgi-4.onrender.com';
  
  fetch(`${API_URL}/api/schedule/`)
    .then((res) => {
      if (!res.ok) throw new Error('Fetch failed');
      return res.json();
    })
    .then((data: Session[]) => {
      const grouped: ScheduleData = {};
      data.forEach((item: Session) => {
        const dayLabel = item.day || 'General';
        if (!grouped[dayLabel]) grouped[dayLabel] = [];
        grouped[dayLabel].push(item);
      });
      setSchedule(grouped);
      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
}, []);
  const formatTime = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  if (loading)
    return <p className="text-center text-white mt-20">Loading schedule...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-20">Failed to load schedule.</p>
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
          🛰️ Event Schedule
        </h1>
      </header>

      {/* Schedule Content */}
      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-12">
        {Object.entries(schedule).map(([day, sessions]) => (
          <section key={day}>
            <h2 className="text-2xl font-bold mb-6 text-teal-300 drop-shadow-md">
              📅 {day}
            </h2>
            <div className="grid gap-6">
              {sessions.map((session, idx) => (
                <div
                  key={idx}
                  className="bg-black/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {session.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{session.description}</p>
                  <p className="text-gray-400 text-sm">
                    {formatTime(session.start_time)} – {formatTime(session.end_time)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Tailwind Animations */}
      <style jsx global>{`
        @keyframes zoomSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoomSlow {
          animation: zoomSlow 20s infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite alternate;
        }
      `}</style>
    </main>
  );
};

export default SchedulePage;
