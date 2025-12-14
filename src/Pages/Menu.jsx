import React, { useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.webp";
import img7 from "../assets/images/img7.webp";
import img9 from "../assets/images/img10.webp";
import img10 from "../assets/images/img11.webp";
import img11 from "../assets/images/img12.avif";
import img12 from "../assets/images/img13.jpg";
import Mbanner from "../assets/images/menubanner.jpg";

function Menu() {
  const [category, setCategory] = useState("all");

  const items = [
    { id: 1, name: "Pancakes", category: "desert", img: img1, desc: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Lemon Tea", category: "bevegers", img: img9, desc: "Lorem ipsum dolor sit amet." },
    { id: 3, name: "Soups", category: "meal", img: img2, desc: "Lorem ipsum dolor sit amet." },
    { id: 4, name: "Veggies", category: "meal", img: img3, desc: "Lorem ipsum dolor sit amet." },
    { id: 5, name: "Croissants", category: "desert", img: img4, desc: "Lorem ipsum dolor sit amet." },
    { id: 6, name: "Chicken", category: "meal", img: img5, desc: "Lorem ipsum dolor sit amet." },
    { id: 7, name: "Desserts", category: "desert", img: img6, desc: "Lorem ipsum dolor sit amet." },
    { id: 8, name: "Veg Platter", category: "meal", img: img7, desc: "Lorem ipsum dolor sit amet." },
    { id: 9, name: "MockTails", category: "bevegers", img: img10, desc: "Lorem ipsum dolor sit amet." },
    { id: 10, name: "Mocktail", category: "bevegers", img: img11, desc: "Lorem ipsum dolor sit amet." },
    { id: 11, name: "Kahwa", category: "bevegers", img: img12, desc: "Lorem ipsum dolor sit amet." },
   
  ];

  const filteredItems =
    category === "all"
      ? items
      : items.filter(item => item.category === category);

  return (
    <>
      {/* Banner */}
      <div
        className="h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${Mbanner})` }}
      >
        <h1 className="text-white text-5xl font-serif ml-56">Menu</h1>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 py-16">
        <button onClick={() => setCategory("all")} className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-600 hover:text-white">
          View All
        </button>
        <button onClick={() => setCategory("desert")} className="px-6 py-2 border-2 border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white">
          Desserts
        </button>
        <button onClick={() => setCategory("meal")} className="px-6 py-2 border-2 border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white">
          Meal
        </button>
        <button onClick={() => setCategory("bevegers")} className="px-6 py-2 border-2 border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white">
          Beverages
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-8 px-14">
        {filteredItems.map(item => (
          <div key={item.id} className="p-4 shadow-lg">
            <div className="h-40">
              <img
                src={item.img}
                className="w-full h-full object-cover rounded hover:scale-105 transition"
              />
            </div>
            <h3 className="text-orange-600 font-bold mt-3">{item.name}</h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
