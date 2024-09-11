import React, { useState, useEffect, useRef } from "react";
import { client } from "../../lib/client.js";

export default function CategorySelect({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const query = `*[_type == "category"]{name, _id}`;

    client
      .fetch(query)
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownWidth = buttonRef.current?.offsetWidth;

  return (
    <div className="relative w-[15em] md:w-[22em] p-10 pb-0">
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-babyBlue rounded-full text-brown"
            role="status"
          ></div>
          <span className="ml-3 text-brown text-lg">Loading...</span>
        </div>
      ) : (
        <div>
          <div
            ref={buttonRef}
            className="flex justify-between items-center bg-inWhite text-brown border border-brown rounded-md py-2 px-3 shadow-md cursor-pointer"
            onClick={toggleDropdown}
          >
            <span>
              {selectedCategory === "all" ? "All Items" : selectedCategory}
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 11-1.414-1.414l5-5A1 1 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {isOpen && (
            <ul
              ref={dropdownRef}
              className="absolute z-10 bg-inWhite border border-brown rounded-md shadow-md mt-1 max-h-48 overflow-auto"
              style={{ minWidth: dropdownWidth }} 
            >
              <li
                className={`py-2 px-3 cursor-pointer hover:bg-babyBlue hover:text-white ${
                  selectedCategory === "all" ? "bg-babyBlue text-white" : ""
                }`}
                onClick={() => handleCategoryClick("all")}
              >
                All Items
              </li>
              {categories.map((category) => (
                <li
                  key={category._id}
                  className={`py-2 px-3 cursor-pointer hover:bg-babyBlue hover:text-white ${
                    selectedCategory === category.name
                      ? "bg-babyBlue text-white"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
