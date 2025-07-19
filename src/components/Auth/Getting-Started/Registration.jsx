import React, { useState } from "react";
import Nav from "../../layouts/nav";
import Group3 from "../../../assets/Group-3.png";
import LiftedCare from "../../Props/LiftedCare/LiftedCare";
import { Link } from "react-router-dom";


const Registration = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      <Nav>
        <div className="sf-font px-5 lg:px-10 mt-10 mb-10">
          <div className="flex items-center gap-10 lg:gap-20 mb-10">
            <div className="lg:w-[40%] p-10 bg-gradient-to-b from-[#FFC107] via-[#FFC107]/20 to-[#4B9569] hidden md:block">
              <img src={Group3} className="w-full" />
            </div>

            <div className="w-full">
              <form className="lg:px-20">
                <div className="lg:flex items-center gap-10">
                  <div className="flex flex-col w-full">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                    />
                  </div>
                </div>

                <div className="lg:flex items-center gap-10">
                  <div className="flex flex-col w-full">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 pl-2 pr-17 py-1 rounded outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label>Email</label>
                  <input
                    type="text"
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Password</label>
                  <input
                    type="text"
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                  />
                </div>

                <Link
                  to="/started"
                  className="block bg-[#4B9569] text-white w-full py-2 rounded mb-10 text-center"
                >
                  Next
                </Link>
              </form>
            </div>
          </div>

          <LiftedCare />
        </div>
      </Nav>
    </>
  );
};

export default Registration;
