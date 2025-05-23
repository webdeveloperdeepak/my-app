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

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16 px-4 bg-[linear-gradient(to_right,_#8B4513,_#FFD700)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About Column */}
        <div>
          <h3 className="footer-heading">About</h3>
          <p className="text-sm text-justify">
            I am a passionate web developer with a knack for creating dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills.
          </p>
        </div>
        {/* Social Links Column */}
        <div>
          <h3 className="footer-heading">Social Links</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Linkedin size={18} />
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                Linkedin
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Facebook size={18} />
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={18} />
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        {/* Contact Column */}
        <div>
          <h3 className="footer-heading">Contact</h3>
          <div className="space-y-2">           
            <div className="flex items-center gap-2">
              <Phone size={18} /> +91-7607146249
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} /> info@webdeveloperdeepak.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} /> Noida Extension, Greater Noida West, India.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
