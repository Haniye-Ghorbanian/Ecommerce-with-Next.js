import { appActions } from "../../store";
import { useDispatch } from "react-redux";

export default function FilterOption(props) {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    if (e.target.checked) {
      dispatch(appActions.applyFilter(e.target.id));
    } else {
      dispatch(appActions.removeFilter(e.target.id));
    }
  };

  return (
    <div className="">
      
        <input
          type="checkbox"
          className="hidden peer"
          id={props.category}
          onChange={handleFilter}
        />
      
      <label
        htmlFor={props.category}
        className="flex items-center justify-center h-9 w-44 px-4 py-3 bg-white border border-solid border-gray-200 text-center mr-3 rounded-md cursor-pointer transition-colors duration-200 peer-checked:bg-main peer-checked:text-white"
      >
        {props.category}
      </label>
    </div>
  );
}
