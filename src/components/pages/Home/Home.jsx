import React from "react";
import "./home.css";
import Nav from "../../layouts/nav.jsx";
import Img1 from "../../../assets/img1.png";
import Operate from "../Home/operate.jsx";
import Download from "../Home/download.jsx";
import Table from "../Home/table.jsx";
import Questions from "../Home/questions.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Nav>
      <div>
        <div className="py-[6rem] pl-10 image pt-52 w-full">
          <div className="w-[30%] space-y-4 text-white">
            <h1 className="font-bold text-3xl">
              Your Journey to Wellness Stay Here
            </h1>
            <p>
              Personalized therapy, culturally aware support, and intelligent
              tools at your fingertips.
            </p>
            <button className="bg-[#FFC107] px-4 py-2 text-white rounded-sm">
              Learn more
            </button>
          </div>
        </div>

        <div className="flex items-center py-5 w-[50%] mx-auto gap-10">
          <div className="flex flex-col gap-5">
            <p>
              Our platform combines expert care, AI-driven tools, and a
              supportive community to help you heal, grow, and live fully.
            </p>
            <Link
              to="/registration"
              className="bg-gradient-to-b from-[#FFC107] to-[#4B9569] px-4 py-2 text-white rounded-sm w-[32%]"
            >
              Get Started
            </Link>
          </div>

          <img src={Img1} className="w-[40%] rounded-md" />
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
