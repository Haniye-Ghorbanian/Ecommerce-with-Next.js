// "use client";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// export default function singleProductPage() {
//     const singleProduct = useSelector(state => state.singleProduct)
//     const {title, image, price} = singleProduct;
//   let sizesArr = ["sm", "md", "lg", "xl", "2xl"];
//   const [isChecked, setIsChecked] = useState({ isChecked: false, value: "" });

//   const handleCheckboxChange = (event) => {
//     setIsChecked({ isChecked: event.target.checked, value: event.target.value });
//   };
//   return (
//     <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-between space-y-3 p-8">
//       <img className="w-full h-1/2 object-cover mb-3" />
//       <div className="w-full h-2/6">
//         <span className="text-md text-gray-400 font-light">category</span>
//         <div className="w-full flex items-center justify-between mt-3 mb-12">
//           <h1 className="font-bold text-3xl">{title}</h1>
//           <span className="font-medium text-2xl">{`$${price}`}</span>
//         </div>

//         <div className="flex flex-col items-start justify-start mt-6">
//           <span className="mb-4">Sizes</span>
//           <div className=" w-full flex items-center justify-between space-x-10 h-8  p-5">
//             {sizesArr.map((size, index) => (
//               <div className="relative w-1/5" key={index}>
//                 <div className="peer">
//                   <input
//                     className={`appearance-none w-10 aspect-square absolute top-0 shadow-sm rounded-md border-2 border-main bg-none checked:bg-main checked:text-white z-10`}
//                     type="checkbox"
//                     value={`option${index}`}
//                     onChange={handleCheckboxChange}
//                     checked={
//                       isChecked.value === `option${index}` ? isChecked.isChecked : ""
//                     }
//                   />
//                 </div>
//                 <label className="absolute left-2  top-2 font-semibold peer-has-[:checked]:text-white">
//                   {size}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-1/6 flex flex-row-reverse items-center justify-between px-1">
//         <button className=" w-3/5 h-2/5 bg-main text-white font-extrabold text-md flex items-center justify-center rounded-md px-8 ">Add to Cart</button>

//         <button className="">
//           <svg
//             class="w-6 h-6 text-gray-800 dark:text-white"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="m17 21-5-4-5 4V3.9c0-.2 0-.5.2-.6l.6-.3h8.4c.2 0 .4 0 .6.3l.2.6V21Z"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }
