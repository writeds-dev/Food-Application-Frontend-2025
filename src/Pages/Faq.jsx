import React from "react";
import banner from "../assets/images/banner1.webp";

function Faq() {
  return (
    <>
      {/* Banner Section */}
      <div
        className="flex items-center gap-2 text-gray-600 text-sm w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="ml-56">
          <h1 className="text-[48px] text-white font-serif">
            Frequently Asked Questions
          </h1>
          <br />
          <span className="text-gray-300 font-serif">Home</span>
          <span className="text-gray-300 mx-1">/</span>
          <span className="text-orange-500 font-medium">FAQ</span>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Your Questions, <span className="text-orange-600">Answered</span>
        </h2>

        <div className="space-y-6 text-gray-700">

          {/* FAQ 1 */}
          <div>
            <h3 className="font-semibold text-lg">1. How can I place an order?</h3>
            <p className="mt-1">
              You can browse the menu, add items to your cart, and checkout securely.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h3 className="font-semibold text-lg">2. Do you offer home delivery?</h3>
            <p className="mt-1">
              Yes, fast delivery is available in supported areas.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h3 className="font-semibold text-lg">3. What payment methods are accepted?</h3>
            <p className="mt-1">
              We accept UPI, net banking, debit/credit cards, and cash on delivery (in some regions).
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <h3 className="font-semibold text-lg">4. Can I cancel or modify my order?</h3>
            <p className="mt-1">
              Yes, but only within a few minutes of ordering before preparation begins.
            </p>
          </div>

          {/* FAQ 5 */}
          <div>
            <h3 className="font-semibold text-lg">5. Is my data safe?</h3>
            <p className="mt-1">
              We maintain strict privacy and security measures to protect your information.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Faq;
