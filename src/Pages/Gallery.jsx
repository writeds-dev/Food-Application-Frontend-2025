import hero from "../assets/Images/pexels-chanwalrus-958545.jpg";

import g1 from "../assets/Images/istockphoto-1434531397-612x612.jpg";
import g2 from "../assets/Images/213c8012b9827c35eb17cd9cb29d3563.jpg";
import g3 from "../assets/Images/beef-rendang-1.jpg";
import g4 from "../assets/Images/gomoku-mixed-rice-cooked-clay-600nw-2344585305.webp";
import g5 from "../assets/Images/Mixed-Veg-Rice-Delight_-done.png";
import g6 from "../assets/Images/360_F_698535008_ytN0Ei4AK1uQ4Zq6zFBeosCawCSbNNXM.jpg";
export default function Gallerys() {
  const images = [
    { img: g1, title: "Authentic Cuisine" },
    { img: g2, title: "Fine Dining Moments" },
    { img: g3, title: "Traditional Flavors" },
    { img: g4, title: "Chef Special" },
    { img: g5, title: "Veg Delight" },
    { img: g6, title: "Signature Dish" },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="h-[520px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative px-32 pt-56 text-white">
          <h1 className="text-[70px] font-serif font-semibold">Gallery</h1>

          <p className="mt-4 max-w-xl text-sm text-gray-200">
            A glimpse into our kitchen, flavors, and unforgettable culinary
            moments crafted with passion and perfection.
          </p>

          <div className="flex gap-2 text-sm mt-5">
            <span className="cursor-pointer hover:underline">Home</span>
            <span>{">"}</span>
            <span className="cursor-pointer hover:underline">Information</span>
            <span>{">"}</span>
            <span className="text-orange-400 font-semibold">Gallery</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-orange-500">Food Gallery</span>
        </h2>
        <p className="text-gray-600 leading-7">
          Every dish tells a story. Explore our curated gallery showcasing
          authentic flavors, artistic plating, and memorable dining
          experiences.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Image */}
              <div
                className="h-[300px] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-xl font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
