import React from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorAnimation from "../animations/error.json";
import Button from "./Button";

const ErrorComponent = () => {
  const router = useRouter();
  return (
    <div className="h-screen -mb-20 flex flex-col items-center justify-center -space-y-8 md:-space-y-20 font-poppins">
      <div className="relative items-center justify-center hidden md:flex mb-8">
        <div className="absolute h-52 w-[432px] bg-gradient-to-r from-pink-100 to-violet-100 blur-xl"></div>
        <Lottie
          play
          loop
          animationData={ErrorAnimation}
          style={{ height: "450px", width: "450px" }}
        ></Lottie>
      </div>
      {/* ----Image for Below md size --- */}
      <div className=" relative flex items-center justify-center md:hidden">
        <div className="absolute h-52 w-[432px] bg-gradient-to-r from-pink-100 to-violet-100 blur-xl"></div>
        <Lottie
          play
          loop
          animationData={ErrorAnimation}
          style={{ height: "250px", width: "250px" }}
        ></Lottie>
      </div>
      <Button title="Return to Home" onClick={() => router.push("/")} />
    </div>
  );
};

export default ErrorComponent;
