import React from 'react';
import { Scissors, Shirt, Users } from 'lucide-react';
import { Reveal } from './Reveal';

export const ActivityInfo: React.FC = () => {
  const items = [
    {
      icon: <Scissors className="w-6 h-6 text-purple-400" />,
      title: "نوع النشاط",
      desc: "ورشة خياطة وتصنيع ألبسة جاهزة وتفصيل حسب الطلب."
    },
    {
      icon: <Shirt className="w-6 h-6 text-pink-400" />,
      title: "المنتجات",
      desc: "القفطان العصري، عبايات المناسبات، ملابس أطفال، وأطقم رسمية."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "السوق المستهدف",
      desc: "تجار الجملة (الكميات)، المحلات (التجزئة)، والزبائن المباشرين."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden page-break">
       {/* Decorative Lines */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-white/10 to-transparent print:bg-gray-200"></div>

      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            <h2 className="text-3xl font-bold print:text-black">بيانات النشاط</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 200}>
              <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 h-full print:border-gray-300 print:bg-gray-50 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors group-hover:scale-110 duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white print:text-black">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed print:text-gray-600 mr-2 border-r-2 border-white/10 pr-4">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};