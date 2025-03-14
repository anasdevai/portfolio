import React from "react";
import HomeComponent from "./component/HomeComponent/HomeComponent";
import { Slider } from "./projects/page";
import Aboutus from "./component/AboutUs/Aboutus";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div
        id="portfolio"
        className="pt-5 pb-20"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #EEF7FB 0%, white 45%, white 100%)",
          width: "100%",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          {/* Portfolio title enlarged on larger screens */}
          <p
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[12rem] 2xl:text-[14rem] text-[#ececec] font-bold max-w-4xl w-full"
            style={{ transform: "translateY(20px)" }}
          >
            Portfolio
          </p>
          <div className="mt-10" style={{ transform: "translateY(-100px)" }}>
            <p className="text-[#16b7cc] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Recent Works
            </p>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-[#47626D] leading-8 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus accusantium est fugiat eligendi ad officiis ullam
              repudiandae, corrupti mollitia sunt distinctio neque animi? Veniam
              voluptatem, quidem nisi libero atque accusantium?
            </p>
          </div>
        </div>
        <div className="mb-32 mt-10">
          <Slider />
        </div>
      </div>
      <Aboutus />
    </main>
  );
}
