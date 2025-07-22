import React from "react";
import MenuLayout from "../../../layouts/MenuLayout";
import Kat from "../../../../assets/kat.png";
import Abigail from "../../../../assets/abigail.png";
import MedMan from "../../../../assets/med-man.png";
import { IoFilter } from "react-icons/io5";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "Katherine Parker",
      subtitle: "PhD",
      message: "We found a match for you.",
      statusDotClass: "bg-green-500",
      avatar: Kat,
      actions: [
        {
          label: "Accept",
          className: "bg-green-100 text-green-700 hover:bg-green-200",
        },
        {
          label: "Decline",
          className: "bg-red-100 text-red-700 hover:bg-red-200",
        },
      ],
    },
    {
      id: 2,
      title: "Understanding Anxiety",
      subtitle: "Virtual",
      message: "Event you registered for",
      statusDotClass: "bg-yellow-500",
      avatar: Abigail,
      actions: [
        {
          label: "Attend",
          className: "bg-blue-100 text-blue-700 hover:bg-blue-200",
        },
        {
          label: "Decline",
          className: "bg-red-100 text-red-700 hover:bg-red-200",
        },
      ],
    },
    {
      id: 3,
      title: "June Challenge",
      subtitle: "Free",
      message: "Participate to win prizes",
      statusDotClass: "bg-red-500",
      avatar: MedMan,
      actions: [
        {
          label: "Go to Challenge",
          className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
        },
      ],
    },

    {
      id: 4,
      title: "Katherine Parker",
      subtitle: "PhD",
      message: "We found a match for you.",
      statusDotClass: "bg-green-500",
      avatar: Kat,
      actions: [
        {
          label: "Accept",
          className: "bg-green-100 text-green-700 hover:bg-green-200",
        },
        {
          label: "Decline",
          className: "bg-red-100 text-red-700 hover:bg-red-200",
        },
      ],
    },
    {
      id: 5,
      title: "Understanding Anxiety",
      subtitle: "Virtual",
      message: "Event you registered for",
      statusDotClass: "bg-yellow-500",
      avatar: Abigail,
      actions: [
        {
          label: "Attend",
          className: "bg-blue-100 text-blue-700 hover:bg-blue-200",
        },
        {
          label: "Decline",
          className: "bg-red-100 text-red-700 hover:bg-red-200",
        },
      ],
    },
    {
      id: 6,
      title: "June Challenge",
      subtitle: "Free",
      message: "Participate to win prizes",
      statusDotClass: "bg-red-500",
      avatar: MedMan,
      actions: [
        {
          label: "Go to Challenge",
          className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
        },
      ],
    },
  ];

  return (
    <MenuLayout>
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-md shadow px-4 py-6">
          <h2 className="text-center font-semibold text-gray-800 mb-4">
            All notifications
            <span className="bg-[#FFC107] px-2 text-white rounded-full ml-2">
              6
            </span>
          </h2>

          <div className="flex items-center gap-2 text-[#237644] mb-6 justify-center md:justify-start">
            <IoFilter />
            <p>Filter</p>
          </div>

          <div className="space-y-4">
            {notifications.map((note) => (
              <div
                key={note.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-xl shadow-md shadow-green-300 hover:shadow transition gap-3"
              >
                {/* Dot + Avatar + Info */}
                <div className="flex flex-1 items-start gap-3">
                  {/* Status Dot */}
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${note.statusDotClass}`}
                  ></div>

                  {/* Avatar */}
                  <img
                    src={note.avatar}
                    alt={note.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  {/* Text Info */}
                  <div className="flex flex-col text-sm text-gray-800">
                    <span className="font-medium">{note.title}</span>
                    <span className="text-xs text-gray-400">
                      {note.subtitle}
                    </span>
                    <span className="text-sm text-gray-600 mt-1">
                      {note.message}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {note.actions.map((action, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 text-sm rounded-md whitespace-nowrap ${action.className}`}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            <button className="px-10 py-2 border border-[#237644] text-[#237644] rounded cursor-pointer">
              Load more
            </button>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default Notification;
