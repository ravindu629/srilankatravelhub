'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  variant?: 'sidebar' | 'inline';
}

export default function NewsletterForm({ variant = 'sidebar' }: NewsletterFormProps) {
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

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (variant === 'sidebar') {
    return (
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-display font-bold mb-3">
          Love This Content?
        </h3>
        <p className="text-white/90 mb-4 text-sm">
          Get more travel stories delivered to your inbox
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="w-full px-4 py-2 rounded-lg mb-3 text-neutral-900 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-white text-primary-600 font-semibold py-2 rounded-lg hover:bg-neutral-100 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-3 text-sm text-white">✅ Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-white">❌ Failed. Please try again.</p>
        )}
      </div>
    );
  }

  // Inline variant (for blog listing page)
  return (
    <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-6 text-white">
      <h3 className="text-xl font-display font-bold mb-3">
        Get Weekly Updates
      </h3>
      <p className="text-white/90 mb-4 text-sm">
        Subscribe to receive the latest travel tips and destination guides
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="w-full px-4 py-2 rounded-lg mb-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-white text-primary-600 font-semibold py-2 rounded-lg hover:bg-neutral-100 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 text-sm text-white">✅ Thank you for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-white">❌ Failed. Please try again.</p>
      )}
    </div>
  );
}
