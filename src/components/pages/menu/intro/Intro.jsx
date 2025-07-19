import React from "react";
import MenuLayout from "../../../layouts/MenuLayout";
import GroupPeople from "../../../../assets/group-people.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <MenuLayout>
      <div className="mt-10 jarkata md:flex items-center gap-10 px-5 lg:px-10">
        <div className="w-[20%] md:w-[100%] lg:w-[30%] relative h-[50vh] rounded-t-xl overflow-hidden mb-5 md:mb-0">
          <img
            src={GroupPeople}
            alt="Group of people"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFC10733]/20 to-[#4B9569] opacity-90"></div>

          {/* Text Content */}
          <div className="absolute bottom-4 left-0 right-0 text-white text-center px-10">
            <h2 className="text-xl font-semibold">Welcome back</h2>
            <p className="text-sm">
              Gain access to personalized therapist tailored to meet your need
            </p>
          </div>
        </div>


        <div className="lg:w-[70%]"> 
            <p>Your personalized mental health journey starts here.</p>
            <p>Our product is developed by health experts to help you:</p>
            <ul>
                <li>✅Feel better, faster</li>
                <li>✅Receive tailored support</li>
                <li>✅Build long-term mental wellness</li>
                <li>🔐How We Use Your Data</li>
            </ul>

            <p>To provide the best experience, we process some personal health data as part of your therapy journey. This allows us to:</p>

            <ul>
                <li>🧠Track progress using psychometric tools and goals</li>
                <li>📝Keep notes on what’s important to you</li>
                <li>💬Offer secure messaging with your therapist or coach</li>
            </ul>

            <p>Your data is only used to enhance your care and deliver our services.  We’ll always protect your privacy and security.</p>
            <p>✅Your Consent</p>
            <p>To continue, we’ll need your permission to use your data for these features. You’re in control and can manage your preferences anytime.</p>

            <p className="mt-10">[ ] I agree to the use of my health data to personalize my experience.</p>
            <p>[ Learn more about our privacy policy]</p>

            <div className="flex justify-end">
              <Link to="/menu-home" className="block bg-[#4B9569] w-[50%] lg:w-[20%] font-bold text-white py-2 rounded mt-10 mb-10 text-center">Next</Link>
            </div>

        </div>
      </div>
    </MenuLayout>
  );
};

export default Intro;
