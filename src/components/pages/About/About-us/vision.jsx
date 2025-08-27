import React from "react";
import People from "../../../../assets/people.png";
import Woman from "../../../../assets/woman.png";
import Woman3 from "../../../../assets/woman3.png";

const vision = () => {
  return (
    <>
      <div className="md:flex items-center gap-20 sf-font justify-center mx-auto px-5 md:px-10 lg:px-0 lg:w-[60%] mb-10">
        <div className="w-full mb-5 md:mb-0 md:mx-0">
          <div className="flex gap-5">
            <img
              src={Woman}
              className="w-27 md:w-25 h-60 object-cover mt-10 rounded-md shadow-[0_8px_30px_0_rgba(255,200,36,0.8)]
"
            />
            <img src={Woman3} className="w-27 md:w-25 h-60 object-cover rounded-md shadow-[0_8px_30px_0_rgba(255,200,36,0.8)]
" />
            <img
              src={Woman}
              className="w-27 md:w-25 h-60 object-cover mt-10 rounded-md shadow-[0_8px_30px_0_rgba(255,200,36,0.8)]
"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-5">Vision</h1>
          <p>
          We envision a future where every youth in every community has access to tailored mental health services.
          </p>
        </div>
      </div>

      <div className="md:flex items-center gap-20 sf-font justify-center mx-auto px-5 md:px-10 lg:px-0 lg:w-[60%] mb-10">
        <div>
          <h1 className="font-bold text-2xl pb-5">Mission</h1>
          <p className="mb-5 md:mb-0">
          -        Our mission is to facilitate the delivery of therapy efficiently and conveniently.
          </p>

          <p>
          -       build a community where every individual feels seen, supported, and empowered to thrive.
          </p>
        </div>

        <div className="lg:w-[70%] md:w-[80%] mx-auto md:mx-0">
          <img src={People} className="rounded-xl" />
        </div>
      </div>
    </>
  );
};

export default vision;
