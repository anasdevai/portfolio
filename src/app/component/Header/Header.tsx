"use client"
import React from 'react'
import Link from 'next/link'
 import { useState,useEffect } from 'react'
export default function Header() {
    const [select , setSelect] =useState(0)
    const [isOpen , setIsOpen] = useState<Boolean>(false)
    const [isScrolled , setIsScrolled] = useState<Boolean>(false)

    useEffect(()=>{
        const handleScroll=()=>{
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setIsScrolled(scrollTop >0)
        }   
        window.addEventListener("scroll" ,handleScroll)
        return()=>{
            window.addEventListener("scroll", handleScroll)
        }
    },[])
    console.log(isScrolled)
  return (
    <>
    <header className={`${isScrolled? "headerShoe" : ""} fixed top-0 z-50 transition-all duration-500 w-full rounded-b-lg`}
    style={{
        background: isScrolled? "#fff" : "transparent",
        boxShadow: isScrolled? "#48AFDE -10px 25px 50px 10px" : ""
    }}>
        <nav className='invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto    '>
            <ul className='flex flex-row items-center h-24'>
                <li className='grouped text-2xl relative mr-20 font-bold justify-between'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li  className='grouped text-2xl relative mr-20 font-bold justify-between hover:text-[#145353f8]' >
                <span></span>
                    <Link href={'/#portfolio'}>Portfolio</Link>
                </li >
                <li  className='grouped text-2xl relative mr-20 font-bold justify-between'>
                    <span></span>
                <Link href={'/ContactUs'}>Contact-Us</Link>
                </li>
                <li  className='grouped text-2xl relative mr-20 font-bold justify-between'>
                    <span></span>
                <Link href={'#About'}>Aboutus</Link>
                </li>
            </ul>

        </nav>
    </header>
    </>
  )
}
