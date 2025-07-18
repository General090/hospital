import React from "react";
import Nav from "../../../layouts/nav";
import "./About.css";
import Woman from "../../../../assets/woman.png";
import Settings from "../../../../assets/settings.png";
import Project from "../../../../assets/project.png";
import Worker from "../../../../assets/worker.png";
import Vision from "./vision"
import Values from "./values"
import LearnMore from '../../../Props/Button/LearnMore'

const About = () => {
  const features = [
    {
      id: 1,
      header: "Who we are",
      text: "We are a passionate team united with one goal: to make mental health support accessible, personal, and empowering for everyone, especially young people across Africa.",
      image: Settings,
    },

    {
      id: 2,
      header: "Who we do",
      text: "We provide personalized mental health care, combining the warmth of human expertise and artificial intelligence to meet people where they are emotionally, culturally, and digitally.",
      image: Worker,
    },

    {
      id: 3,
      header: "How we do it",
      text: "Our services include therapy, coaching, personalized AI companion, journaling tools, guided meditations, wellness communities, affirmations, webinars, and more.",
      image: Project,
    },
  ];

  return (
    <Nav>
      <>
        <div className="black-hand w-full h-[70vh] sf-font relative">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC10733]/20 via-[#4B9569B2]/70 to-[#FFC1074D]/30 flex items-center justify-center">
            <div className="w-[90%] md:w-[70%] lg:w-[30%] mx-auto text-center sf-font text-white z-10">
              <h1 className="text-3xl font-bold leading-snug">
                Our mission is Personal, <br />
                it's more than just <br /> Business.
              </h1>
              <p className="mt-4 pb-5 text-[15px]">
                At LiftedCare, we’re redefining what it means to care for mental
                health in Africa. We're not just a platform; we're a movement
                centred around people, purpose, and possibility.
              </p>
              <LearnMore />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#4B9569] to-[#075A28] px-5 lg:px-10 sf-font mb-10 pb-5">
          <div className="text-white font-bold text-3xl text-center py-5">
            <h1>About Us</h1>
          </div>
          <div className="lg:flex items-center lg:px-0 px-5 lg:pl-10 py-5 gap-40 bg-white rounded-2xl">
            <img src={Woman} className="h-[250px] md:h-[350px] mb-5 lg:mb-0 w-full lg:w-[250px] rounded-md" />
            <p className="lg:w-[400px] font-semibold italic text-[#808080]">
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
                  <img
                    src={feature.image}
                    className="w-12 h-12 mx-auto mb-4 absolute -top-5 left-0 rounded-full"
                  />
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
