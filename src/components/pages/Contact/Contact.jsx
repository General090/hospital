import React from "react";
import Nav from "../../layouts/nav";
import Girl from "../../../assets/girl.png";
import ContactUs from "../Contact/ContactUs"

const contact = () => {
  return (
    <Nav>
      <>
        <div className="sf-font mt-10">
          <h1 className="mb-5 text-center font-bold text-2xl">
            Leave us a message
          </h1>
          <div className="flex items-center gap-10 mx-10">
            <div className="relative w-[30%] hidden md:block">
              {/* Image */}
              <img
                src={Girl}
                className="w-full h-auto rounded-xl object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-b from-[#FED361]/10 via-[#FED361]/30 to-[#4B9569] z-10"></div>
            </div>

            <div className="md:w-[60%] w-full">
              <form className="flex flex-col">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-10 px-2 py-1 w-full rounded h-24 outline-none"
                  />
                </div>

                <div className="w-full rounded">
                  <button className="bg-[#4B9569] text-white w-full py-2 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <ContactUs />
      </>
    </Nav>
  );
};

export default contact
