import React from "react";
import Nav from "../../../layouts/nav";
import LearnMore from "../../../Props/Button/LearnMore";
import "./ourStory.css";
import { IoLocationSharp } from "react-icons/io5";
import Abigail from '../../../../assets/abigail.png';
import Blogs from './blogs';
import Kat from "../../../../assets/kat.png"

const ourStory = () => {

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


          <div className="bg-[#4B9569] py-7 text-center font-bold text-2xl text-white">
            <h1>Our Story</h1>
        </div>

        <div className="md:flex items-center gap-10 justify-center py-10 px-5">
          <div className="w-full md:w-[40%] mb-5 md:mb-0">
            <h1 className="font-bold font-2xl">Our Mission is Personal</h1>
            <p>To deliver compassionate, culturally relevant, and tech-enabled mental health care that lifts lives, one conversation, one connection, one community at a time.</p>
          </div>

          <div>
            <img src={Kat} className="w-full md:w-60" />
          </div>
        </div>
        

          <Blogs />
      </div>
    </Nav>
  );
};

export default ourStory;
