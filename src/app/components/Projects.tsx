"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mb-16 p-9 w-full">
      <h1 className="h1-heading">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-9 w-full border-[1.5px] border-amber-600 shadow-lg rounded-md mb-12">
        <div className="flex items-center justify-center">
          <Image
            alt="LMS-Project"
            src="/images/pdlInstitute.jpg"
            width={600}
            height={450}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">PDL Institute: LMS</h2>
          <p className="text-justify">
            This is a Learning Management System (LMS) project that allows users
            to manage courses, enroll in classes, and track their learning
            progress. It includes features such as user authentication, course,
            batch and class creation, updation and rescheduling of classes.
            Attendance tracking, and progress monitoring.
            <br />
            <br />
            The LMS is designed to provide a seamless learning experience for
            both students and instructors, making it easy to access educational
            resources and manage learning activities.It, also, provides a
            user-friendly interface for administrators to manage the permissions
            efficiently. Administrator can generate different reports.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Link
              href="https://pdlinstitute.org"
              target="_blank"
              className="btnLeft text-center"
            >
              Visit Website
            </Link>
            <Link 
              href="/https://www.canva.com/design/DAGqCinjXlM/3WR96PYZQ1R6kofYvub4rA/view?utm_content=DAGqCinjXlM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8fe9fc4095" 
              className="btnRight text-center"
              target="_blank"
            >
              View PDF
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-9 w-full border-[1.5px] border-amber-600 shadow-lg rounded-md mb-12">
        <div className="flex items-center justify-center">
          <Image
            alt="LMS-Project"
            src="/images/godrej_majesty.png"
            width={600}
            height={450}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Godrej Majesty: Portfolio</h2>
          <p className="text-justify">
            This is a portfolio website for Godrej Majesty, crafted to showcase
            the finest in real estate living. This single-page website presents
            a sleek, user-friendly experience, offering all the essential
            details about the property — from luxurious amenities and modern
            apartment configurations to competitive pricing options.
            <br />
            <br />
            Whether you're interested in 2BHK, 3BHK, or premium residences,
            everything is organized for quick exploration. The site also
            features a seamless Contact Us section to connect potential buyers
            directly with the sales team. Built with performance and
            responsiveness in mind, this site delivers both style and function
            to elevate your property’s online presence.
          </p>
          <div className="grid grid-cols-1 gap-1">
            <Link
              href="https://www.godrejmajesty-noida.com/"
              target="_blank"
              className="btnLeft text-center"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-9 w-full border-[1.5px] border-amber-600 shadow-lg rounded-md mb-12">
        <div className="flex items-center justify-center bg-brandBlue">
          <Image
            alt="e-Commerce-Project"
            src="/images/cry.png"
            width={600}
            height={450}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Carry Home: E-Commerce</h2>
          <p className="text-justify">
            It is a feature-rich e-commerce website designed for a
            seamless shopping experience. Whether you're a customer looking for
            the perfect product or an admin managing your store, we've got
            everything you need:<br /><br />
           ✅User-Friendly Admin Panel.<br />🛍️ Add to Cart Functionality. <br />🔍 Global Product
            Search. <br />📂 Category-Wise Filtering. <br />✍️ Verified
            User Reviews. <br /><br />From browsing to buying and
            managing, this platform is built for performance, reliability, and
            ease of use.
          </p>
          <div className="grid grid-cols-1 gap-1">
            <Link
              href="https://caryhome.vercel.app"
              target="_blank"
              className="btnLeft text-center"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
