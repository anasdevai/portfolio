'use client';
import React, { useState, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall } from 'react-icons/md';
import { IoMail } from 'react-icons/io5';
import { FaUserClock } from 'react-icons/fa6';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again later.');
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later.');
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      {/* ToastContainer must be included to render the notifications */}
      <ToastContainer />

      {/* Header & Contact Info Section */}
      <div className="flex flex-col justify-center items-center pt-[80px] pb-[80px] mt-4">
        <div className="flex flex-col items-center justify-center bg-blue-600 w-full h-[400px]">
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#223740]">
            <div className="text-center bg-[#48AFDE] py-[1px] px-[12px] tracking-wide uppercase font-bold text-[20px] text-white rounded-lg">
              <a href="#contact" className="cursor-pointer">
                Contact me
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="text-4xl text-[#48AFDE] p-2 text-center tracking-wide font-bold">
                Hire me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px]">
              <p className="text-center text-white font-[400] text-xl">
                Are you looking for responsible, professional full-stack developer
                and designer for your website or web application?
              </p>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[50px]">
              {/* Location Card */}
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4"
                style={{ boxShadow: '#48AFDE 1px 1px 10px 0px' }}
              >
                <div className="flex items-center gap-[15px] pl-7">
                  <FaLocationDot size={40} color="#48AFDE" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#48AFDE] text-[16px]">Location...</p>
                </div>
                <div className="font-semibold tracking-wide text-[20px]">
                  <p>Visit Us At</p>
                </div>
              </div>
              {/* Phone Card */}
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4"
                style={{ boxShadow: '#48AFDE 1px 1px 10px 0px' }}
              >
                <div className="flex items-center gap-[15px] pl-9">
                  <MdCall size={40} color="#48AFDE" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#48AFDE] text-[16px] ml-3">Phone Number</p>
                </div>
                <div className="font-semibold tracking-wide text-[16px]">
                  <p>+92 3202031783</p>
                </div>
              </div>
              {/* Email Card */}
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4"
                style={{ boxShadow: '#48AFDE 1px 1px 10px 0px' }}
              >
                <div className="flex items-center gap-[15px] pl-7">
                  <IoMail size={40} color="#48AFDE" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#48AFDE] text-[16px]">EMAIL</p>
                </div>
                <div className="font-bold tracking-wide text-[10px]">
                  <p>
                    anasahmed <br />
                    ahmed378@gmail.com
                  </p>
                </div>
              </div>
              {/* Timing Card */}
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:translate-y-4"
                style={{ boxShadow: '#48AFDE 1px 1px 10px 0px' }}
              >
                <div className="flex items-center gap-[15px] pl-7">
                  <FaUserClock size={40} color="#48AFDE" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#48AFDE] text-[16px]">Opening timing</p>
                </div>
                <div className="font-semibold tracking-wide text-[20px] pl-6">
                  <p>24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-52 max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-[#48AFDE] mb-8">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#48AFDE] text-white font-medium rounded-md hover:bg-[#328bb4] transition-colors"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
        )}
      </div>
    </>
  );
};

export default ContactUs;
