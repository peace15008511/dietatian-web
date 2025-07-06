"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cell: "",
    message: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    isError: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setModal({
          isOpen: true,
          message: "Message sent successfully!",
          isError: false,
        });
        setForm({ name: "", email: "", cell: "", message: "" });
      } else {
        const data = await res.json();
        setModal({
          isOpen: true,
          message: data.error || "Something went wrong.",
          isError: true,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setModal({
        isOpen: true,
        message: "Something went wrong. Please try again.",
        isError: true,
      });
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Enquire now
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-xl shadow-md border"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="cell"
              className="block font-medium text-gray-700 mb-1"
            >
              Cell Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="cell"
              id="cell"
              value={form.cell}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
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

      <Footer />

      {/*Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center border border-green-200 animate-fade-in">
            <h2
              className={`text-xl font-bold mb-2 ${
                modal.isError ? "text-red-600" : "text-green-700"
              }`}
            >
              {modal.isError ? "Oops!" : "Success!"}
            </h2>
            <p className="text-gray-700 mb-6">{modal.message}</p>
            <button
              onClick={closeModal}
              className={`px-6 py-2 rounded-full font-medium transition ${
                modal.isError
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              } text-white`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
