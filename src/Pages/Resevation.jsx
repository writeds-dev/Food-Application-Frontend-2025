import React from "react";
import img1 from '../assets/images/img1.jpg'
function Resevation()
{
    return(
        <>
        <div>
        {/* breadcrum menu */}
            <div className="flex items-center gap-2 text-gray-600 text-sm w-full h-64 bg-gray-700">
                <div className="ml-56 ">
                <h1 className="text-[48px] text-white font-serif">Reservation</h1>
                <br />
                <span className=" text-gray-400 font-serif">Home</span>
                <span className="text-gray-400">/</span>
                  <span className="text-orange-600 font-medium">Information</span>
                  <span className="text-gray-400">/</span>
                <span className="text-orange-600 font-medium">  Resevation</span>
                </div>
           </div>
        <div>
            
           <div className="p-7 flex items-center flex-col justify-center ">
            <div className="w-12 h-1 bg-orange-600"></div>
            <div className="text-lg font-semibold text-gray-800">Online Reserve</div>
            <div className="font-bold p-4 font-serif text-black text-[40px]">
                <h1>Easy <span className="text-orange-600">Steps</span> to <span className="text-orange-600">Enjoyment</span></h1>
            </div>
        </div>
        <div className="px-32">
            <div className="bg-pink-200 rounded p-20">
                <div className="flex justify-around gap-6 ">
                    <input type="text" placeholder="Name" className="w-96 border-2 border-orange-400 rounded p-2" />
                    <input type="text" placeholder="Phone" className="w-96 border-2 border-orange-400 rounded p-2"  />
                </div>
                
                <div className="flex justify-around mt-8 gap-6">
                 <input type="text" placeholder="people"  className="w-96 border-2 border-orange-400 rounded p-2" />
                  <input type="date" placeholder="mm/dd/yyyy" className="w-96 border-2 border-orange-400 rounded p-2 text-gray-400" />
                </div>
                 <div className="flex justify-around mt-8 gap-6">
                 <input type="text" placeholder="00:00 am"  className="w-96 border-2 border-orange-400 rounded p-2 " />
                  <input type="date" placeholder="Email" className="w-96 border-2 border-orange-400 rounded p-2 text-gray-400" />
                </div>
                <div className="mt-5 flex items-center justify-center" >
                    <button className="bg-orange-500 text-white w-80 rounded p-2">Reserve Now</button>
                </div>
            </div>
         </div>
         <div className="flex items-center gap-2 mt-5  text-gray-600 justify-center w-full  bg-gray-700">
                <div className="mt-20">
                <h1 className="text-[48px] text-white font-serif">Tuesday special <span className="text-orange-600">15% Off</span> For The Best <br /> 
                <span className="ml-48">Flavour Adventure!</span></h1>
                 <div className="">
                    <div className="align-middle text-white ml-44">
                        get 15% of  on Tuesday .Don't miss this ooportuninty to enjoy authentic <br />
                        <pre className="ml-20">Indonesian dishes at the best prices.</pre></div>
                    </div>
                  <div className="mt-5 mb-7 flex items-center justify-center" >
                    <button className="bg-orange-500 text-white w-80 rounded p-3">Reserve a Table Now!</button>
                </div>
                </div>
           </div>   
        <div className="p-5 flex items-center flex-col justify-center ">
            <div className="w-12 h-1 bg-orange-600"></div>
            <div className="text-lg font-semibold text-gray-800">Special Package Offers</div>
            <div className="font-bold p-4 font-serif text-black text-[40px]">
                <h1>Explore More <span className="text-orange-600">Delights</span> With <br /> <span className="text-orange-600 ml-12">Exclusive Meal</span> Packages  </h1>
            </div>
        </div>
        <div className="flex flex-row p-12 ml-20 mr-20 gap-3">
            <div className="border-2 border-dashed border-orange-600 flex flex-row">
                 <div className=" w-[50%] p-3"> 
                   <h1 className="text-orange-600 text-[20px]">Taste of Archipeleago</h1>
                    <h1 className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt totam deserunt, .</h1>
                    <ul className="list-disc ml-5 text-gray-700">
                    <li>Traditional </li>
                    <li>Beverages </li>
                    <li>Desert's </li>
                    </ul>
                    <span className="ml-3 text-[20px] text-orange-600 font-bold">$ 12</span>
                </div>
                <div className="p-3 w-[50%]">
                    <img src={img1} className="w-full h-full" alt="img1" />
                </div>
            </div>
             <div className="border-2 border-dashed border-orange-600 flex flex-row">
                <div className=" w-[50%] p-3"> 
                   <h1 className="text-orange-600 text-[20px]">Taste of Archipeleago</h1>
                    <h1 className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt totam deserunt, .</h1>
                    <ul className="list-disc ml-5 text-gray-700">
                    <li>Traditional </li>
                    <li>Beverages </li>
                    <li>Desert's </li>
                    </ul>
                    <span className="ml-3 text-[20px] text-orange-600 font-bold">$ 12</span>
                </div>
                <div className="p-3 w-[50%]">
                    <img src={img1} className="w-full h-full" alt="img1" />
                </div>
            </div>
        </div>   
        </div>
        
        </div>
        </>
    )
}
export default Resevation;
