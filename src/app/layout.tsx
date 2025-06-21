import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WhatsAppWidget from "./components/WhatsappWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepak Singh | Web Developer & Designer in Greater Noida, India",
  description:"Deepak Singh is a freelance web developer and designer offering custom, responsive, and SEO-friendly web development services in Greater Noida and across India.",
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
    "Freelance Developer India",
  ],
  authors: [
    {
      name: "Deepak Singh",
      url: "https://www.webdeveloperdeepak.com",
    },
  ],
  publisher: "Deepak Singh",
  creator: "Deepak Singh",
  metadataBase: new URL("https://www.webdeveloperdeepak.com"),
  alternates: {
    canonical: "https://www.webdeveloperdeepak.com",
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Deepak Singh | Web Developer & Designer",
    description:
      "Freelance web developer and designer in Greater Noida, India. Get responsive, fast, and visually appealing websites tailored for your business.",
    url: "https://www.webdeveloperdeepak.com",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/deepak-singh.jpg",
        width: 1200,
        height: 630,
        alt: "Deepak Singh Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Singh | Freelance Web Developer & Designer in India",
    description:
      "Offering high-quality web development and design services to businesses and individuals in Greater Noida and across India.",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/deepak-singh.jpg",
        alt: "Deepak Singh Web Developer Twitter Preview",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
        <WhatsAppWidget />
        <div className="bg-white text-gray-600 font-bold text-sm text-center py-3"> 
            © {new Date().getFullYear()} Deepak Singh | Web Developer & Designer
            . All rights reserved.
        </div>
      </body>
    </html>
  );
}
