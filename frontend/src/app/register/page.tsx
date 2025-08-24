'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://event-ssgi-4.onrender.com';
      
      const registrationData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        first_name: "",
        last_name: "", 
        is_staff: false,
        is_active: true,
        is_superuser: false,
        last_login: null,
        date_joined: new Date().toISOString(),
        groups: [],
        user_permissions: []
      };

      const res = await fetch(`${API_URL}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      
      const text = await res.text();
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        console.error('JSON parse error:', parseError, 'Raw text:', text);
        data = {};
      }

      if (res.ok) {
        console.log('User registered successfully');
        router.push('/schedule');
      } else {
        console.error('Server errors:', data);
        setError(data.detail || data.message || 'Registration failed. Please check your input.');
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white overflow-x-hidden py-8">
      {/* Starry Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://img.freepik.com/premium-photo/abstract-space-scene-with-glowing-celestial-bodies_1060272-1807.jpg"
          alt="Starry background"
          fill
          className="object-cover object-center animate-zoomSlow"
  priority
  sizes="100vw"
/>
        <div className="absolute inset-0 bg-black/60 animate-twinkle" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-black/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md mx-4 shadow-lg hover:shadow-2xl transition"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-teal-300 drop-shadow-lg">
          Create Account
        </h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 mb-4">
            <p className="text-red-300 text-sm text-center">{error}</p>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm sm:text-base border border-gray-600 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-teal-400 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              placeholder="Choose a username"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm sm:text-base border border-gray-600 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-teal-400 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              placeholder="you@example.com"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm sm:text-base border border-gray-600 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-teal-400 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              placeholder="Enter a strong password"
              disabled={loading}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-500 transition font-semibold mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Registering...
            </div>
          ) : (
            'Register Now'
          )}
        </button>

        <p className="text-gray-400 text-xs sm:text-sm text-center mt-4">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="text-teal-400 hover:text-teal-300 underline"
          >
            Sign in
          </button>
        </p>
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

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </main>
  );
}