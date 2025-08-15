// src/pages/Services.jsx
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Custom-Written Assignments",
    desc: "Tailored assignments built to your brief and deadline — formatted and referenced correctly.",
  },
  {
    id: 2,
    title: "Dissertation & Thesis Help",
    desc: "Full support for research, structure, literature review, analysis and final write-up.",
  },
  {
    id: 3,
    title: "Proofreading & Editing",
    desc: "Polish grammar, clarity, structure and style to meet academic standards.",
  },
  {
    id: 4,
    title: "Research Paper Assistance",
    desc: "Help with literature search, methodology, data presentation, and writing.",
  },
  {
    id: 5,
    title: "Plagiarism-Free Guarantee",
    desc: "Original content created from scratch — checked with plagiarism tools.",
  },
  {
    id: 6,
    title: "Fast Turnaround",
    desc: "Urgent assignments handled with careful quality checks and quick delivery.",
  },
];

const steps = [
  "Submit Your Requirements",
  "Get a Quote",
  "We Assign an Expert",
  "Receive Your Completed Work",
];

export default function Services() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Our Services
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Expert Academic Services <span className="text-blue-600">You Can Trust</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              From essays to dissertations, our team delivers high-quality, plagiarism-free,
              and timely academic writing help.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/faq"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow transition"
              >
                Get Help Now
              </Link>
              <Link
                to="/samples"
                className="inline-block bg-white hover:bg-gray-50 text-blue-600 py-3 px-6 rounded-lg border border-blue-600 transition self-start"
              >
                See Samples
              </Link>
            </div>
          </div>

          {/* Suggested image: books + laptop + student working (demo) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://placehold.co/560x360/png?text=Books+%2B+Laptop+Illustration"
              alt="Books and laptop illustration"
              className="rounded-2xl shadow-xl ring-1 ring-black/5 object-cover max-h-80"
            />
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center">
            Service Categories
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-6">
            Comprehensive academic writing solutions tailored for your success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {services.map((s) => (
              <div key={s.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  {/* icon circle */}
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-none ring-1 ring-blue-100">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 7h18M3 12h18M6 17h12" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 mt-1">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-8">
            A simple 4-step process to get your work done.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">
                  <span className="text-blue-600 font-bold text-lg">{i + 1}</span>
                </div>
                <p className="mt-4 font-medium text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
