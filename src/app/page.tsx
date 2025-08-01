"use client";

import { useState } from "react";
import HomeComponent from "./component/HomeComponent/HomeComponent";
import Aboutus from "./component/AboutUs/Aboutus";
import SlidersPage from "./projects/page";
import ChatWindow from "./component/ChatWindow";
// Import a logo/icon from react-icons
import { IoChatbubbles } from "react-icons/io5";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      {/* Your existing page */}
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
            </p>
          </div>
        </div>
        <div className="mb-32 mt-10">
          <SlidersPage />
        </div>
      </div>

      <Aboutus />

      {/* Chat toggle logo/button */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition p-2 sm:p-3 lg:p-4"
        aria-label="Chat"
      >
        {/* Use the imported logo/icon and make it responsive */}
        <IoChatbubbles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
      </button>

      {/* Chat overlay */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 w-full sm:w-80 md:w-96 h-4/5 sm:h-[500px] md:h-[600px] z-50">
          <div className="relative w-full h-full">
            {/* Close button */}
            <button
              onClick={() => setChatOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg sm:text-xl"
              aria-label="Close chat"
            >
              ✕
            </button>
            {/* Your ChatWindow */}
            <ChatWindow />
          </div>
        </div>
      )}
    </main>
  );
}
