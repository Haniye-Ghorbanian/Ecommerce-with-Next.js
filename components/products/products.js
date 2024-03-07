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
  console.log(searchedProducts);
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

  function handleDisplayingProducts() {
    const startIndex = 0;
    const endIndex = displayingLimit * count;
    // debugger;
    const displayedProducts = productsData.current.slice(startIndex, endIndex);
    // console.log(displayedProducts.length, productsData.current.length);

    setTimeout(() => {
      setDisplayingProducts(displayedProducts);
      setToBeLoaded(false);
    }, 1000);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (productsList.current) {
        if (
          productsList.current.offsetHeight + productsList.current.scrollTop ===
          productsList.current.scrollHeight
        ) {
          // console.log("you reached to the end of the list");
          count++;

          setToBeLoaded(true);
          handleDisplayingProducts();
        }
      }
    };

    productsList.current
      ? productsList.current.addEventListener("scroll", handleScroll)
      : "";

    return () => {
      if (productsList.current) {
        productsList.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const displayData = () => {
    if (!isLoading) {
      if (
        filteredProducts.length === 0 &&
        searchedProducts.length === 0 &&
        !searchedWarning
      ) {
        return displayingProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ));
      }

      if (filteredProducts.length > 0) {
        if (searchedProducts.length === 0) {
          if (!searchedWarning) {
            return filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ));
          }

          if (searchedWarning) {
            return (
              <div className="w-full h-full flex items-center justify-center font-bold text-2xl text-main">
                <p>No products found!</p>
              </div>
            );
          }
        } else if (searchedProducts.length > 0) {
          return searchedProducts.map((product) => (
            <ProductItem key={`p${product.id}`} product={product} />
          ));
        }
      }

      if (searchedProducts.length > 0) {
        if (filteredProducts.length === 0) {
          return searchedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ));
        } else if (filteredProducts.length > 0) {
          return filteredProducts.map((product) => (
            <ProductItem key={`p${product.id}`} product={product} />
          ));
        }
      }
    }
  };

  return (
    <div
      className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-scroll px-6 pb-4 fixed top-96"
      ref={productsList}
    >
      {isLoading &&
        [...Array(8)].map((item, index) => <ProductsSkeleton key={index} />)}

      {displayData()}

      {toBeLoaded && displayingProducts.length !== products.length ? (
        <div className="w-full flex justify-center items-center">
          <div className="custom-loader"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
