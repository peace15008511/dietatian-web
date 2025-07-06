"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Nutritional Assessment",
      desc: "Anthropometric, biochemical, clinical, and dietary data used to identify nutrition-related conditions.",
      image: "/images/assessment.jpg",
    },
    {
      title: "Nutrition Counseling",
      desc: "Personalized advice and strategies to support your health goals and lifestyle changes.",
      image: "/images/counseling.jpg",
    },
    {
      title: "Individualised Meal Plan",
      desc: "Custom meal plans tailored to your preferences, medical needs, and budget.",
      image: "/images/mealplan.jpg",
    },
    {
      title: "Pamphlet / Diet Sheet",
      desc: "Educational materials with detailed disease-specific nutrition info to empower your choices.",
      image: "/images/pamphlet.jpg",
    },
  ];

  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-green-700 mb-10 text-center">
        What We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            {/* Image container with fixed height, responsive width */}
            <div className="w-full h-56 relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Text section */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
