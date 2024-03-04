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
  const { image, category, title, price } = product;



  return (
    <>
      {!isLoading && (
        <>
          <div className="flex items-center justify-center w-full h-1/3"><img src={image} className="w-4/5 object-contain aspect-square" /></div>


          <span className="w-full flex items-center justify-start text-md text-gray-400 font-light">{category}</span>
          <div className="w-full flex items-center justify-between mt-3 mb-12">
            <h1 className="font-extrabold text-lg">{title}</h1>
            <span className=" text-lg">{`$${price}`}</span>
          </div>
        </>
      )}
      {
        isLoading && (<ProductSkeleton />)
      }
    </>
  );
}
