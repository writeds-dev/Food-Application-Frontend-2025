import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* header */}
      <div className="grid grid-cols-2 bg-orange-600 text-white p-3">
        <div>Welcome To Our Culinary Haven!</div>

        <div className="flex gap-16 items-center">
          
          <a href="#" className="flex items-center gap-1">
            <MdEmail className="text-lg" />
            info@yoursite.com
          </a>

          <a href="#" className="flex items-center gap-1">
            <FaPhoneAlt className="text-lg" />
            +91 97876xxxxx
          </a>

          <a href="#" className="flex items-center gap-1">
            <FaLocationDot className="text-lg" />
            Mumbai
          </a>

        </div>
      </div>

      {/* navbar */}
      <div className="grid grid-cols-2 text-[20px]">
        <div>
          <img src="" alt="LOGO  IMAGE" />
        </div>

        <div className="grid grid-cols-6 text-black p-2 text-[16px]">
         <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>

          <select className="bg-white mb-3 w-28 px-2 py-1">
  <option>Information</option>
  <option value="/menu">Menu</option>
  <option value="/about">About</option>
</select>


"hello code"
          <Link to="/blog" className="ml-8">Blog</Link>
          <Link to="/contact" className="mb-3">Contact</Link>

          <button className="flex items-center gap-1 mr-2 h-10 hover:bg-orange-700 bg-orange-600 text-white rounded">
            <FaPhoneAlt className="text-sm ml-6" />
            Call Us
            </button>
        </div>
      </div>
    </>
  );
}

export default Header;
