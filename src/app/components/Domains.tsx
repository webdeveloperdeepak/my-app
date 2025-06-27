import React from 'react';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { FaUserCircle } from 'react-icons/fa';
import { GrBlog } from 'react-icons/gr';

const domainsData = [
  {
    title: "e-Commerce Web Solutions",
    icon: <MdOutlineLocalGroceryStore size={34} className="text-amber-600" />,
  },
  {
    title: "e-Learning Web Solutions",
    icon: <PiStudentBold size={34} className="text-amber-600" />,
  },
  {
    title: "Portfolio Website",
    icon: <FaUserCircle size={34} className="text-amber-600" />,
  },
  {
    title: "Blogging Website",
    icon: <GrBlog size={34} className="text-amber-600" />,
  },
];

const Domains = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mb-20">
      <h1 className="h1-heading">
        Domains of Expertise
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {domainsData.map((domain, index) => (
          <div
            key={index}
            className="group bg-white border border-amber-100 shadow-md rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-amber-100 mb-4 group-hover:bg-amber-200 transition-colors duration-300">
              {domain.icon}
            </div>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800 group-hover:text-amber-700 transition-all duration-300">
              {domain.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
