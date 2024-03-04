import Link from "next/link";


export default function ProductItem(props) {
  const { title, image, category, price, id } = props.product;


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
