import React from "react";
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.webp'
import img7 from '../assets/images/img7.webp'
import Mbanner from '../assets/images/menubanner.jpg';
function Menu()
{
return(
    <>
        <div>
            
            {/* breadcrum menu */}

         <div
           className="flex items-center gap-2 text-gray-600 text-sm w-full h-96 bg-cover bg-center"
           style={{ backgroundImage: `url(${Mbanner})` }}>
                <div className="ml-56 ">
                <h1 className="text-[48px] text-white font-serif">Menu</h1>
                <br />
                <span className=" text-gray-400 font-serif">Home</span>
                <span className="text-gray-400">/</span>
                <span className="text-orange-600 font-medium">Menu</span>
                </div>
           </div>
            {/* buttons */}
            <div className="flex justify-center gap-3 p-20">
            <button className="w-28 bg-orange-600 border-0 p-2 rounded text-white">View All</button>
            <button className="w-28 border-orange-600 border-2 p-2 rounded text-orange-600">Snacks</button>
            <button className="w-28 border-orange-600 border-2 p-2 rounded text-orange-600">Meal</button>
            <button className="w-28 border-orange-600 border-2 p-2 rounded text-orange-600">Beverages</button>
            </div>

{/* cards */}
            <div className="grid grid-cols-4 gap-8 px-14 ">

            {/* Card 1 */}
            <div className=" p-4  shadow-lg">
                <div className="w-full h-40 bg-blue-100">
                <img src={img1} className="w-full h-full object-cover hover:scale-105 rounded-md ease-in duration-100" />
              </div>
                <h3 className="text-orange-600 font-bold mt-3">Pancakes</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            {/* Card 2 */}
            <div className=" p-7  shadow-lg bg-blue-100 rounded">
               <div className="w-full h-40  "></div>
                <h3 className="text-orange-600 font-bold mt-3">Lorem ipsum dolor sit.</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            {/* Card 3 */}
            <div className=" p-4  shadow-lg">
                <div className="w-full h-40 bg-blue-100 ">
                   <img src={img2} className="w-full h-full object-cover rounded-md hover:scale-105 ease-in duration-100"></img>
                </div>
                <h3 className="text-orange-600 font-bold mt-3">Soups</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            {/* Card 4 */}
            <div className=" p-4  shadow-lg">
                <div className="w-full h-40 bg-blue-100 ">
                   <img src={img3} className="w-full h-full object-cover rounded-md hover:scale-105 ease-in duration-100"></img>
                </div>
                <h3 className="text-orange-600 font-bold mt-3">Vege's</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            {/* Card 5 */}
            <div className=" p-4  shadow-lg">
                <div className="w-full h-40 bg-blue-100 ">
                   <img src={img4} className="w-full h-full object-cover rounded-md hover:scale-105 ease-in duration-100"></img>
                </div>
                <h3 className="text-orange-600 font-bold mt-3">Coffe Crisonts's</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            {/* Card 6 */}
            <div className=" p-4  shadow-lg">
                <div className="w-full h-40 bg-blue-100 ">
                   <img src={img5} className="w-full h-full object-cover rounded-md hover:scale-105 ease-in duration-100"></img>
                </div>
                <h3 className="text-orange-600 font-bold mt-3">Chicken</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            {/* Card 7 */}
            <div className=" p-4  shadow-lg">
                <div className="w-full h-40 bg-blue-100 ">
                   <img src={img6} className="w-full h-full object-cover rounded-md hover:scale-105 ease-in duration-100"></img>
                </div>
                <h3 className="text-orange-600 font-bold mt-3">Desert's</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            {/* Card 8 */}
            <div className=" p-4    shadow-lg">
                <div className="w-full h-40 bg-blue-100 ">
                  <img src={img7} className="w-full h-full object-cover rounded-md hover:scale-105 ease-in duration-100"></img>
                </div>
                <h3 className="text-orange-600 font-bold mt-3">Veg-Platter's</h3>
                <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.
                </p>
            </div>

            </div>




        </div>
    </>
)

}
export default Menu;