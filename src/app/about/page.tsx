import React from "react";
import AboutMe from "../components/About";
import Image from "next/image";
import Container from "../components/Container";
import SkillSets from "../components/SkillSets";
import Domains from "../components/Domains";

const About: React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in  Greater Noida"
        src="/images/inrBnr.png"
        width={1520}
        height={350}
      />
      <Container>
        <AboutMe />
        <SkillSets />
        <Domains />
      </Container>
    </div>
  );
};

export default About;
