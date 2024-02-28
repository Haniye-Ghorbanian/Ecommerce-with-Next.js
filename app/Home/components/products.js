import { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { appActions } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const searchedProducts = useSelector((state) => state.searchedProducts);
  const searchedWarning = useSelector((state) => state.searchWarning);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsData = await response.json();
        dispatch(appActions.setProducts(productsData));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(searchedProducts);
  console.log(searchedWarning);
  return (
    <div className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-scroll px-6 pb-4 fixed top-96">
      {isLoading && <p>Loading products...</p>}
      {!isLoading &&
        filteredProducts.length > 0 &&
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      {!isLoading &&
        searchedProducts.length > 0 &&
        searchedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      {!isLoading && searchedWarning && <p>No products found!</p>}
      {!isLoading &&
        searchedProducts.length === 0 &&
        filteredProducts.length === 0 &&
        !searchedWarning &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
}
