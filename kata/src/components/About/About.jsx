import React from 'react';
import MainContainer from '../../shared/MainContainer';
const About = () => {
  return (
   <MainContainer>
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Logo KATA */}
          <div
            className="flex items-center justify-center w-[350px] h-[250px] 
            bg-gradient-to-r from-red-500 to-red-700 text-white text-5xl font-extrabold rounded-lg shadow-xl 
            transform hover:scale-105 transition-transform duration-300"
          >
            KATA
          </div>

          {/* Text Content */}
          <div className="flex-1 mt-8 md:mt-0">
            <p className="text-lg leading-relaxed mb-4">
              Welcome to **KATA**, a brand synonymous with innovation and quality. Since our inception, we have been at
              the forefront of delivering cutting-edge technology and premium products that cater to modern needs. Our
              mission is to make high-tech solutions accessible to everyone, while maintaining exceptional service and
              reliability.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, KATA has grown from a small startup to a trusted name in the high-tech industry. Whether
              you're looking for the latest gadgets or dependable tech solutions, we've got you covered. Explore our
              products and become a part of our story as we continue to innovate and inspire.
            </p>
          </div>
        </div>
      </div>
   </MainContainer>
  
  );
};

export default About;
