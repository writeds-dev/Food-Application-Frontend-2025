import React from "react";
import { FaRegCalendarAlt, FaRegUser, FaRegCommentDots } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import banner from '../assets/images/banner1.webp';
import banner3 from '../assets/images/banner3.jpg';
import banner1 from '../assets/images/banner2.webp';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'

function Blog2() {
  return (
    <>
    
    {/* breadcrum menu */}
       <div
  className="flex items-center gap-2 text-gray-600 text-sm w-full h-96 bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}>
          <div className="ml-56 ">
            <h1 className="text-[48px] text-white font-serif">Exploring the Culinary Treasure of<br /></h1>
            <h1 className="text-[48px] text-white font-serif mt-14"> Bali : A journey Through Flavour's</h1>
            <br />
            <br />
            <span className=" text-gray-400 font-serif text-[20px]">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-600 font-medium text-[20px]"> Blog</span>
          </div>
        </div>
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT SECTION – MAIN BLOG CONTENT */}
      <div className="lg:col-span-2">

        {/* MAIN IMAGE */}
        <div className="w-full h-80 bg-blue-100 flex justify-center items-center rounded">
          <img src={banner3}  className="w-full h-80" alt="" />
        </div>

        {/* META INFO */}
        <div className="flex items-center gap-6 text-sm text-orange-600 mt-4">
          <div className="flex items-center gap-1"><FaRegCalendarAlt /> August 3, 2025</div>
          <div className="flex items-center gap-1"><FaRegUser /> Admin</div>
          <div className="flex items-center gap-1"><FaRegCommentDots /> 29 Comments</div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-orange-600 mt-4">
          Exploring the Culinary Treasures of Bali: A Journey Through Flavors
        </h1>

        {/* DESCRIPTION PARAGRAPHS */}
        <p className="text-gray-700 mt-4 leading-relaxed">
          Bali, the enchanting Indonesian island known for its stunning landscapes,
          vibrant culture, and warm hospitality, is also a haven for food enthusiasts
          seeking an exquisite culinary experience. Balinese cuisine beautifully blends...
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          From iconic dishes like Nasi Goreng to flavorful Babi Guling, Bali’s signature
          dishes showcase the mastery of spice and tradition. Each bite tells the story
          of rich culinary heritage passed down through generations.
        </p>

        {/* SECOND IMAGE */}
        <div className="w-full h-64 bg-blue-100 flex justify-center items-center mt-6 rounded">
          <img src={banner1} className="w-full h-64" alt="" />
        </div>

        {/* SHARE SECTION */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg">Share :</h2>
          <div className="flex gap-4 text-orange-600 text-xl mt-2">
            <FaRegUser />
            <FaRegCalendarAlt />
            <FaRegCommentDots />
          </div>
        </div>

        {/* RELATED POSTS */}
        <h2 className="text-orange-600 font-bold text-xl mt-10">Related Posts</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-20 h-16 bg-blue-100"><img src={img1} alt="" /></div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">Vibrant Flavor Explorations</h3>
              <p className="text-gray-500 text-xs">August 3, 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-16 bg-blue-100"><img src={img2} alt="" /></div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">Flavor Trails: Inspiring Dishes</h3>
              <p className="text-gray-500 text-xs">August 3, 2025</p>
            </div>
          </div>
        </div>

        {/* COMMENTS SECTION */}
        <h2 className="font-bold text-xl text-orange-600 mt-10">2 Comments</h2>

        <div className="mt-4 border p-4 rounded-md shadow-sm">
          <h4 className="font-semibold text-black">Inside Indonesia</h4>
          <p className="text-gray-600 text-sm mt-1">
            Balinese cuisine is a treat for food lovers with its mix of spices, herbs, and fresh produce...
          </p>
          <p className="text-xs text-gray-500 mt-2">May 10, 2025</p>
        </div>

      </div>

      {/* RIGHT SECTION – SIDEBAR */}
      <div className="space-y-8">

        {/* SEARCH BOX */}
        <div className="border rounded-md shadow p-4">
          <h3 className="font-bold mb-2">Search</h3>
          <div className="flex items-center border rounded p-2">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none flex-grow"
            />
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        {/* RECENT BLOGS */}
        <div className="border rounded-md shadow p-4">
          <h3 className="font-bold mb-3">Recent Blogs</h3>

          <div className="space-y-4">

            <div className="flex gap-3">
              <div className="w-16 h-12 bg-blue-100"><img src={img1} alt="" /></div>
              <div>
                <p className="text-sm font-semibold">Blog Snippet Title</p>
                <span className="text-xs text-gray-500">Aug 3, 2025</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-16 h-12 bg-blue-100"><img src={img2} alt="" /></div>
              <div>
                <p className="text-sm font-semibold">Culinary Discoveries</p>
                <span className="text-xs text-gray-500">Aug 5, 2025</span>
              </div>
            </div>

          </div>
        </div>

        {/* CATEGORIES */}
        <div className="border rounded-md shadow p-4">
          <h3 className="font-bold mb-3">Categories</h3>
          <div className="space-y-2 text-sm">
            <div className="bg-orange-500 text-white p-1 px-2 rounded">Culinary Journey</div>
            <div className="bg-gray-100 p-1 px-2 rounded">Chef's Corner</div>
            <div className="bg-gray-100 p-1 px-2 rounded">Healthy Recipes</div>
            <div className="bg-gray-100 p-1 px-2 rounded">Travel Food</div>
          </div>
        </div>

        {/* TAGS */}
        <div className="border rounded-md shadow p-4">
          <h3 className="font-bold mb-3">Tags</h3>
          <div className="flex gap-2 flex-wrap text-xs">
            <span className="px-2 py-1 bg-gray-100 rounded">Spices</span>
            <span className="px-2 py-1 bg-gray-100 rounded">Traditional</span>
            <span className="px-2 py-1 bg-gray-100 rounded">Flavors</span>
            <span className="px-2 py-1 bg-gray-100 rounded">Street Food</span>
            <span className="px-2 py-1 bg-gray-100 rounded">Indonesian Cuisine</span>
          </div>
        </div>

      </div>
    </div>

</>
  );
}

export default Blog2;
