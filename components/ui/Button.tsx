import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  darkMode?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  darkMode = false 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2';
  
  const variantStyles = {
    primary: darkMode 
      ? 'bg-blue-600 text-white hover:bg-blue-700' 
      : 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: darkMode
      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      : 'bg-white text-gray-700 hover:bg-gray-100'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}