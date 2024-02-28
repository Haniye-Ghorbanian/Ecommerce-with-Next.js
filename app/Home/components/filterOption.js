import { appActions } from "@/app/store";
import { useDispatch } from "react-redux";

export default function FilterOption(props) {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    console.log("Filtered category:", e.target.id, e.target.checked);
    switch (e.target.checked) {
      case true:
        dispatch(appActions.filter(e.target.id));

      case false:
        dispatch(appActions.removeFilter(e.target.id));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        className="hidden"
        id={props.category}
        onChange={handleFilter}
      />
      <label
        htmlFor={props.category}
        className="flex items-center justify-center h-9 w-44 px-4 py-3 bg-white border border-solid border-gray-200 text-center mr-3 rounded-md cursor-pointer transition-colors duration-200 group"
      >
        {props.category}
      </label>
    </div>
  );
}
