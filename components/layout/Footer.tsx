import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 mt-16 border-t ${
      darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Eddie Xiao. &quot;Live Free or Die&quot;
        </p>
      </div>
    </footer>
  );
}