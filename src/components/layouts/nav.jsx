import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaceBook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Logo from "../../assets/Logo.png"
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";


const nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileAbout, setShowMobileAbout] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-5 lg:px-[5rem] sticky top-0 z-50 bg-white shadow py-5">
        <img src={Logo} className="w-40 md:w-[15%]" />

        <div className="hidden md:flex">
          <div className="flex items-center gap-5 text-gray-500 ">
            <Link to="/">Home</Link>

            <div className="relative group">
              <button className="text-gray-500">About Us</button>

              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md top-6 left-0 z-50 min-w-[150px]">
                <Link to="/about" className="px-4 py-2 hover:bg-gray-100">
                  About Us
                </Link>
                <Link to="/story" className="px-4 py-2 hover:bg-gray-100">
                  Our Story
                </Link>
              </div>
            </div>

            <Link to="/webinar">Webinar</Link>
            <Link to="/contact">Contact Us</Link>

            <Link
              to="/login"
              className="border-1 border-[#FFC107] px-5 py-1 rounded-sm"
            >
              Log in
            </Link>
            <Link
              to="/registration"
              className="bg-[#FFC107] text-white px-2 py-1 rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <button onClick={handleClick}>
            {isOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <IoMdMenu className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/*  Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-5 py-4 bg-white shadow space-y-3">
          <Link to="/" onClick={handleClick} className="block text-gray-700">
            Home
          </Link>

          <div className="block md:hidden">
            <button
              onClick={() => setShowMobileAbout(!showMobileAbout)}
              className="text-gray-700"
            >
              About Us
            </button>
            {showMobileAbout && (
              <div className="flex flex-col bg-white shadow-md rounded-md mt-2 min-w-[150px]">
                <Link to="/about" className="px-4 py-2 hover:bg-gray-100">
                  About Us
                </Link>
                <Link to="/story" className="px-4 py-2 hover:bg-gray-100">
                  Our Story
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/webinar"
            onClick={handleClick}
            className="block text-gray-700"
          >
            Webinar
          </Link>
          <Link
            to="/contact"
            onClick={handleClick}
            className="block text-gray-700"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            onClick={handleClick}
            className="block text-[#FFC107] border border-[#FFC107] px-4 py-1 rounded-sm w-fit"
          >
            Log in
          </Link>
          <Link
            to="/registration"
            onClick={handleClick}
            className="block bg-[#FFC107] text-white px-4 py-1 rounded-sm w-fit"
          >
            Get Started
          </Link>
        </div>
      )}

      <main>{children}</main>

      <footer>
        <div className="bg-black text-white pb-10 px-5 md:px-0">
          <div className="md:flex w-full space-y-3 md:space-y-3 mx-auto pt-[5rem] md:gap-[5rem] lg:gap-[15rem] items-center justify-center">
            <img src={Logo} className="w-40 md:w-[15%]" />

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

          <hr className="lg:w-[71%] md:mx-10 lg:mx-auto text-[#FFC107] mt-10 mb-7" />

          <div className="md:flex space-y-5 items-center gap-[15rem] mx-auto md:pl-[15%]">
            <div className="space-y-4">
              <h2>Contact Us</h2>

              <div className="flex items-center gap-2">
                <CiMail />
                <p>liftedcarehealth@gmail.com</p>
              </div>

              <div className="flex items-center gap-2">
                <FiPhone />
                <p>liftedcarehealth@gmail.com</p>
              </div>
            </div>


            <div className="space-y-4 underline">
              <h2>Download app</h2>

              <div className="flex items-center gap-2">
                <p>Click here</p>
                <BiLogoPlayStore />
              </div>

              <div className="flex items-center gap-2">
                <p>Click here</p>
                <FaApple />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default nav;
