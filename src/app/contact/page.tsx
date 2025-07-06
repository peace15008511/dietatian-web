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
        <div className="mb-10 text-center space-y-2 text-gray-700">
          <p>
            <strong>Email:</strong> bookings@dietitianlufuno.co.za
          </p>
          <p>
            <strong>Tel:</strong> +27 62 326 9690
          </p>
          <p className="flex justify-center items-center gap-2">
            <strong>WhatsApp:</strong>
            <a
              href="https://wa.me/27623269690?text=Hello%20Lufuno%2C%20I%27d%20like%20to%20make%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-700 hover:text-green-900 underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15s-.767.967-.94 1.166c-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.214-.242-.582-.487-.504-.67-.513l-.571-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.075-.124-.273-.198-.57-.347m-5.421 6.44h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.65-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.84 9.84 0 016.974 2.89 9.825 9.825 0 012.893 6.979c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.893c0 2.096.547 4.142 1.588 5.945L0 24l6.29-1.654a11.86 11.86 0 005.74 1.466h.005c6.554 0 11.89-5.336 11.893-11.894a11.82 11.82 0 00-3.493-8.39" />
              </svg>
              Chat on WhatsApp
            </a>
          </p>
        </div>
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
