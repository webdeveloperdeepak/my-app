"use client";
import React from "react";
import Container from "./Container";

const testimonials = [
  {
    name: "Puneet Luthra",
    role: "Real Estate Agent, Greater Noida",
    message:
      "Deepak transformed our website into a modern, responsive platform. His attention to detail and creative vision are unmatched.",
    image: "/puneet.jpg",
  },
  {
    name: "Gourav Saraf",
    role: "Company Secretary, Kolkata",
    message:
      "I needed a portfolio and Deepak delivered beyond expectations. Clean code, great design, and smooth delivery.",
    image: "/gourav.png",
  },
  {
    name: "Anurag Chhabra",
    role: "Management, Bengaluru",
    message:
      "Deepak delivered an outstanding LMS website that's fast and intuitive. His clean design, and reliable support made the entire process smooth and hassle-free. Highly recommend his development expertise!",
    image: "/anurag.jpg",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 w-full">
      <Container>
        <h2 className="h1-heading">
          What Clients Say About Deepak
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-600 mr-4 shadow-sm"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                “{testimonial.message}”
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
