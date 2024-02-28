'use client'

export default function FilterOption(props) {
    console.log(props)
    console.log('ke')
  return (
    <div>
      <input type="checkbox" className="hidden" id={props.category} />
      <label
        htmlFor={props.category}
        className="flex items-center justify-center h-9 w-44 px-4 py-3 bg-white border border-solid border-gray-200 text-center mr-3 rounded-md cursor-pointer transition-colors duration-200 group"
      >{props.category}</label>
    </div>
  );
}
