// src/pages/AITools.jsx
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const tools = [
  {
    id: "essay-generator",
    title: "Essay Generator",
    desc: "Generate well-structured essays in minutes.",
  },
  { id: "paraphraser", title: "Paraphraser", desc: "Rewrite text while preserving meaning." },
  { id: "summarizer", title: "Summarizer", desc: "Get concise summaries from long content." },
  { id: "topic-generator", title: "Topic Generator", desc: "Find fresh, research-worthy topics instantly." },
  { id: "grammar-checker", title: "Grammar Checker", desc: "Spot and fix grammar errors in your work." },
  { id: "creative-writing", title: "Creative Writing", desc: "Enhance stories, blogs, and creative projects." },
  { id: "email-generator", title: "Email Generator", desc: "Write professional emails quickly and easily." },
];

export default function AITools() {
  // Scroll to hash (so Link to="/ai-tools#tools" works)
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              AI Study Tools
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Powerful AI Tools at Your Fingertips
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              From generating ideas to checking grammar, our AI-powered tools help you work
              smarter and achieve academic success.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {/* When user clicks this from other pages, router will navigate + scroll */}
              <Link
                to="/ai-tools#tools"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow transition text-center"
              >
                Try AI Tools Now
              </Link>

              <Link
                to="/samples"
                className="inline-block bg-white hover:bg-gray-50 text-blue-600 py-3 px-6 rounded-lg border border-blue-600 transition self-start text-center"
              >
                See Samples
              </Link>
            </div>

            <p className="mt-3 text-sm text-gray-600">
              <span className="font-medium">Free trial:</span> No login needed for a quick demo.
            </p>
          </div>

          {/* Illustration suggested in doc: student using laptop with AI icons */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://placehold.co/560x360/png?text=Student+with+Laptop+%2B+AI+Icons"
              alt="Student with laptop and AI icons"
              className="rounded-2xl shadow-xl ring-1 ring-black/5 object-cover max-w-full"
            />
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section id="tools" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Tool Categories</h2>
          <p className="text-center text-gray-600 mt-2 mb-8">
            Pick a tool and try a free sample instantly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col">
                {/* simple icon */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center ring-1 ring-blue-100">
                    {/* generic AI icon */}
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.9 4.9l2.8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.3 16.3l2.8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
                    <p className="text-gray-600 text-sm">{t.desc}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {/* Placeholder: link to a tool-specific route (create later) */}
                  <Link
                    // to={`/ai-tools/${t.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition"
                  >
                    Try Free
                  </Link>
                  <button
                    onClick={() => alert("This is a demo. Implement tool route or modal for full demo.")}
                    className="inline-block bg-white border border-gray-200 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    How it works
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-blue-700">How it Works</h2>
          <p className="text-gray-600 mt-2 mb-6">A quick 3-step flow to get instant results.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Select a tool", "Enter or upload text/file", "Get instant results & download"].map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto shadow">{i + 1}</div>
                <p className="mt-4 text-gray-900 font-medium text-center">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-blue-700">Benefits</h3>
          <p className="text-gray-600 mt-2 mb-6">Save time, improve quality, and learn faster.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["Save time", "Improve quality", "Learn faster", "Easy to use"].map((b) => (
              <div key={b} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-3">
                <div className="text-blue-600">✅</div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-blue-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-900">Try our AI tools free</h3>
          <p className="text-gray-600 mt-2">No login needed for a quick trial demo.</p>
          <Link
            to="/ai-tools#tools"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow transition"
          >
            Try AI Tools Now
          </Link>
        </div>
      </section>
    </div>
  );
}
