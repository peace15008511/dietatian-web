'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function Book() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email or call an API)
    alert('Thank you for your message. We will get back to you shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Header/>
    <main className="px-4 sm:px-8 py-20 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Book a Consultation</h1>
      <p className="text-gray-700 mb-6">
        Fill out the form below to schedule a consultation, or reach out via WhatsApp for faster communication.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Submit Booking Request
        </button>
      </form>

      {/* WhatsApp Option */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-2">Prefer WhatsApp?</p>
        <Link
          href="https://wa.me/27715814515"
          target="_blank"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition"
        >
          Message on WhatsApp
        </Link>
      </div>
    </main>
    </>

  );
}
