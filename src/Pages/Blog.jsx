import React from "react";
import banner from '../assets/images/banner1.webp';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.webp'
import img7 from '../assets/images/img7.webp'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

function Blog() {
  return (
    <>
      <div>
        {/* breadcrum menu */}
       <div
         className="flex items-center gap-2 text-gray-600 text-sm w-full h-96 bg-cover bg-center"
         style={{ backgroundImage: `url(${banner})` }}>
          <div className="ml-56 ">
            <h1 className="text-[48px] text-white font-serif">Blog</h1>
            <br />
            <span className=" text-gray-400 font-serif">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-600 font-medium"> Blog</span>
          </div>
        </div>

        {/* Heading Section */}
        <div className="p-7 flex items-center flex-col justify-center ">
          <div className="w-12 h-1 bg-orange-600"></div>
          <div className="text-lg font-semibold text-gray-800">OUR BLOG AND NEWS</div>

          <div className="font-bold p-4 font-serif text-black text-[40px] text-center leading-snug">
            <h1>
              Discover The Latest <span className="text-orange-600">Stories, Recipes</span> and <br />
              <span className="text-orange-600">Culinary Adventures</span>
            </h1>
          </div>
        </div>

        {/* BLOG CARDS  */}
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD TEMPLATE (duplicate 12 times) */}

          {/* CARD 1 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img1} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 1</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img6} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 2</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt  className="text-orange-500"/> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img3} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 3</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt className="text-orange-500" /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img1} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 4</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt className="text-orange-500" /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img4} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 5</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt className="text-orange-500" /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img6} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 6</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt className="text-orange-500" /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 7 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img4} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 7</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt  className="text-orange-500"/> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 8 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img5} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 8</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt className="text-orange-500" /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots  className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 9 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img2} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 9</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt className="text-orange-500" /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots className="text-orange-500" /> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 10 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img4} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 10</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt  className="text-orange-500"/> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 11 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img7} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 11</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt className="text-orange-500" /> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots className="text-orange-500"/> 12 Comments
              </div>
            </div>
          </div>

          {/* CARD 12 */}
          <div className="border shadow-md p-4 rounded-md">
            <div className="h-48 bg-blue-100 flex justify-center items-center"><img src={img2} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" alt="images"/></div>
            <h2 className="text-orange-600 font-semibold mt-3">Blog Title 12</h2>
            <p className="text-gray-600 text-sm mt-1">Short description text goes here...</p>

            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCalendarAlt  className="text-orange-500"/> Jan 12, 2025
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaRegCommentDots className="text-orange-500" /> 12 Comments
              </div>
            </div>
          </div>

        </div> 

      </div>
      <div className="flex justify-center gap-5 mb-5">
        <button className="bg-orange-500 text-white border rounded border-while w-8 h-7 font-semibold">1</button>
        <button className="bg-white text-orange-600 border rounded border-orange-600 w-8 h-7 font-semibold">2</button>
        <button className="bg-white text-orange-600 border rounded border-orange-600 w-8 h-7 font-semibold">3</button>
        <button className="bg-white text-orange-600 border rounded border-orange-600 w-12 h-7 font-semibold">Next</button>
    </div> 
    </>
  );
}

export default Blog;
