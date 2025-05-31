import Image from "next/image";
import ShortIntro from "./components/ShortIntro";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyChooseMe from "./components/WhyMe";
import type { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {

  title: "Home | Deepak Singh | Web Developer & Designer in Greater Noida, India",
  description: "Welcome to the official portfolio of Deepak Singh — freelance web developer and designer based in Greater Noida, India. Specializing in custom, responsive, and SEO-friendly web development solutions.",
  keywords: [
    "Deepak Singh",
    "web developer deepak",
    "web designer deepak",
    "Deepak Singh web developer",
    "Deepak Singh web designer",
    "Web Developer",
    "Web Designer",
    "Freelance Web Developer",
    "Freelance Web Designer",
    "Website Developer Greater Noida",
    "Web Design Greater Noida",
    "Responsive Web Design",
    "SEO Friendly Web Design",
    "Custom Website Design",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Portfolio Website Design",
    "E-commerce Website Development",
    "Web Development India",
    "Website Redesign",
    "UI/UX Design",
    "Professional Web Services India",
    "Freelance Developer India"
  ],
  openGraph: {
    title: "Home | Deepak Singh | Web Developer & Designer in Greater Noida",
    description:"Custom websites, responsive design, and full-stack web development by Deepak Singh. Serving Greater Noida and clients across India.",
    url: "https://www.webdeveloperdeepak.com",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/deepaksingh-webdeveloper.png",
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
    description:
      "Explore the web development portfolio of Deepak Singh. Specializing in modern, fast, and responsive websites using Next.js, React, and more.",
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/deepaksingh-webdeveloper.png",
        alt: "Deepak Singh Web Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.webdeveloperdeepak.com",
  },
};

export default function Home() {
  return (
    <main>
      <Image
        alt="Deepak Singh - Freelance Web Developer in Greater Noida"
        src="/images/deepaksingh-webdeveloper.png"
        width={1520}
        height={820}
        priority
      />

      <section className="flex flex-col bg-white p-9">
        <ShortIntro />
      </section>

      <section className="flex flex-col p-9 mb-16">
        <Services />
      </section>

      <section className="flex flex-col bg-gray-100 p-9">
        <WhyChooseMe />
      </section>

      <section className="flex flex-col bg-gray-100 px-9 pt-9 pb-24">
        <Testimonial />
      </section>
    </main>
  );
}
