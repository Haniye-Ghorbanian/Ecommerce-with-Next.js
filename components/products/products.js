import { useEffect, useState, useRef } from "react";
import ProductItem from "./productItem";
import { appActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import ProductsSkeleton from "../skeleton/productsSkeleton";

export default function Products() {
  const displayingLimit = 5;
  let count = 1;

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const searchedProducts = useSelector((state) => state.searchedProducts);
  const searchedWarning = useSelector((state) => state.searchWarning);

  const productsData = useRef(null);
  const productsList = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [toBeLoaded, setToBeLoaded] = useState(false);
  const [displayingProducts, setDisplayingProducts] = useState(
    products.slice(0, displayingLimit)
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const productsDataFetched = await response.json();
        productsData.current = productsDataFetched;
        dispatch(appActions.setProducts(productsDataFetched));
        // used ref instead of products from redux due to async behavior
        handleDisplayingProducts(productsDataFetched);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(true);
      }
    };

    fetchProducts();
  }, [dispatch]);

  // console.log(products.length);
  // console.log(displayingProducts);
  console.log(toBeLoaded);

  function handleDisplayingProducts(fetchedProducts) {
    const startIndex = 0;
    const endIndex = displayingLimit * count;

    // displayingProducts === 0 &&
    //   setDisplayingProducts(fetchedProducts.slice(startIndex, endIndex));
    // displayingProducts.length !== 0 &&
      setTimeout(() => {
        const displayedProducts = productsData.current.slice(startIndex, endIndex); 
        setDisplayingProducts(displayedProducts);
        setToBeLoaded(false);
        console.log(displayedProducts)
        console.log(displayingProducts)
      }, 1000);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (productsList.current) {
        if (
          productsList.current.offsetHeight + productsList.current.scrollTop ===
          productsList.current.scrollHeight
        ) {
          console.log("you reached to the end of the list");
          count++;
          console.log(displayingProducts);
          displayingProducts.length === productsData.current.length
            ? setToBeLoaded(false)
            : setToBeLoaded(true);
          handleDisplayingProducts();
        }
      }
    };

    if (productsList.current) {
      productsList.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (productsList.current) {
        productsList.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-scroll px-6 pb-4 fixed top-96"
      ref={productsList}
    >
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
          <ProductItem key={`p${product.id}`} product={product} />
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
        displayingProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}

      {toBeLoaded ? (
        <div className="w-full flex justify-center items-center">
          <div className="custom-loader"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
