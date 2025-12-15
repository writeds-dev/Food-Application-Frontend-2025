import { Link } from "react-router-dom";
import bookingBanner from "../assets/images/booking_banner.jpg";
import discountBanner from "../assets/images/discounbt.png";
import packageImg from "../assets/images/ic01.webp";
export default function Reservations(){
    return(
        <>
{/* about section header wala page */}
        <section>
            <div
              className="bg-cover opacity-90 h-[520px]"
              style={{ backgroundImage: `url(${bookingBanner})` }}
            >
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">
                  Reservation
                </div>

               <div className="flex items-center gap-2 text-white text-sm mt-5">
                 <span className="cursor-pointer hover:underline">Home</span>
                <span>{">"}</span>
                <span className="cursor-pointer hover:underline">Information</span>
                <span>{">"}</span>
                 <span className="text-orange-500 font-semibold">Reservation</span>
                </div> 
                </div>
            </div>
        </section>  

{/* input form */}
        <section>
            <div>
                <div className="flex items-center justify-center mt-10">
                    <p className="bg-orange-500 h-[3px] w-[50px]"></p>
                </div>

                <div>
                    <p className="text-center mt-5 tracking-widest">
                      ONLINE RESERVE
                    </p>
                </div>

                <div className="text-5xl font-bold">
                    <p className="text-center mt-5 tracking-widest">
                      Easy <span className="text-orange-500">Steps</span> to{" "}
                      <span className="text-orange-500">Enjoyment</span>
                    </p>
                </div>
            </div>
        </section>

{/* form */}
        <section>
            <div className="bg-orange-50 h-[500px] mt-20 mx-20 " id="reserve">
                <div>
                    <form className="grid grid-cols-2 gap-10 pt-28 p-20 ">
                        <input type="text" className="border-orange-700 border-[2px] h-12 rounded-md text-gray-600 px-5" placeholder="Name" />
                        <input type="text" className="border-orange-700 border-[2px] rounded-md text-gray-600 px-5" placeholder="Phone" />
                        <input type="text" className="border-orange-700 border-[2px] h-12 rounded-md text-gray-600 px-5" placeholder="People"/>
                        <input type="date" className="border-orange-700 border-[2px] rounded-md text-gray-600 px-5" />
                        <input type="text" className="border-orange-700 border-[2px] h-12 rounded-md text-gray-600 px-5 " placeholder="00:00 am"/>
                        <input type="text" className="border-orange-700 border-[2px] rounded-md text-gray-600 px-5" placeholder="Email" />
                    </form>
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-orange-500 h-10 w-96 rounded-md text-white text-md">
                      Reserve Now
                    </button>
                </div>     
            </div>
        </section>

{/* heading */}
        <section>
            <div className="h-[600px] mt-20">
                <div
                  className="h-[500px] bg-cover"
                  style={{ backgroundImage: `url(${discountBanner})` }}
                >
                <div className="text-5xl text-white text-center font-bold pt-20">
                    <p>
                      Thrusday Special{" "}
                      <span className="text-orange-600">15% Off</span> for the Best
                      <br />Flavored Adventures!
                    </p>
                </div>

                <div className="text-white mt-5">
                     <p className="text-center">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       <br />Lorem ipsum dolor sit amet.
                     </p>
                </div>

                <div className="text-white flex justify-center mt-20">
                    <button className="bg-orange-600 h-10 w-96">
                    <a href="#reserve">  Reserve a Table Now!</a>
                    </button>
                </div>
                </div>
            </div>
        </section>

{/* pictures section */}
        <section> 
            <div className="h-screen"> 
                <div className="flex justify-center">
                     <p className="bg-orange-600 h-[3px] w-[40px]"></p>
                </div>

                <div className="text-center mt-5 tracking-widest font-semibold">
                    <p>SPECIAL PACKAGE OFFERS</p>
                </div>

                <div className="text-5xl text-center mt-5 font-bold">
                    <p>
                      Explore More <span className="text-orange-600">Delights</span>
                      <br />
                      <span className="text-orange-600">Exclusive Meal</span> Packages
                    </p>
                </div>

{/* another part */}
<div className="grid grid-cols-2 gap-5 px-20 mt-10">

  {/* CARD 1 */}
  <div className="col-span-1">
    <div className="border-[1px] border-dashed border-orange-600">
      <div className="flex gap-10">
        <div className="pl-10 pt-6">
          <p className="text-orange-600 text-xl font-semibold">
            Taste Of The Archipelago
          </p>
          <p className="mt-2">
            Taste the culinary richness of the archipelago.
          </p>

          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li>Main Course</li>
            <li>Traditional Beverage</li>
            <li>Signature Dessert</li>
          </ul>
        </div>

        <div>
          <div
            className="bg-cover h-[250px] w-[200px] mx-5 "
            style={{ backgroundImage: `url(${packageImg})` }}
          ></div>
        </div>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="col-span-1">
    <div className="border-[1px] border-dashed border-orange-600">
      <div className="flex gap-10">
        <div className="pl-10 pt-6">
          <p className="text-orange-600 text-xl font-semibold">
            Rendering Exploration
          </p>
          <p className="mt-2">
            Choose this package and enjoy rendang styles.
          </p>

          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li>Main Course</li>
            <li>Traditional Beverage</li>
            <li>Signature Dessert</li>
          </ul>
        </div>

        <div>
          <div
            className="bg-cover h-[250px] w-[200px] mx-5 "
            style={{ backgroundImage: `url(${packageImg})` }}
          ></div>
        </div>
      </div>
    </div>
  </div>

</div>

            </div>
        </section>
        </>
    )
}
