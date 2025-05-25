"use client";
import React from 'react';
import Image from 'next/image';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { FaUserCircle } from 'react-icons/fa';
import { GrBlog } from 'react-icons/gr';

const Domains = () => {

  return (
    <div className='mb-16'>
      <h1 className='h1-heading'>Domains of Expertise</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 p-9 w-full'>
        <div className='service-card'>
            <div className="circle-style">
              <MdOutlineLocalGroceryStore size={34} className='text-amber-600'/>
            </div>
            <h2 className="text-lg text-center uppercase font-semibold rounded-md">
              e-Commerce Web Solutions
            </h2>
        </div>
        <div className='service-card'>
            <div className="circle-style">
              <PiStudentBold  size={34} className='text-amber-600'/>
            </div>
            <h2 className="text-lg text-center uppercase font-semibold rounded-md">
              e-Learning Web Solutions
            </h2>
        </div>
        <div className='service-card'>
            <div className="circle-style">
              <FaUserCircle  size={34} className='text-amber-600'/>
            </div>
            <h2 className="text-lg text-center uppercase font-semibold rounded-md">
              Portfolio Website
            </h2>
        </div>
        <div className='service-card'>
            <div className="circle-style">
              <GrBlog  size={34} className='text-amber-600'/>
            </div>
            <h2 className="text-lg text-center uppercase font-semibold rounded-md">
              Blogging Website
            </h2>
        </div>
      </div>
    </div>
  )
}

export default Domains;
