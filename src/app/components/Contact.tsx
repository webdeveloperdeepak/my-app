"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sub: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", sub: "", message: "" });
    } else {
      setStatus("Failed to send message.");
      setIsSuccess(false);
    }

    setTimeout(() => {
      setStatus("");
      setIsSuccess(null);
    }, 3000);
  };

  return (
    <div className="p-9 bg-white mb-9">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-14 tracking-tight">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-gray-50 shadow-md p-8 rounded-xl gap-2"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="inputBox w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="inputBox w-full"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone: with country code"
            value={formData.phone}
            onChange={handleChange}
            required
            className="inputBox w-full"
          />
          <input
            name="sub"
            type="text"
            placeholder="Subject"
            value={formData.sub}
            onChange={handleChange}
            required
            className="inputBox w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="inputBox w-full"
          ></textarea>

          {status && (
            <p
              className={`text-sm italic ${
                isSuccess ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}

          <Image
            alt="Contact Us"
            src="/contact.jpg"
            width={600}
            height={300}
            className="rounded-md object-cover opacity-90 mt-4"
          />

          <button type="submit" className="btnRight w-full">
            Send Message
          </button>
        </form>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold italic text-gray-900 mb-4">
            Let’s build something great together...
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Have a project in mind or need a website that truly represents your
            brand? Whether you're a startup looking to establish your online
            presence or a business aiming to revamp your digital experience — I'm here to help.
            <br />
            <br />
            I specialize in crafting responsive, user-friendly websites and
            scalable web applications that drive results. Fill out the form,
            and I’ll get back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-amber-600" />
              <div className="italic">
                <h3 className="text-lg font-semibold">Address</h3>
                <p>Noida Extension, Greater Noida West, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-amber-600" />
              <div className="italic">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+91-7607146249</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-amber-600" />
              <div className="italic">
                <h3 className="text-lg font-semibold">Email</h3>
                <p>info@webdeveloperdeepak.com</p>
              </div>
            </div>
          </div>

          {/* Original social icons untouched */}
          <div className="mt-6 flex gap-4">
            <Link
              href="https://linkedin.com"
              className="border-[1.5px] border-amber-700 p-3 rounded-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-amber-700 hover:text-blue-900" />
            </Link>
            <Link
              href="https://facebook.com"
              className="border-[1.5px] border-amber-700 p-3 rounded-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-amber-600 hover:text-blue-800" />
            </Link>
            <Link
              href="https://instagram.com"
              className="border-[1.5px] border-amber-700 p-3 rounded-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-amber-500 hover:text-pink-700" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
