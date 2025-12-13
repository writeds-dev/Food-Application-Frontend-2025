import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import Blog2 from "../Pages/Blog2";

function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div className="flex justify-between bg-orange-600 text-white p-3 px-8 text-sm">
        <div>Welcome To Our Culinary Haven!</div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <MdEmail className="text-lg" />
            info@yoursite.com
          </div>

          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-lg" />
            +91 97876xxxxx
          </div>

          <div className="flex items-center gap-1">
            <FaLocationDot className="text-lg" />
            Mumbai
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-3">

          {/* LOGO */}
          <div>
            <img src={logo} alt="LOGO" className="w-64 " />
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-10 text-[17px] text-black">

            <Link to="/" className="hover:text-orange-600">Home</Link>
            
            <Link to="/menu" className="hover:text-orange-600">Menu</Link>
          
            {/* SIMPLE DROPDOWN */}



          <div className="relative group z-50">
            <div className="cursor-pointer px-3 py-1">Information </div>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md w-44 rounded-md z-50">
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/about">AboutUs</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/reservation">Reservation</Link></li>
               <li className="px-4 py-2 hover:bg-gray-100"><Link to="/chef">Chef</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/gallery">Gallery</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/terms">T&C</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/privacy">Privacy</Link></li>

              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/faq">FAQ</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/details">More..</Link></li>
            </ul>
          </div>


            <Link to="/blog" className="hover:text-orange-600">Blog</Link>
            <Link to="/contact" className="hover:text-orange-600">Contact</Link>

            {/* CALL US BUTTON */}
            <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              <FaPhoneAlt className="text-sm" />
              Call Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
