import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';

const About : React.FC = () => {
  return (
    <div>
      <NavBar />
      <Image
        alt="web-development-services in  Greater Noida"
        src="/images/inrBnr.png"
        width={1520}
        height={350}
       />
    </div>
  )
}

export default About;
