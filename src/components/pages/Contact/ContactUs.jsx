import React from "react";
import Man from "../../../assets/man.png";

const ContactUs = () => {
  return (
    <>
      <div className="sf-font px-5 md:px-10 mt-10 font-bold text-2xl bg-gradient-to-b from-[#4B9569] via-[#FFDD55] to-[#4B9569]">
        <h1 className="text-center text-white py-5">Contact Us</h1>
        <div className="md:flex items-center gap-10 mb-10">
          <div className="w-full md:w-[30%] mb-5 md:mb-0">
            <img src={Man} className="rounded-xl" />
          </div>

          <div className="text-white">
            <p>Do you have any questions or enquiries</p>
            <p>Call +234 9100 000 000</p>
            <p>Msg +234 9100 000 000</p>
          </div>
        </div>

        <div className="pb-10">
          <p className="pb-3">
            For immediate crisis support for you or someone else. Do not use
            this site instead, use this resources provided:
          </p>

          <ul className="text-white text-xl">
            <li>Nigeria Suicide Prevention Hotline: 002341-912-5106</li>
            <li>Domestic and Sexual Violence Response Team: 0800-033-3333</li>
            <li>National Human Rights Commission (NHRC): 080-7709-1123, 080-7709-1124</li>
            <li>Mentally Aware Nigeria Initiative (MANI): 809-111-6264</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
