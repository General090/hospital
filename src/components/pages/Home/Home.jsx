import React from "react";
import "./home.css";
import Nav from "../../layouts/nav.jsx";
import Img1 from "../../../assets/img1.png";
import Operate from "../Home/operate.jsx";
import Download from "../Home/download.jsx";
import Table from "../Home/table.jsx";
import Questions from "../Home/questions.jsx";
import { Link } from "react-router-dom";
import LearnMore from "../../Props/Button/LearnMore";

const Home = () => {
  return (
    <Nav>
      <div className="sf-font">
        <div className="md:pl-10 pl-5 lg:pt-52 pt-60 image h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
          {/* <div className="h-screen flex items-center justify-center"> */}
            <div className="lg:w-[30%] md:w-[60%] space-y-4 text-white">
              <h1 className="font-bold text-3xl">
                Your Journey to Wellness Stay Here
              </h1>
              <p>
                Personalized therapy, culturally aware support, and intelligent
                tools at your fingertips.
              </p>
              <LearnMore />
            {/* </div> */}
          </div>
        </div>

        <div className="md:flex items-center py-5 md:w-[80%] lg:w-[50%] px-5 md:px-0 md:mx-auto gap-10">
          {/* Mobile-only Image */}
          <img src={Img1} className="w-full rounded-md block md:hidden mb-5" />

          <div className="flex flex-col gap-5">
            <p>
              Our platform combines expert care, AI-driven tools, and a
              supportive community to help you heal, grow, and live fully.
            </p>
            <Link
              to="/registration"
              className="bg-gradient-to-b from-[#FFC107] to-[#4B9569] px-4 py-2 text-white rounded-sm w-[30%] md:w-[35%] lg:w-[32%]"
            >
              Get Started
            </Link>
          </div>

          {/* Desktop-only Image */}
          <img src={Img1} className="w-[40%] rounded-md hidden md:block" />
        </div>
      </div>

      <Operate />
      <Download />
      <Table />
      <Questions />
    </Nav>
  );
};

export default Home;
