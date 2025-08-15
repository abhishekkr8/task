const FeaturesSection = () => {
  const features = [
    'Custom-Written Assignments',
    'Plagiarism-Free Guarantee',
    'Fast Turnaround Time',
    'Dissertation & Thesis Help',
    'Proofreading & Editing',
    'Confidential & Secure'
  ]

  return (
    <section>
      {/* Title Section */}
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center">
            Features
          </h2>
        </div>
      </div>

      {/* Features List */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {features.slice(3, 6).map((feature, index) => (
                <div key={index + 3} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
