import { useState } from "react";


export default function ProductSizeInputs() {
    let sizesArr = ["sm", "md", "lg", "xl", "2xl"];
    const [isChecked, setIsChecked] = useState({ isChecked: false, value: "" });
    const handleCheckboxChange = (event) => {
        setIsChecked({ isChecked: event.target.checked, value: event.target.value });
    };

    return (

        <div className="w-full h-1/6 flex flex-col items-start justify-start mb-5">
            <span className="mb-4">Sizes</span>
            <div className=" w-full flex items-center justify-between space-x-10 h-8">
                {sizesArr.map((size, index) => (
                    <div className="relative group w-1/5" key={index}>
                        <div className="">
                            <input
                                className={`appearance-none w-10 aspect-square absolute top-0 shadow-sm rounded-md p-3 border-2 border-main bg-none checked:bg-main checked:text-white z-10`}
                                type="checkbox"
                                value={`option${index}`}
                                onChange={handleCheckboxChange}
                                checked={
                                    isChecked.value === `option${index}` ? isChecked.isChecked : ""
                                }
                                id={size}
                            />
                        </div>
                        <label className={`absolute left-2 top-2 font-semibold group-has-[:checked]:text-white ${isChecked ? "z-10" : ""}`} onClick={handleCheckboxChange} htmlFor={size}>
                            {size}
                        </label>
                    </div>
                ))}
            </div>
        </div>

    )
}