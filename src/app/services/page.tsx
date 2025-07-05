"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  const servicesList = [
    {
      title: "Nutritional Assessment",
      description:
        "Involves taking anthropometric measurements, biochemical, clinical and dietary data in order to make decisions about the nature and cause of nutrition-related conditions.",
    },
    {
      title: "Nutrition Counseling",
      description:
        "Nutrition guidance based on the client's condition, while considering diet goals, objectives, and reasons for wanting to make a change.",
    },
    {
      title: "Individualized Meal Plan",
      description:
        "Detailed, specific meal plans are developed taking clients' preferences and budget into account.",
    },
    {
      title: "Pamphlet/ Diet Sheet",
      description:
        "For clients to familiarize themselves with detailed information regarding specific diseases/conditions.",
    },
  ];

  return (
    <>
      <Header />
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-12">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
