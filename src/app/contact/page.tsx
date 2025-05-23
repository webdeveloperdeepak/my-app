import React from 'react'
import Image from 'next/image'
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Footer from '../components/Footer';

const ContactUs : React.FC = () => {
  return (
    <div>
      <NavBar />
      <Image
        alt="web-development-services in  Greater Noida"
        src="/images/inrBnr.png"
        width={1520}
        height={350}
      />
      <Container>
        <Contact />
      </Container>
      <Footer/> 
    </div>
  )
}

export default ContactUs;