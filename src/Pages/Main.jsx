import { CalendarDays, MessageSquare } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {  FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Main(){
    return(
        <>
<div className=" bg-[url('./assets/Images/p.jpg')] bg-cover w-screen h-[700px]">
    <div className="bg-black h-24 flex  items-center justify-around bg-opacity-30">
        <div className="text-3xl font-extrabold text-white">F O O D C O U R T</div>
        <div>
        <ul className=" flex items-center justify-center gap-20 cursor-pointer">
            <Link to={"/"} className="text-white font-bold">Home</Link>
            <Link to={"/menu"} className="text-white font-bold">Menu</Link>
            <Link to={"/blogs"}  className="text-white font-bold">Blog</Link >
            <Link to={"/contact"} className="text-white font-bold">Contact</Link>
            <li className="text-white font-bold">Catering</li>
            <button className="bg-orange-600 text-white w-24 h-8 rounded-lg hover:scale-110 transition-transform duration-200 animate-pulset flex items-center justify-center gap-2">
                 <i class="fi fi-rr-phone-call"></i>
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
                <div className="bg-[url(./assets/Images/canvas3.png)] bg-cover h-28 w-24"></div>
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
                <div className="bg-[url(./assets/Images/canvas.png)] bg-cover h-28 w-24 "></div>
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
                <div className="bg-[url(./assets/Images/canvas1.png)] bg-cover h-28 w-24"></div>
                </div>
                <div className="p-3">
                    <p className="text-orange-500 text-2xl font-bold">Snacks</p>
                    <p className="text-sm mt-3">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi itaque debitis, consequatur numquam aut quibusdam.
                         Odio expedita dignissimos hic odit!</p>
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
        <div className="bg-[url(./assets/Images/2aut47ag_north-indian-food_625x300_28_March_25.jpg)] bg-cover h-48"></div>
        <div className="bg-[url(./assets/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp)] bg-cover h-48"></div>
        <div className="bg-[url(./assets/Images/b63q62p8_beetroot-veg-kofta_625x300_03_May_23.webp)] bg-cover h-48"></div>
        <div className="bg-[url(./assets/Images/famous-indian-food-dishes-that-are-delicious-and-must-try-for-tourists.jpg)] bg-cover h-48"></div>
        <div className="bg-[url(./assets/Images/feature-image-famous-dishes-of-delhi.jpg)] bg-cover h-48"></div>
        <div className="bg-[url(./assets/Images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg)] bg-cover h-48"></div>
        <div className="bg-[url(./assets/Images/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS.webp)] bg-cover h-48"></div>
        <div className="bg-[url(./assets/Images/istockphoto-104704117-612x612.jpg)] bg-cover h-48"></div>
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
            <div className="bg-[url('./assets/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp')] bg-cover w-[630px] h-[600px] mt-32 absolute z-10"> </div>
            <div  className="h-[500px] w-72 flex justify-end items-end mt-6 absolute ml-[480px]" style={{backgroundColor:"rgb(170, 120, 80)"}}></div> 
        </div>
    </div>



    <div className="flex items-center justify-center mt-20">
       <p className="text-black text-5xl font-bold"> <span className="text-orange-500">Navigate</span> Your <br />
       Cusine Journey</p>
       </div>
       <div className="flex items-center justify-center mt-8 text-center  max-w-screen-md mx-auto">
       <p className="text text-sm tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis, culpa delectus quia iusto cumque repellendus dicta optio dolorum nam possimus molestias fugiat eligendi at. Deleniti corrupti quam sint veritatis. Inventore eaque, facere ab voluptatibus magnam ex perspiciatis esse. Possimus.
       </p>
    </div>




    <div className="grid grid-cols-3 px-[270px] mt-20">
        <div>
            <div className="bg-[url(./assets/Images/famous-indian-food-dishes-that-are-delicious-and-must-try-for-tourists.jpg)] bg-cover rounded-md  h-[200px] w-80"></div>
        </div>

        <div > 
            <div className="bg-[url(./assets/Images/2aut47ag_north-indian-food_625x300_28_March_25.jpg)] bg-cover h-[200px] rounded-md w-80"></div>
         </div>

        <div >
        <div className="bg-[url(./assets/Images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg)] rounded-md bg-cover h-[200px] w-80"></div>
        </div>

        {/* text under images */}
        <div className="flex items-center justify-center mt-8">
        <div className="bg-gray-300 h-11 w-[290px]">
            <p className="text-3xl text-center font-semibold">Catering Services</p>
        </div>
        </div>


         <div className="flex items-center justify-center mt-8">
        <div className="bg-gray-300 h-11 w-[290px] ">
            <p className="text-3xl text-center font-semibold">Dine in & TakeWay</p>
        </div>
        </div>

       
        <div className="flex items-center justify-center mt-8">
        <div className="bg-gray-300 h-11 w-[290px] ">
            <p className="text-3xl text-center font-semibold">Veg & Non-Veg</p>
        </div>
        </div>


        <div className=" text-sm max-w-72 mx-auto">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolores porro amet eos soluta consequuntur sapiente unde eligendi, dolorum ab alias laboriosam beatae quae pariatur ullam quia velit quis. Obcaecati.</p>
        </div>

        <div className=" text-sm max-w-72 mx-auto">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum voluptate quae incidunt? Maxime, exercitationem quam consequuntur ullam, veniam mollitia iste voluptas tenetur sed nam atque vero ad alias illum.</p>
        </div>

        <div className=" text-sm max-w-72 mx-auto">
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt debitis laudantium odio! Laudantium natus reprehenderit incidunt quis, impedit officiis omnis repudiandae labore dolor quasi nemo inventore aperiam </p>
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
                <div className="bg-[url(./assets/Images/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.webp)] bg-cover h-[200px]"></div>
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



            <div  className="border-[1px] border-orange-400 h[300px]">
                <div className="bg-[url(./assets/Images/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS.webp)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Mix Veg</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(./assets/Images/b63q62p8_beetroot-veg-kofta_625x300_03_May_23.webp)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Machio</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(./assets/Images/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg)] bg-cover h-[200px]"></div>
                  <div >
                <p className="text-orange-400 font-bold mx-4">Vegetables</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(./assets/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Lenticles</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(./assets/Images/istockphoto-104704117-612x612.jpg)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Pizza</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(./assets/Images/pexels-ella-olsson-572949-1640777.jpg)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Salad</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>
        </div>
  

  
          <div className="h-screen bg-orange-100 mt-20">
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

        <div className="bg-[url(./assets/Images/chef.jpeg)] bg-cover h-[300px] mt-32 "></div>
        </div>

{/* right side col */}
        <div className="col-span-3 pl-10">
        <div className=" bg-[url(./assets/Images/nds.webp)] bg-contain h-[330px] w-[640px] mt-10"></div>

        <div className="w-[640px]">
        <p className="text-sm mt-16 text-gray-600 pl-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

<div>
    <div className="flex justify-center mt-5">
         <div className="bg-orange-500 h-1 w-8"></div>
    </div>
        <div className="text-center mt-2">OUR TESTIMONIAL</div>

        <p className="text-5xl font-bold text-center mt-6">Exploring <span className="text-orange-500"> Ruchi's</span> Kitchen Treasures</p>
    </div>
        
    <div className="grid grid-cols-2 px-20 gap-10 mt-16">
        <div className="bg-orange-600 h-52 p-5 rounded">
            <p className="text-white ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Dolorem, atque dicta eius repellat, optio doloribus ipsa modi voluptate corrupti minima enim quaerat 
                 adipisci itaque velit sint vel, soluta quam porro mollitia explicabo magnam. Ipsam veritatis enim vel
                  in aut? Iure?</p>

                <div className="flex justify-between">
                    <p className="text-white text-xl mt-10 ">Michelle</p>
                    <p className="bg-[url(./assets/Images/star2.png)] bg-contain h-10 w-32 mt-10"></p>
                </div>
            </div>
   <div className="bg-white h-52 p-5 rounded shadow-2xl shadow-black">
            <p className="text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Dolorem, atque dicta eius repellat, optio doloribus ipsa modi voluptate corrupti minima enim quaerat 
                 adipisci itaque velit sint vel, soluta quam porro mollitia explicabo magnam. Ipsam veritatis enim vel
                  in aut? Iure?</p>

                <div className="flex justify-between ">
                    <p className="text-white text-xl mt-10 ">Michelle</p>
                    <p className="bg-[url(./assets/Images/star2.png)] bg-contain h-10 w-32 mt-10"></p>
                </div>
            </div>
    </div>

    <div className="flex items-center justify-center mt-10 gap-5 mb-10 ">
        <button className="bg-orange-500 h-4 w-4 rounded-full"></button>
        <button className="border-orange-500 border-2 h-4 w-4 rounded-full"></button>
        <button className="border-orange-500 border-2 h-4 w-4 rounded-full"></button>  
    </div>


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
        <div className=" rounded-lg bg-[url(./assets/Images/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__06__20160612-melon-roundup-recipes-01-0d22b9094f1348fcaa263d64817b2f8e.jpg)] bg-cover h-60">
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
        <div className="bg-[url(./assets/Images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg)] bg-cover h-60 rounded">
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
        <div className="bg-[url(./assets/Images/istockphoto-104704117-612x612.jpg)] bg-cover h-60 rounded ">
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
            className="absolute inset-0 bg-[url('./assets/Images/vector-map-world-square-dots-260nw-1937582827.webp')] 
            bg-cover  opacity-60"
        ></div>

        {/* Text not faded */}
        <p className="relative tracking-widest pt-10 text-orange-500 font-bold text-center">
            RUCHI KITCHEN
        </p>

        </div>
  </section>


      
        </>

    )
}