import React from "react";
import MenuLayout from "../../../../../layouts/MenuLayout";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ScheduleDone = () => {
  return (
    <MenuLayout>
      <div className="sf-font mt-20">
        <div className="bg-[#4B9569] py-5" />

        <div className="space-y-2 py-20 text-[#4B9569] text-center mx-auto text-xl">
          <h1 className="font-bold text-3xl">Congratulations</h1>
          <p>You are all done</p>
          <p>A therapist will get in touch with you</p>
          <FaRegThumbsUp className="text-5xl mx-auto" />
        </div>

        <div className="bg-[#4B9569] py-5 mb-20" />

        <div className="flex justify-end gap-5 mt-6 mb-10 mr-5 md:mr-20">
          <Link
            to="/menu-intro"
            className="bg-[#4B9569] text-white py-2 text-center w-[40%] lg:w-[13%] rounded"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    </MenuLayout>
  );
};

export default ScheduleDone;
