import React from "react";
import Nav from "../../layouts/nav";
import Shake from "../../../assets/shake.png"
import Target from "../../../assets/target.png"
import LiftedCare from "../../Props/LiftedCare/LiftedCare"

const GetStarted = () => {
  return (
    <Nav>
      <div className="sf-font mb-20">
        <div className="md:flex items-center gap-10 justify-center px-5 md:px-5 mb-20 mt-10">
          <div className="lg:w-[30%] md:w-[50%] mb-5 md:mb-0 relative h-[60vh] rounded-t-xl overflow-hidden">
            <img
              src={Shake}
              alt="Group of people"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000080]/50 via-[#FFDD551A]/20 to-[#182F21] opacity-100"></div>

            {/* Text Content */}
            <div className="absolute bottom-4 left-0 right-0 text-white text-center px-10">
              <h2 className="text-xl font-semibold">Become a Member</h2>
              <p className="text-sm">
                Gain access to all premium content, access our AI Companion and lots of more...
              </p>
            </div>
          </div>


          <div className="lg:w-[30%] md:w-[50%] relative h-[60vh] rounded-t-xl overflow-hidden">
            <img
              src={Target}
              alt="Group of people"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4B956933]/20 to-[#000000] opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-4 left-0 right-0 text-white text-center px-10">
              <h2 className="text-xl font-semibold">Become a Member</h2>
              <p className="text-sm">
                Gain access to all premium content, access our AI Companion and lots of more...
              </p>
            </div>
          </div>
        </div>

        <LiftedCare />
      </div>
    </Nav>
  );
};

export default GetStarted;
