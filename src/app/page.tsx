import React from "react";
import HomeComponent from "./component/HomeComponent/HomeComponent";
import { Slider } from "./projects/page";
import Aboutus from "./component/AboutUs/Aboutus";


export default function Home() {
  return (
   <main className="min:h-screen relative">
    <HomeComponent/>
    <div id="portfolio" 
    className="mt-0 pt-5 -mb-40"
    style={{backgroundImage: "linear-gradient(-62deg , #EEF7FB 0 45%, white 0% 100%)",
      width: "100%"
    }}>
      <div className="container m-auto">
        <p className="text-[300px] text-[#ececec]  md:pl-[50px] px-5 max-w-[750px] w-[100px] font-bold "
        style={{
          transform:"translate(0px, 20px)"}}>Portfolio</p>
         <div style={{ transform: "translate(0px , -250px)"}}>
         <p className="text-[#16b7cc] md:pl-[80px] px-5 font-extrabold text-5xl">Recent Works</p>
          <p className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#47626D] leading-8 mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusantium est fugiat eligendi ad officiis ullam repudianda
            e, corrupti mollitia sunt distinctio
             neque animi? Veniam voluptatem, quidem nisi
              libero atque accusantium?
          </p>
         </div>
      </div>
      <div className="mb-32">
        <Slider/>
      </div>
    </div>
    <Aboutus/>
    
    </main>
  
  );
}
