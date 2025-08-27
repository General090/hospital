import React from "react";
import Nav from "../../../layouts/nav";
import "./About.css";
import { Link } from "react-router-dom";
import Woman from "../../../../assets/woman.png";
import Settings from "../../../../assets/settings.png";
import Project from "../../../../assets/project.png";
import Worker from "../../../../assets/worker.png";
import Vision from "./vision"
import Values from "./values"
import LearnMore from '../../../Props/Button/LearnMore'
import Girls from "../../../../assets/girls.png"

const About = () => {
  const features = [
    {
      id: 1,
      header: "Who we are",
      text: "We are a passionate team united with one goal: to make mental health support accessible, personal, and empowering for everyone, especially young people across Africa.",
    },

    {
      id: 2,
      header: "Who we do",
      text: "We provide personalized mental health care, combining the warmth of human expertise and artificial intelligence to meet people where they are emotionally, culturally, and digitally.",
    },

    {
      id: 3,
      header: "How we do it",
      text: "Our services include therapy, coaching, personalized AI companion, journaling tools, guided meditations, wellness communities, affirmations, webinars, and more.",
    },
  ];

  return (
    <Nav>
      <>
      <div className="relative w-full h-[60vh] lg:h-[90vh]">
        {/* Background image via CSS class */}
        <div className="absolute inset-0 hands blur-xs"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[#2d7a52] opacity-60"></div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-between h-full px-10 text-white">
          <div>
            <h1 className="text-4xl font-bold mb-4">Our mission is Personal, <br /> it's more than just <br /> Business. </h1>
            <p className="mb-4 max-w-xl">
              At LiftedCare, we’re redefining what it means to care for mental health in Africa. We're not just a platform; we're a movement centered around people, purpose, and possibility.
            </p>
            <Link to="/story" className="bg-[#ffc107] rounded-md text-white px-5 py-2">
              Our story
            </Link>
          </div>

          <img src={Girls} className="w-[50%] h-full hidden md:block" />
        </div>
      </div>

        <div className="bg-gradient-to-b from-[#4B9569] to-[#075A28] px-5 lg:px-10 sf-font mb-10 pb-5">
          <div className="text-white font-bold text-3xl text-center py-5">
            <h1>About Us</h1>
          </div>
          <div className="lg:flex items-center lg:px-0 px-5 lg:pl-5 py-5 gap-40 bg-white rounded-2xl">
            <img src={Woman} className="h-[250px] md:h-[400px] lg:h-[250px] mb-5 lg:mb-0 w-full lg:w-[250px] rounded-xl" />
            <p className="lg:w-[50%] text-xl font-semibold italic text-[#808080]">
              At LiftedCare, we’re redefining what it means to care for mental
              health in Africa. We're not just a platform; we're a movement
              centered around people, purpose, and possibility.
            </p>
          </div>

          <div className="bg-white rounded-2xl mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white lg:w-60 mx-auto rounded-xl p-6 text-center relative"
                  style={{ boxShadow: "8px 8px 20px rgba(255, 193, 7, 0.5)" }}
                >
                  <h3 className="text-xl mt-10 font-semibold mb-2">
                    {feature.header}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Vision />
        <Values />
      </>
    </Nav>
  );
};

export default About
