import React from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work, aligns with the UN SDGs</h1>
          <p className="text-lg text-gray-700">Our Work, aligns with the UN SDG 3 and SDG 4</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm relative">
            <div className="absolute top-0 right-0 w-1/2 h-1 bg-green-500 rounded-tr-2xl"></div>
            <div className="absolute top-0 right-0 w-1 h-1/2 bg-green-500 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1/2 bg-green-500"></div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-2">Good Health and</h3>
              <h3 className="text-2xl font-bold text-green-700">Wellbeing</h3>
            </div>
          </div>

          {/* SDG 4 - Quality Education */}
          <div className="bg-white rounded-2xl p-8 shadow-sm relative">
            <div className="absolute top-0 right-0 w-1/2 h-1 bg-red-500 rounded-tr-2xl"></div>
            <div className="absolute top-0 right-0 w-1 h-1/2 bg-red-500 rounded-tr-2xl"></div>

            <div className="text-center">
              {/* Icon Container */}
              <div className="w-20 h-20 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                {/* <BookOpen className="w-8 h-8 text-red-600" /> */}
              </div>

              {/* SDG Number */}
              <div className="text-red-600 font-bold text-sm mb-2">4</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-red-700 mb-2">Quality</h3>
              <h3 className="text-2xl font-bold text-red-700">Education</h3>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            We align with the United Nations' Sustainable Development Goals (SDGs), to ensure real-world impact that
            transforms lives and uplift communities.
          </p>
        </div>
      </div>
    </main>
  )
}
