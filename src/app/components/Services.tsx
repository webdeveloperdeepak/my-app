"use client";
import React from "react";
import Container from "./Container";
import {
  FileCog,
  FileJson,
  FileSearch2,
  GlobeLock,
  Palette,
  TabletSmartphone,
} from "lucide-react";

const services = [
  {
    icon: <FileJson size={34} className="text-amber-700" />,
    title: "Custom Web Development",
    description:
      "Unlock your business potential with tailored web development solutions that drive growth, performance, and engagement.",
  },
  {
    icon: <Palette size={34} className="text-amber-700" />,
    title: "Custom Website Designing",
    description:
      "Elevate your brand with responsive, user-focused designs that captivate and convert your audience.",
  },
  {
    icon: <FileSearch2 size={34} className="text-amber-700" />,
    title: "SEO & Speed Optimization",
    description:
      "Boost your visibility, improve rankings, and grow your digital footprint with effective SEO strategies.",
  },
  {
    icon: <FileCog size={34} className="text-amber-700" />,
    title: "Web Maintenance & Support",
    description:
      "Ensure your site stays secure, fast, and updated with our dependable maintenance and support services.",
  },
  {
    icon: <GlobeLock size={34} className="text-amber-700" />,
    title: "Website Security",
    description:
      "Protect your website with advanced security and performance enhancements for a safe user experience.",
  },
  {
    icon: <TabletSmartphone size={34} className="text-amber-700" />,
    title: "Mobile App Development",
    description:
      "Bring your ideas to life on iOS and Android with powerful, user-friendly mobile applications.",
  },
];

const Services: React.FC = () => {
  return (
    <section className=" pt-12 py-24 bg-amber-100 px-9 w-full">
      <Container>
        <h2 className="h1-heading">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-amber-100">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
