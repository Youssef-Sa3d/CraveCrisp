import React, { useState, useEffect } from "react";
import { client } from "../../lib/client.js";

export default function CategorySelect({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div className="w-[15em] md:w-[22em] p-10 pb-0 ">
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-babyBlue rounded-full text-brown"
            role="status"
          ></div>
          <span className="ml-3 text-brown text-lg">Loading...</span>
        </div>
      ) : (
        <select
          className="flex w-full bg-inWhite text-brown focus:text-babyBlue border border-brown rounded-md py-2 px-3 shadow-md focus:outline-none focus:ring-2 focus:ring-babyBlue focus:border-transparent"
          onChange={handleCategoryChange}
          defaultValue="all"
        >
          <option value="all" >All Items</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name} className="bg-inWhite">
              {category.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
