'use client';
import Header from "@/components/Header";
export default function About() {
  return (
    <>
        <Header/>
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-8">About Lufuno Netshiavha</h1>

        <div className="text-lg text-gray-800 space-y-6">
            <p>
            Lufuno Netshiavha is a registered dietitian. She graduated from University of Kwa-zulu Natal in 2019 and worked as a dietitian (community service) in North West province under Madibeng Sub-District.
            </p>
            <p>
            Her mission as a dietitian is to guide people of different cultures, gender, and age groups on their food and nutrition choices. She focuses on the prevention and management of lifestyle diseases such as obesity, diabetes, hypertension, heart disease, and other medical diseases/conditions.
            </p>
            <p>
            Dietitian Lufuno aims to optimise and improve clients&apos; health. She believes that food can be either the safest and most powerful form of medicine or the slowest form of poison, hence she is very passionate about counseling clients on nutrition issues and healthy eating habits based on scientific evidence.
            </p>
        </div>
        </section>
    </>

  );
}
