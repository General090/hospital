import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is LiftedCare",
    answer:
      "LiftedCare is a platform dedicated to bridging the gap in mental health support. We offer access to expert therapists, combining human expertise, AI, and other digital tools to help people lead meaningful, happy, and fulfilling lives.",
  },
  {
    question: "Who is our platform for?",
    answer:
      "Whether you are facing mental health challenges, wish to learn and support others, or seek to improve your life, our platform is suitable for you.",
  },
  {
    question: "Who are the therapists?",
    answer:
      "All our therapists are qualified and experienced counsellors, psychologists, psychiatrists, or therapists. They must possess relevant academic degrees or certifications.",
  },
  {
    question: "How will I communicate with my therapist?",
    answer:
      "You can receive support through:\n• Texting messages\n• Chatting live via the platform\n• Phone calls\n• Video conferencing with your therapist\n You can choose different methods at different times according to your needs, availability, and convenience.",
  },
  {
    question: "Will my information be private?",
    answer:
      "All information you share is protected. We will not disclose any details on our site to third parties.",
  },
  {
    question: "How long can I use Lifted Care?",
    answer:
      "For as long as you like. Besides therapy, we offer additional features that are informative, engaging, and uplifting.",
  },
  {
    question: "How do I contact the Lifted Health care support team?",
    answer: "Through our call centre, email or contact form.",
  },
  {
    question:
      "If I'm a qualified therapist. How can I provide services using LiftedCare?",
    answer: "Please start the application process by clicking here.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#FED36180] py-16 px-4 sf-font">
      <div className="mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10">
          Frequency asked questions
        </h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white lg:w-[50%] mx-auto rounded-xl mb-2 p-4 shadow-sm transition-all duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="font-semibold mb-5">{item.question}</h3>
              <div className="bg-yellow-400 rounded-full w-7 h-7 flex items-center justify-center">
                {openIndex === index ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </div>
            </div>

            {openIndex === index && (
              <div className="mt-3 text-sm whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
