import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
            <img src="/logo.png" alt="LOGO" className="w-28" />
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-10 text-[17px] text-black">

            <Link to="/" className="hover:text-orange-600">Home</Link>
            <Link to="/menu" className="hover:text-orange-600">Menu</Link>

            {/* SIMPLE DROPDOWN */}
            <select className="bg-white border rounded px-2 py-1 text-[15px] hover:cursor-pointer">
              <option>Information</option>
              <option value="/menu">Menu</option>
              <option value="/about">About</option>
            </select>

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
