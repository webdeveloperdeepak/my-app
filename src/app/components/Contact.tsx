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
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      setFormData({ name: "", email: "", phone: "", sub: "", message: "" });
    }

    setTimeout(() => {
      setStatus("");
      setIsSuccess(null);
    }, 3000);
  };

  return (
    <div className="p-9">
      <h1 className="h1-heading">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mb-24 mt-4 w-full">
        <form onSubmit={handleSubmit} className="formStyle w-full">
          <input
            name="name"
            type="text"
            placeholder="Full Name:"
            value={formData.name}
            onChange={handleChange}
            required
            className="inputBox w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email:"
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
            placeholder="Subject:"
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
              className={`text-sm mt-2 ${
                isSuccess === true
                  ? "text-green-600 italic"
                  : isSuccess === false
                  ? "text-red-600 italic"
                  : ""
              }`}
            >
              {status}
            </p>
          )}
          <Image
            alt="Contact-Us"
            src="/contact.jpg"
            className="opacity-80"
            width={600}
            height={300}
          />
          <button type="submit" className="btnRight">
            Send
          </button>
        </form>
        {/* Info Section */}
        <div className="flex flex-col w-full my-auto">
          <p className="text-3xl font-bold italic">Let’s build</p>
          <p className="text-3xl font-bold italic">
            something great together...
          </p>
          <p className="text-justify mt-4">
            Have a project in mind or need a website that truly represents your
            brand? Whether you're a startup looking to establish your online
            presence or a business aiming to revamp your digital experience —
            we're here to help! <br />
            <br />
            We specialize in crafting responsive, user-friendly websites and
            powerful web applications that drive results. Our team of designers
            and developers are passionate about turning your ideas into reality.{" "}
            <br />
            <br />
            We're excited to learn more about your business and discuss how we
            can bring your vision to life. Fill out the form, and our team will
            get back to you as soon as possible.
          </p>
          <div className="mt-6 flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-amber-600" />
            <div className="flex flex-col italic">
              <h3 className="text-lg font-semibold">Address</h3>
              <p>Noida Extension, Greater Noida West, India</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2">
            <FaPhoneAlt className="mt-1 text-amber-600" />
            <div className="flex flex-col italic">
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+91-7607146249</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2">
            <FaEnvelope className="mt-1 text-amber-600" />
            <div className="flex flex-col italic">
              <h3 className="text-lg font-semibold">Email</h3>
              <p>info@webdeveloperdeepak.com</p>
            </div>
          </div>
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
