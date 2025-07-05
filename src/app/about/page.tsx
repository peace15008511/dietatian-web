"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-green-700 mb-12 text-center">
          About Lufuno Netshiavha
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg border-4 border-green-200">
              <Image
                src="/images/lufuno.jpg"
                alt="Lufuno Netshiavha"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-lg text-gray-800 space-y-6 lg:w-2/3">
            <p>
              Lufuno Netshiavha is a registered dietitian. She graduated from
              the University of KwaZulu-Natal in 2019 and completed her
              community service as a dietitian in the North West Province under
              the Madibeng Sub-District. She is currently pursuing her master's
              degree at Sefako Makgatho Health Sciences University.
            </p>
            <p>
              Her mission as a dietitian is to guide people of different
              cultures, gender, and age groups on their food and nutrition
              choices. She focuses on the prevention and management of lifestyle
              diseases such as obesity, diabetes, hypertension, heart disease,
              and other medical diseases/conditions.
            </p>
            <p>
              Dietitian Lufuno aims to optimise and improve clients&apos;
              health. She believes that food can be either the safest and most
              powerful form of medicine or the slowest form of poison, hence she
              is very passionate about counseling clients on nutrition issues
              and healthy eating habits based on scientific evidence.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
