import React from "react";
import Link from "next/link";
import Button from "./Button";

function PromoProducts() {
  return (
    <section className=" py-20 bg-[#E7ECEE]" id="projects">
      {/* Products */}
      <div className="max-w-screen-xl py-0 px-8 my-0 mx-auto grid grid-rows-2 md:grid-cols-2 items-center gap-x-24 gap-y-36 ">
        {/* Product 1 */}
        {/* Left */}
        <div className="md:order-none order-1 relative flex items-center justify-center">
          <div className="absolute h-52 w-[432px] bg-gradient-to-r from-pink-100 to-violet-100 blur-xl"></div>
          <div className="z-10">
            <img src="/imac.png" alt="" />
          </div>
        </div>
        {/* Right */}
        <div className="max-w-md md:order-none order-2 -mt-24 md:mt-0">
          <span className="uppercase px-4 py-2 text-xs font-bold font-poppins bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent shadow-md">
            We Offer
          </span>
          <h2 className="max-w-lg text-2xl font-semibold text-left text-black font-poppins lg:text-4xl lg:text-left mt-5 mb-4">
            Awesome in any space. Perfectly Blend in your life.
          </h2>
          <p
            className="font-poppins text-base tracking-wide text-[#64646B] mb-4
      "
          >
            Designed to take full advantage of next-level performance and
            special technologies such as the advanced image signal processor and
            integrated memory architecture.
          </p>
          <div className="flex items-center justify-start w-full space-x-4 mt-6">
            <div className="space-x-8 font-poppins">
              <Button title="Buy Now" />
              <a className="link font-semibold">Learn More</a>
            </div>
          </div>
        </div>
        {/* Project 2 */}

        {/* Right */}
        <div className="max-w-md md:order-none order-2 -mt-24 md:mt-0">
          <span className="uppercase px-4 py-2 text-xs font-bold font-poppins bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent shadow-md">
            We Offer
          </span>
          <h2 className="max-w-lg text-2xl font-semibold text-left text-black font-poppins lg:text-4xl lg:text-left mt-5 mb-4">
            Awesome in any space. Perfectly Blend in your life.
          </h2>
          <p
            className="font-poppins text-base tracking-wide text-[#64646B] mb-4
      "
          >
            Designed to take full advantage of next-level performance and
            special technologies such as the advanced image signal processor and
            integrated memory architecture.
          </p>
          <div className="flex items-center justify-start w-full space-x-4 mt-6">
            <div className="space-x-8 font-poppins">
              <Button title="Buy Now" />
              <a className="link font-semibold">Learn More</a>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className="md:order-none order-1 relative flex items-center justify-center">
          <div className="absolute h-52 w-[432px] bg-gradient-to-r from-pink-100 to-violet-100 blur-xl"></div>
          <div className="z-10">
            <img src="/ipad.png" alt="" className="h-[400px]" />
          </div>
        </div>
        {/* Project 3 */}
        {/* Left */}
        <div className="md:order-none order-1 relative flex items-center justify-center">
          <div className="absolute h-52 w-[432px] bg-gradient-to-r from-pink-100 to-violet-100 blur-xl"></div>
          <div className="z-10">
            <img src="/iphone1.png" alt="" className="h-[500px]" />
          </div>
        </div>
        {/* Right */}
        <div className="max-w-md md:order-none order-2 -mt-24 md:mt-0">
          <span className="uppercase px-4 py-2 text-xs font-bold font-poppins bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent shadow-md">
            We Offer
          </span>
          <h2 className="max-w-lg text-2xl font-semibold text-left text-black font-poppins lg:text-4xl lg:text-left mt-5 mb-4">
            Awesome in any space. Perfectly Blend in your life.
          </h2>
          <p
            className="font-poppins text-base tracking-wide text-[#64646B] mb-4
      "
          >
            Designed to take full advantage of next-level performance and
            special technologies such as the advanced image signal processor and
            integrated memory architecture.
          </p>
          <div className="flex items-center justify-start w-full space-x-4 mt-6">
            <div className="space-x-8 font-poppins">
              <Button title="Buy Now" />
              <a className="link font-semibold">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoProducts;
