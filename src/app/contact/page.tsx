import React from 'react'
import Image from 'next/image'
import Contact from '../components/Contact';
import Container from '../components/Container';

const ContactUs : React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in  Greater Noida"
        src="/images/inrBnr.png"
        width={1520}
        height={350}
      />
      <Container>
        <Contact />
      </Container>
    </div>
  )
}

export default ContactUs;