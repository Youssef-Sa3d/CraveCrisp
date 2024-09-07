import React, { useState, useEffect } from "react";
import Item from "./Item";
import { client  } from "../../lib/client.js";

export default function Items() {
  const [donutsList, setDonutsList] = useState([]);

  


  useEffect(() => {
    const query = `*[_type == 'product']{name , slug , image{asset} , price , _id , category->{name}}`;

    client
      .fetch(query)
      .then((data) => setDonutsList(data))
      .catch((error) => console.error(error));
  }, []);
  
  // console.log(donutsList)
  return (
    <ul className=" w-full flex items-center flex-row flex-wrap justify-center gap-8 py-10 px-10 md:px-16">
      {donutsList.map((donut) => (
        <Item donut={donut} key={donut._id} />
      ))}
    </ul>
  );
}
