import React from 'react';
import Image from 'next/image';
import Contact from '../components/Contact';
import Container from '../components/Container';
import type { Metadata } from 'next';

// ✅ SEO Metadata for Contact Page
export const metadata: Metadata = {
  title: "Contact | Deepak Singh | Freelance Web Developer in Greater Noida",
  description:
    "Get in touch with Deepak Singh, a freelance web developer and designer in Greater Noida, India. Let's discuss your website, portfolio, or e-commerce project.",
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
    title: "Contact Deepak Singh | Web Developer & Designer",
    description:"Freelance web developer Deepak Singh offers custom, responsive, and SEO-friendly web design and development services in Greater Noida, India, and worldwide.",
    url: "https://www.webdeveloperdeepak.com/contact",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
        width: 1200,
        height: 630,
        alt: "Contact Deepak Singh - Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Deepak Singh | Freelance Web Developer",
    description:"Freelance web developer Deepak Singh offers custom, responsive, and SEO-friendly web design and development services in Greater Noida, India, and worldwide.",
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
        alt: "Contact Freelance Web Developer - Deepak Singh",
      },
    ],
  },
  alternates: {
    canonical: "https://www.webdeveloperdeepak.com/contact",
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

const ContactUs: React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in Greater Noida"
        src="/images/inrBnr.png"
        width={1520}
        height={350}
      />
      <Container>
        <Contact />
      </Container>
    </div>
  );
};

export default ContactUs;
