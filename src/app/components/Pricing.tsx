"use client";
import React from 'react';
import { CheckCircle } from 'lucide-react'; // or use react-icons if preferred
import Container from './Container';
import RequestCallback from './RequestCallback';

const pricingData = [
  {
    title: "BASIC",
    price: "₹3,000",
    features: [
      "Static Website",
      "Custom Design",
      "Responsive Design",
      "Up to 5 Pages",
      "Contact Form",
      "Request Callback Form",
      "Social Media Linking",
      "Whatsapp Chat Integration",
      "Basic SEO Optimization",
      "Google Map Integration",
      "Google My Business Listing",
      "Google Analytics Integration",
      "Google Search Console Integration",
    ],
  },
  {
    title: "STANDARD",
    price: "₹6,000",
    features: [
      "Static Website",
      "Custom Design",
      "Responsive Design",
      "Up to 9 Pages",
      "Contact Form",
      "Request Callback Form",
      "Social Media Linking",
      "Whatsapp Chat Integration",
      "Basic SEO Optimization",
      "Google Map Integration",
      "Google My Business Listing",
      "Google Analytics Integration",
      "Google Search Console Integration",
    ],
  },
  {
    title: "PREMIUM",
    price: "₹15,000",
    features: [
      "Everyting in Standard Plan",
      "Dynamic Website",
      "Up to 25 Pages",
      "Advanced SEO",
      "Website Security",
      "Customer Support",
      "Blog Integration",
      "Admin/User Dashboard",
      "Authentication/Authorization",
      "Binge Web master Tools Integration",
    ],
  },
  {
    title: "ENTERPRISE",
    price: "Starts at ₹45,000",
    features: [
      "Everything in Premium Plan",
      "Up to 40 Pages",
      "Premium SEO",
      "Permission Management",
      "E-commerce Functionality",
      "Priority Customer Support",
      "Logo/Business Card Design",
      "1 Year Website Maintenance",
      "Payment Gateway Integration",
      "Speed & Performance Optimization",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className='bg-white pt-12 py-24 px-9 w-full'>
      <Container>
        <h2 className="h1-heading">Pricing Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 w-auto">
            {pricingData.map((plan, idx) => (
            <div
                key={idx}
                className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
                <div>
                <h3 className="text-3xl font-bold text-center text-amber-600">{plan.title}</h3>               
                <p className="text-xl font-bold text-center text-gray-800 mt-2">{plan.price}</p>
                <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="text-green-500 w-3 h-3 mr-2" />
                        {feature}
                    </li>
                    ))}
                </ul>
                </div>
                <RequestCallback/>
            </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
