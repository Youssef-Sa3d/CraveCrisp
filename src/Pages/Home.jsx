import React , {useState} from "react";
import Items from "../Components/Items";
import Select from "../Components/Select";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <main className=" flex items-center flex-col ">
      <Select onCategoryChange={handleCategoryChange} />
      <Items selectedCategory={selectedCategory} />
    </main>
  );
}
