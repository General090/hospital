import React from "react";

const values = () => {
  const features = [
    {
      id: 1,
      header: "Connection",
      text: "we believe in building strong relationships and ties, providing a sense of belonging and a safe space where people are truly and genuinely understood, and knowing that they are never alone and never will be.",
    },

    {
      id: 2,
      header: "Compasion",
      text: "Showing kindness, understanding, and empathy is at the heart of our operation. We help people build hope, strength, and resilience by equipping them with knowledge, support, and tools to truly live.",
    },

    {
      id: 3,
      header: "Community",
      text: "We foster a sense of shared healing through open dialogue, support networks, and peer-driven spaces. Because together, we rise.",
    },
    {
      id: 4,
      header: "Care",
      text: "Beyond services, we offer intentional, proactive care, nurturing growth, celebrating progress, and respecting every person’s journey.",
    },
  ];

  return (
    <>
      <div className="sf-font mb-10">
        <h1 className="text-center font-bold text-2xl mb-5">Our Values</h1>

        <div className="md:flex gap-3 justify-center px-5">
          {features.map((feature) => (
            <div key={feature.id} className="border-1 border-amber-300 lg:w-60 w-full mb-5 md:mb-0 rounded-xl text-center p-5">
              <h1 className="font-bold pb-5 text-xl">{feature.header}</h1>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default values;
