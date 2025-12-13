import bookingBanner from "../assets/Images/booking_banner.jpg";
import discountImg from "../assets/Images/discounbt.png";
import packageImg from "../assets/Images/ic01.webp";
export default function Reservations() {
  return (
    <>
      {/* Header section */}
      <section>
        <div
          className="bg-cover opacity-90 h-[520px]"
          style={{ backgroundImage: `url(${bookingBanner})` }}
        >
          <div className="px-32 pt-56">
            <div className="text-white text-[70px] font-serif font-semibold">
              Reservation
            </div>

            <div className="flex items-center gap-2 text-white text-sm mt-5">
              <span>Home</span>
              <span>{">"}</span>
              <span>Information</span>
              <span>{">"}</span>
              <span className="text-orange-500 font-semibold">Reservation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Discount section */}
      <section className="mt-20">
        <div
          className="h-[500px] bg-cover"
          style={{ backgroundImage: `url(${discountImg})` }}
        >
          <div className="text-5xl text-white text-center font-bold pt-20">
            Thursday Special <span className="text-orange-600">15% Off</span>
          </div>
        </div>
      </section>

      {/* Package images */}
      <section className="mt-20">
        <div className="grid grid-cols-2 gap-5 px-36">
          <div className="border-2 border-dashed border-orange-600 h-[280px] flex justify-between p-10">
            <div>
              <p className="text-orange-600 text-xl font-semibold">
                Taste Of The Archipelago
              </p>
            </div>

            <div
              className="h-[250px] w-[250px] bg-cover"
              style={{ backgroundImage: `url(${packageImg})` }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
