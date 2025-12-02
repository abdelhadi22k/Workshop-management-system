import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 relative overflow-hidden page-break">
        {/* Glow effect */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 print:text-black">جاهزون للبدء؟</h2>
            <p className="text-xl text-gray-400 mb-12 print:text-gray-600">دعنا نحول ورشتك إلى مؤسسة رقمية متطورة.</p>
            
            <button className="group relative inline-flex items-center gap-3 bg-white text-navy-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] print:hidden">
                <span>لنبدأ المشروع</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-500 print:border-gray-200">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-white">A</div>
                    <span className="text-white font-semibold print:text-black">Acos Studio</span>
                </div>
                
                <div className="flex items-center gap-6">
                    <a href="mailto:acos.studioo@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 print:text-black">
                        <Mail className="w-4 h-4" />
                        <span>acos.studioo@gmail.com</span>
                    </a>
                </div>
            </div>
        </Reveal>
      </div>
    </footer>
  );
};