import React from "react";
import banner from "../assets/images/banner2.webp";
function Privacy() {
  return (
    <>
    {/* breadcrum menu */}
                         <div
                           className="flex items-center gap-2 text-gray-600 text-sm w-full h-96 bg-cover bg-center"
                           style={{ backgroundImage: `url(${banner})` }}>
                            <div className="ml-56 ">
                              <h1 className="text-[48px] text-white font-serif">PRIVACY POLICY</h1>
                              <br />
                              <span className=" text-gray-400 font-serif">Home</span>
                              <span className="text-gray-400">/</span>
                              <span className="text-orange-600 font-medium">PRIVACY POLICY</span>
                            </div>
                          </div>
    <div className="w-full bg-white py-12 px-6 flex justify-center">
      <div className="max-w-4xl">

        {/* SMALL HEADER */}
        <div className="w-12 h-1 bg-orange-600 "></div>
        <h4 className="text-xs tracking-widest text-gray-500 font-semibold mb-3">
          PRIVACY POLICY
        </h4>

        {/* MAIN TITLE */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
          Your <span className="text-orange-600">Privacy Matters</span> at Sofood
        </h1>

        {/* INTRO PARAGRAPH */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Your privacy is important to us at Sofood. This Privacy Policy outlines how we collect, use, 
          and safeguard your personal information when you use our website or services. 
          By accessing and utilizing our services, you consent to the practices described in this policy.
        </p>

        {/* NUMBERED LIST SECTION */}
        <ol className="list-decimal pl-6 space-y-5 text-gray-700">

          <li>
            <strong className="text-gray-900">Information Collection:</strong>
            <p>
              We may collect personal information, including (but not limited to) your name, contact details, 
              and preferences, to enhance your experience with Sofood services.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Use of Information:</strong>
            <p>
              The information collected is used for legitimate purposes, improving our services, 
              and personalizing your interaction with Sofood.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Security:</strong>
            <p>
              We employ industry-standard security measures to protect your personal information. 
              However, no electronic transmission or storage is completely secure, 
              and we cannot guarantee absolute data security.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Cookies:</strong>
            <p>
              Sofood uses cookies to enhance your browsing experience. You have the option to disable cookies, 
              but doing so may affect the functionality of certain parts of the website.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Third-Party Services:</strong>
            <p>
              Our website may contain links to external websites. We are not responsible for the content 
              or privacy practices of these third-party sites.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Children’s Privacy:</strong>
            <p>
              Sofood does not knowingly collect personal information from children under the age of 13. 
              If you believe such data has been provided to us unintentionally, please contact us, 
              and we will take appropriate action.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Changes to This Policy:</strong>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. 
              Changes will be effective immediately upon posting on the website.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Your Choices:</strong>
            <p>
              You have the right to access, correct, or delete your personal information. 
              If you wish to exercise any of these rights, please contact us.
            </p>
          </li>

          <li>
            <strong className="text-gray-900">Contact Us:</strong>
            <p>
              For inquiries or concerns regarding this Privacy Policy, please reach out to our 
              customer support team. We are dedicated to ensuring your information is handled responsibly.
            </p>
          </li>

        </ol>

      </div>
    </div>
    </>
  );
}

export default Privacy;
