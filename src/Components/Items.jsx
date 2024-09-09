import React, { useState, useEffect } from "react";
import Item from "./Item";
import { client } from "../../lib/client.js";

export default function Items() {
  const [donutsList, setDonutsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(""); 

  useEffect(() => {
    const query = `*[_type == 'product']{name , slug , image{asset} , price , _id , category->{name}}`;

    client
      .fetch(query)
      .then((data) => {
        setDonutsList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const showNotification = (itemName) => {
    setNotification(`${itemName} has been added to your cart!`);
    setTimeout(() => setNotification(""), 3000); 
  };

  return (
    <>
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-babyBlue text-inWhite px-4 py-2 rounded">
          {notification}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-babyBlue rounded-full text-brown"
            role="status"
          ></div>
          <span className="ml-3 text-brown text-lg">Loading...</span>
        </div>
      ) : (
        <ul className="w-full flex items-center flex-row flex-wrap justify-center gap-8 py-10 px-10 md:px-16">
          {donutsList.map((donut) => (
            <Item
              donut={donut}
              key={donut._id}
              onAddToCart={showNotification} 
            />
          ))}
        </ul>
      )}
    </>
  );
}
