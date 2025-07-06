"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Services() {
  const servicesList = [
    {
      title: "Nutritional Assessment",
      description:
        "Anthropometric, biochemical, clinical, and dietary data used to identify nutrition-related conditions.",
      image: "/images/assessment.jpg",
    },
    {
      title: "Nutrition Counseling",
      description:
        "Personalized advice and strategies to support your health goals and lifestyle changes.",
      image: "/images/counseling.jpg",
    },
    {
      title: "Individualized Meal Plan",
      description:
        "Custom meal plans tailored to your preferences, medical needs, and budget.",
      image: "/images/mealplan.jpg",
    },
    {
      title: "Pamphlet / Diet Sheet",
      description:
        "Educational materials with detailed disease-specific nutrition info to empower your choices.",
      image: "/images/pamphlet.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Dietitian Lufuno provides evidence-based nutrition services designed
            to improve your health and well-being through personalized care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
