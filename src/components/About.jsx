// src/pages/About.jsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* 1) Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We Make Academic Writing{" "}
                <span className="text-blue-600">Effortless</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700">
                Since our inception, Rymbie has been committed to helping students
                achieve academic success with high-quality, plagiarism-free, and
                confidential writing services.
              </p>
            </div>

            {/* Demo picture (replace with your asset when ready) */}
            <div className="flex justify-center">
              <img
                src="https://placehold.co/560x360/png?text=Team+Collaboration+Illustration"
                alt="Team collaborating illustration"
                className="rounded-2xl shadow-xl ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) Our Story */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-700">Our Story</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Rymbie started with a simple goal: help students meet deadlines, make
            research & writing stress-free, and uphold the highest standards of
            academic integrity. From quick assignments to full dissertations, we
            bring structure, clarity, and quality to every project.
          </p>
        </div>
      </section>

      {/* 3) Mission & Vision */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-700">Mission</h3>
            <p className="mt-2 text-gray-700">
              To deliver high-quality, custom-written academic work that empowers
              students to excel.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-700">Vision</h3>
            <p className="mt-2 text-gray-700">
              To be the most trusted global platform for academic writing support.
            </p>
          </div>
        </div>
      </section>

      {/* 4) Why Choose Us */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">
            Why Choose Us
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Plagiarism-Free Guarantee",
              "Fast Turnaround Time",
              "Expert Writers Across All Fields",
              "100% Confidential & Secure",
            ].map((feature) => (
              <div
                key={feature}
                className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  {/* Check icon */}
                  <svg
                    className="w-6 h-6 flex-none text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-gray-800 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Meet Our Team (optional visuals) */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">
            Meet Our Team
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Alice Johnson", role: "Lead Writer" },
              { name: "Michael Lee", role: "Research Specialist" },
              { name: "Sophia Patel", role: "Editor" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center"
              >
                <img
                  src={`https://placehold.co/160x160/jpg?text=${encodeURIComponent(
                    m.name.split(" ")[0]
                  )}`}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover shadow mb-4"
                />
                <h3 className="font-semibold text-gray-900">{m.name}</h3>
                <p className="text-gray-600 text-sm">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
