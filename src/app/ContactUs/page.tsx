'use client'
import React from 'react';
import { useState } from 'react';
import customer from '../../../assets/Customer-service.jpeg'
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaUserClock } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input_ from 'postcss/lib/input';

export default function ContactUs() {

  const [state , setState] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    subject:"",
    message:"",
  })
  const [loading , setLoading] = useState<boolean>(false)
  const handleChange=(e:any)=>{
    const key= e.target.name
    const value = e.target.value
    setState({
      ...state,
      [key]:value
    });
  };
  const handlePhoneChange =(e:any)=>{
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g , "");
    setState({...state , phoneNumber:numericValue})
  }
  const clearall =()=>{
    setState({
      name:"",
      email:"",
    phoneNumber:"",
    subject:"",
    message:""
    })
  }
  const handleSubmit =(e:any)=>{
        e.prventDefault();
        setLoading(true)
        let data ={
          ...state
        }
        fetch("/api/contact", {
          method: "POST",
          headers:{
            Accept: "application/json, text/plain, */*",
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(async(res)=>{
          setLoading(false)
          const respone = await res.json()
          if(!respone.error){
            clearall()
            toast(respone.message)
          }else{
            clearall()
            setLoading(false)
            toast("some THing went wrong")
          }
        })
        .catch((e)=>{
          setLoading(false)
          clearall()
          toast("something went wrong")
        })
      }
 

  return (
    <>
    <ToastContainer/>
    <div className='flex flex-col justify-center items-center pt-[80px] pb-[80px] mt-4]'>
        <div className='flex flex-col items-center justify-center bg-[url("../../../assets/offices.jpg") ] bg-cover bg-center w-full  h-[400px]'>
        <div className='flex flex-col items-center justify-center w-full h-full bg-[#223740]'>
          <div className='text-center bg-[#48AFDE] py-[1px] px-[12px] tracking-wide uppercase font-bold text-[20px] text-white rounded-lg'>
            <a href="#contact" className='cursor-pointer '>Contact me</a>
          </div>
          <div className='mt-[10px]'>
          <h1 className='text-4xl text-[#48AFDE]  p-2 text-center tracking-wide font-bold'>Hire me</h1>
          </div>
          <div className='flex justify-center text-center mt-[10px] md:w-[700px]'>
            <p className='text-center text-white font-[400] text-xl'>
              Are you looking for responsible, professional full-stack
              developer and desiger for your website or your web application.
            </p>
          </div>
        </div>
        </div>
        <div  className='px-[20px]'>
          <div className='sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full '>
          <div className='flex flex-col flex-1 xl:flex-row gap-[50px] '>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#48AFDE 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-7'>
                <FaLocationDot size={40} color='#48AFDE '/>
              </div>
              <div className='flex flex-col'>
                <p className='text-[#48AFDE] text-[16px]'>Location...</p>
              </div>
              <div className='font-semibold tracking-wide text-[20px]'>
                <p>Visit Us At</p>
              </div>
            </div>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#48AFDE 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-9'>
                <MdCall size={40} color='#48AFDE '/>
              </div>
              <div className='flex flex-col'>
                <p className='text-[#48AFDE] text-[16px] ml-3'>Phone Number</p>
              </div>
              <div className='font-semibold tracking-wide text-[16px] '>
                <p>+92 3202031783</p>
              </div>
            </div>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#48AFDE 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-7'>
                <IoMail size={40} color='#48AFDE '/>
              </div>
              <div className='flex flex-col'>
                <p className='text-[#48AFDE] text-[16px]'>EMAIL</p>
              </div>
              <div className='font-bold tracking-wide text-[10px]  '>
                <p>anasahmed <br />ahmed378 @gmail.com</p>
              </div>
            </div>
            <div className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4'
            style={{
              boxShadow: "#48AFDE 1px 1px 10px 0px"
            }}>
              <div className='flex items-center gap-[15px] pl-7'>
                <FaUserClock size={40} color='#48AFDE '/>
              </div>
              <div className='flex flex-col'>
                <p className='text-[#48AFDE] text-[16px]'>Opening timing</p>
              </div>
              <div className='font-semibold tracking-wide text-[20px] pl-6'>
                <p>24/7</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    <div id='form' className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px]
    m-auto'>
      <div className='hidden md:block relative w-[50%] xl:w-[50%] h-[550px] md:w-full lg:w-[50%] -ml-[30%]'>
        <Image src={customer} alt='Customer-service' className='rounded-lg ' ></Image>
      </div>
      <div className='absolute inset-0 flex flex-col gap-[20px] items-center justify-center text-white'></div>
      <div className='flex flex-col group-[20px]'>
        <div className='text-center w-[100px] bg-red-700 rounded-md'>Contact Us</div>
        <div > <p className='font-semibold'>Request a call back? feel free to contact us.</p></div>
         
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
       
            <div>
            <form
              action="https://formspree.io/f/meoqgdaa"
              method="POST"
>
            <div className="relative mb-4">
        
        <input
         type="text" id="name" 
         name="name"
         placeholder='Enter your Name'
         className="w-full
          bg-white rounded border border-gray-300
           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none
            text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div className="relative mb-4">
       
        <input type="email" id="email" name="email"
        placeholder='enter you email'
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
          focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div className="relative mb-4">
        
        <textarea id="message" name="message"
        placeholder='Enter your message'
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
         focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6
          transition-colors duration-200 ease-in-out" required></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </form>
            </div>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
        
      </div>
    </div>
    </>
  )
}
