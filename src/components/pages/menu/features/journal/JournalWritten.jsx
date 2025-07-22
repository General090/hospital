import React from "react";
import MenuLayout from "../../../../layouts/MenuLayout";
import Pray from "../../../../../assets/pray.png";

const JournalWritten = () => {
  return (
    <MenuLayout>
      <div className="sf-font flex flex-col justify-content items-center mt-10">
        <h1 className="font-bold text-4xl">Healing in Progress</h1>
        <p className="text-[#4B956980] mb-10 text-lg">Monday, 24, September</p>

        <div className="flex justify-center items-center px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 w-full p-6 rounded-xl">
            {/* Left Section */}
            <div className="bg-[#edf4f0] rounded-3xl mb-10 p-6 w-full max-w-xs shadow-md">
              <h1 className="text-lg font-semibold text-center mb-6">
                Journal Setting
              </h1>

              <div className="mb-60">
                <h2 className="font-bold mb-5 text-center text-xl">Heading</h2>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm mb-1 text-gray-500 font-bold">
                    Text Size
                  </p>
                  <div className="flex gap-2 mb-2">
                    <div className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full">
                      L
                    </div>
                    <div className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full">
                      M
                    </div>
                    <div className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full">
                      S
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm mb-1 text-gray-500 font-bold">
                    Text colour
                  </p>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-bold mb-5 text-center text-xl">
                  Paragraph
                </h2>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm mb-1 text-gray-500 font-bold">
                    Text Size
                  </p>
                  <div className="flex gap-2 mb-2">
                    <div className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full">
                      L
                    </div>
                    <div className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full">
                      M
                    </div>
                    <div className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full">
                      S
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-5">
                  <p className="text-sm mb-1 text-gray-500 font-bold">
                    Text colour
                  </p>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm mb-1 text-gray-500 font-bold">
                    Text font
                  </p>
                  <select className="text-sm px-2 py-1 rounded-md border border-gray-300 w-30">
                    <option>Roboto</option>
                    <option>Arial</option>
                    <option>Inter</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <img
                src={Pray}
                className="w-full max-w-sm mx-auto md:mx-0 rounded-t-2xl mb-5"
              />
              <p className="text-lg mb-5 text-[#a3a3a3] max-w-md mx-auto md:mx-0">
                It’s been three months since Dad passed, and while I still feel
                the ache every morning, today I noticed something different, I
                didn’t cry when I saw his photo on the shelf. Instead, I smiled.
                Therapy has been both heavy and freeing. In the first few
                sessions, all I did was cry. I hated talking about him in the
                past tense. My therapist, Ada, helped me sit with the pain
                without feeling like I was drowning in it. She gave me tools,
                breathing exercises, grounding techniques, and a “memory jar” I
                now fill with moments I loved most about Dad. I wrote down one
                today: when he used to whistle off-key while making pancakes on
                Sunday mornings. It made me laugh. That was new. I’ve also been
                journaling more. Ada says grief isn’t something to get over—it’s
                something to carry differently over time. That really stuck with
                me. I still have hard days. Some nights, the silence feels
                heavier than the pain. But I’m learning that healing isn’t a
                straight line. It’s okay to take two steps forward and one step
                back. Last week, I visited his grave for the first time since
                the funeral. I brought sunflowers—his favorite. I sat with him,
                told him everything happening in my life, and when I left, I
                felt lighter. Not healed. But lighter. Today, I chose to wear
                yellow because he always said it made me look like sunshine. I
                want to remember him in light, not just in loss. I’m not okay
                every day, but I’m healing. And maybe, just maybe, that’s enough
                for now.
              </p>

              <div className="flex justify-end w-full">
                <button className="text-white font-bold w-[30%] bg-[#4B9569] rounded-lg text-center py-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default JournalWritten;
