"use client";

import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary',
  size = 'medium'
}) => {
  const getGradientColors = () => {
    switch (variant) {
      case 'primary':
        return 'linear-gradient(144deg, #8b5cf6, #ec4899 50%, #a855f7)';
      case 'secondary':
        return 'linear-gradient(144deg, #ec4899, #8b5cf6 50%, #a855f7)';
      case 'outline':
        return 'linear-gradient(144deg, #8b5cf6, #ec4899 50%, #a855f7)';
      default:
        return 'linear-gradient(144deg, #8b5cf6, #ec4899 50%, #a855f7)';
    }
  };

  const getShadowColor = () => {
    switch (variant) {
      case 'primary':
        return 'rgba(139, 92, 246, 0.3)';
      case 'secondary':
        return 'rgba(236, 72, 153, 0.3)';
      case 'outline':
        return 'rgba(139, 92, 246, 0.3)';
      default:
        return 'rgba(139, 92, 246, 0.3)';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'min-w-[100px] sm:min-w-[120px] text-xs sm:text-sm p-[2px]';
      case 'medium':
        return 'min-w-[120px] sm:min-w-[140px] text-sm sm:text-base md:text-lg p-[3px]';
      case 'large':
        return 'min-w-[140px] sm:min-w-[160px] text-base sm:text-lg md:text-xl p-[4px]';
      default:
        return 'min-w-[120px] sm:min-w-[140px] text-sm sm:text-base md:text-lg p-[3px]';
    }
  };

  const getContentPadding = () => {
    switch (size) {
      case 'small':
        return 'px-3 sm:px-4 py-2 sm:py-3';
      case 'medium':
        return 'px-4 sm:px-6 py-3 sm:py-4';
      case 'large':
        return 'px-6 sm:px-8 py-4 sm:py-5';
      default:
        return 'px-4 sm:px-6 py-3 sm:py-4';
    }
  };

  return (
    <button 
      className={`relative cursor-pointer border-0 rounded-lg flex items-center justify-center text-white font-medium transition-all duration-300 hover:outline-none active:outline-none touch-manipulation ${getSizeClasses()} ${className}`}
      onClick={onClick}
      style={{
        backgroundImage: getGradientColors(),
        boxShadow: `${getShadowColor()} 0 15px 30px -5px`,
      }}
    >
      <span 
        className={`bg-[rgb(5,6,45)] rounded-md w-full h-full flex items-center justify-center transition-all duration-300 hover:bg-transparent ${getContentPadding()}`}
      >
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
