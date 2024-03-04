import { appActions } from "@/store";
import { get } from "http";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ProductItem(props) {
  const { title, image, category, price, id } = props.product;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const response = await fetch(
  //       `https://fakestoreapi.com/products/${id}`
  //     );
  //     const data = await response.json();
  //     dispatch(appActions.setSingleProduct(data));
  //     console.log(data);
  //   };

  //   getProduct();
  // }, [dispatch]);

  return (
    <Link href={`./Home/${id}`}>
      <div className="w-full flex items-center justify-start border border-solid border-gray-200 h-40 rounded-md p-2">
        <img
          className=" w-2/5 aspect-square object-contain p-5"
          src={image}
        ></img>

        <div className="h-full flex flex-col items-start justify-between py-1 px-5">
          <h1 className="font-bold text-md overflow-x-scroll mb-2">{title}</h1>
          <p className="text-sm font-light">{category}</p>
          <span className="text-md font-bold">{`$${price}`}</span>
        </div>
      </div>
    </Link>
  );
}
