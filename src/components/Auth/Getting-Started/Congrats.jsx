import { useState } from "react";
import "./Congrats.css"
import Group from "../../../assets/Group.png"

export default function CongratsScreen() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-20 background"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>


      {/* Congrats Modal */}
      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black text-center p-8 rounded-2xl shadow-2xl w-[350px] relative border border-gray-700">
            <img src={Group} className="w-10 mx-auto mb-10" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4B9569] to-[#FFDD55] bg-clip-text text-transparent mb-5">Congrats!</h2> 
            <p className="text-gray-300 mt-3 mb-5">
              We just sent you an email to verify your account and log in.
            </p>
            <button
              className="mt-6 bg-gradient-to-r from-green-400 to-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
              Check Mail
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
