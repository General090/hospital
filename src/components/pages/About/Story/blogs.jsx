import React from "react";
import Abigail from '../../../../assets/abigail.png';
import Sun from '../../../../assets/sun.png';
import Con from '../../../../assets/conf.png';

const Blogs = () => {
  const features = [
    {
      id: 1,
      title: "Voices of Hope",
      date: "April 9, 2025",
      description:
        "Creating Safe Spaces for Young Minds and Empowering Them with Tools to Thrive.",
      image: Sun,
    },
    {
      id: 2,
      title: "Voices of Hope",
      date: "April 9, 2025",
      description:
        "Creating Safe Spaces for Young Minds and Empowering Them with Tools to Thrive.",
      image: Abigail,
    },
    {
      id: 3,
      title: "Voices of Hope",
      date: "April 9, 2025",
      description:
        "Creating Safe Spaces for Young Minds and Empowering Them with Tools to Thrive.",
      image: Con,
    },
  ];

  return (
    <div className="sf-font">
      {/* Header */}
      <div className="bg-[#4B9569] py-7 text-center font-bold text-2xl text-white">
        <h1>Blogs</h1>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pb-12 px-5 lg:px-20">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative rounded-xl shadow-md overflow-hidden"
          >
            {/* Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[100%] object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#4B9569]/95 text-white p-4 mr-10 h-[40%]">
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs opacity-90 mb-1">{feature.date}</p>
              <p className="text-sm max-w-[85%]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-3 px-20 justify-end font-bold text-lg mb-10">
        <h1 className="cursor-pointer hover:underline">Load more...</h1>
        <div className="flex space-x-2">
          <span className="cursor-pointer">1</span>
          <span className="cursor-pointer">2</span>
          <span className="cursor-pointer">3</span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
