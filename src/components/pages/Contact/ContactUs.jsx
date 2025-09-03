import React from "react";
import Facebook from "../../../assets/facebook.png"
import Instagram from "../../../assets/instagram.png"
import X from "../../../assets/twitter.png"
import Linkedin from "../../../assets/linkedin.png"

const ContactUs = () => {
  return (
    <>
      <div className="md:flex items-center justify-between mx-5 md:mx-60 my-20">
        <div className="md:text-center">
          <h1 className="font-bold text-4xl pb-2">Email</h1>
          <p>liftedcarehealth@gmail.com</p>
          <p>+234 81 0000000</p>
        </div>


        <div>
          <h1 className="font-bold text-4xl pb-2">Connect with Us</h1>
          <div className="flex items-center gap-5 ">
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={X} />
            <img src={Linkedin} />
          </div>
        </div>
      </div>

      <div className="mx-5 md:mx-20 font-bold space-y-2 text-sm mb-20">
        <h1 className="pb-5 text-xl">For immediate crisis support for you or someone else. Do not use this site instead, use this resources provided:</h1>
        <p>Nigeria Suicide Prevention Hotline: 002341-912-5106</p>
        <p>Domestic and Sexual Violence Response Team: 0800-033-3333</p>
        <p>National Human Rights Commission (NHRC): 080-7709-1123, 080-7709-1124</p>
        <p>Mentally Aware Nigeria Initiative (MANI): 809-111-6264</p>
      </div>
    </>
  );
};

export default ContactUs;
