import { useEffect, useState } from "react";
import ProductItem from "./productItem";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const ProductsData = await response.json();
      console.log(ProductsData);
      setProducts(ProductsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-scroll px-6 pb-4 fixed top-96">
      {products.map(product => (<ProductItem key={product.id} product={product}/>))}
    </div>
  );
}
