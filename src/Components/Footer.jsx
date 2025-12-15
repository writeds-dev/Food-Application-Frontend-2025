import React from "react";
import { Link } from "react-router-dom";
function Footer()
{
        return(
            <>
            {/* subscriber */}
<div className="w-full bg-white pt-20">
  
  {/* SUBSCRIBE CARD */}
  <div className="w-full flex justify-center -mb-24 z-50 relative">
    <div className="bg-[#F7C9B5] w-90  rounded-3xl p-10 shadow-lg text-center">
      
      <h1 className="text-3xl font-bold text-gray-800">
        Subscribe For Our <span className="text-orange-600">Exclusive</span> Information
      </h1>

      <div className="flex justify-center mt-6">
        <div className="flex bg-white p-2 rounded-lg shadow-md w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border bg-gray-200 border-gray-300 rounded-tl rounded-bl focus:outline-none focus:ring focus:ring-orange-400 "
          />
          <button className="bg-orange-500 text-white px-6  rounded-tr rounded-br   hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>
      </div>

    </div>
  </div>

 
</div>
             {/* FOOTER */}
  <div className="bg-orange-600 pt-32 pb-16 px-16 text-white">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* BRAND */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Sofood</h2>
        <p className="text-sm leading-6">
          We proudly present authentic dishes from various regions of the 
          archipelago, bringing authentic flavors and Indonesian traditions 
          to every dish we serve.
        </p>

   <div className="flex gap-3 mt-5">
  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ">
   <Link to="https://www.youtube.com/"> <i className="fa-brands fa-youtube text-orange-600 text-xl "></i></Link>
  </div>

  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ">
    <Link to="https://www.facebook.com/"><i className="fa-brands fa-facebook text-orange-600 text-xl"></i></Link>
  </div>

  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ">
   <Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram text-orange-600 text-xl"></i></Link>
  </div>

  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ">
   <Link to="https://in.linkedin.com/"> <i className="fa-brands fa-linkedin text-orange-600 text-xl"></i></Link>
  </div>
</div>

      </div>

      {/* HELP CENTER */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Help Center</h3>
         <hr className="border-white w-40 mb-4" />
        <ul className="space-y-3">
          <li> Customer Support</li>
          <li> Terms & Conditions</li>
          <li> Privacy Policy</li>
        </ul>
      </div>

      {/* CONTACT INFO */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
         <hr className="border-white w-40 mb-4" />
        <ul className="space-y-3 text-sm">
          <li>Emerald Street, South Tangerang, Indonesia</li>
          <li>+26 123456789</li>
          <li>+26 123456789</li>
          <li>info@yoursite.com</li>
        </ul>
      </div>

      {/* OPENING HOURS */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Opening Hours</h3>
         <hr className="border-white w-40 mb-4" />
        <ul className="space-y-3 text-sm">
          <li>Mon  Tue : 08.00 AM  09.00 PM</li>
          <li>Wed  Thu : 09.00 AM  10.00 PM</li>
          <li>Fri  Sat : 08.00 AM  12.00 PM</li>
          <li>Sunday : CLOSED</li>
        </ul>
      </div>
 
    </div>
<hr className="border-t border-white w-full mt-10 mb-4" />

  {/* copyright */}
  <p className="text-center text-white text-sm">
    2025 Sofood. All Rights Reserved.
  </p>
  </div>
            </>
        )
}
export default Footer;