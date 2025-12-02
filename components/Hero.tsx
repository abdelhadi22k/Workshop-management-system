import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Simple parallax logic
      if (window.innerWidth > 768) { // Optimize for desktop
        if (bg1Ref.current) {
          // Top blob moves down slower than scroll (0.4x)
          bg1Ref.current.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
        if (bg2Ref.current) {
          // Bottom blob moves up slightly (negative direction) to create contrast
          bg2Ref.current.style.transform = `translateY(${scrollY * -0.2}px)`;
        }
        if (textRef.current) {
          // Text moves down slowly and fades out
          textRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
          textRef.current.style.opacity = `${Math.max(0, 1 - scrollY / 600)}`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden page-break">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div 
          ref={bg1Ref}
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] will-change-transform transition-transform duration-75 ease-out"
        ></div>
        <div 
          ref={bg2Ref}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] will-change-transform transition-transform duration-75 ease-out"
        ></div>
      </div>

      <div ref={textRef} className="container mx-auto px-4 text-center z-10 will-change-transform">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>عرض مشروع مقترح</span>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 print:text-black">
            نظام إدارة ورشة
            <br />
            الخياطة والملابس
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light print:text-gray-700">
            حل <span className="font-bold text-white print:text-black">ERP</span> متكامل لإدارة الطلبات، مراحل الإنتاج، المخزون، والربط الذكي مع شركات الشحن.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-4"></div>
            <p className="text-sm text-gray-400 print:text-gray-600">تم إعداده خصيصاً لورشة الخياطة العصرية</p>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce print:hidden">
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
};
