"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle link clicks and close sidebar
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          isScrolled ? "headerShoe" : ""
        } fixed top-0 z-50 transition-all duration-500 w-full rounded-b-lg`}
        style={{
          background: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : "",
        }}
      >
        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto">
          <ul className="flex flex-row items-center h-24">
            <li className="grouped text-2xl relative mr-20 font-bold justify-between">
              <Link href="/">Home</Link>
            </li>
            <li className="grouped text-2xl relative mr-20 font-bold justify-between hover:text-[#145353f8]">
              <span></span>
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li className="grouped text-2xl relative mr-20 font-bold justify-between">
              <span></span>
              <Link href="/ContactUs">Contact-Us</Link>
            </li>
            <li className="grouped text-2xl relative mr-20 font-bold justify-between">
              <span></span>
              <Link href="/#About">Aboutus</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile toggle button (visible only on mobile) */}
        <div className="xl:hidden absolute right-4 top-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar (only for mobile devices) */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-40">
          {/* Overlay to close sidebar */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FiX className="text-2xl text-gray-600" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <ul className="space-y-6">
                  <li>
                    <Link 
                      href="/" 
                      onClick={handleLinkClick}
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-[#145353f8] transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 cursor-pointer w-full"
                    >
                      <span className="mr-3">🏠</span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#portfolio" 
                      onClick={handleLinkClick}
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-[#145353f8] transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 cursor-pointer w-full"
                    >
                      <span className="mr-3">💼</span>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/ContactUs" 
                      onClick={handleLinkClick}
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-[#145353f8] transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 cursor-pointer w-full"
                    >
                      <span className="mr-3">📞</span>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#About" 
                      onClick={handleLinkClick}
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-[#145353f8] transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 cursor-pointer w-full"
                    >
                      <span className="mr-3">ℹ️</span>
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
              
              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-500">
                  <p>© 2024 Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
