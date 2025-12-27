'use client';

import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <FiMail className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Never Miss an Adventure
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter and get the latest travel tips, destination guides, and exclusive content delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-white font-medium animate-fade-in">
              🎉 Thank you for subscribing! Check your email for confirmation.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-white font-medium animate-fade-in">
              ❌ Failed to subscribe. Please try again or contact us directly.
            </p>
          )}

          <p className="mt-6 text-sm text-white/70">
            Join 10,000+ travelers who get inspired weekly. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
