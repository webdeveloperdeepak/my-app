import React from 'react';
import Image from 'next/image';
import Projects from '../components/Projects';
import Container from '../components/Container';

const MyProjects : React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in  Greater Noida"
        src="/images/inrBnr.png"
        width={1520}
        height={350}
       />
       <Container>
         <Projects />
       </Container>
    </div>
  )
}

export default MyProjects;
