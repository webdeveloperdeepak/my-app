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
      "Basic SEO Optimization",
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
      "Basic SEO Optimization",
    ],
  },
  {
    title: "PREMIUM",
    price: "₹15,000",
    features: [
      "Dynamic Website",
      "Custom Design",
      "Responsive Design",
      "Up to 25 Pages",
      "Advanced SEO",
      "Website Security",
      "Admin/User Dashboard",
      "Blog Integration",
      "Contact Form",
      "Request Callback Form",
      "Authentication/Authorization",
    ],
  },
  {
    title: "ENTERPRISE",
    price: "Starts at ₹45,000",
    features: [
      "Dynamic Website",
      "Custom Design",
      "Responsive Design",
      "Up to 40 Pages",
      "Premium SEO",
      "Blog Integration",
      "Contact Form",
      "Priority Support",
      "Request Callback Form",
      "Admin/User Dashboard",
      "Permission Management",
      "E-commerce Functionality",
      "Website Security & Maintenance",
      "Speed & Performanec Optimization",
      "Authentication/Authorization",
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
