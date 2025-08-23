'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('User registered successfully');
        router.push('/schedule'); // Redirect after success
      } else {
        // Show specific field errors if available
        const fieldError =
          data.username?.[0] || data.email?.[0] || data.password?.[0] || data.detail || 'Registration failed';
        setError(fieldError);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white overflow-x-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-stars.jpg"
          alt="Starry background"
          fill
          className="object-cover object-center animate-zoomSlow"
          priority
        />
        <div className="absolute inset-0 bg-black/60 animate-twinkle" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-black/70 backdrop-blur-md border border-gray-700 rounded-2xl p-10 w-full max-w-md shadow-lg hover:shadow-2xl transition"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-300 drop-shadow-lg">
          Create Account
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <label className="block mb-2 font-medium">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-600 rounded bg-black/50 text-white placeholder-gray-400 focus:outline-teal-400 focus:ring-1 focus:ring-teal-400"
          placeholder="Choose a username"
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-600 rounded bg-black/50 text-white placeholder-gray-400 focus:outline-teal-400 focus:ring-1 focus:ring-teal-400"
          placeholder="you@example.com"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-6 border border-gray-600 rounded bg-black/50 text-white placeholder-gray-400 focus:outline-teal-400 focus:ring-1 focus:ring-teal-400"
          placeholder="Enter a strong password"
        />

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-500 transition font-semibold"
        >
          Register Now
        </button>
      </form>

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
