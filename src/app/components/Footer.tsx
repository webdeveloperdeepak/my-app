"use client";
import Link from "next/link";
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Container from "./Container";
import { BsYoutube } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div >
      <Container>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-9 md:p-0 gap-9 w-full ">
          {/* About Column */}
          <div className="flex flex-col">
            <h2 className="footer-heading">About</h2>
            <p className="text-md text-justify ">
              I am a Web Developer & Designer helping startups, e-commerce businesses, or personal brands Build Beautiful, Functional, and Scalable Websites.
            </p>
          </div>
          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h2 className="footer-heading">Quick Links</h2>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-white">
                Contact
              </Link>
              <Link href="/my-projects"  className="text-sm hover:text-white">
                Projects
              </Link>
            </div>
          </div>
          {/* Social Links Column */}
          <div className="flex flex-col">
            <h2 className="footer-heading">Social Links</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Linkedin size={18} />
                <Link href="https://www.linkedin.com/in/webdeveloperdeepak/" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Facebook size={18} />
                <Link href="https://www.facebook.com/webdeveloperdeepak" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Instagram size={18} />
                <Link href="https://www.instagram.com/web_developer_deepak" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <BsYoutube size={18} />
                <Link href="https://www.youtube.com/@deepakwebdeveloper" target="_blank" rel="noopener noreferrer">
                  Youtube
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Column */}
          <div className="flex flex-col">
            <h2 className="footer-heading">Contact</h2>
            <div className="space-y-2">           
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Phone size={18} /> 
                <a href="tel:+917607146249">Call: +91-7607146249</a>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Mail size={18} /> 
                <a href="mailto:info@webdeveloperdeepak.com">Email: info@webdeveloperdeepak.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <MapPin size={18} /> 
                <p>Address: Noida Extension, India.</p>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
