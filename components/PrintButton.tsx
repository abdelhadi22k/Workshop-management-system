import React from 'react';
import { Printer } from 'lucide-react';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="no-print fixed top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group print:hidden"
      aria-label="طباعة العرض"
    >
      <Printer className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        طباعة العرض
      </span>
    </button>
  );
};