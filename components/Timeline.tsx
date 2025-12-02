import React from 'react';
import { Reveal } from './Reveal';

export const Timeline: React.FC = () => {
  const weeks = [
    { title: "الأسبوع الأول", task: "تصميم قواعد البيانات والواجهات الأساسية", done: false },
    { title: "الأسبوع الثاني", task: "برمجة نظام الطلبات وإدارة المخزون", done: false },
    { title: "الأسبوع الثالث", task: "ربط API مع ZR Express ونظام العمال", highlight: true, done: false },
    { title: "الأسبوع الرابع", task: "التقارير، الاختبار النهائي، والتدريب", done: false },
  ];

  return (
    <section className="py-20 page-break">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 print:text-black">خارطة الطريق (٣٠ يوماً)</h2>
            <p className="text-gray-400 print:text-gray-600">خطة تنفيذية واضحة لضمان التسليم في الموعد</p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto relative">
           {/* Vertical Line */}
           <div className="absolute top-0 right-4 md:right-1/2 w-0.5 h-full bg-gray-700 print:bg-gray-300"></div>

           {weeks.map((week, idx) => (
             <Reveal key={idx} delay={idx * 200}>
               <div className={`flex flex-col md:flex-row items-center justify-between mb-12 relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 
                 {/* Dot */}
                 <div className={`absolute right-4 md:right-1/2 translate-x-1/2 w-4 h-4 rounded-full border-4 border-navy-900 z-10 ${week.highlight ? 'bg-emerald-500 scale-125' : 'bg-gray-500'} print:border-white`}></div>

                 <div className="w-full md:w-5/12 pl-12 md:pl-0 pr-12 md:pr-0">
                    <div className={`p-6 rounded-2xl border ${week.highlight ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/5'} text-right print:bg-white print:border-gray-200`}>
                        <h4 className={`text-lg font-bold mb-2 ${week.highlight ? 'text-emerald-400 print:text-emerald-700' : 'text-white print:text-black'}`}>
                            {week.title}
                        </h4>
                        <p className="text-gray-400 print:text-gray-600">{week.task}</p>
                    </div>
                 </div>
                 
                 <div className="hidden md:block w-5/12"></div>
               </div>
             </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};