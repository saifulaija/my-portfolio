



import React from "react";
import hero from "../assets/images/hero.png";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Saiful Islam</span>
          </h1>
          <h4 className="md:text-[24px] text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
            Fullstack Developer || JavaScript Developer
          </h4>
          <p>
            As a dedicated MERN stack developer, I excel in creating dynamic web applications with MongoDB, Express.js, React, and Node.js. My goal is to craft high-quality, scalable solutions that meet client needs and deliver an outstanding user experience.
          </p>
          <button className="btn-primary mt-8" onClick={scrollToContact}>
            Contact Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <a href="https://github.com/saifulaija" className="text-gray-600 hover:text-white cursor-pointer ">
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a href="http://linkedin.com/in/saiful87" className="text-gray-600 hover:text-white cursor-pointer ">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://www.facebook.com/" className="text-gray-600 hover:text-white cursor-pointer ">
              <FaFacebookSquare></FaFacebookSquare>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
