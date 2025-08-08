import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dietitianlufuno.co.za"),
  title: "Dietitian Lufuno | Nourish Your Body. Empower Your Life.",
  description:
    "Get personalised nutrition advice from Dietitian Lufuno. Book consultations, meal plans, and wellness guidance.",
  keywords: [
    "Dietitian",
    "Nutritionist",
    "Meal plans",
    "Healthy eating",
    "Weight loss",
    "South Africa dietitian",
  ],
  openGraph: {
    title: "Dietitian Lufuno",
    description: "Personalised nutrition advice for a healthier you.",
    url: "https://www.dietitianlufuno.co.za",
    siteName: "Dietitian Lufuno",
    images: [
      {
        url: "/images/lufuno.jpg",
        width: 1200,
        height: 630,
        alt: "Dietitian Lufuno - Nutrition Services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  other: {
    "linkedin:profile":
      "https://www.linkedin.com/in/lufuno-netshiavha-93a6961a3",
    "youtube:channel": "https://youtube.com/@livinghealthywithlu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
