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

const Footer: React.FC = () => {
  return (
    <div >
      <Container>
          <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-9 md:p-0 gap-9 w-full ">
          {/* About Column */}
          <div className="flex flex-col">
            <h3 className="footer-heading">About</h3>
            <p className="text-md text-justify ">
              I am a web developer & designer with a knack for creating dynamic and responsive web applications. 
            </p>
          </div>
          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm hover:text-white">
                About Me
              </Link>
              <Link href="/contact" className="text-sm hover:text-white">
                Contact Me
              </Link>
              <Link href="/my-projects"  className="text-sm hover:text-white">
                My Projects
              </Link>
            </div>
          </div>
          {/* Social Links Column */}
          <div className="flex flex-col">
            <h3 className="footer-heading">Social Links</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Linkedin size={18} />
                <Link href="https://www.linkedin.com/in/webdeveloperdeepak/" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Facebook size={18} />
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Instagram size={18} />
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Column */}
          <div className="flex flex-col">
            <h3 className="footer-heading">Contact</h3>
            <div className="space-y-2">           
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Phone size={18} /> 
                <a href="tel:+917607146249">Call Us: +91-7607146249</a>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white">
                <Mail size={18} /> 
                <a href="mailto:info@webdeveloperdeepak.com">Email Us: info@webdeveloperdeepak.com</a>
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
