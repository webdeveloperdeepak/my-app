import React from "react";
import Image from "next/image";
import AboutMe from "../components/About";
import Container from "../components/Container";
import SkillSets from "../components/SkillSets";
import Domains from "../components/Domains";
import type { Metadata } from "next";

//SEO Metadata for About Page
export const metadata: Metadata = {
  title: "About | Deepak Singh | Freelance Web Developer in Greater Noida",
  description:
    "Learn more about Deepak Singh — a freelance web developer and designer based in Greater Noida, India. Explore his skills, tech stack, and domain expertise.",
  keywords: [
    "website development services in noida",
    "website developer in greater noida",
    "web development in noida",
    "freelance web development and designing services in india",
    "website development in noida",
    "freelance web developer in india.",
    "freelance web designer in india.",
    "professiona UI/UX Designer in india.",
    "professiona website Designer in greater noida.",
    "professiona web devlopment services in india.",
    "professiona web designing services in india.",
    "professiona web devlopment services in greater noida.",
    "professiona web designing services in greater noida.",
    "Web Developer Deepak",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Custom Web Development",
    "Responsive web designing services in india.",
    "best digital marketing services in India.",
    "freelance MERN-Stack Developer in India.",
    "seo services in greater noida open now.",
    "online appointments seo services in greater noida.",
    "top rated seo services in greater noida."
  ],
  openGraph: {
    title: "About | Deepak Singh | Web Developer & Designer",
    description:"Meet Deepak Singh — an experienced freelance web developer from Greater Noida. Explore his tech skills, work history, and areas of expertise.",
    url: "https://www.webdeveloperdeepak.com/about",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
        width: 1200,
        height: 630,
        alt: "About Deepak Singh - Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Deepak Singh | Web Developer & Designer",
    description:
      "Explore the experience, skills, and journey of Deepak Singh, a freelance web developer in India.",
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
        alt: "About Deepak Singh - Web Developer Profile",
      },
    ],
  },
  alternates: {
    canonical: "https://www.webdeveloperdeepak.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const About: React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in Greater Noida"
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
