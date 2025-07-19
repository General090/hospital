import React from "react";
import MenuLayout from "../../../../../layouts/MenuLayout";
import { Link } from "react-router-dom";

const schedule = () => {
  const days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const timeGroups = {
    Morning: ["8am - 9am", "9am - 10am", "10am - 11am", "11am - 12pm"],
    Afternoon: ["12pm - 1pm", "1pm - 2pm", "2pm - 3pm", "3pm - 4pm"],
    Evening: ["4pm - 5pm", "5pm - 6pm", "6pm - 7pm", "7pm - 8pm"],
  };

  return (
    <MenuLayout>
      <div className="sf-font mt-10">
        <div className="px-10">
          <h1 className="font-bold italic pb-2">Let’s finalize your match</h1>
          <div className="italic">
            <p>
              We’re almost there! A few more details will help us find the best
              therapist for you.
            </p>
            <p>
              We will do our best to match you with the right therapist at your
              preferred time.
            </p>
          </div>

          <p className="text-[#4B9569] pb-5 pt-10">
            When will you be available
          </p>
        </div>

        <div className="bg-[#4B9569] py-5" />

        <div className="overflow-x-auto px-7">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr>
                <th className="text-left py-2 px-3">Time</th>
                {days.map((day) => (
                  <th key={day} className="text-center py-2 px-3">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(timeGroups).map(([section, times]) => (
                <React.Fragment key={section}>
                  {/* Section Label Row */}
                  <tr>
                    <td
                      colSpan={days.length + 1}
                      className="font-semibold text-[#4B9569] py-3 px-3"
                    >
                      {section}
                    </td>
                  </tr>
                  {/* Time Slot Rows */}
                  {times.map((slot, index) => (
                    <tr key={slot}>
                      <td className="font-medium py-2 px-3">{slot}</td>
                      {days.map((day) => (
                        <td key={day} className="text-center py-2 px-3">
                          <input
                            type="checkbox"
                            className="w-4 h-4 accent-green-600"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end gap-5 mt-6 mb-10">
            <Link to="/theraphy" className="bg-[#4B9569] text-white py-2 text-center w-[13%] rounded">
              Back
            </Link>
            <Link to="/done" className="bg-[#4B9569] text-white py-2 text-center w-[13%] rounded">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default schedule;
