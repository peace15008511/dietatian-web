'use client';

export default function Services() {
  const services = [
    {
      title: 'Nutritional Assessment',
      desc: 'Involves taking anthropometric measurements, biochemical, clinical and dietary data to determine the nature and cause of nutrition-related conditions.',
    },
    {
      title: 'Nutrition Counseling',
      desc: 'Guidance based on the client\'s condition, goals, and reasons for dietary changes.',
    },
    {
      title: 'Individualised Meal Plan',
      desc: 'Detailed meal plans tailored to client preferences and budget.',
    },
    {
      title: 'Pamphlet / Diet Sheet',
      desc: 'Informational material to help clients understand specific conditions and dietary approaches.',
    },
  ];

  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-green-700 mb-10 text-center">What I Offer</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-green-600 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
