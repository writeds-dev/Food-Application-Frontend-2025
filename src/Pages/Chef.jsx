import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import hero from "../assets/images/photo-1600565193348-f74bd3c7ccdf.jpg";
import headChef from "../assets/images/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208288.avif";

import c1 from "../assets/images/c2.jpg";
import c2 from "../assets/images/chef.jpeg";
import c3 from "../assets/images/c.avif";
import c4 from "../assets/images/c3.jpg";
export default function Chefs() {

  const SocialIcons = () => (
    <div className="flex gap-4 mt-4">
      {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
        <div
          key={i}
          className="w-9 h-9 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"
        >
          <Icon size={12} />
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* HERO */}
      <section
        className="h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="px-32 pt-56 text-white">
          <h1 className="text-[70px] font-serif font-semibold">Chef</h1>
          <div className="flex gap-2 text-sm mt-5">
            <span>Home</span>
            <span>{">"}</span>
            <span>Information</span>
            <span>{">"}</span>
            <span className="text-orange-500 font-semibold">Chef</span>
          </div>
        </div>
      </section>

      {/* HEAD CHEF */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="bg-orange-600 h-[420px] w-[420px] absolute top-10 left-10"></div>
            <div
              className="relative h-[500px] w-[450px] bg-cover"
              style={{ backgroundImage: `url(${headChef})` }}
            ></div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-orange-500"></span>
              <p className="tracking-[0.3em] text-sm font-semibold">
                HEAD CHEFS
              </p>
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Mr. Albert <br />
              <span className="text-orange-500">Eduardo's</span>
            </h2>

            <p className="text-gray-600 mt-6 leading-7">
              Dedicated to authentic flavors, fresh ingredients,
              and unforgettable culinary experiences. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis! Dolorem dolor at ab natus laboriosam vel error soluta obcaecati. Quaerat similique suscipit quidem. Necessitatibus modi dolorem dicta aut veniam distinctio corrupti cupiditate?
            </p>

            
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold mb-14">
          Our <span className="text-orange-500">Best Chefs</span>
        </h2>

        <div className="grid grid-cols-2 gap-12">
          {[
            [c1, "Mr. Benny Jhonen"],
            [c2, "Mr. Manthan Pachars"],
            [c3, "Mr. Lucky Andreas"],
            [c4, "Mr. Manthan Pachars"],
          ].map(([img, name], i) => (
            <div key={i} className="flex gap-6 items-center">
              <div
                className="w-32 h-32 bg-cover rounded"
                style={{ backgroundImage: `url(${img})` }}
              ></div>

              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  {name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  With experience gained from across the archipelago.
                </p>
                <SocialIcons />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
