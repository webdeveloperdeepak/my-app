"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectData = [
  {
    title: "PDL Institute: LMS",
    image: "/pdlInstitute.jpg",
    description: `A Learning Management System enabling course management, class scheduling, user authentication, and progress tracking. Features admin permissions, reports, and user-friendly design.`,
    links: [
      { label: "Visit Website", href: "https://pdlinstitute.org" },
      {
        label: "View PDF",
        href: "https://www.canva.com/design/DAGqCinjXlM/3WR96PYZQ1R6kofYvub4rA/view?utm_content=DAGqCinjXlM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8fe9fc4095",
      },
    ],
  },
  {
    title: "Godrej Majesty: Portfolio",
    image: "/godrej_majesty.png",
    description: `Sleek and modern real estate landing page showcasing project highlights, floor plans, and contact options in a smooth, scrollable format. Designed for speed, clarity, and lead conversion.`,
    links: [
      {
        label: "Visit Website",
        href: "https://www.godrejmajesty-noida.com/",
      },
    ],
  },
  {
    title: "Carry Home: E-Commerce",
    image: "/cry.png",
    description: `A feature-rich online store with category filters, global search, admin panel, user reviews, and cart system. Built for speed, scalability, and seamless shopping experience.`,
    links: [
      {
        label: "Visit Website",
        href: "https://caryhome.vercel.app",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-9 mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-14 tracking-tight">
        My Projects
      </h1>

      <div className="flex flex-col gap-16">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/90 border border-amber-300 shadow-md rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
          >
            {/* Image */}
            <div className="overflow-hidden h-[245px] ">
              <Image
                alt={project.title}
                src={project.image}
                width={700}
                height={245}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-6 p-6">
              <div>
                <h2 className="text-2xl md:text-3xl uppercase font-bold text-amber-700 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {project.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    target="_blank"
                    className="inline-block text-center bg-amber-600 text-white px-5 py-2 rounded-md hover:bg-amber-700 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
