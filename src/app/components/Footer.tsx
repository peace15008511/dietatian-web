import { Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20 border-t">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* © Copyright */}
        <div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dietitian Lufuno. All rights
            reserved.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-1 text-sm">
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+27623269690"
              className="text-blue-600 hover:underline"
            >
              +27 62 326 9690
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:bookings@dietitianlufuno.co.za"
              className="text-blue-600 hover:underline"
            >
              bookings@dietitianlufuno.co.za
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center sm:justify-end items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/lufuno-netshiavha-93a6961a3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Link>

          <Link
            href="https://youtube.com/@livinghealthywithlu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:text-red-600 transition"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
