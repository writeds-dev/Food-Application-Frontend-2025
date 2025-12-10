import React from "react";
import banner from "../assets/images/banner2.webp";

function Terms() {
  return (
    <div className="w-full font-serif">

      {/* breadcrum menu */}
                     <div
                       className="flex items-center gap-2 text-gray-600 text-sm w-full h-96 bg-cover bg-center"
                       style={{ backgroundImage: `url(${banner})` }}>
                        <div className="ml-56 ">
                          <h1 className="text-[48px] text-white font-serif">Terms & Conditions</h1>
                          <br />
                          <span className=" text-gray-400 font-serif">Home</span>
                          <span className="text-gray-400">/</span>
                          <span className="text-orange-600 font-medium">Terms & Conditions</span>
                        </div>
                      </div>
        <div className=" p-12 flex flex-row items-center gap-2  ">
          <div className="w-12 h-1 bg-orange-600 ml-80"></div>
          <div className="text-lg font-semibold text-gray-800">OUR Terms & Conditions </div>

          
        </div>
     

      {/* PAGE CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-10 leading-relaxed font-sans">

        <h1 className="text-3xl font-bold mb-6">
          Agreement for <span className="text-orange-600">Accessing</span> and Using Sofood{" "}
          <span className="text-orange-600">Services</span>
        </h1>

        <p className="text-gray-700 mb-6">
          Welcome to Sofood. By accessing and using our services, you agree to comply with and be
          bound by the following terms and conditions. Please read them carefully before using our services:
        </p>

        {/* LIST SECTION */}
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">

          <li>
            <strong className="text-gray-900">Requirements & Policies:</strong>
            <p>
              You agree to adhere to all guidelines made by Sofood. Policies may be updated anytime.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Payment & Billing:</strong>
            <p>
              Charges for orders, including taxes and fees, shall be communicated at the time of checkout.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">User Conduct:</strong>
            <p>
              You agree not to misuse the services by uploading harmful content, engaging in fraud,
              or violating any applicable laws.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Intellectual Property:</strong>
            <p>
              All content, trademarks, and digital assets are owned by Sofood. You may not use or reproduce them.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Limitation of Liability:</strong>
            <p>
              Sofood is not liable for delays, errors, or damages caused beyond our control.
              Services are provided “as available.”
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Privacy Policy:</strong>
            <p>
              We respect your privacy. Any information collected is used solely for providing better services.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Termination:</strong>
            <p>
              We reserve the right to terminate access if misuse, violation, or fraud is detected.
            </p>
          </li>

        </ol>

        {/* FOOTER NOTE */}
        <p className="text-gray-700 mt-8">
          By using our services, you acknowledge that you have read and agree to our Terms & Conditions.
          If you do not agree, please refrain from using the platform.
        </p>

      </div>
    </div>
  );
}

export default Terms;
