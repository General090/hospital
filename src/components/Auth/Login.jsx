import React from "react";
import { Link } from "react-router-dom";
import GroupPeople from "../../assets/group-people.png";
import LiftedCare from "../Props/LiftedCare/LiftedCare"
import FaceBook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";

const Login = () => {
  return (
    <div className="sf-font">
      <nav className="flex items-center justify-between px-5 lg:px-[10rem] py-5">
        <div className="flex items-center">
          <div className="bg-black rounded-full w-3 h-3"></div>
          <h1 className="font-bold text-xl">Lifted Care</h1>
        </div>

        <Link
          to="/registration"
          className="bg-[#FFC107] text-white px-2 py-1 rounded-sm"
        >
          Sign Up
        </Link>
      </nav>

      <div className="px-5 lg:px-20 pt-10 md:flex items-center gap-10 mb-14">
        <div className="lg:w-[30%] md:w-[50%] relative h-[60vh] rounded-t-xl overflow-hidden mb-5 md:mb-0">
          <img
            src={GroupPeople}
            alt="Group of people"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4B95691A] to-[#4B9569] opacity-90"></div>

          {/* Text Content */}
          <div className="absolute bottom-4 left-0 right-0 text-white text-center px-10">
            <h2 className="text-xl font-semibold">Welcome back</h2>
            <p className="text-sm">
              Gain access to personalized therapist tailored to meet your need
            </p>
          </div>
        </div>


        <div className="md:w-[50%]">
            <h1 className="mb-5 font-bold text-2xl">Login</h1>

            <form className="w-full">
                <div className="flex flex-col items-center gap-10">
                  <div className="flex flex-col w-full">
                    <label>Email</label>
                    <input
                      type="text"
                      className="border-1 border-[#faefce] bg-[#f5f5f5] px-2 py-1 w-full rounded outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label>Password</label>
                    <input
                      type="text"
                      className="border-1 border-[#faefce] bg-[#f5f5f5] px-2 py-1 w-full mb-10 rounded outline-none"
                    />
                  </div>
                </div>

                <button className="bg-[#4B9569] text-white w-full py-2 rounded">
                  Login
                </button>
            </form>
        </div>
      </div>

      <LiftedCare />


      <footer>
        <div className="bg-black text-white pb-10 px-5 md:px-0">
          <div className="md:flex w-full space-y-3 md:space-y-3 mx-auto pt-[5rem] md:gap-[5rem] lg:gap-[15rem] items-center justify-center">
            <div className="flex items-center">
              <div className="bg-white rounded-full w-3 h-3"></div>
              <h1 className="font-bold text-xl">Lifted Care</h1>
            </div>

            <div>
              <p>@2025 CompanyName INC</p>
            </div>

            <div className="flex gap-3">
              <img src={FaceBook} />
              <img src={Instagram} />
              <img src={Twitter} />
              <img src={Linkedin} />
            </div>
          </div>

          <hr className="lg:w-[71%] md:mx-10 lg:mx-auto mt-10 mb-7" />

          <div className="flex items-center gap-[15rem] mx-auto md:pl-[15%] underline">
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>

            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>

            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Login;
