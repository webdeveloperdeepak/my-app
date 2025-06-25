"use client";
import React from "react";
import Container from "./Container";
import { ChevronRight } from "lucide-react"; // Optional: use any icon or remove

const reasons = [
  "Custom, responsive designs tailored to your brand",
  "Clean, SEO-friendly code and fast performance",
  "Expert in both frontend and backend development",
  "On-time delivery with continuous support",
  "User-first approach with intuitive UI/UX",
  "Proven track record with happy clients",
  "Mobile-optimized layouts for every screen",
  "Affordable pricing without compromising quality",
];

const WhyChooseMe : React.FC = () => {
  return (
    <div>
      <Container>
          <h2 className="h1-heading">Why Choose Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 w-full">
            {reasons.map((reason, index) => (
              <div key={index} className="flex bg-white rounded-lg cursor-pointer  hover:shadow-lg p-4 space-x-2">
                <ChevronRight className="text-black w-5 h-5 mt-1" />
                <p className="text-black ">{reason}</p>
              </div>
            ))}
          </div>
      </Container>
    </div>
  );
};

export default WhyChooseMe;
