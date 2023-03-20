import React from "react";
import Link from "next/link";

function Second() {
  return (
    <section className="py-16 bg-[#E7ECEE]" id="projects">
      {/* Heading */}
      <div className="flex max-w-screen-lg px-8 mb-24 mx-auto items-center justify-between md:mb-36">
        <span className="uppercase text-base text-[#9E9E9E] font-rubik">
          My Projects
        </span>
        <a
          href="#"
          className="px-3 py-2 text-sm font-bold text-white font-rubik rounded-md shadow-md border-2 border-[#E38445] hover:border-black hover:bg-gray-200 hover:text-[#1f1f1f]"
        >
          ALL PROJECTS
        </a>
      </div>
      {/* Projects */}
      <div className="max-w-screen-lg py-0 px-8 my-0 mx-auto grid grid-rows-2 md:grid-cols-2 items-center gap-x-24 gap-y-36">
        {/* Project 1 */}
        {/* Left */}
        <div className="md:order-none order-2 -mt-24 md:mt-0">
          <span className="uppercase px-4 text-xs font-bold font-poppins text-black bg-[#E38445] rounded-full shadow-md border-2 border-[#E38445]">
            Web Development
          </span>
          <h2 className="max-w-lg text-2xl font-semibold text-left text-white font-poppins lg:text-4xl lg:text-left mt-[0.35rem] mb-4">
            ShareMe - File Sharing App
          </h2>
          <p
            className="font-rubik text-base tracking-wider text-[#9E9E9E] mb-4
      "
          >
            We develop the best quality website that serves for the long-term.
            Well-documented, clean, easy and elegant interface helps any
            non-technical clients.
          </p>
          <div className="flex items-center justify-start mb-4 -ml-1">
            <img src="link_icon.svg" alt="" />
            <span className="font-rubik font-semibold text-base tracking-wide text-white -ml-1">
              GitHub Repo
            </span>
          </div>
          <div className="grid grid-cols-2 mb-8">
            <div className="flex flex-col gap-y-3">
              {/* Feature 1 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  NextJS
                </span>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  NodeJS
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              {/* Feature 3 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Express
                </span>
              </div>
              {/* Feature 4 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full space-x-4">
            <a
              href="https://sharefile-frontend.vercel.app/"
              target="_blank"
              className="py-2 px-3 text-sm font-bold font-rubik text-black bg-[#E38445] rounded-lg shadow-md border-2 border-[#E38445] uppercase hover:bg-[#e7965f]"
            >
              View Demo
            </a>
            <Link
              href="/error"
              className="py-2 px-3 text-sm font-bold text-white font-rubik rounded-lg shadow-md border-2 border-[#E38445] uppercase hover:border-black hover:bg-gray-200 hover:text-[#1f1f1f]"
            >
              read case study
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="md:order-none order-1 relative flex items-center justify-center">
          <div className="absolute h-52 w-[432px] bg-[#E38445]/10 blur-xl md:bg-[#E38445]/30 md:blur-xl"></div>
          <div className="z-10">
            <img src="/shareme.png" alt="" />
          </div>
        </div>
        {/* Project 2 */}
        {/* Left */}
        <div className="md:order-none order-3 relative flex items-center justify-center">
          <div className="absolute h-52 w-[432px] bg-[#E38445]/10 blur-xl md:bg-[#E38445]/30 md:blur-xl"></div>
          <div className="z-10">
            <img src="/p2.png" alt="" />
          </div>
        </div>
        {/* Right */}
        <div className="md:order-none order-4 -mt-20 md:mt-0">
          <span className="uppercase px-4 text-xs font-bold font-poppins text-black bg-[#E38445] rounded-full shadow-md border-2 border-[#E38445]">
            Machine Learning
          </span>
          <h2 className="max-w-lg text-2xl font-semibold text-left text-white font-poppins lg:text-4xl lg:text-left mt-[0.35rem] mb-4">
            Back To Life - Restore Photo
          </h2>
          <p
            className="font-rubik text-base tracking-wider text-[#9E9E9E] mb-4
      "
          >
            We develop the best quality website that serves for the long-term.
            Well-documented, clean, easy and elegant interface helps any
            non-technical clients.
          </p>
          <div className="flex items-center justify-start mb-4 -ml-1">
            <img src="link_icon.svg" alt="" />
            <span className="font-rubik font-semibold text-base tracking-wide text-white -ml-1">
              GitHub Repo
            </span>
          </div>
          <div className="grid grid-cols-2 mb-8">
            <div className="flex flex-col gap-y-3">
              {/* Feature 1 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  NextJS
                </span>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              {/* Feature 3 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Python
                </span>
              </div>
              {/* Feature 4 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Replicate AI
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full space-x-4 ">
            <a
              href="https://back-to-life-old-image-regeneration.vercel.app/"
              target="_blank"
              className="py-2 px-3 text-sm font-bold font-rubik text-black bg-[#E38445] rounded-lg shadow-md border-2 border-[#E38445] uppercase hover:bg-[#e7965f]"
            >
              View Demo
            </a>
            <Link
              href="/error"
              className="py-2 px-3 text-sm font-bold text-white font-rubik rounded-lg shadow-md border-2 border-[#E38445] uppercase hover:border-black hover:bg-gray-200 hover:text-[#1f1f1f]"
            >
              read case study
            </Link>
          </div>
        </div>
        {/* Project 3 */}
        {/* Left */}
        <div className="md:order-none order-6 -mt-20 md:mt-0">
          <span className="uppercase px-4 text-xs font-bold font-poppins text-black bg-[#E38445] rounded-full shadow-md border-2 border-[#E38445]">
            Machine Learning
          </span>
          <h2 className="max-w-lg text-2xl font-semibold text-left text-white font-poppins lg:text-4xl lg:text-left mt-[0.35rem] mb-4">
            Spam Classifier
          </h2>
          <p
            className="font-rubik text-base tracking-wider text-[#9E9E9E] mb-4
      "
          >
            We develop the best quality website that serves for the long-term.
            Well-documented, clean, easy and elegant interface helps any
            non-technical clients.
          </p>
          <div className="flex items-center justify-start mb-4 -ml-1">
            <img src="link_icon.svg" alt="" />
            <span className="font-rubik font-semibold text-base tracking-wide text-white -ml-1">
              GitHub Repo
            </span>
          </div>
          <div className="grid grid-cols-2 mb-8">
            <div className="flex flex-col gap-y-3">
              {/* Feature 1 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Python
                </span>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  StreamLit
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              {/* Feature 3 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Tensorflow
                </span>
              </div>
              {/* Feature 4 */}
              <div className="flex gap-3">
                <div className="w-7 h-7">
                  <img src="checkmark-1.svg" alt="" />
                </div>
                <span className="font-rubik text-base tracking-wider text-white">
                  Pandas
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4 justify-start">
            <Link
              href="/error"
              target="_blank"
              className="py-2 px-3 text-sm font-bold font-rubik text-black bg-[#E38445] rounded-lg shadow-md border-2 border-[#E38445] uppercase hover:bg-[#e7965f]"
            >
              View Demo
            </Link>
            <Link
              href="/error"
              className="py-2 px-3 text-sm font-bold text-white font-rubik rounded-lg shadow-md border-2 border-[#E38445] uppercase hover:border-black hover:bg-gray-200 hover:text-[#1f1f1f]"
            >
              read case study
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="md:order-none order-5 relative flex items-center justify-center">
          <div className="absolute h-52 w-[432px] bg-[#E38445]/10 blur-xl md:bg-[#E38445]/30 md:blur-xl"></div>
          <div className="z-10">
            <img src="/p3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-32 mb-16">
        <a
          href="#"
          className="py-3 px-6 text-sm font-bold text-white font-rubik rounded-lg shadow-md border-2 border-[#E38445] uppercase hover:border-black hover:bg-gray-200 hover:text-[#1f1f1f]"
        >
          See all projects
        </a>
      </div>
    </section>
  );
}

export default Second;
