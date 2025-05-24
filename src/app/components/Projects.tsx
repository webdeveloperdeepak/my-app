"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mb-16">
      <h1 className="h1-heading">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-9 w-full border-[1.5px] border-amber-600 shadow-lg rounded-md mb-12">
        <div className="flex items-center justify-center">
          <Image alt="LMS-Project" src="/images/pdlInstitute.jpg" width={600} height={450} />
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
            The LMS is designed to provide a seamless learning experience for both students and
            instructors, making it easy to access educational resources and
            manage learning activities.It, also, provides a user-friendly
            interface for administrators to manage the permissions efficiently.
            Administrator can generate different reports.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Link href="/#" className="btnLeft text-center">Visit Website</Link>
            <Link href="/#" className="btnRight text-center">View PDF</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-9 w-full border-[1.5px] border-amber-600 shadow-lg rounded-md mb-12">
        <div className="flex items-center justify-center">
          <Image alt="LMS-Project" src="/images/pdlInstitute.jpg" width={600} height={450} />
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
            The LMS is designed to provide a seamless learning experience for both students and
            instructors, making it easy to access educational resources and
            manage learning activities.It, also, provides a user-friendly
            interface for administrators to manage the permissions efficiently.
            Administrator can generate different reports.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Link href="/#" className="btnLeft text-center">Visit Website</Link>
            <Link href="/#" className="btnRight text-center">View PDF</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
