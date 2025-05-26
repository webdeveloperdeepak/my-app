import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "Deepak Singh | Web Developer & Designer",
  description: "Web Development & Designing Services in Greater Noida, India",
  keywords: [
    "Deepak Singh",
    "Web Developer",
    "Web Designer",
    "Freelancer",
    "Greater Noida",
    "India",
    "Web Development Services",
    "Web Design Services",
    "Freelance Web Developer",
    "Freelance Web Designer",
    "Freelance Web Development",
    "Freelance Web Design",
    "Freelance Web Development Services",
    "Freelance Web Design Services",
    "Freelance Web Development in Greater Noida",
    "Freelance Web Design in Greater Noida",
    "Freelance Web Development in India",
    "Freelance Web Design in India",
    "Freelance Web Development Services in Greater Noida",
    "Freelance Web Design Services in Greater Noida",
    "Custom Web Development Solutions",
    "Custom Web Design Solutions",
    "Responsive Web Design",
    "E-commerce Web Development",
    "E-commerce Web Design",
    "Responsive Web Development",
  ],
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Deepak Singh | Web Developer & Designer",
    description: "Web Development & Designing Services in Greater Noida, India",
    url: "https://www.webdeveloperdeepak.com",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/deepak-singh.jpg",
        width: 1200,
        height: 630,
        alt: "Deepak Singh | Web Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Singh | Web Developer & Designer",
    description: "Web Development & Designing Services in Greater Noida, India",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/deepak-singh.jpg",
        alt: "Deepak Singh | Web Developer & Designer",
      },
    ],
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    notranslate: false,    
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights />
        <div className="bg-[linear-gradient(to_right,_#8B4513,_#FFD700)] py-24">
          <Footer />
        </div>
        <div className="bg-white text-center py-3">
          <p className="text-gray-600 font-bold text-sm">
            All rights reserved © 2025 Deepak Singh. 
          </p>
        </div>
      </body>
    </html>
  );
}
