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
    "Contact Deepak Singh",
    "Hire Web Developer India",
    "Freelance Web Developer Contact",
    "Web Developer Greater Noida",
    "Freelance Web Design Services",
    "Custom Web Development",
    "Web Design Contact Form",
    "Hire Freelance Developer",
    "Contact Freelance Developer",
    "Reach Out Web Developer",
    "Freelancer Greater Noida",
    "Web Development Enquiry",
    "React Developer Contact",
    "Next.js Developer Hire",
    "Hire Full Stack Developer",
    "Contact Web Expert India",
    "Responsive Website Contact",
    "E-commerce Developer India"
  ],
  openGraph: {
    title: "Contact Deepak Singh | Web Developer & Designer",
    description:
      "Want to work together? Contact Deepak Singh for freelance web development, custom websites, and responsive designs.",
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
    title: "Contact Deepak Singh | Freelance Web Developer",
    description:
      "Start your web project by contacting Deepak Singh — expert in responsive, SEO-friendly website development.",
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
