import Image from "next/image";
import ShortIntro from "./components/ShortIntro";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyChooseMe from "./components/WhyMe";
import type { Metadata } from "next";
import Pricing from "./components/Pricing";

export const metadata: Metadata = {

  title: "Home | Deepak Singh | Web Developer & Designer in Greater Noida, India",
  description: "Welcome to the official portfolio of Deepak Singh — freelance web developer and designer based in Greater Noida, India. Specializing in custom, responsive, and SEO-friendly web development solutions.",
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
    title: "Home | Deepak Singh | Web Developer & Designer in Greater Noida",
    description:"Custom websites, responsive design, and full-stack web development by Deepak Singh. Serving Greater Noida and clients across India.",
    url: "https://www.webdeveloperdeepak.com",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/deepaksingh-webdeveloper.png",
        width: 1200,
        height: 630,
        alt: "Deepak Singh Web Developer Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Singh | Web Developer & Designer",
    description:"Explore the web development portfolio of Deepak Singh. Specializing in modern, fast, and responsive websites using Next.js, React, and more.",
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/deepaksingh-webdeveloper.png",
        width: 1200,
        height: 630,
        alt: "Deepak Singh Web Developer",
      },
    ],
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
  alternates: {
    canonical: "https://www.webdeveloperdeepak.com",
  },
  other: {
    "msvalidate.01": "38842424FC3619EE920EA6F59A5AF134",
  },
};

export default function Home() {
  return (
    <main >
      <Image
        alt="Deepak Singh | Freelance Web Developer in Greater Noida, India."
        src="/deepaksingh-webdeveloper.png"
        width={1520}
        height={820}
        priority
      />
      <ShortIntro />
      <Services />
      <Pricing />
      <Testimonial />
      <WhyChooseMe />
    </main>
  );
}
