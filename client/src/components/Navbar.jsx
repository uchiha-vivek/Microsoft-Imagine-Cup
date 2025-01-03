 
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-black font-bold text-2xl">
                <h1 className="text-3xl font-extrabold" >MeniMed</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="#"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300"
                >
                 Explore More !
                </Link>
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300"
                >
                  Login
                </Link>
                {/* Add other links similarly */}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
                <svg
                  className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Explore More
            </Link>
            <Link
              to="#"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/authenticate"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              LOGIN
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
