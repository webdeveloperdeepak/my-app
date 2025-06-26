'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { Menu, X } from 'lucide-react'; 

const NavBar : React.FC = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <Container>
        <nav className="relative flex justify-between items-center bg-white p-4 w-full">
          {/* Logo and Name */}
          <Link className="flex items-center space-x-4" href="/">
            <Image
              alt="Deepak Singh - Web Developer"
              src="/deepak-singh.jpg"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1 className="hidden title-style md:block text-lg font-semibold ">
              Deepak Singh | Web Developer & Designer
            </h1>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="menuItem">Home</Link>
            <Link href="/about" className="menuItem">About</Link>
            <Link href="/my-projects" className="menuItem">Projects</Link>
            <Link href="/contact" className="menuItem">Contact</Link>
          </div>
          {/* ✅ Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-700 p-2 border border-gray-300 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {
              isOpen && (
                <div className={`absolute top-[92px] right-0 p-4 z-10 w-full bg-[linear-gradient(to_right,_#8B4513,_#FFD700)] transform transition-transform duration-1000 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                  <div className="flex flex-col text-center">
                    <Link href="/" className="menuItem" onClick={toggleMenu}>Home</Link>
                    <Link href="/about" className="menuItem" onClick={toggleMenu}>About</Link>
                    <Link href="/my-projects" className="menuItem" onClick={toggleMenu}>Projects</Link>
                    <Link href="/contact" className="menuItem" onClick={toggleMenu}>Contact</Link>
                  </div>
                </div>
              )
            }
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default NavBar;
