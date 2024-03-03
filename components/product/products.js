import { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { appActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import ProductsSkeleton from "../skeleton/productsSkeleton";
import Link from "next/link";

export default function Products() {
  const products = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const searchedProducts = useSelector((state) => state.searchedProducts);
  const searchedWarning = useSelector((state) => state.searchWarning);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsData = await response.json();
        dispatch(appActions.setProducts(productsData));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(true);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-scroll px-6 pb-4 fixed top-96">
      {isLoading &&
        [...Array(8)].map((item, index) => <ProductsSkeleton key={index} />)}
      {!isLoading &&
        filteredProducts.length > 0 &&
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      {!isLoading &&
        searchedProducts.length > 0 &&
        searchedProducts.map((product) => (
          <Link href={`./Home/${products.id}`}>
            <ProductItem key={`p${product.id}`} product={product} />
          </Link>
        ))}
      {!isLoading && searchedWarning && (
        <div className="w-full h-full flex items-center justify-center font-bold text-2xl text-main">
          <p>No products found!</p>
        </div>
      )}
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
