import Image from "next/image";
import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-screen-xl items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-4xl font-semibold tracking-wide lg:text-5xl xl:text-6xl font-poppins">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-8 font-poppins">
          <Button title="Buy Now" />
          <a className="link font-semibold">Learn More</a>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[550px] lg:w-[500px]">
        <Image
          src="/iphone.png"
          fill
          style={{ objectFit: "contain" }}
          alt="iphone image"
        />
      </div>
    </section>
  );
}

export default Landing;
