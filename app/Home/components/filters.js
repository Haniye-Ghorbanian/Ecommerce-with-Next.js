"use client";

import { useEffect, useState } from "react";
import FilterOption from "./filterOption";

export default function Filters() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoriesData = await response.json();
      // console.log(categoriesData);
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-4 w-full flex justify-between items-center h-16 px-6 overflow-x-scroll">
      {categories.map((category) => (
        <FilterOption key={category} category={category} />
      ))}
    </div>
  );
}
