import React from 'react';
import { Calendar, Truck, Globe } from 'lucide-react';
import { Reveal } from './Reveal';

export const Overview: React.FC = () => {
  const stats = [
    { 
      icon: <Calendar className="w-6 h-6 text-amber-400" />, 
      value: "٣٠ يوماً", 
      label: "مدة التنفيذ",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20"
    },
    { 
      icon: <Truck className="w-6 h-6 text-emerald-400" />, 
      value: "ZR Express", 
      label: "ربط مباشر",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    },
    { 
      icon: <Globe className="w-6 h-6 text-blue-400" />, 
      value: "الجزائر", 
      label: "نطاق العمل",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
  ];

  return (
    <section className="py-20 bg-navy-800/50 print:bg-white page-break">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8 text-center print:text-black">نظرة عامة على المشروع</h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed print:text-gray-700">
            نهدف إلى تحويل ورشتكم من الإدارة التقليدية إلى منظومة رقمية ذكية. هذا النظام ليس مجرد برنامج محاسبة، بل هو 
            <span className="text-white font-bold mx-1 print:text-black">شريكك الرقمي</span> 
            الذي ينظم كل قطعة قماش من لحظة دخولها للمخزون حتى وصولها كمنتج نهائي ليد العميل.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={300 + (idx * 100)}>
              <div className={`p-6 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300 print:border-gray-300 print:bg-gray-50`}>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-white/5 print:bg-white print:border print:border-gray-200">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 print:text-black">{stat.value}</h3>
                  <p className="text-gray-400 print:text-gray-600">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};