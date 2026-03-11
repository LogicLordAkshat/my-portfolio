"use client";

import React from "react";
import { motion } from "framer-motion";

// Professional tech stack categories with skill levels
const techCategories = [
  {
    name: "Frontend Development",
    subtitle: "Modern UI/UX & Interactive Experiences",
    color: "from-blue-600 to-cyan-500",
    bgColor: "from-blue-600/5 to-cyan-500/5",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
    technologies: [
      { name: "React", img: "/React.svg", level: "Expert", experience: "3+ years" },
      { name: "Next.js", img: "/next.js(2).svg", level: "Advanced", experience: "2+ years" },
      { name: "TypeScript", img: "/TypeScript.svg", level: "Expert", experience: "3+ years" },
      { name: "JavaScript", img: "/JavaScript.svg", level: "Expert", experience: "4+ years" },
      { name: "HTML5", img: "/HTML5.svg", level: "Expert", experience: "4+ years" },
      { name: "CSS3", img: "/CSS3.svg", level: "Advanced", experience: "3+ years" },
      { name: "Tailwind", img: "/Tailwind.svg", level: "Advanced", experience: "2+ years" },
      { name: "Angular", img: "/Angular.svg", level: "Intermediate", experience: "1+ years" }
    ]
  },
  {
    name: "Backend & Languages",
    subtitle: "Server-side Development & System Architecture",
    color: "from-emerald-600 to-green-500",
    bgColor: "from-emerald-600/5 to-green-500/5",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    technologies: [
      { name: "Node.js", img: "/Node.js.svg", level: "Advanced", experience: "2+ years" },
      { name: "Python", img: "/Python.svg", level: "Advanced", experience: "3+ years" },
      { name: "Java", img: "/Java.svg", level: "Intermediate", experience: "2+ years" },
      { name: "C++", img: "/C++.svg", level: "Intermediate", experience: "2+ years" },
      { name: "MongoDB", img: "/MongoDB.svg", level: "Advanced", experience: "2+ years" },
      { name: "Firebase", img: "/Firebase.svg", level: "Advanced", experience: "2+ years" }
    ]
  },
  {
    name: "Cloud & DevOps",
    subtitle: "Infrastructure & Deployment Solutions",
    color: "from-purple-600 to-pink-500",
    bgColor: "from-purple-600/5 to-pink-500/5",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400",
    technologies: [
      { name: "AWS", img: "/AWS.svg", level: "Intermediate", experience: "1+ years" },
      { name: "Azure", img: "/Azure.svg", level: "Intermediate", experience: "1+ years" },
      { name: "GitHub", img: "/GitHub.svg", level: "Expert", experience: "4+ years" },
      { name: "VS Code", img: "/VS.svg", level: "Expert", experience: "4+ years" },
      { name: "NumPy", img: "/NumPy.svg", level: "Advanced", experience: "2+ years" }
    ]
  }
];

// Skill level badges with professional styling
const SkillBadge = ({ level, experience }: { level: string; experience: string }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "from-emerald-500 to-green-600";
      case "Advanced": return "from-blue-500 to-cyan-600";
      case "Intermediate": return "from-amber-500 to-orange-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${getLevelColor(level)} text-white text-xs font-semibold`}>
        {level}
        </span>
      <span className="text-xs text-gray-400 font-medium">{experience}</span>
    </div>
  );
};

export const TechStackMarquee = ({ className }: { className?: string }) => {
  return (
    <section className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        {/* Gradient orbs - symmetric */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full blur-3xl" />
        
        {/* Center gradient orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 mb-8">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-blue-300">Technical Expertise</span>
        </div>
        
        {/* Main Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8">
          Technology Stack
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          A comprehensive collection of cutting-edge technologies and frameworks that enable me to deliver 
          <span className="text-blue-400 font-semibold"> scalable, performant, and innovative solutions</span> 
          for modern web applications and systems.
        </p>
      </motion.div>

      {/* Tech Categories */}
      <div className="space-y-20 max-w-7xl mx-auto">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="relative"
          >
            {/* Category Header */}
            <div className="text-center mb-16">
              {/* Decorative lines */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`} />
                <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>
              <p className={`text-lg ${category.accentColor} font-medium max-w-2xl mx-auto`}>
                {category.subtitle}
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: techIndex * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.bgColor} border ${category.borderColor} hover:border-opacity-40 transition-all duration-300 cursor-pointer backdrop-blur-sm w-full max-w-[280px] mx-auto`}
                  >
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                    
                    {/* Tech Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 relative">
                          <img
                            src={tech.img}
                            alt={tech.name}
                            className="w-full h-full object-contain filter drop-shadow-lg"
                          />
                          {/* Subtle glow on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-opacity duration-300`} />
                        </div>
                      </div>
                      
                      {/* Name */}
                      <h4 className="font-semibold text-white text-lg mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {tech.name}
                      </h4>
                      
                      {/* Skill Level Badge */}
                      <div className="flex justify-center">
                        <SkillBadge level={tech.level} experience={tech.experience} />
                      </div>
                    </div>

                    {/* Enhanced Border on Hover */}
                    <div className={`absolute inset-0 rounded-2xl border-2 ${category.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-24 relative z-10 flex justify-center"
      >
        <div className="inline-block p-10 rounded-3xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/30 backdrop-blur-sm max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I&apos;m passionate about leveraging these technologies to create innovative solutions. 
            Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 min-w-[180px]">
              View My Projects
            </button>
            <button className="px-10 py-4 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800/50 min-w-[180px]">
              Get In Touch
            </button>
      </div>
    </div>
      </motion.div>
    </section>
  );
};
