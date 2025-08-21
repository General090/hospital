import React from "react";
import { Link } from "react-router-dom";
import Mock from "../../../../../assets/mock.png";
import "./app.css";

const app = () => {
  return (
    <div className="sf-font">
      <div className="flex items-center justify-between gap-10 my-10 w-[50%] mx-auto">
        <div>
          <p className="pb-5">
            Our platform combines expert care, AI-driven tools, and a supportive
            community to help you heal, grow, and live fully.
          </p>
          <Link className="text-white bg-gradient-to-b from-[#FED361] to-[#4B9569] p-3 rounded-sm">
            Get App
          </Link>
        </div>

        <div>
          <img src={Mock} className="w-96 rounded-md" />
        </div>
      </div>

      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        {/* Background image via CSS class */}
        <div className="absolute inset-0 background blur-xs"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#98a147] via-[#256640] to-[#256640] opacity-80"></div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-between h-full px-10 text-white">
          <div>
            <h1 className="text-4xl font-bold mb-4">The Sad <br /> Reality...</h1>
            <p className="mb-4 max-w-xl">
              it is a widespread issue affecting millions, with a significant
              gap between the need for treatment and access to care. Stigma,
              lack of awareness, and limited resources contribute to this gap,
              leaving many individuals struggling in silence.
            </p>
            <button className="bg-gradient-to-br w-72 rounded-full from-[#60b454] to-[#ffdd55] text-white px-4 py-2 shadow-md transition">
              Learn More
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="max-w-xs text-center px-2 py-5 mt-20 w-[40%] rounded-xl bg-white">
                <h1 className="text-xl font-semibold text-black">Prevalence</h1>
                <p className="text-[#808080]">
                  One in four Nigerians, or roughly 50 million people, are
                  estimated to have a mental health condition, according to the
                  World Health Organization (WHO).
                </p>
              </div>

              <div className="max-w-xs text-center px-2 py-5 mt-20 w-[40%] rounded-xl bg-white">
                <h1 className="text-xl font-semibold text-black">Psychiatrists</h1>
                <p className="text-[#808080]">
                An estimated 350 psychiatrists serve over 200 million Nigerians. Far below the WHO recommended ratio of one psychiatrist per 10,000 people. 
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="max-w-xs text-center px-2 py-5 mb-20 w-[40%] rounded-xl bg-white">
                <h1 className="text-xl font-semibold text-black">Age Group</h1>
                <p className="text-[#808080]">
                A large majority (70%) of those affected are under the age of 30 
                </p>
              </div>

              <div className="max-w-xs text-center px-2 py-5 mb-20 w-[40%] rounded-xl bg-white">
                <h1 className="text-xl font-semibold text-black">Lack of Care</h1>
                <p className="text-[#808080]">
                Fewer than 10% of Nigerians with mental health issues have access to the care they need. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default app;
