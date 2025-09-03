import React from "react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import GroupPeople from "../../assets/group-people.png";
import LiftedCare from "../Props/LiftedCare/LiftedCare"
import FaceBook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/Logo.png";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";


const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("https://lifted-care-backend.fly.dev/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to login");
        return;
      }

      const data = await response.json();
      toast.success("Login successful");
      console.log("Login success:", data);

      setFormData({
        email: "",
        password: "",
      });
      setErrors({});
      navigate("/menu-intro");
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("Something went wrong.try again.");
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="sf-font">
      <nav className="flex items-center justify-between px-5 lg:px-[10rem] py-5">
      <img src={Logo} className="w-40 md:w-[15%]" />

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

            <form className="w-full" onSubmit={handleLogin}>
                <div className="flex flex-col items-center gap-10">
                  <div className="flex flex-col w-full">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-1 border-[#faefce] bg-[#f5f5f5] px-2 py-1 w-full rounded outline-none"
                    />

                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col w-full">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="border-1 border-[#faefce] bg-[#f5f5f5] px-2 py-1 w-full mb-10 rounded outline-none"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  </div>
                </div>

                <button className="bg-[#4B9569] text-white w-full py-2 rounded cursor-pointer" type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
      </div>

      <LiftedCare />


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

export default Login;
