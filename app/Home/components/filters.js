"use client";

import { useEffect, useState } from "react";
import FilterOption from "./filterOption";
import FiltersSkeleton from "./filterSkeleton";

export default function Filters() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categoriesData = await response.json();
        setCategories(categoriesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-4 w-full flex justify-between items-center pb-4 h-16 px-6 overflow-x-scroll">
      {isLoading && [...Array(4)].map((item) => <FiltersSkeleton />)}

      {!isLoading &&
        categories.map((category) => (
          <FilterOption key={category} category={category} />
        ))}
    </div>
  );
}
