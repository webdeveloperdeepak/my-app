import React from 'react';
import Image from 'next/image';
import Projects from '../components/Projects';
import Container from '../components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Deepak Singh | Web Developer & Designer",
  description: "Explore the portfolio of Deepak Singh, a freelance web developer based in Greater Noida. See custom websites, responsive designs, e-commerce platforms, and more.",
  keywords: [
    "web developer deepak",
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
    "Responsive web designing services in india.",
    "best digital marketing services in India.",
    "freelance MERN-Stack Developer in India.",
    "seo services in greater noida open now.",
    "online appointments seo services in greater noida.",
    "top rated seo services in greater noida."
  ],
  openGraph: {
    title: "Projects | Deepak Singh | Web Developer & Designer",
    description:"Explore web development projects by Deepak Singh, featuring responsive websites, full-stack apps, and modern UI/UX designs for clients in India and worldwide.",
    url: "https://www.webdeveloperdeepak.com/projects",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/deepaksingh-webdeveloper.png",
        width: 1200,
        height: 630,
        alt: "Deepak Singh Web Developer Project Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Deepak Singh | Freelance Web Developer",
    description:"Explore web development projects by Deepak Singh, featuring responsive websites, full-stack apps, and modern UI/UX designs for clients in India and worldwide.",
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/deepaksingh-webdeveloper.png",
        alt: "Web Development Projects by Deepak Singh",
      },
    ],
  },
  alternates: {
    canonical: "https://www.webdeveloperdeepak.com/projects",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    notranslate: false,
  },
};

const MyProjects: React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in Greater Noida"
        src="/inrBnr.png"
        width={1520}
        height={350}
      />
      <Container>
        <Projects />
      </Container>
    </div>
  );
};

export default MyProjects;
