import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import Group3 from "../../../assets/Group-3.png";
import LiftedCare from "../../Props/LiftedCare/LiftedCare";
import { DateInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const Registration = () => {

  // const baseURL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    birth: null,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle DateInput change
  const handleDateChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      birth: value,
    }));
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.mobile) newErrors.mobile = "Phone number is required";
    if (!formData.birth) newErrors.birth = "Date of birth is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("https://lifted-care-backend.fly.dev/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to register");
        return;
      }

      const data = await response.json();
      toast.success("Registration successful!");
      console.log("Registration success:", data);

      setFormData({
        first_name: "",
        last_name: "",
        mobile: "",
        birth: null,
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
    navigate("/congrats");
  };

  return (
    <Nav>
      <div className="sf-font px-5 lg:px-10 mt-10 mb-10">
        <div className="flex items-center gap-10 lg:gap-20 mb-10">
          {/* Left Side */}
          <div className="lg:w-[40%] p-10 bg-gradient-to-b from-[#FFC107] via-[#FFC107]/20 to-[#4B9569] hidden md:block">
            <img src={Group3} className="w-full" />
          </div>

          {/* Right Side (Form) */}
          <div className="w-full">
            <form className="lg:px-20" onSubmit={handleRegister}>
              <div className="lg:flex items-center gap-10">
                <div className="flex flex-col w-full">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="border border-[#faefce] bg-[#f5f5f5] mb-2 px-2 py-1 w-full rounded outline-none"
                  />
                  {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
                </div>

                <div className="flex flex-col w-full">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="border border-[#faefce] bg-[#f5f5f5] mb-2 px-2 py-1 w-full rounded outline-none"
                  />
                  {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
                </div>
              </div>

              <div className="lg:flex items-center gap-10">
                <div className="flex flex-col w-full">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="border border-[#faefce] bg-[#f5f5f5] mb-2 px-2 py-1 w-full rounded outline-none"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>

                <div className="flex flex-col w-full">
                  <label>Date of Birth</label>
                  <DateInput
                    value={formData.birth}
                    onChange={handleDateChange}
                    styles={{
                      input: {
                        border: "1px solid #faefce",
                        backgroundColor: "#f5f5f5",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "0.375rem",
                        outline: "none",
                        width: "100%",
                        marginBottom: "0.5rem",
                      },
                    }}
                  />
                  {errors.birth && <p className="text-red-500 text-sm">{errors.birth}</p>}
                </div>
              </div>

              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#faefce] bg-[#f5f5f5] mb-2 px-2 py-1 w-full rounded outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-[#faefce] bg-[#f5f5f5] mb-2 px-2 py-1 w-full rounded outline-none"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="flex flex-col">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border border-[#faefce] bg-[#f5f5f5] mb-2 px-2 py-1 w-full rounded outline-none"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="block bg-[#4B9569] text-white w-full py-2 rounded mb-10 text-center disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>

        <LiftedCare />
      </div>
    </Nav>
  );
};

export default Registration;
