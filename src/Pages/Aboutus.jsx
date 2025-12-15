import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import istock from '../assets/images/istockphoto-1457979959-612x612.jpg'
import img2 from '../assets/images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp'
import img3 from '../assets/images/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.webp'
import img4 from '../assets/images/1-10-Most-Consumed-Beverages-in-the-World-Source-vinut.com_.vn_.webp'
import img5 from '../assets/images/2aut47ag_north-indian-food_625x300_28_March_25.jpg'
import img6 from '../assets/images/catering-staff-serves-food-buffet-600nw-2630302985.webp'
import img7 from '../assets/images/g.png'
import img8 from '../assets/images/istockphoto-485286424-612x612.jpg'
import img9 from '../assets/images/darker3.png'
import img10 from '../assets/images/darker.png'
import img11 from '../assets/images/Restaurant-Online-Food-Delivery-1.webp'
import img12 from '../assets/images/darker2.png'
import img13 from '../assets/images/images.jpg'
import img14 from '../assets/images/target.png'
import img15 from '../assets/images/Sjk.png'
import img16 from '../assets/images/diamonfd.png'
import img17 from '../assets/images/c.avif'
import img18 from '../assets/images/c2.jpg'
import img19 from '../assets/images/c3.jpg'
import { Link } from "react-router-dom";

 function AboutUs(){
    return(
        <>
        {/* about section header wala page */}
        <section>
            <div className=" bg-cover opacity-90 h-[520px]"style ={{ backgroundImage: `url(${istock})`}}>
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">About Us</div>

               <div className="flex items-center gap-2 text-white text-sm mt-5">
                 <span className="cursor-pointer hover:underline">Home</span>
                <span>{">"}</span>
                <span className="cursor-pointer hover:underline">Information</span>
                <span>{">"}</span>
                 <span className="text-orange-500 font-semibold">About Us</span>
                </div> 
                </div>
            </div>
        </section>



        {/* about us home section */}
        <section>
        <div className="h-screen">
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="relative flex justify-end">
                    <div className="bg-orange-500 w-full h-[400px] mt-32 absolute px-2"></div>
                      <div className="bg-[url(p)] bg-cover w-[520px] h-[600px] absolute mt-10 mx-5" style ={{ backgroundImage: `url(${img2})`}}></div>
                    </div>
                </div>

                <div className="col-span-1 mx-5">
                    <div className="w-[70%] mt-32">
                        {/* abut us text */}
                        <div className=" flex items-center gap-5">
                             <p className="bg-orange-500 h-[2px] w-[35px]"></p>
                            <p className="text-1xl font-semibold">A B O U T U S </p>
                        </div>
                        
                        {/* home text */}
                        <div className="text-4xl font-serif font-semibold mt-8">
                            <p>Experience Our <br /> <span className="text-orange-500">Culinary</span>  Journey</p>
                        </div>

                        {/* home lorem text */}
                        <div className="mt-10 text-sm leading-tight text-justify">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident iste praesentium dignissimos sapiente ex placeat explicabo incidunt, exercitationem ad iure?</p>
                        </div>

                        {/* image section short */}
                        <div className="flex justify-center gap-[90px] mt-10">
                            <div className=" bg-[url()] bg-cover h-[105px] w-32 rounded-full" style ={{ backgroundImage: `url(${img3})`}}></div>
                            <div className=" bg-[url()] bg-cover h-[105px] w-32 rounded-full"
                            style ={{ backgroundImage: `url(${img4})`}}></div>
                            <div className=" bg-[url()] h-[105px] w-32 rounded-full bg-cover" style ={{ backgroundImage: `url(${img5})`}}></div>
                        </div>

                           <div className="flex items-center justify-between ml-5 mt-5 text-orange-500 font-semibold">
                            <div className="">Snacks</div>
                            <div className="">Beverages</div>
                            <div className="">Main Dishes</div>
                        </div>
                  </div>

                </div>
            </div>
        </div>
        </section>


        {/*  images section */}
     <section className="py-20">
  <div className="grid grid-cols-4 gap-4 max-w-[1100px] mx-auto">

    {/* IMAGE */}
    <div
      className="h-[250px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img6})` }}
    ></div>

    {/* ORANGE CARD */}
    <div className="h-[250px] bg-orange-500 flex flex-col items-center justify-center text-center px-4">
      <div
        className="h-[70px] w-[70px] bg-contain bg-no-repeat mb-4"
        style={{ backgroundImage: `url(${img7})` }}
      ></div>
      <h3 className="text-white text-xl font-semibold">
        Catering Packages
      </h3>
      <p className="text-white text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    {/* IMAGE */}
    <div
      className="h-[250px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img8})` }}
    ></div>

    {/* DASHED CARD */}
    <div className="h-[250px] border-2 border-dashed border-orange-500 flex flex-col items-center justify-center text-center px-4">
      <div
        className="h-[90px] w-[90px] bg-contain bg-no-repeat mb-4"
        style={{ backgroundImage: `url(${img9})` }}
      ></div>
      <h3 className="text-orange-500 text-xl font-semibold">
        Cooking Class
      </h3>
      <p className="text-gray-500 text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    {/* DASHED CARD */}
    <Link to="/contact">
    <div className="h-[250px] border-2 border-dashed border-orange-500 flex flex-col items-center justify-center text-center px-4">
      <div
        className="h-[90px] w-[90px] bg-contain bg-no-repeat mb-4"
        style={{ backgroundImage: `url(${img10})` }}
      ></div>
      <h3 className="text-orange-500 text-xl font-semibold">
        Order Deliver
      </h3>
      <p className="text-gray-500 text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
      </Link>
    {/* IMAGE */}
    <div
      className="h-[250px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img11})` }}
    ></div>

    {/* DASHED CARD */}
     <Link to="/reservation">
    <div className="h-[250px] border-2 border-dashed border-orange-500 flex flex-col items-center justify-center text-center px-4">
      <div
        className="h-[90px] w-[90px] bg-contain bg-no-repeat mb-4"
        style={{ backgroundImage: `url(${img12})` }}
      ></div>
      <h3 className="text-orange-500 text-xl font-semibold">
       Reservations
      </h3>
      <p className="text-gray-500 text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    </Link>

    {/* IMAGE */}
    <div
      className="h-[250px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img13})` }}
    ></div>

  </div>
</section>




        {/*  why choice us */}

      <section className="h-screen relative">
  {/* BACKGROUND */}
  <div className="bg-gray-400 h-full w-full flex items-center justify-center">

    {/* ORANGE CONTAINER */}
    <div className="bg-orange-500 h-[80%] w-[90%] grid grid-cols-2 px-24">

      {/* LEFT COLUMN */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3">
          <span className="bg-white h-[2px] w-[30px]"></span>
          <p className="text-white tracking-widest text-sm">
            WHY CHOOSE US
          </p>
        </div>

        <h2 className="text-white font-bold text-[42px] leading-tight font-serif mt-6">
          Our Commitment is <br /> Why We Stand Out
        </h2>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex gap-10 items-center">

        {/* ICONS */}
        <div className="flex flex-col gap-16">
          <div
            className="h-[70px] w-[70px] bg-cover"
            style={{ backgroundImage: `url(${img14})` }}
          ></div>

          <div
            className="h-[70px] w-[70px] bg-cover"
            style={{ backgroundImage: `url(${img15})` }}
          ></div>

          <div
            className="h-[70px] w-[70px] bg-cover"
            style={{ backgroundImage: `url(${img16})` }}
          ></div>
        </div>

        {/* TEXT */}
        <div className="text-white flex flex-col gap-10 max-w-md">
          <div>
            <h3 className="text-xl font-semibold">SoFood Vision</h3>
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque voluptatibus enim minima praesentium.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">SoFood Mission</h3>
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque voluptatibus enim minima praesentium.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quality Promise</h3>
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque voluptatibus enim minima praesentium.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>



        {/* meet our chefs */}
        <section> 
            <div className="h-screen">
                <div className="flex justify-center items-center">
                     <p className="bg-orange-500 h-[2px] w-[30px] mt-20"></p>
                </div>
                <div className="flex-col pt-5">
                    <p className="text-center text-[20px]">OUR CHEFS</p>
                    <p className="text-center text-5xl font-semibold pt-8">Meet Our <span className="text-orange-500">  Culinary </span>Artists</p>
                </div>


                <div className="grid grid-cols-3 mt-20 h-[400px] gap-8 px-32">
                    <div className="  shadow-xl">
                        <div className="bg-[url()] bg-cover h-[300px]" style ={{ backgroundImage: `url(${img17})`}} ></div>
                        <div className="text-center pt-5">
                            <p className="text-orange-500 text-3xl font-bold">Mr.Benny John</p>
                            <p className="text-gray-500 text-lg pt-5">Traditional Chef</p>


                            <p>
                            <div className="flex  justify-center gap-4 p-10">
                            {/* Facebook */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaFacebookF size={10} />
                            </div>

                            {/* Instagram */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaInstagram size={10} />
                            </div>

                            {/* LinkedIn */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaLinkedinIn size={10} />
                            </div>
                            </div>
                            </p>
                        </div>
                    </div>
                  
                    <div className=" shadow-xl">
                        <div className="bg-[url()] bg-cover h-[300px]" style ={{ backgroundImage: `url(${img18})`}} ></div>
                        <div className="text-center pt-5">
                            <p className="text-orange-500 text-3xl font-bold">Mr.Chand Siyap</p>
                            <p className="text-gray-500 text-lg pt-5">Traditional Chef</p>


                            <p>
                                <div className="flex  justify-center gap-4 p-10">
                            {/* Facebook */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaFacebookF size={10} />
                            </div>

                            {/* Instagram */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaInstagram size={10} />
                            </div>

                            {/* LinkedIn */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaLinkedinIn size={10} />
                            </div>
                            </div>
                            </p>
                        </div>
                    </div>

                      <div className=" shadow-xl">
                        <div className="bg-[url()] bg-cover h-[300px]" style ={{ backgroundImage: `url(${img19})`}} ></div>
                        <div className="text-center pt-5">
                            <p className="text-orange-500 text-3xl font-bold">Mr.David Orja</p>
                            <p className="text-gray-500 text-lg pt-5">Traditional Chef</p>
                            <p>

                                 <div className="flex  justify-center gap-4 p-10">
                            {/* Facebook */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaFacebookF size={10} />
                            </div>

                            {/* Instagram */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaInstagram size={10} />
                            </div>

                            {/* LinkedIn */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaLinkedinIn size={10} />
                            </div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
        </>
    )
}
export default AboutUs;