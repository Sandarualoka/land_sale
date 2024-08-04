import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./about.css";
import "animate.css";
import Logo from "../../assets/logo-new-1.png";
import myVideo from "../../assets/new-clip.mp4";
import { TiUserAdd } from "react-icons/ti";
import { MdTour } from "react-icons/md";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import Hero from "../hero/hero";
const About = () => {
  const { ref: refSala, inView: inViewSala } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [clients, setClients] = useState(0);
  const [tours, setTours] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const incrementCount = (start, end, setter, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    incrementCount(0, 99, setClients, 2000);
    incrementCount(0, 50, setTours, 2000);
    incrementCount(0, 90.3, setSatisfaction, 2000);
  }, []);

  return (
    <div className="mt-4 px-4">
      <Hero/>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-1 lg:mt-5">
        <div className="flex-1 lg:mr-8">
          <p
            ref={refSala}
            className={`${
              inViewSala ? "animate__animated animate__backInUp" : ""
            } text-black p-6 sm:p-8 lg:p-12 font-bold text-center text-[35px] sm:text-[30px] md:text-[35px] lg:text-[55px] rounded-[20px] lg:rounded-[60px]`}
          >
            <span>ABOUT</span> <br />
            <span className="text-white font-sans">Travel sample</span>
          </p>
        </div>
        <div className="flex-1 mt-6 lg:mt-0 flex justify-center">
          <img
            src={Logo}
            alt="sala-logo"
            className="w-full max-w-[200px] h-auto lg:mx-0"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-8 mt-8">
        {/* mission */}
        <div className="bg-black/75 w-full lg:w-[550px] p-5 rounded-[20px]">
          <p className="text-white font-bold text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300">
              MISSION
            </span>
          </p>
          <p className="text-sm text-white font-semibold text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            distinctio?
          </p>
        </div>

        {/* vision */}
        <div className="bg-black/75 w-full lg:w-[550px] p-5 rounded-[20px]">
          <p className="text-white font-bold text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300">
              VISION
            </span>
          </p>
          <p className="text-sm text-white font-semibold text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quaerat eius accusamus animi sed explicabo cum
            ratione, quae voluptatem assumenda.
          </p>
        </div>
      </div>

      {/* clients and service counter */}
      <div className="relative">
        <video
          className="w-full h-auto max-h-[600px] object-cover bg-black opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={myVideo} type="video/mp4" />
        </video>

        {/* Absolute positioned text */}
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-8 p-4">
          <div className="text-white text-center p-4">
            <div className="flex flex-col items-center gap-2">
              <TiUserAdd className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]" />
              <p className="text-[16px] sm:text-[20px] lg:text-[24px]">
                CLIENTS
              </p>
              <p className="text-[24px] sm:text-[36px] lg:text-[48px]">
                {clients}+
              </p>
            </div>
          </div>
          <div className="text-white text-center p-4">
            <div className="flex flex-col items-center gap-2">
              <MdTour className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]" />
              <p className="text-[16px] sm:text-[20px] lg:text-[24px]">TOURS</p>
              <p className="text-[24px] sm:text-[36px] lg:text-[48px]">
                {tours}+
              </p>
            </div>
          </div>
          <div className="text-white text-center p-4">
            <div className="flex flex-col items-center gap-2">
              <MdOutlineSentimentSatisfiedAlt className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]" />
              <p className="text-[16px] sm:text-[20px] lg:text-[24px]">
                SATISFACTION
              </p>
              <p className="text-[24px] sm:text-[36px] lg:text-[48px]">
                {satisfaction / 10}+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
