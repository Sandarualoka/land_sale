import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cover1 from "../../assets/land1.jpg";
import Cover2 from "../../assets/Land2.jpg";
import Cover3 from "../../assets/land3.jpg";
import "animate.css";
import "./hero.css"; // Import your custom CSS for fading effect

const Hero = () => {
  return (
    <div className="mt-4 px-4">
      <div className="relative overflow-x-hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={800}
   
        >
          <div>
            <img
              src={Cover1}
              alt="cover1"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover fade"
            />
          </div>
          <div>
            <img
              src={Cover2}
              alt="cover2"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover fade"
            />
          </div>
          <div>
            <img
              src={Cover3}
              alt="cover3"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover fade"
            />
          </div>
        </Carousel>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
        <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:gap-8 p-4 lg:p-10 justify-center">
          {/* section for text */}
          <div className="text-center lg:text-left p-4">
            <p className="animate__animated animate__backInUp text-white text-[24px] sm:text-[30px] md:text-[60px] lg:text-[90px] font-bold mt-[10px] mb-2">
              Leaders in the land sales industry
            </p>
            <div className="mt-[10px]">
              <p className="text-white text-[16px] sm:text-[20px] lg:text-[18px] font-semibold">
                Our properties for sale are perfect for your dream home.
                <br />
                We have a wide range of properties for sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
