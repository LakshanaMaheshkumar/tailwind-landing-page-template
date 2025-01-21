"use client";

import React, { useState } from "react";

const NewsLatterBox = ({ initialTheme = "light" }) => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme); // Default to light theme

  // Function to toggle theme (optional, if you want manual control)
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="relative z-10 rounded-md shadow-md"
      style={{
        width: "400px", // Fixed width
        height: "500px", // Fixed height
        backgroundColor: currentTheme === "light" ? "#FFFFFF" : "#000000",
        boxShadow:
          currentTheme === "light"
            ? "0 4px 6px rgba(207, 21, 21, 0.1)"
            : "0 4px 6px rgba(255, 255, 255, 0.1)",
        padding: "24px", // Padding for internal spacing
      }}
    >
      <h3
        className="mb-4 text-2xl font-bold leading-tight text-center"
        style={{
          color: currentTheme === "light" ? "#000000" : "#FFFFFF",
        }}
      >
        Join our community and never miss an update!
      </h3>
      <p
        className="mb-11 border-b pb-11 text-base leading-relaxed text-center"
        style={{
          color: currentTheme === "light" ? "#333333" : "#CCCCCC",
          borderColor: currentTheme === "light" ? "#E0E0E0" : "#444444",
        }}
      >
        Subscribe to our newsletter to receive the latest news, exclusive offers, and insights directly in your inbox.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="mb-4 w-full rounded-md px-6 py-3 text-base outline-none"
          style={{
            backgroundColor: currentTheme === "light" ? "#F8F8F8" : "#1C1C1C",
            color: currentTheme === "light" ? "#000000" : "#FFFFFF",
            border:
              currentTheme === "light"
                ? "1px solid #CCCCCC"
                : "1px solid #333333",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-md px-6 py-3 text-base outline-none"
          style={{
            backgroundColor: currentTheme === "light" ? "#F8F8F8" : "#1C1C1C",
            color: currentTheme === "light" ? "#000000" : "#FFFFFF",
            border:
              currentTheme === "light"
                ? "1px solid #CCCCCC"
                : "1px solid #333333",
          }}
        />
        <input
          type="submit"
          value="Subscribe"
          className="mb-5 w-full cursor-pointer rounded-md px-9 py-4 text-base font-medium shadow-md duration-300"
          style={{
            backgroundColor: currentTheme === "light" ? "#000000" : "#FFFFFF",
            color: currentTheme === "light" ? "#FFFFFF" : "#000000",
            boxShadow:
              currentTheme === "light"
                ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                : "0 4px 6px rgba(255, 255, 255, 0.1)",
          }}
        />
        
      </div>

      <div>
        {/* Adjust background SVG colors */}
        <span className="absolute left-2 top-7">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill={currentTheme === "light" ? "#E0E0E0" : "#333333"}
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
