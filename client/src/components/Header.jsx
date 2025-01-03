import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import {auth,googleProvider} from '../config/firebase'
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
function Header({ OpenSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = async() => {
    try {
      await signOut(auth)
      navigate('/')
    }catch(error){
        console.log(error)
    }
  };

  return (
    <header className="header">
      {/* Sidebar Icon */}
      <div className="menu-icon">
        <BsJustify className="icon cursor-pointer text-2xl" onClick={OpenSidebar} />
      </div>

      {/* Search Section */}
      <div className="header-left">
        <BsSearch className="icon cursor-pointer text-xl" />
      </div>

      {/* Right Section with Icons */}
      <div className="header-right flex items-center gap-4 relative">
        <BsFillBellFill
          className="icon cursor-pointer text-xl"
          onClick={() => console.log("Notifications clicked")}
        />
        <BsFillEnvelopeFill
          className="icon cursor-pointer text-xl"
          onClick={() => console.log("Messages clicked")}
        />
        
        {/* Profile Dropdown */}
        <div className="relative">
          <BsPersonCircle
            className="icon cursor-pointer text-2xl"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 border rounded shadow-lg z-50">
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => console.log("Navigating to Profile")}
              >
                Profile
              </button>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
