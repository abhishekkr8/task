import { useState } from "react";
import { FaUpload, FaImage, FaCheckCircle } from "react-icons/fa";

export default function SubmitAssignment() {
  const [formData, setFormData] = useState({
    file: null,
    image: null,
    instructions: "",
    deadline: "",
    subject: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Assignment Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">

      {/* Main Content */}
      <div className="flex flex-col items-center py-10 px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Let’s Get Started <br /> With Your Assignment
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Upload Boxes */}
              <div className="grid grid-cols-2 gap-4">
                {/* Assignment Brief */}
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                  <FaUpload className="text-blue-600 text-2xl mb-2" />
                  {formData.file ? (
                    <span className="text-sm text-gray-700 text-center break-all">
                      {formData.file.name}
                    </span>
                  ) : (
                    <>
                      <span className="font-medium text-center">Upload Assignment Brief</span>
                      <span className="text-sm text-gray-500">PDF, DOC</span>
                    </>
                  )}
                  <input
                    type="file"
                    name="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                {/* Screenshot / Photo */}
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                  <FaImage className="text-blue-600 text-2xl mb-2" />
                  {formData.image ? (
                    <span className="text-sm text-gray-700 text-center break-all">
                      {formData.image.name}
                    </span>
                  ) : (
                    <>
                      <span className="font-medium text-center">Upload Screenshot or Photo</span>
                      <span className="text-sm text-gray-500">JPG, PNG</span>
                    </>
                  )}
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Instructions */}
              <textarea
                name="instructions"
                placeholder="Extra Instructions"
                value={formData.instructions}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              {/* Deadline */}
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              {/* Subject */}
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Subject</option>
                <option value="Management">Management</option>
                <option value="Nursing">Nursing</option>
                <option value="IT">IT</option>
                <option value="Law">Law</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
              >
                Submit Assignment Brief
              </button>
            </form>
          ) : (
            <div className="flex items-center space-x-2 text-green-600 font-medium">
              <FaCheckCircle className="text-xl" />
              <p>
                Your request has been submitted. We will get back to you shortly
                with a quote.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
