import React from "react";

const GetInvolved = () => {
  return (
    <section className="bg-gradient-to-b from-purple-200 to-orange-100 py-10 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        {/* Left Side - Heading and Description */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How to get Involved?</h2>
          <p className="text-lg text-gray-700">Excited? We are too! Joining Yuvoice is simple</p>
        </div>

        {/* Right Side - List of Options */}
        <div className="lg:w-1/2">
          <ul className="space-y-4">
            <li className="text-purple-600 font-semibold">
              <a href="#" className="no-underline">Check our Open Roles:</a>
              <span className="text-gray-700 font-normal"> From content creation to tech innovation, there's something for everyone.</span>
            </li>
            <li className="text-purple-600 font-semibold">
              <a href="#" className="no-underline">Apply from Anywhere:</a>
              <span className="text-gray-700 font-normal"> We’re fully remote; you can volunteer from the comfort of your own space.</span>
            </li>
            <li className="text-purple-600 font-semibold">
              <a href="#" className="no-underline">Start Making a Difference:</a>
              <span className="text-gray-700 font-normal"> Join a community of changemakers and start creating impact today.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;

