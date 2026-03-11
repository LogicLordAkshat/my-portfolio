import React from "react";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  variant?: "purple" | "default"; // Add variant prop
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  variant = "default", // Default variant
}: MagicButtonProps) => {
  const baseClasses = "group relative inline-flex h-14 w-full md:w-64 md:mt-10 overflow-hidden rounded-2xl focus:outline-none transform transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]";
  
  return (
    <button className={baseClasses} onClick={handleClick}>
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute -inset-x-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
      </div>
      
      {/* Inner shadow for depth */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/5 to-transparent" />
      
      {/* Button content */}
      <div className="relative flex items-center justify-center w-full h-full px-8 gap-3 z-10">
        {position === "left" && (
          <span className="text-white/80 transition-all duration-300 group-hover:text-white group-hover:scale-110">
            {icon}
          </span>
        )}
        
        <span className="text-white font-medium text-base tracking-wide transition-all duration-300 group-hover:text-white/95">
          {title}
        </span>
        
        {position === "right" && (
          <span className="text-white/80 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </div>
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
};

export default MagicButton;