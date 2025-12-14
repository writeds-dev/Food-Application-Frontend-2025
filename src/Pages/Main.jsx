import { CalendarDays, MessageSquare } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {  FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


import worldMap from '../assets/images/vector-map-world-square-dots-260nw-1937582827.webp'
import banner from '../assets/images/p.jpg'
import canvas from '../assets/images/canvas3.png'
import canvas1 from '../assets/images/canvas1.png'
import img1 from '../assets/images/2aut47ag_north-indian-food_625x300_28_March_25.jpg'
import img2 from '../assets/images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp'
import vegan from '../assets/images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp'
import img3 from '../assets/images/b63q62p8_beetroot-veg-kofta_625x300_03_May_23.webp'
import veg from '../assets/images/b63q62p8_beetroot-veg-kofta_625x300_03_May_23.webp'
import img4 from '../assets/images/famous-indian-food-dishes-that-are-delicious-and-must-try-for-tourists.jpg'
import img5 from '../assets/images/famous-indian-food-dishes-that-are-delicious-and-must-try-for-tourists.jpg'
import img6 from '../assets/images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg'
import img7 from '../assets/images/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS.webp'
import img8 from '../assets/images/istockphoto-104704117-612x612.jpg'
import recipe from '../assets/images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg'
import traditional from '../assets/images/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS.webp'
import istock from '../assets/images/istockphoto-104704117-612x612.jpg'
import unhealthy from '../assets/images/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.webp'
import indian from '../assets/images/feature-image-famous-dishes-of-delhi.jpg'
import indian1 from '../assets/images/2aut47ag_north-indian-food_625x300_28_March_25.jpg'
import health from '../assets/images/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg'
import ella from '../assets/images/pexels-ella-olsson-572949-1640777.jpg'
import chef from '../assets/images/chef.jpeg'
import nds from '../assets/images/nds.webp'
// import star from '../assets/images/star.jpg'
import migration from '../assets/images/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__06__20160612-melon-roundup-recipes-01-0d22b9094f1348fcaa263d64817b2f8e.jpg'
import grill from '../assets/images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg'
import vegan1 from '../assets/images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp'
export default function Main(){
    return(
        <>
<div className="  bg-cover w-screen h-[700px]" style={{ backgroundImage: `url(${banner})` }}>
    <div className="bg-black h-24 flex  items-center justify-around bg-opacity-30">
        <div className="text-3xl font-extrabold text-white">F O O D C O U R T</div>
        <div>
        <ul className=" flex items-center justify-center gap-20 cursor-pointer">
            <Link to={"/"} className="text-white font-bold">Home</Link>
            <Link to={"/menu"} className="text-white font-bold">Menu</Link>
            <Link to={"/blogs"}  className="text-white font-bold">Blog</Link >
            <Link to={"/contact"} className="text-white font-bold">Contact</Link>
            <li className="text-white font-bold">Catering</li>
            <button className="bg-orange-600 text-white w-24 h-8 rounded-lg hover:scale-110 transition-transform duration-200 animate-pulse flex items-center justify-center gap-2">
                 <i className="fi fi-rr-phone-call"></i>
                 Call Us
                 </button> 
        </ul>
     </div>
    </div>

    <div className="pl-10 pt-20 grid grid-cols-2">


        <div className="w-[100%]">
        <p className="text-white font-bold text-6xl">Taste of <span className="text-orange-600">Indian Food</span>  in <br />
        an Elgant Atmosphere
        </p>

        <p className="text-white text-[12px] pt-5 text-justify w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore molestiae,
             iusto totam a assumenda veniam, modi vel cum similique in. Quas ratione aliquid, 
             expedita labore vero minima eaque. At. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis ipsum,
              eaque porro neque nostrum illum repellendus accusamus quasi non quibusdam nihil earum, assumenda sint exercitationem aspernatur eum officiis 
              architecto.</p>

              <a href="#menu"><button className="mt-20 text-white bg-orange-600 rounded-lg h-[40px] w-[200px]">Exploring Our Menu </button></a>
    </div>
 </div>
</div>



<div className=" p-20">
    <div className="grid grid-cols-3 gap-4 h-30">
            <div className="bg-[#F9E8DC] flex">
                <div className="flex items-center p-5">
                <div className=" bg-cover h-28 w-24" style={{ backgroundImage: `url(${canvas})` }}></div>
                </div>
                <div className="p-3">
                    <p className="text-orange-500 text-2xl font-bold">Beverages</p>
                    <p className="text-sm mt-3">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi itaque debitis, consequatur numquam aut quibusdam.
                         Odio expedita dignissimos hic odit!</p>
                </div>
            </div>


              <div className="bg-[#F9E8DC] flex">
                <div className="flex items-center p-5">
                <div className=" bg-cover h-28 w-24 " style ={{ backgroundImage: `url(${canvas})`}}></div>
                </div>
                <div className="p-3">
                    <p className="text-orange-500 text-2xl font-bold">Main Dishes</p>
                    <p className="text-sm mt-3">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi itaque debitis, consequatur numquam aut quibusdam.
                         Odio expedita dignissimos hic odit!</p>
                </div>
             </div>

              <div className="bg-[#F9E8DC] flex">
                <div className="flex items-center p-5">
                <div className=" bg-cover h-28 w-24" style ={{ backgroundImage: `url(${canvas1})`}}></div>
                </div>
                <div className="p-3">
                    <p className="text-orange-500 text-2xl font-bold">Snacks</p>
                    <p className="text-sm mt-3">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi itaque debitis, consequatur numquam aut quibusdam.
                         Odio expedita dignissimos hic odit!
                    </p>
                </div>
            </div>
        </div>

        
    <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-3">
                <p className="text-5xl text-black font-bold">Featured <span className="text-orange-500">Recipe</span> <br />
                Selections
                </p>
            </div>
            <div className="flex items-center text-sm">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni unde in doloremque placeat.
                     Nulla deleniti quasi quidem necessitatibus laudantium asperiores at 
                    repellendus sed! Reiciendis expedita omnis impedit. Excepturi, quos doloremque.</p>
            </div>
    </div>


    <div className="grid  grid-cols-4 mt-4 gap-4">
        <div className=" bg-cover h-48"  style ={{ backgroundImage: `url(${img1})`}}></div>
        <div className="bg-cover h-48" style ={{ backgroundImage: `url(${img2})`}}></div>
        <div className=" bg-cover h-48" style ={{ backgroundImage: `url(${img3})`}} ></div>
        <div className=" bg-cover h-48" style ={{ backgroundImage: `url(${img4})`}}></div>
        <div className=" bg-cover h-48"  style ={{ backgroundImage: `url(${img5})`}}></div>
        <div className=" bg-cover h-48" style ={{ backgroundImage: `url(${img6})`}}></div>
        <div className=" bg-cover h-48" style ={{ backgroundImage: `url(${img7})`}}></div>
        <div className=" bg-cover h-48" style ={{ backgroundImage: `url(${img8})`}}></div>
    </div>   
</div>


        <div className="grid grid-cols-2 h-screen">
            <div className="pl-[180px] pt-52 p-4">
            <div className="relative">
                <div className="bg-orange-500 w-10 h-[2px] absolute mt-3">  </div>     
                <div className="text-black text-md font-semibold absolute pl-14">About Us</div>
            </div>


            <div className="mt-10 text-5xl font-bold ">
                <p>Exploring the Stories and <br />
                Aromas of <span className="text-orange-500"> Ruchie Priya<br />
                kitchen </span> </p>
            </div>
            <div>
                <p className="text-justify mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Omnis exercitationem nemo, tempore, perferendis excepturi
                      suscipit ipsa rerum libero doloremque architecto quidem repellendus        
                     nulla porro laudantium magni officiis deserunt odio nostrum? 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod non dicta dolor officiis
                      dolorum quas deleniti aliquam mollitia consectetur.</p>
            </div>
            </div>
             <div className="flex relative">
            <div className=" bg-cover w-[630px] h-[600px] mt-32 absolute z-10" style ={{ backgroundImage: `url(${vegan})`}}> </div>
            <div  className="h-[500px] w-72 flex justify-end items-end mt-6 absolute ml-[480px]" style={{backgroundColor:"rgb(170, 120, 80)"}}></div> 
        </div>
    </div>


<div>
    <div className="py-20 mt-64">
  <div className="flex items-center justify-center text-center">
    <p className="text-black text-5xl font-bold leading-tight">
      <span className="text-orange-500">Navigate</span> Your <br />
      Cuisine Journey
    </p>
  </div>

  <div className="flex items-center justify-center mt-8 text-center max-w-screen-md mx-auto">
    <p className="text-sm tracking-wide">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quo perferendis, culpa delectus quia iusto cumque repellendus dicta.
    </p>
  </div>
</div>



</div>   

   <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-32 mt-20">

  {/* CARD 1 */}
  <div className="text-center space-y-4">
    <div
      className="bg-cover bg-center rounded-md h-[200px] w-full"
      style={{ backgroundImage: `url(${indian})` }}
    ></div>

    <div className="bg-gray-300 h-11 flex items-center justify-center">
      <p className="text-xl font-semibold">Catering Services</p>
    </div>

    <p className="text-sm text-gray-600 px-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolores
      porro amet eos soluta consequuntur sapiente.
    </p>
  </div>

  {/* CARD 2 */}
  <div className="text-center space-y-4">
    <div
      className="bg-cover bg-center rounded-md h-[200px] w-full"
      style={{ backgroundImage: `url(${indian1})` }}
    ></div>

    <div className="bg-gray-300 h-11 flex items-center justify-center">
      <p className="text-xl font-semibold">Dine In & Take Away</p>
    </div>

    <p className="text-sm text-gray-600 px-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum
      voluptate quae incidunt.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="text-center space-y-4">
    <div
      className="bg-cover bg-center rounded-md h-[200px] w-full"
      style={{ backgroundImage: `url(${recipe})` }}
    ></div>

    <div className="bg-gray-300 h-11 flex items-center justify-center">
      <p className="text-xl font-semibold">Veg & Non-Veg</p>
    </div>

    <p className="text-sm text-gray-600 px-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      debitis laudantium odio.
    </p>
  </div>

</div>



   <div className="h-80">
    <div className="flex justify-center items-center mt-20">
        <div className=" bg-orange-500 h-1 w-10"></div>
    </div>


    <div className="flex justify-center items-center mt-3" id="menu">OUR MENU</div>
    <div className="flex items-center justify-center mt-5">
    <p className="text-4xl font-bold">Where Flavor <span className="text-orange-500"> Meet Innovation </span>- Your <br /> Ultimate Culinary Destination</p>
   </div>
    
   <div className="flex items-center justify-center mt-5">
    <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores pariatur minima deleniti perferendis sint placeat. Voluptas quis cupiditate ut laudantium
         eveniet aspernatur ipsum obcaecati alias ea hic, officia quos aliquid nam ab minus? Consequatur consequuntur exercitationem, corrupti ea alias veritatis, quo asperiores 
         </p>
   </div>


   <div className="flex justify-center mt-8 items-center gap-10 cursor-pointer">
    <div className="bg-orange-600 flex items-center justify-center text-sm h-7 w-20 rounded text-white">View All</div>
    <div className=" border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Food</div>
    <div className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Cart</div>
    <div className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Snacks</div>
   </div>
   </div>


      <div className="grid grid-cols-4 gap-4 px-36">
            <div className="border-[1px] border-orange-400 h-[300px]">
                <div className=" bg-cover h-[200px]" style ={{ backgroundImage: `url(${unhealthy})`}}></div>
                <div>
                <p className="text-orange-400 font-bold mx-4">Burger</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div>
                <div className="bg-gradient-to-t from-orange-400  to-blue-300 h-[300px]">
                    <div className=" pt-32">
                        <p className="text-white font-bold text-2xl mx-3">Chicken Seekh Kabab</p>
                        <p className="text-sm mx-3 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos a nobis ut quas inventore ullam maiores, quod nisi ducimus quisquam officiis necessitatibus exercitationem consectetur vitae voluptates adipisci saepe odio facere.</p>
                    </div>
                </div>
            </div>



            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className=" bg-cover h-[200px]" style ={{ backgroundImage: `url(${traditional})`}}></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Mix Veg</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-cover h-[200px]" style ={{ backgroundImage: `url(${veg})`}}></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Machio</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-cover h-[200px]" style ={{ backgroundImage: `url(${health})`}}></div>
                  <div >
                <p className="text-orange-400 font-bold mx-4">Vegetables</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-cover h-[200px]" style ={{ backgroundImage: `url(${vegan1})`}}></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Lenticles</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className=" bg-cover h-[200px]" style ={{ backgroundImage: `url(${istock})`}}></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Pizza</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className=" bg-cover h-[200px]" style ={{ backgroundImage: `url(${ella})`}}></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Salad</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>
        </div>
  

   <div className="h-full bg-orange-100 mt-20">
        <div className="grid grid-cols-5 px-40 gap-2">
        <div className="col-span-2 pl-">

{/* why choosse us */}
        <div className="flex items-center gap-2 mt-16">
            <div className="bg-orange-500 h-[1px] w-9"></div>
            <p className="">Why Choice Us</p>
        </div>

{/* title  */}
       <div>
        <p className="text-5xl font-bold">Discover Why Ruchi's <br /> Kitchen Is the <br /> <span className="text-orange-500"> Preferred Culinary </span><br /> Destination</p>
        </div>

        <div className=" bg-cover h-[300px] mt-14 " style ={{ backgroundImage: `url(${chef})`}}></div>
        </div>

{/* right side col */}
        <div className="col-span-3 pl-10">
        <div className=" bg-[url(./assets/Images/nds.webp)] bg-contain h-[330px] w-[640px] mt-10" style ={{ backgroundImage: `url(${nds})`}}></div>

        <div className="w-[640px]">
        <p className="text-sm  text-gray-600 pl-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ex voluptates dolores soluta cupiditate iusto modi rem eligendi voluptatum dolorum error aspernatur, maiores du minima suscipit exercitationem non debitis obcaecatwbdubwwehfuiwehfuewhfiuhh3i.</p>

             <div className="grid grid-cols-2 mt-9 pl-7 gap-10">
                <div>
                    <p className="text-orange-500 font-bold">BEST FOOD EVER</p>
                    <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt quoijjoijoiiohi temporibus exercitationem des animi laud oihhoi?</p>
                </div>
                <div>
                    <p className="text-orange-500 font-bold">EXCEPTIONAL DINING</p>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veritatis itaque totam ut soluta! Illo cum ut suscipit amet quos?</p>
                </div>
             </div>
        </div>
    </div>
</div>
</div>

<div className="mt-40">
 <section className=" py-20 ">
  {/* Heading */}
  <div className="text-center max-w-4xl mx-auto">
    <p className="tracking-widest text-sm text-gray-600">
      OUR TESTIMONIALS
    </p>

    <h2 className="text-4xl font-bold mt-4">
      Exploring <span className="text-orange-600">Ruchi&apos;s</span> Kitchen Treasure
    </h2>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 px-20">
    
    {/* Card 1 */}
    <div className="bg-orange-600 text-white p-6 rounded-xl shadow-lg">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        odio alias! Neque ducimus labore facere.
      </p>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-800"></div>
          <span className="font-semibold">Diya Sharma</span>
        </div>

        <div className="flex text-yellow-400">
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={regularStar} />
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        cupiditate fuga consequuntur recusandae.
      </p>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-800"></div>
          <span className="font-semibold">Diya Sharma</span>
        </div>

        <div className="flex text-yellow-400">
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
        </div>
      </div>
    </div>

  </div>

  {/* Pagination */}
  <div className="flex justify-center gap-4 mt-12">
    {[1, 2, 3, 4].map(n => (
      <button
        key={n}
        className="w-8 h-8 border border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white transition"
      >
        {n}
      </button>
    ))}
  </div>
</section>
</div>

<div></div>
<section className="py-20 bg-white px-32">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center">
              <p className="bg-orange-500 h-[3px] w-[35px]"></p>
        </div>
        <p className="tracking-widest text-xl pt-10">OUR POST</p>

        <h2 className="text-4xl font-bold mt-2">
          Exploring <span className="text-orange-500">Ruchi's</span> Food Treasures
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-3 gap-8 px-4  ">
        {/* Card 1 */}
        <div className="h-96 hover:shadow-xl transition rounded">
        <div className=" rounded-lg bg-cover h-60" style ={{ backgroundImage: `url(${migration})`}}>
          <div className="pt-60">
            <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
              Savor the Flavor: A Deep Dive Into Veg 
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Explore the world of vibrant vegetarian dishes and hearty non-veg meals.
              This blog uncovers the secrets behind traditional
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                August 3, 2025
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={16} />
                31
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Card 2 */}
        <div className="h-96 hover:shadow-xl transition rounded">
        <div className=" bg-cover h-60 rounded" style ={{ backgroundImage: `url(${grill})`}}>
          <div className="pt-60">
            <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
              Quick and Delicious: 30-Minute Meals for Busy Days
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Need a meal fast but dont want to compromise on taste?
              This blog presents easy recipes for both veg and non-veg options...
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 pt">
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                August 23, 2025
              </div>

              <div className="flex items-center gap-1">
                <MessageSquare size={16} />
                31
              </div>
            </div>
          </div>
        </div>
    </div>
        {/* Card 3 */}
        <div className="h-96 hover:shadow-xl transition rounded">
        <div className=" bg-cover h-60 rounded" style ={{ backgroundImage: `url(${unhealthy})`}}>
          <div className="pt-60">
            <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
              Catering Perfection: Tips and Recipes for Your Event
            </h3>

            <p className="text-gray-600 text-sm mb-4 ">
              Planning an event? This blog is your go-to for stress-free catering,
              mouthwatering recipes, and tips to impress  guests...
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                August 31, 2025
              </div>

              <div className="flex items-center gap-1">
                <MessageSquare size={16} />
                31
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </section>

        {/* map */}
    <section className="relative bg-white py-20 px-6">

      {/* Top Images Row */}
      <div className="flex justify-center gap-10">

         <h2 className="text-4xl font-bold mb-3">
        Available Many Place
      </h2>
        <div className="relative">
        <div className="w-8 h-8 bg-orange-400 rounded-md flex items-end justify-end absolute rotate-45">
          <div className="w-8 h-8 bg-teal-600 rounded-md absolute -right-3 -bottom-2"></div>
        </div>
        </div>
      {/* Heading */}
    </div>

      {/* Subtitle */}
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

            {/* Background World Map */}
        <div className="flex justify-center items-center relative h-screen mx-24">

        {/* Background Image with Opacity */}
        <div
            className="absolute inset-0 
            bg-cover  opacity-60"style={{ backgroundImage: `url(${worldMap})` }}
        ></div>

        {/* Text not faded */}
        <p className="relative tracking-widest pt-10 text-orange-500 font-bold text-center">
            RUCHI KITCHEN
        </p>

        </div>
  </section>
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
    <i className="fa-brands fa-youtube text-orange-600 text-xl "></i>
  </div>

  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ">
    <i className="fa-brands fa-facebook text-orange-600 text-xl"></i>
  </div>

  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ">
    <i className="fa-brands fa-instagram text-orange-600 text-xl"></i>
  </div>

  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ">
    <i className="fa-brands fa-linkedin text-orange-600 text-xl"></i>
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