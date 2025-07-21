import React, { useState } from "react";
import MenuLayout from "../../../layouts/MenuLayout";
import Cartoon from "../../../../assets/cartoon.png";
import { Link } from "react-router-dom";

const Settings = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <MenuLayout>
      <div className="jarkata px-5 lg:px-0 lg:flex lg:justify-center mt-20">
        <div>
          <div className="mb-5 flex flex-col items-center">
            <img src={Cartoon} className="rounded-full w-20" />
            <p className="mt-2">Change Picture</p>
          </div>

          <div className="roboto w-full">
            <form className="lg:px-20 w-full">
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

              <div className="flex items-center gap-5">
                <button className="block bg-[#4B9569] text-white w-full py-2 rounded mb-10 text-center">
                  Cancel
                </button>

                <button className="block bg-[#4B9569] text-white w-full py-2 rounded mb-10 text-center">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default Settings;
