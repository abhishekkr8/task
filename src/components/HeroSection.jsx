import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Make Academic Writing{" "}
              <span className="text-blue-600">Effortless</span> with Rymbie
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Expert-written assignments, dissertations, and reports delivered
              by experienced academic writers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Navigate to Submit Assignment */}
              <Link
                to="/faq"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg text-center"
              >
                Get Help Now
              </Link>

              {/* Navigate to Samples */}
              <Link
                to="/samples"
                className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-lg border border-blue-600 transition-colors duration-200 text-lg text-center"
              >
                See Samples
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Person working on laptop illustration */}
              <div className="w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                {/* Person silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    {/* Person with glasses */}
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {/* Glasses */}
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-12 bg-blue-800 rounded-md flex items-center justify-center">
                      <div className="w-16 h-8 bg-blue-900 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-white text-center">
                  <p className="text-sm font-semibold">Academic Success</p>
                  <p className="text-xs opacity-90">Professional Writing</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
