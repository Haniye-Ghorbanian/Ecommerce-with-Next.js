export default function ProductItem(props) {
  console.log(props)
const {title, image, category, price } = props.product;
  return (
    <div className="w-full flex items-center justify-start border border-solid border-gray-200 h-40 rounded-md p-2">
      <img className=" w-2/5 aspect-square object-contain p-5" src={image}></img>

      <div className="h-full flex flex-col items-start justify-between py-1 px-5 ">
        <h1 className="font-bold text-md overflow-x-scroll">{title}</h1>
        <p className="text-sm font-light">{category}</p>
        <span className="text-md font-bold">{`$${price}`}</span>
      </div>
    </div>
  );
}
