"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "./Container";

const ShortIntro: React.FC = () => {

  const router = useRouter();

  return (
    <div>
       <Container>
            <h1 className="h1-heading">About</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 w-full">
                <div className="w-full">
                    <Image
                        alt="Deepak Singh-Web Developer"
                        src="/images/deepak-singh.jpg"
                        width={600}
                        height={600}
                    />
                </div>
                <div className="flex flex-col justify-center text-justify w-full">
                    <h2 className="text-3xl font-bold">Hi, I'm Deepak Singh</h2>
                    <p className="text-lg mt-4">
                        I am a web developer with a knack for creating dynamic
                        and responsive web applications. I love to explore new technologies
                        and continuously improve my skills.
                    </p>
                    <p className="text-lg mt-4">
                        I am specialized in React, Next.js, and Tailwind CSS, and I am always
                        eager to learn more about the latest trends in web development.
                    </p>
                    <p className="text-lg my-4">
                        In my free time, I enjoy contributing to open-source projects and
                        sharing my knowledge with the developer community.
                    </p>
                    <button type="button" className="btnRight" onClick={()=>router.push("/about")}>Read More</button>
                </div>
            </div>
       </Container>
    </div>
  );
};

export default ShortIntro;
