"use client";
import React from 'react';
import Image from 'next/image';
import Container from './Container';

const Services : React.FC = () => {
  return (
    <div>
      <Container>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4'>
              <div className='card'>
                <Image  alt="custome web development services" src="/images/cw_dev.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>Custom Website Development</h2>
                <p className='text-justify'>Unlock your business potential with our custom web development services—tailored solutions that drive growth, performance, and user engagement.</p>
              </div>
              <div className='card'>
                <Image alt="custome web development services" src="/images/cw_design.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>Custom Website Designing</h2>
                <p className='text-justify'>Elevate your brand with our custom web design services—unique, responsive, and user-focused designs that captivate and convert your audience.</p>
              </div>
              <div className='card'>
                <Image alt="custome web development services" src="/images/SEO_services.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>SEO & Speed Optimization</h2>
                <p className='text-justify'>Boost your online visibility with our SEO optimization services—drive traffic, rank higher on search engines, and grow your digital presence effectively.</p>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='card'>
                <Image alt="custome web development services" src="/images/wm_services.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>Website Maintenance Services</h2>
                <p className='text-justify'>Keep your website secure, fast, and up-to-date with our reliable web maintenance services—so you can focus on growing your business.</p>
              </div>
              <div className='card'>
                <Image alt="custome web development services" src="/images/ws_services.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>Web Security & Performance</h2>
                <p className='text-justify'>Protect your site and boost speed with our web security and performance services—ensuring safety, reliability, and a seamless user experience.</p>
              </div>
              <div className='card'>
                <Image alt="custome web development services" src="/images/mob_app.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>Mobile App Development</h2>
                <p className='text-justify'>Build powerful, user-friendly mobile apps with our expert development services—designed to bring your ideas to life on iOS and Android.</p>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='card'>
                <Image alt="custome web development services" src="/images/gd_services.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>Logo, Card & Pamplet Design</h2>
                <p className='text-justify'>Expertly crafted logos, visiting cards, pamphlets & brochures that elevate your brand and leave a lasting impression.</p>
              </div>
              <div className='card'>
                <Image alt="custome web development services" src="/images/e_com.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>E-Commerce Web Solutions</h2>
                <p className='text-justify'>Launch, manage, and grow your online store with our end-to-end e-commerce solutions—designed for seamless shopping and maximum conversions.</p>
              </div>
              <div className='card'>
                <Image alt="custome web development services" src="/images/el_services.jpg" width={400} height={350}/>
                <h2 className='text-lg text-center bg-white uppercase font-semibold p-3'>E-Learning Web Solutions</h2>
                <p className='text-justify'>All-in-one eLearning LMS: Manage courses, track progress, and boost engagement with powerful, user-friendly online learning solutions.</p>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Services
