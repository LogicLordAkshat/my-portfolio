import { FaLocationArrow, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { socialMedia } from "@/data";
import AnimatedButton from "./ui/AnimatedButton";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full pt-12 pb-10 bg-black text-white relative z-10" id="contact">
      {/* Spotlight Effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#8B5CF6" // Violet-500 (Purple)
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#EC4899" // Pink-500
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#4C1D95" // Violet-900 (Deep Purple)
        />
      </div>

      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-26 z-0">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-80 mix-blend-screen"
          priority
        />
      </div> 

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Get in Touch Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 tracking-tight">
            Ready to take{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent font-black drop-shadow-2xl">
              YOUR
            </span>{" "}
            digital presence to the next level?
          </h1>
          <p className="text-gray-300 md:mt-4 my-2 sm:my-3 text-center max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
          </p>
        </div>

        <ContactForm />

        {/* Three Column Footer Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Brand Information */}
          <div className="flex flex-col items-start group">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
            Akshat Srivastava
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-xs">
              A passionate developer focused on creating beautiful, functional, and user-friendly applications with modern technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/LogicLordAkshat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <FaGithub className="text-white text-lg group-hover:text-purple-300 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-srivastava-83a684209/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <FaLinkedin className="text-white text-lg group-hover:text-purple-300 transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/LogicLordAkshat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <FaTwitter className="text-white text-lg group-hover:text-purple-300 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold text-white mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform transition-transform">Home</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform transition-transform">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform transition-transform">About</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform transition-transform">Contact</a>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold text-white mb-3">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-purple-400 text-lg group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                <a 
                  href="mailto:akshatsrivastava11d@gmail.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base"
                >
                  akshatsrivastava11d@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-purple-400 text-lg group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                <span className="text-gray-300">Vellore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-purple-500/20 pt-4 sm:pt-6">
          <p className="text-gray-400 text-center text-xs sm:text-sm px-2 sm:px-0">
            © 2025{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Akshat Srivastava
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
