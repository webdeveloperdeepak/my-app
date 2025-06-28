"use client";
import React from "react";
import Container from "./Container";
import { ChevronRight } from "lucide-react";

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

const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-12 px-9 bg-white w-full">
      <Container>
        <h2 className="h1-heading">
          Why Choose Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-9 w-full">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start bg-white border border-amber-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="min-w-[24px] mt-1 text-amber-600 group-hover:text-amber-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="ml-3 text-gray-800 leading-relaxed group-hover:text-black">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseMe;
