"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [select, setSelect] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
              <Link href="#About">Aboutus</Link>
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
          <div
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 transform"
            // No additional styling changes—just the sidebar container
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Menu</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" onClick={() => setIsOpen(false)}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/ContactUs" onClick={() => setIsOpen(false)}>
                    Contact-Us
                  </Link>
                </li>
                <li>
                  <Link href="#About" onClick={() => setIsOpen(false)}>
                    Aboutus
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Overlay to close sidebar */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
