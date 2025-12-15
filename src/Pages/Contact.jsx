import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img1 from "../assets/images/traditional-italian-food-world-tourism-day_23-2149114038.avif";
import img2 from "../assets/images/hi7-food-delivery-suryapet-nvbk6vythv.avif";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[520px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative px-32 pt-56 text-white">
          <h1 className="text-[70px] font-serif font-semibold">Contact</h1>

          <div className="flex items-center gap-2 text-sm mt-5">
            <span className="cursor-pointer hover:underline">Home</span>
            <span>{">"}</span>
            <span className="cursor-pointer hover:underline">Information</span>
            <span>{">"}</span>
            <span className="text-orange-400 font-semibold">Contact</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

          {/* LEFT CARD */}
          <div className="bg-orange-50 p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach out to us for inquiries, feedback, or collaborations.
              We’d love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 bg-orange-100 p-3 rounded-md">
                <Mail className="text-orange-600" size={18} />
                <span>info@yoursite.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-orange-600" size={18} />
                <span>+26 123456789</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-orange-600 mt-1" size={18} />
                <span>
                  Emerald Street <br /> South Tangerang, Indonesia
                </span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[3px] w-[30px] bg-orange-500"></span>
              <span className="tracking-widest text-sm text-gray-500">
                MESSAGE US
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Let's <span className="text-orange-600">Connect</span> &
              <span className="text-orange-600"> Share</span> Experiences
            </h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input className="input" placeholder="Email" />
                <input className="input" placeholder="Phone" />
              </div>

              <input className="input" placeholder="Subject" />

              <textarea
                rows="5"
                className="input"
                placeholder="Write your message"
              ></textarea>

              <button className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section
        className="h-[500px]  bg-center"
        style={{ backgroundImage: `url(${img2})` }}
      ></section>
    </>
  );
}
