import Image from "next/image";
import NavBar from "./components/NavBar";
import ShortIntro from "./components/ShortIntro";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyChooseMe from "./components/WhyMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <NavBar />
      <Image alt="Deepak Singh-Web Developer" src="/images/deepaksingh-webdeveloper.png" width={1520} height={820}/>
      <div className="flex flex-col bg-white py-6">
        <h1 className="h1-heading">About</h1>
        <ShortIntro />
      </div>
      <div className="flex flex-col py-6 mb-16">
        <h1 className="h1-heading">Services</h1>
        <Services />
      </div>
      <div className="flex flex-col bg-gray-100 py-6">
        <h1 className="h1-heading">Why Choose Me</h1>
        <WhyChooseMe />
      </div>
      <div className="flex flex-col bg-gray-100 pt-6 py-16">
        <h1 className="h1-heading">What Clients Say About Deepak</h1>
        <Testimonial />
      </div>
      <Footer />
      <div className="bg-white text-center py-3">
        <p className="text-gray-600 font-bold text-sm">
          All rights reserved © 2025 Deepak Singh. 
        </p>
      </div>
    </div>
  );
}
