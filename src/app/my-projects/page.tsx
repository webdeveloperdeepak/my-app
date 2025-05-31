import React from 'react';
import Image from 'next/image';
import Projects from '../components/Projects';
import Container from '../components/Container';
import type { Metadata } from 'next';

// ✅ SEO Metadata for Projects Page
export const metadata: Metadata = {
  title: "Projects | Deepak Singh | Web Developer Portfolio",
  description: "Explore the portfolio of Deepak Singh, a freelance web developer based in Greater Noida. See custom websites, responsive designs, e-commerce platforms, and more.",
  keywords: [
    "Web Development Projects",
    "Deepak Singh Portfolio",
    "Freelance Web Developer Projects",
    "Web Design Projects",
    "Custom Website Portfolio",
    "Freelance Developer Work",
    "Web Applications",
    "E-commerce Websites",
    "Frontend Projects",
    "Backend Projects",
    "Next.js Portfolio",
    "React Developer Projects",
    "JavaScript Developer Projects",
    "Web Design India",
    "Web Development Greater Noida",
    "UI/UX Portfolio",
    "Freelance Developer India",
    "Full Stack Developer Projects",
    "Responsive Website Examples"
  ],
  openGraph: {
    title: "Projects | Deepak Singh | Web Developer & Designer",
    description:
      "A showcase of web development projects by Deepak Singh — including responsive sites, full-stack applications, and modern UI/UX implementations.",
    url: "https://www.webdeveloperdeepak.com/projects",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
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
    description:
      "Browse real-world web projects created by Deepak Singh, freelance developer from Greater Noida, India.",
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
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
  },
};

const MyProjects: React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in Greater Noida"
        src="/images/inrBnr.png"
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
