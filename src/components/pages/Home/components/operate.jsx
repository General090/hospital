import React from "react";
import Health from "../../../../assets/health.png";
import Hand from "../../../../assets/hand.png";
import Woman2 from "../../../../assets/woman2.png"
import Casual from "../../../../assets/casual.png"
import Man2 from "../../../../assets/man2.png"

const operate = () => {
  return (
    <div className="mb-10">
      <div className=" text-white py-5 mb-10">
        <div className="bg-[#4B9569] py-5 mb-10">
          <h1 className="text-center text-3xl font-bold">
            How we Operate
          </h1>
        </div>

        <div className="md:flex items-center gap-[20%] lg:w-[70%] md:mx-auto px-5 lg:px-0">
          <div className="flex gap-5 ">
            <img src={Woman2} className="w-25 h-60 object-cover mt-10 rounded-md shadow-[0_8px_30px_0_rgba(255,200,36,0.8)]
" />
            <img src={Casual} className="w-25 h-60 object-cover rounded-md shadow-[0_8px_30px_0_rgba(255,200,36,0.8)]
" />
            <img src={Man2} className="w-25 h-60 object-cover mt-10 rounded-md shadow-[0_8px_30px_0_rgba(255,200,36,0.8)]
" />
          </div>

          <div className="text-black mt-10 md:mt-0">
            <h1 className="font-bold text-xl md:text-xl lg:text-xl pb-5">
              Get Matched with professional therapist
            </h1>
            <p className="text-xl">
              Fill our Simple survey form and let our AI analyze and match you
              which therapist suits your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex items-center lg:w-[50%] px-5 lg:px-0 lg:mx-auto gap-20 mb-20">
        <div>
          <h1 className="font-bold mb-2 text-xl">
            Communicate however you feel it
          </h1>
          <p className="text-sm">
            Communicate with whatever means you feel comfortable with - Video,
            Audio, or chat. Anytime, from anywhere from your mobile or desktop.
          </p>
        </div>

        <img src={Health} className="w-[40%] rounded-sm h-52 hidden md:block" />
      </div>

      <div className="md:flex items-center lg:w-[50%] px-5 lg:px-0 mx-auto gap-20">
        <div>
          <h1 className="font-bold mb-2 text-xl">Tool to aid your Journey</h1>
          <p className="text-sm">
            Use our extensive available tools to track your progress. access
            resources and webinars tailored to meet your needs
          </p>
        </div>

        <img
          src={Hand}
          className="lg:w-[40%] md:w-[80%] h-52 rounded-sm hidden md:block"
        />
      </div>
    </div>
  );
};

export default operate;
