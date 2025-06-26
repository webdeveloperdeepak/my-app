import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";


const AboutMe : React.FC = () => {

  return (
    <div>
      <h1 className="h1-heading mt-9">About Deepak</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-9 w-full">
          <div className="flex flex-col text-justify">
            <p>
              I'm Deepak Singh, a Web Developer and Designer with a strong focus on crafting custom, responsive,
              and user-centric web applications. I specialize in turning ideas
              into seamless digital experiences by combining clean code, modern
              design principles, and scalable architecture. 
              <br/>
              <br/>
              With several years of hands-on experience in full-stack development, I’ve built a
              diverse range of projects—from dynamic dashboards and admin panels
              to fully functional e-commerce platforms and LMS Web applications.<br/>
              <br/>What sets
              me apart is my dual strength in both development and design. I
              have a deep appreciation for aesthetics, usability, and clean
              interfaces—paired with the technical skill to build fast,
              reliable, and scalable applications. 
              <br/>
              <br/>
              Whether working independently or as part of a collaborative team, I’m dedicated to delivering
              solutions that not only look great but also solve real problems
              and drive results. I'm always eager to learn, explore new
              technologies, and take on exciting challenges that push the
              boundaries of what the web can do.
            </p>
            <h2 className="text-2xl mt-6 font-bold italic">Social Profiles:</h2>
            <div className="mt-3 flex gap-4">
              <Link
                href="https://www.linkedin.com/in/webdeveloperdeepak"
                className="border-[1.5px] border-amber-700 p-3 rounded-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="text-2xl text-amber-700 hover:text-blue-900" />
              </Link>
              <Link
                href="https://github.com/webdeveloperdeepaksingh"
                className="border-[1.5px] border-amber-700 p-3 rounded-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                title="Github Profile"
              >
                <FaGithub className="text-2xl text-amber-600 hover:text-black " />
              </Link>
              <Link
                href="/my-projects"
                title="My Projects"
                className="border-[1.5px] border-amber-700 p-3 rounded-md hover:shadow-lg"
              >
                <GrProjects  className="text-2xl text-amber-500 hover:text-pink-600" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center rounded-md">
            <Image
              alt="About Deepak Singh-Web Devloper & Designer"
              src="/deepak-singh.jpg"
              width={600}
              height={600}
            />
          </div>
        </div>
    </div>
  )
}

export default AboutMe;