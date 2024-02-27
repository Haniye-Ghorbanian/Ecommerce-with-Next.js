export default function FooterMenu() {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-4 px-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  };