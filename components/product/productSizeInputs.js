import { useState } from "react";


export default function ProductSizeInputs() {
    let sizesArr = ["sm", "md", "lg", "xl", "2xl"];
    const [isChecked, setIsChecked] = useState({ isChecked: false, value: "" });
    const handleCheckboxChange = (event) => {
        setIsChecked({ isChecked: event.target.checked, value: event.target.value });
    };

    return (

        <div className="flex flex-col items-start justify-start mt-6">
            <span className="mb-4">Sizes</span>
            <div className=" w-full flex items-center justify-between space-x-10 h-8  p-5">
                {sizesArr.map((size, index) => (
                    <div className="relative w-1/5" key={index}>
                        <div className="peer">
                            <input
                                className={`appearance-none w-10 aspect-square absolute top-0 shadow-sm rounded-md border-2 border-main bg-none checked:bg-main checked:text-white z-10`}
                                type="checkbox"
                                value={`option${index}`}
                                onChange={handleCheckboxChange}
                                checked={
                                    isChecked.value === `option${index}` ? isChecked.isChecked : ""
                                }
                            />
                        </div>
                        <label className="absolute left-2  top-2 font-semibold peer-has-[:checked]:text-white">
                            {size}
                        </label>
                    </div>
                ))}
            </div>
        </div>

    )
}