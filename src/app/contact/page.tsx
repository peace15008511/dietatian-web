'use client';

import Header from '@/components/Header';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // You can integrate an API here (e.g., Formspree or EmailJS)
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Header/>
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Contact</h1>

        <div className="mb-10 text-center space-y-2 text-gray-700">
          <p><strong>Email:</strong> dietitianlufuno@gmail.com</p>
          <p><strong>Tel:</strong> +27 326 9690</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md border">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </>

  );
}
