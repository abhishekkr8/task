import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What types of assignments do you handle?",
    a: "We cover essays, dissertations, reports, presentations, and more across all academic levels.",
  },
  {
    q: "How do I place an order?",
    a: "Click “Get Help Now,” fill out the form with your assignment details, and we’ll send you a quote.",
  },
  {
    q: "Do you guarantee plagiarism-free work?",
    a: "Yes. All work is 100% original and checked using advanced plagiarism detection tools.",
  },
  {
    q: "How do I make a payment?",
    a: "We accept secure online payments through UPI, PayPal, and bank transfer.",
  },
  {
    q: "What is your refund policy?",
    a: "Refunds are provided under specific conditions — please see our terms for details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* 1) Hero Section (soft blue like homepage) */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
              Frequently Asked Questions
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
              We’re Here to Help
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Find answers to common questions about our services, process, and policies.
            </p>
            <p className="mt-2 text-base text-gray-600 italic">
              “Got questions? We’ve got answers.”
            </p>
          </div>

          {/* Friendly illustration of a student with a laptop (demo picture) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://placehold.co/560x360/png?text=Student+with+Laptop+Illustration"
              alt="Student asking questions with a laptop"
              className="rounded-2xl shadow-xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </section>

      {/* 2) FAQ List (Accordion) */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left px-5 py-4"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="text-gray-900 font-medium">{item.q}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.21l3.71-2.98a.75.75 0 111.06 1.06l-4.24 3.4a.75.75 0 01-.94 0l-4.24-3.4a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    id={`faq-panel-${idx}`}
                    className={`px-5 pt-0 overflow-hidden transition-[max-height] duration-300 ${
                      isOpen ? "max-h-96 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3) Still Have Questions? (CTA) */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Still have questions?
          </h3>
          <p className="mt-2 text-gray-700">
            Didn’t find your answer? Contact our support team.
          </p>
          {/* If you have a /contact page, change the link below to "/contact" */}
          <Link
            to="/submit-assignment"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors duration-200 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
