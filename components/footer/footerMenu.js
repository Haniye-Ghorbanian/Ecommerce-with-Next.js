export default function FooterMenu() {
    return (
      <div className="fixed bottom-0 left-0 w-full h-20 bg-white  py-4 px-4 flex justify-between items-center">
        <ul className="flex items-center justify-between space-x-4 w-full h-full px-6">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <div className="h-6 w-6"><img src="home.png"></img></div>
              
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <div className="h-6 w-6"><img src="shopping-cart.png"></img></div>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <div className="h-6 w-6"><img src="wishlist.png"></img></div>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <div className="h-6 w-6"><img src="favourite.png"></img></div>
            </a>
          </li>
        </ul>
      </div>
    );
  };