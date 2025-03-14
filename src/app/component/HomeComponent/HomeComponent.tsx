'use client'
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Boy from '../../../../assets/boy (2).png'

import mongodb from '../../../../assets/mongodb.png'
import docker from '../../../../assets/docker.png'
import Slider from 'react-slick';
import  'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export default function HomeComponent() {
    
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 2000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1760,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1460,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
    
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
    
    };
    
  return (
    <>
    <div 
      style={{backgroundImage: "linear-gradient(-62deg , #16b7cc  0 50%, white 0% 100%)",
    }}
     className=' max-h-[1200px] min-h-[500px] w-[100%] h-[100%]'

   >
    <div className='container m-auto'>
        <div className='grid grid-cols-12'>
            <div className='bg-white flex flex-col justify-center col-span-12  md:col-span-5 md:bg-transparent'>
                <div className='container m-auto'>
                    <div className='lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center'>
                        <p className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl`}>Hi, There</p>
                        <h1 className='text-[black] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 
                        md:mt-3  font-bold'>I 'm M.Anas </h1>
                        <div className='text-xl font-semibold'>
                        <Typewriter
  options={{
    strings: [ 'UI/UX,'  , 'Frontend web-devloper,', 'Digital Marketer,', 'Wordpress devloper,', 'Video Editor,'],
    autoStart: true,
    loop: true,
  }} 
/>
                        </div>
                        <a  href='#portfolio' className={`inline-block bg-[#47AEDE] transition-all duration-300 ease-in-out rounded-md 
                           px-3 text-white font-bold py-1  mt-8 uppercase md:py-2 lg:py-2 lg:px-6 md:text-xs lg:text-base md:mt-5 xl:mt-10
                           hover:bg-[#223740] hover:shadow-lg hover:translate-y-1`}>Projects</a>
                            <a className={`inline-block bg-[#47AEDE] transition-all duration-300 ease-in-out rounded-md 
                           px-3 text-white font-bold py-1  mt-8 uppercase md:py-2 lg:py-2 lg:px-6 md:text-xs lg:text-base md:mt-5 xl:mt-10
                           hover:bg-[#223740] hover:shadow-lg hover:translate-y-1 ml-10 cursor-pointer`}>Resume</a>
                    </div>
                </div>
            </div>
            <div className='col-span-12 pt-[50px] md:bg-transparent bg-[white] md:[130px] md:col-span-7'>
                <div className='container m-auto '>
                    <Image src={Boy} alt='pic' 
                    width={450} height={1000} />
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div className='px-3'>
                <div className='relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl lg:px-14 overflow-auto mx-auto bg-white rounded-xl z-20'
                style={{
                    boxShadow: "#48AFDE -10px 25px 50px 10px"
                }}
                 >
                    <div className='lg:py-10 md:py-6 sm:py-6 cursor-all-scroll'>
                        <Slider {...settings}>
                        <Image src={mongodb} alt='slider1' height={40}></Image>
                        <Image src={docker} alt='slider1' height={40}></Image>
                        <Image src={docker} alt='slider1' ></Image>
                        <Image src={mongodb} alt='slider1' height={40}></Image>
                        <Image src={mongodb} alt='slider1' height={40}></Image>
                        <Image src={docker} alt='slider1' ></Image>

                    
                        </Slider>
                    </div>
                 </div>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}
