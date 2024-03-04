"use client";
import { useEffect, useState } from "react";
import { appActions } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import ProductSkeleton from "../skeleton/singleProductSkeleton";

export default function ProductDataContainer({ path }) {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${path}`
      );
      const data = await response.json();
      dispatch(appActions.setSingleProduct({ ...data }));
      setIsLoading(false)
    };

    getProduct();
  }, [dispatch]);



  const product = useSelector(state => state.singleProduct);
  const {image, category, title, price} = product;



  return (
    <>
      {!isLoading && (
        <>
          <img src={image} className="w-full h-1/2 object-cover mb-3" />

          <span className="text-md text-gray-400 font-light">{category}</span>
          <div className="w-full flex items-center justify-between mt-3 mb-12">
            <h1 className="font-bold text-3xl">{title}</h1>
            <span className="font-medium text-2xl">{`$${price}`}</span>
          </div>
        </>
      )}
      {
        isLoading && (<ProductSkeleton />)
      }
    </>
  );
}
