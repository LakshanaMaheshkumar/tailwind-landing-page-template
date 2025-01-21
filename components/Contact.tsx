"use client";
import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent default form submission
    setSuccessMessage(true); // Show success message
    setTimeout(() => setSuccessMessage(false), 3000); // Hide after 3 seconds
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, rgb(255, 255, 255), #EBEBEB)",
        padding: "20px",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div
            className="px-4"
            style={{
              width: "75%",
              maxWidth: "575px",
              margin: "0 auto",
            }}
          >
            <div
              className="rounded-lg bg-white px-6 py-8 shadow-lg sm:p-8 lg:px-6 xl:p-8"
              style={{
                width: "100%",
                height: "500px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact
              </h2>
              <p className="mb-8 text-base font-medium text-gray-700">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-800"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="border w-full rounded-lg border-gray-300 bg-white px-5 py-2 text-base text-gray-900 outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-800"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="border w-full rounded-lg border-gray-300 bg-white px-5 py-2 text-base text-gray-900 outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-800"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Enter your message"
                        required
                        className="border w-full resize-none rounded-lg border-gray-300 bg-white px-5 py-2 text-base text-gray-900 outline-none focus:border-orange-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-lg bg-black px-8 py-3 text-base font-medium text-white shadow-md hover:bg-gray-800"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
              {successMessage && (
                <div className="mt-4 rounded-lg bg-green-100 p-4 text-green-800">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
}
