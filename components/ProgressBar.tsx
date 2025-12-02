import React, { useEffect, useState } from 'react';

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="no-print fixed top-0 left-0 w-full h-1.5 z-50 bg-navy-900/50 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-100 ease-out rounded-r-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};