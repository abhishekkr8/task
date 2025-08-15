import { useState } from "react";

const samplesData = [
  {
    id: 1,
    title: "MBA Business Plan Report",
    category: "Assignments",
    pages: 25,
    thumbnail: "https://via.placeholder.com/150x100.png?text=PDF",
  },
  {
    id: 2,
    title: "Nursing Dissertation on Patient Care",
    category: "Dissertations",
    pages: 45,
    thumbnail: "https://via.placeholder.com/150x100.png?text=DOC",
  },
  {
    id: 3,
    title: "IT Security Research Report",
    category: "Reports",
    pages: 30,
    thumbnail: "https://via.placeholder.com/150x100.png?text=PDF",
  },
  {
    id: 4,
    title: "Marketing Strategy Presentation",
    category: "Presentations",
    pages: 20,
    thumbnail: "https://via.placeholder.com/150x100.png?text=PPT",
  },
];

export default function Samples() {
  const [filter, setFilter] = useState("All");

  const filteredSamples =
    filter === "All"
      ? samplesData
      : samplesData.filter((sample) => sample.category === filter);

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        View Our Work
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Browse sample assignments, dissertations, and reports to see our quality
        before you order.
      </p>

      {/* Filter */}
      <div className="flex justify-center mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        >
          <option>All</option>
          <option>Assignments</option>
          <option>Dissertations</option>
          <option>Reports</option>
          <option>Presentations</option>
        </select>
      </div>

      {/* Sample Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredSamples.map((sample) => (
          <div
            key={sample.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col"
          >
            <img
              src={sample.thumbnail}
              alt={sample.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {sample.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Category: {sample.category} | {sample.pages} Pages
            </p>
            <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              View Sample
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Like what you see?
        </h3>
        <p className="text-gray-600 mb-6">
          Get your own custom-written assignment today.
        </p>
        <a
          href="/faq"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Help Now
        </a>
      </div>
    </div>
  );
}
