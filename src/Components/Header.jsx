import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
          <a href="">Home</a>
          <a href="">Menu</a>

          <select name="Information" className="bg-white mb-3">
            <option value="">Information</option>
            <option value="">Menu</option>
            <option value="">About</option>
          </select>

          <a href="" className="ml-8">Blog</a>
          <a href="" className="mb-3">Contact</a>

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
