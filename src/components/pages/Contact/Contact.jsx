import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import Mock from "../../../assets/mock.png";
import ContactUs from "../Contact/ContactUs"
import Questions from "../Contact/questions"

const contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("https://lifted-care-backend.fly.dev/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to submit");
        return;
      }

      const data = await response.json();
      toast.success("Message sent successfully");
      console.log("Message sent:", data);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submition error:", error.message);
      toast.error("Something went wrong.try again.");
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Nav>
      <>
        <div className="sf-font mt-10">
          <h1 className="mb-5 text-center font-bold text-2xl">
            Leave us a message
          </h1>
          <div className="flex items-center gap-10 mx-10">
            <div className="relative w-[30%] hidden lg:block">
              {/* Image */}
              <img
                src={Mock}
                className="w-full h-[50vh] rounded-xl object-cover"
              />
            </div>

            <div className="lg:w-[60%] w-full">
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-5 px-2 py-1 w-full rounded outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-2">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-1 border-[#faefce] bg-[#f5f5f5] mb-10 px-2 py-1 w-full rounded h-24 outline-none"
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <div className="w-full rounded">
                  <button className="bg-[#4B9569] text-white w-full py-2 rounded cursor-pointer" type="submit">
                  {loading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <ContactUs />
        <Questions />
      </>
    </Nav>
  );
};

export default contact
