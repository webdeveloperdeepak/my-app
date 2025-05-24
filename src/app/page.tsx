import Image from "next/image";
import ShortIntro from "./components/ShortIntro";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyChooseMe from "./components/WhyMe";

export default function Home() {
  return (
    <div >
      <Image alt="Deepak Singh-Web Developer" src="/images/deepaksingh-webdeveloper.png" width={1520} height={820}/>
      <div className="flex flex-col bg-white p-9">
        <ShortIntro />
      </div>
      <div className="flex flex-col p-9 mb-16">
        <Services />
      </div>
      <div className="flex flex-col bg-gray-100 p-9">
        <WhyChooseMe />
      </div>
      <div className="flex flex-col bg-gray-100 px-9 pt-9 pb-24">
        <Testimonial />
      </div>
    </div>
  );
}
