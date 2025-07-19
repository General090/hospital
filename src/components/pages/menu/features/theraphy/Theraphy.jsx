import React from "react";
import MenuLayout from "../../../../layouts/MenuLayout";
import Step from "../../../../../assets/steps.png";
import { Link } from "react-router-dom"

const Theraphy = () => {
  const features = [
    { id: 1, word: "Anxiety or stress" },
    { id: 2, word: "Low mood or depression" },
    { id: 3, word: "Relationship issues" },
    { id: 4, word: "Grief or loss" },
    { id: 5, word: "Trauma or past experiences" },
    { id: 6, word: "Self-esteem or confidence" },
    { id: 7, word: "Work-related issues" },
    { id: 8, word: "Something else" },
  ];

  const theraphy = [
    { id: 1, word: "Yes" },
    { id: 2, word: "No" },
    { id: 3, word: "Not Sure" },
  ];

  const preferences = [
    { id: 1, word: "No preferences" },
    { id: 2, word: "Female" },
    { id: 3, word: "Male" },
  ];

  const session = [
    { id: 1, word: "Video calls" },
    { id: 2, word: "Phone calls" },
    { id: 3, word: "Messaging support" },
    { id: 4, word: "Mix of all" },
  ];

  return (
    <MenuLayout>
      <div className="mt-5">
        <div className="jarkata text-center pb-10 font-bold">
          <h1>
            Tell us a bit more so we can match you with the right therapist
            <br className="hidden md:block" /> Our goal is to provide care that fits your unique needs. The
            more we know, the better we can support you.
          </h1>
        </div>

        <div className="roboto px-5 md:px-10 md:flex items-center gap-10">
          <div className="lg:w-[30%] md:w-[50%] mb-5 md:mb-0">
            <img src={Step} className="rounded-t-xl" />
          </div>

          <div className="roboto">
            <div className="mb-5">
              <h1 className="mb-2">
                What brings you to Lifted Care? Select all that apply:
              </h1>

              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {feature.word}
                </div>
              ))}
            </div>

            <div className="mb-5">
              <h1 className="mb-2">Have you had therapy or coaching before?</h1>

              {theraphy.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {feature.word}
                </div>
              ))}
            </div>

            <div className="mb-5">
              <h1 className="mb-2">
                What are your preferences? Therapist gender preference
              </h1>

              {preferences.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {feature.word}
                </div>
              ))}
            </div>

            <div className="mb-5">
              <h1 className="mb-2">Have you had therapy or coaching before?</h1>

              {session.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {feature.word}
                </div>
              ))}
            </div>

            <p>
              Your information is confidential and used only to tailor your
              experience.
            </p>

            <div className="flex justify-end">
              <Link
                to="/theraphy-schedule"
                className="block bg-[#4B9569] w-[50%] lg:w-[25%] font-bold text-white py-2 rounded mt-10 mb-10 text-center"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default Theraphy;
