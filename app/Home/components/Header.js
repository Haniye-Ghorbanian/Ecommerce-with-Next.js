

export default function Header() {
    return (
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="rounded-full bg-gray-200 w-10 h-10 overflow-hidden">
          
        </div>
        <button className="focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM4 12v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4zM14 8v4m0 0v4m0 0v4"
            />
          </svg>
        </button>
      </div>
    );
  };
  