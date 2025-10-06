"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    file: null,
    agreeComm: false,
    agreeData: false,
  });

  const [isHuman, setIsHuman] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    validateField(name, type === "file" ? files[0] : value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) errorMsg = "This field is required";
        else if (!/^[A-Za-z]+$/.test(value.trim()))
          errorMsg = "Only alphabets allowed";
        break;
      case "email":
        if (!value.trim()) errorMsg = "Email is required";
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())
        )
          errorMsg = "Invalid email address";
        break;
      case "company":
        if (!value.trim()) errorMsg = "Company name is required";
        break;
      case "message":
        if (!value.trim()) errorMsg = "Message is required";
        else if (value.trim().length < 10)
          errorMsg = "Message must be at least 10 characters";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const isFormValid = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "company",
      "message",
    ];
    return (
      requiredFields.every((field) => formData[field].trim() !== "") &&
      Object.values(errors).every((err) => !err) &&
      formData.agreeComm &&
      formData.agreeData &&
      isHuman
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill all fields correctly and confirm you are not a robot.");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // Submit to API
  };

  return (
    <section className="bg-orange-600 py-12 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#0a1a4f] mb-2">Quote form:</h2>
        <p className="text-[#0a1a4f] mb-6">
          Let’s get the conversation started today! Fill out the form on this page or email us directly to request a quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["firstName", "lastName"].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                  {field === "firstName" ? "First Name*" : "Last Name*"}
                </label>
                <input
                  type="text"
                  name={field}
                  placeholder={field === "firstName" ? "eg: John" : "eg: Doe"}
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onChange={handleChange}
                  required
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Email + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["email", "company"].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                  {field === "email" ? "Email*" : "Company Name*"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={
                    field === "email" ? "eg: john@email.com" : "eg: ABC Ltd."
                  }
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onChange={handleChange}
                  required
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
              Tell Us About Your Project*
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full border rounded-md px-4 py-2 bg-gray-50 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={handleChange}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Styled File Upload */}
          <div>
            <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
              File Upload
            </label>
            <p className="text-sm text-[#0a1a4f] mb-2">
              Accepts: .pdf, .dwg, .step, .stl, .iges. Other file types can be emailed to contact-nab@zetwerk.com
            </p>
            <div className="flex items-center gap-4">
              <label className="bg-gray-200 hover:bg-gray-300 cursor-pointer px-4 py-2 rounded-md text-[#0a1a4f] font-medium">
                Choose File
                <input
                  type="file"
                  name="file"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
              <span className="text-sm text-[#0a1a4f]">
                {formData.file ? formData.file.name : "No file chosen"}
              </span>
            </div>
          </div>

          {/* Consent Information Paragraph */}
          <p className="text-sm text-[#0a1a4f] mt-4 mb-2">
            We need your consent to communicate with you and to store and process your personal data. If you agree, please click the boxes below. You can unsubscribe or ask us to remove your data at any time.
          </p>

          {/* Consent Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-center space-x-2 text-[#0a1a4f]">
              <input
                type="checkbox"
                name="agreeComm"
                onChange={handleChange}
                required
              />
              <span>I agree to receive communications from SureSupply.*</span>
            </label>
            <label className="flex items-center space-x-2 text-[#0a1a4f]">
              <input
                type="checkbox"
                name="agreeData"
                onChange={handleChange}
                required
              />
              <span>
                I agree to allow SureSupply to store and process my personal data.*
              </span>
            </label>
          </div>

          {/* Custom CAPTCHA */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="captchaCheckbox"
              checked={isHuman}
              onChange={(e) => setIsHuman(e.target.checked)}
              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="captchaCheckbox" className="text-[#0a1a4f]">
              {`I'm not a robot`}
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Get Quote Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
