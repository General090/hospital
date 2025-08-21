import React from "react";
// import "./home.css";
import Nav from "../../../../layouts/nav.jsx";
import Image from "../../../../../assets/image.png";
import App from "../app/app.jsx";
import Operate from "../operate.jsx";
import Download from "../download.jsx";
import Health from "../../health.jsx"
import Table from "../table.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Nav>
      <section className="bg-[#237644] text-white sf-font">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Journey to Wellness Starts Here
            </h1>
            <p className="mt-4 mb-10 text-lg text-white/80 max-w-md">
              Personalized therapy, culturally aware support, and intelligent
              tools at your fingertips.
            </p>
            <Link
              to="/contact"
              className="mt-6 px-6 py-3 bg-[#FFC107] text-white font-semibold rounded-md shadow-md hover:bg-yellow-500 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:block">
            <div className="relative flex justify-center items-center">
              {/* Gradient glow */}
              <div className="absolute w-72 h-72 bg-gradient-to-br from-yellow-400 via-green-500 to-green-700 rounded-full blur-3xl"></div>

              {/* Image */}
              <img
                src={Image}
                alt="LiftedCare"
                className="relative z-10 w-80 md:w-[28rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <App />
      <Health />
      <Operate />
      <Download />
      <Table />
    </Nav>
  );
};

export default Home;
