import React from "react";
import Nav from "../../../layouts/nav";
import LearnMore from "../../../Props/Button/LearnMore";
import "./ourStory.css";
import { IoLocationSharp } from "react-icons/io5";
import Abigail from '../../../../assets/abigail.png';
import Blogs from './blogs';

const ourStory = () => {

  const features = [
    {
      id: 1,
      header: "Behavioral Healthcare Stop Losing Great Employees. Invest in Workplace Coaching.",
      image: Abigail,
      location: "Abuja",
      date: "Sun, 14 July 17:00 Peak Building  Hall",
      available: "Free"
    },

    {
      id: 2,
      header: "Behavioral Healthcare Stop Losing Great Employees. Invest in Workplace Coaching.",
      image: Abigail,
      location: "Abuja",
      date: "Sun, 14 July 17:00 Peak Building  Hall",
      available: "Free"
    },

    {
      id: 3,
      header: "Behavioral Healthcare Stop Losing Great Employees. Invest in Workplace Coaching.",
      image: Abigail,
      location: "Abuja",
      date: "Sun, 14 July 17:00 Peak Building  Hall",
      available: "Free"
    },
  ]


  return (
    <Nav>
      <div className="sf-font">
          <div className="people w-full h-[60vh] lg:h-[90vh] relative">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4B95694D]/30 to-[#237644] flex items-center justify-center">
              <div className="w-[90%] md:w-[60%] lg:w-[30%] mx-auto text-center sf-font text-white z-10">
                <h1 className="text-3xl font-bold leading-snug">
                  Every Story Matters
                </h1>
                <p className="mt-4 pb-5 text-[15px]">
                  See what we are doing to improve Lives. Read real experiences of
                  growth, hope, and transformation
                </p>
                <LearnMore />
              </div>
            </div>
          </div>


          <div className="bg-[#4B9569] mt-2 py-7 text-center font-bold text-2xl text-white">
            <h1>Our Story</h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 pb-10 px-5 lg:px-20 text-white">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="mx-auto"
                  >
                    <img
                      src={feature.image}
                      className="rounded-t-xl"
                    />
                    <div className="bg-[#FED361] p-5">
                      <h3 className="text-sm font-semibold mb-2">
                        {feature.header}
                      </h3>
                      <div className="flex items-center gap-2 text-red-600">
                        <div>
                        <IoLocationSharp />
                        </div>

                        <p className="text-white text-sm">{feature.location}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p>{feature.date}</p>
                        <p>{feature.available}</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          <div className="flex items-center gap-2 px-20 justify-end font-bold text-2xl mb-10">
            <h1>Load more...</h1>
            <div className="space-x-1">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>

          <Blogs />
      </div>
    </Nav>
  );
};

export default ourStory;
