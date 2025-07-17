import React from "react";
import Abigail from '../../../assets/abigail.png'
import { IoLocationSharp } from "react-icons/io5";


const Replays = () => {
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
    <div className="sf-font">
      <div className="bg-[#4B9569] mt-2 py-7 text-center font-bold text-2xl text-white">
        <h1>Replays of  Events & Webinars</h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 pb-10 px-20 text-white">
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
    </div>
  );
};

export default Replays;
