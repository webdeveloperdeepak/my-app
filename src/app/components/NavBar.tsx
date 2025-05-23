"use client";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import Container from './Container';

const NavBar : React.FC = () => {
  return (
    <div>
       <Container>
          <nav className="flex justify-between items-center bg-white p-4 w-full">
            <div className="flex items-center space-x-4">
                <Image alt="Deepak Singh-Web Developer" src="/images/deepak-singh.jpg" width={60} height={60} className='rounded-full'/>
                <h1 className='title-style'>Deepak Singh | Web Developer & Designer</h1>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/" className="menuItem">Home</Link>
                <Link href="/about" className="menuItem">About</Link>
                <Link href="/my-projects" className="menuItem">Projects</Link>
                <Link href="contact" className="menuItem">Contact</Link>
            </div>
          </nav>
       </Container>
    </div>
  )
}

export default NavBar;
