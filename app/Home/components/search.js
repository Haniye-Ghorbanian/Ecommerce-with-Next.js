import { appActions } from "@/app/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Search() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    // debugger
    const enteredInput = e.target.value;
    setInput(enteredInput);
    console.log(e.target.value);
    dispatch(appActions.search(e.target.value));
  };

  return (
    <div className="mb-4 px-6 flex justify-between items-center">
      <input
        type="text"
        value={input}
        onChange={searchHandler}
        placeholder="Search Products"
        className="w-full h-12 rounded-md border border-gray-300 px-4 py-2 mr-2 focus:outline-none"
      />
      <button className="bg-main rounded-md h-12 aspect-square">
        <div className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
      </button>
    </div>
  );
}
