"use client";

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 pt-32">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8">
        Have any questions, feedback, or concerns? We'd love to hear from you.
        Fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Subject"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Message"
            rows={6}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded-xl border-t-2 border-purple-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
