"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "./Container";

const ShortIntro: React.FC = () => {
  const router = useRouter();

  return (
    <section className="pt-9 pb-24 bg-white px-9 w-full">
      <Container>
        <h1 className="h1-heading">Professional Web Development Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
            <Image
              alt="Deepak Singh - Web Developer"
              src="/deepak-singh.jpg"
              width={600}
              height={600}
              className="rounded-2xl shadow-md object-cover w-full max-h-[400px] md:max-h-[500px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-700">
              Hi, I'm Deepak Singh
            </h2>

            <p className="text-lg leading-relaxed text-justify mb-4">
              I'm a MERN-Stack Web Developer focused on building dynamic,
              responsive, and impactful applications. My goal is to blend clean
              code with modern design to deliver fast and user-friendly
              experiences.
            </p>

            <p className="text-lg leading-relaxed text-justify mb-4">
              I specialized in technologies like <strong>React</strong>,{" "}
              <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>Tailwind CSS</strong>, and I’m always pushing my limits to
              stay ahead of trends.
            </p>

            <p className="text-lg leading-relaxed text-justify mb-6">
              I stay updated with the latest web
              technologies, and share knowledge with the developer community — I
              believe in growing together as a community.
            </p>

            <button
              type="button"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-all w-max"
              onClick={() => router.push("/about")}
            >
              Read More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ShortIntro;
