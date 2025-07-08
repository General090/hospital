import React from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';


const table = () => {
  const features = [
    "Provided by a qualified therapist",
    "Access therapy from anywhere",
    "Messaging anytime",
    "Chat sessions",
    "Video sessions",
    "Easily switch therapist anytime",
    "Personal AI Companion",
    "Group sessions & webinars",
    "Engaging/Fun tasks and challenges",
    "Meditation content",];

    const liftedCareFeatures = [true, true, true, true, true, true, true, true, true, true, true];
    const traditionalFeatures = [true, true, false, false, false, false, false, false, false, false, false];

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-[25px] font-bold'>Lifted care Vs traditional in-office therapy</h1>
        <p>What Make Us Exceptional</p>
      </div>



      <div className="bg-[#4B9569] py-10 text-white">
      <h2 className="text-center text-2xl font-bold mb-8">What Makes Us Exceptional</h2>
      <div className="max-w-5xl mx-auto bg-[#009966] px-4">
        <div className="grid grid-cols-3 gap-4 bg-[#009966] items-start">
          {/* Features */}
          <div>
            {features.map((feature, i) => (
              <div key={i} className="py-3 border-b border-white">{feature}</div>
            ))}
          </div>

          {/* Lifted Care column */}
          <div className="flex flex-col items-center bg-green-700 rounded-t-full rounded-b-full py-3 text-black">
            <h3 className="font-bold mb-3">Lifted Care</h3>
            {liftedCareFeatures.map((hasFeature, i) => (
              <div key={i} className="py-3 border-b border-gray-200">
                {hasFeature ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
              </div>
            ))}
          </div>

          {/* Traditional column */}
          <div className="flex flex-col items-center py-3">
            <h3 className="font-bold mb-3">Traditional Therapist</h3>
            {traditionalFeatures.map((hasFeature, i) => (
              <div key={i} className="py-3 border-b border-white">
                {hasFeature ? <FaCheckCircle className="text-yellow-400" /> : <FaTimesCircle className="text-red-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default table
