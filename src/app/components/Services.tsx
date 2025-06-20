"use client";
import React from "react";
import Image from "next/image";
import Container from "./Container";
import { FileCog, FileJson, FileSearch2, GlobeLock, Palette, TabletSmartphone } from "lucide-react";

const Services: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 w-full">
          <div className="service-card">
            <div className="circle-style">
              <FileJson size={34} className="text-amber-700" />
            </div>
            <p className="text-center">
              Unlock your business potential with our custom web development
              services—tailored solutions that drive growth, performance, and
              user engagement.
            </p>
            <h2 className="text-lg uppercase font-semibold rounded-md">
              Custom Web Development
            </h2>
          </div>
          <div className="service-card">
            <div className="circle-style">
              <Palette size={34} className="text-amber-700" />
            </div>
            <p className="text-center">
              Elevate your brand with our custom web design services,
              responsive, and user-focused designs that captivate and convert
              your audience.
            </p>
            <h2 className="text-lg uppercase font-semibold">
              Custom Website Designing
            </h2>
          </div>
          <div className="service-card">
            <div className="circle-style">
              <FileSearch2 size={34} className="text-amber-700" />
            </div>
            <p className="text-center">
              Boost your online visibility with our SEO optimization
              services—drive traffic, rank higher on search engines, and grow
              your digital presence effectively.
            </p>
            <h2 className="text-lg uppercase font-semibold">
              SEO & Speed Optimization
            </h2>
          </div>
          <div className="service-card">
            <div className="circle-style">
              <FileCog  size={34} className="text-amber-700"/>
            </div>
            <p className="text-center">
              Keep your website secure, fast, and up-to-date with our reliable
              web maintenance services—so you can focus on growing your
              business.
            </p>
            <h2 className="text-lg uppercase font-semibold">
              Web Maintenance & Support
            </h2>
          </div>
          <div className="service-card">
            <div className="circle-style">
              <GlobeLock size={34} className="text-amber-700"/>
            </div>
            <p className="text-center">
              Protect your site with our web security and
              performance services—ensuring safety, reliability, and a
              seamless user experience.
            </p>
            <h2 className="text-lg uppercase font-semibold">
              Website Security
            </h2>
          </div>
          <div className="service-card">
            <div className="circle-style">
              <TabletSmartphone size={34} className="text-amber-700"/>
            </div>
            <p className="text-center">
              Build powerful, user-friendly mobile apps with our expert
              development services—designed to bring your ideas to life on iOS
              and Android.
            </p>
            <h2 className="text-lg uppercase font-semibold">
              Mobile App Development
            </h2>
          </div>           
        </div>
      </Container>
    </div>
  );
};

export default Services;
