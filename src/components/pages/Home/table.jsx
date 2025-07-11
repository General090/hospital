import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ComparisonTable = () => {
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
    "Meditation content",
    "Anonymous peer group support"
  ];

  const liftedCareFeatures = [true, true, true, true, true, true, true, true, true, true, true];
  const traditionalFeatures = [true, true, false, false, false, false, false, false, false, false, false];

  return (
    <div className="bg-[#4B9569] py-16 text-white">
      <div className="text-center mb-10 px-4">
        <h1 className="text-[25px] font-bold">Lifted care Vs traditional in-office therapy</h1>
        <p>What Makes Us Exceptional</p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Table headers */}
        <div className="py-3 flex justify-end border-b text-black border-yellow-400 pr-30">Traditional Therapist</div>
        {/* <div className="grid grid-cols-3 font-semibold text-sm md:text-base border-b border-yellow-400">

        </div> */}

        {/* Table rows */}
        {features.map((feature, i) => (
          <div
            key={i}
            className="grid grid-cols-3 items-center border-b border-yellow-400"
          >
            {/* Feature */}
            <div className="py-3">{feature}</div>

            {/* LiftedCare (inside a div) */}
            <div className="py-3 flex justify-center">
              <div className="w-full flex justify-center">
                {liftedCareFeatures[i] ? (
                  <FaCheckCircle className="text-yellow-400" />
                ) : (
                  <FaTimesCircle className="text-red-400" />
                )}
              </div>

            </div>

            {/* Traditional Therapist */}
            <div className="py-3 flex justify-center">
              {traditionalFeatures[i] ? (
                <FaCheckCircle className="text-yellow-400" />
              ) : (
                <FaTimesCircle className="text-red-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
