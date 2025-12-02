import React from 'react';
import { ShoppingCart, ChevronsLeft, Scissors, PackageCheck, Truck } from 'lucide-react';
import { Reveal } from './Reveal';

export const CurrentWorkflow: React.FC = () => {
  return (
    <section className="py-20 bg-navy-800/30 print:bg-white page-break">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 print:text-black">آلية العمل الحالية</h2>
            <p className="text-gray-400 print:text-gray-600">تسلسل العمليات من الطلب حتى التسليم</p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-l from-gray-700 via-gray-600 to-gray-700 -translate-y-1/2 z-0 print:bg-gray-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { title: "استقبال الطلب", icon: <ShoppingCart />, color: "bg-blue-500", desc: "عبر المتجر أو الرسائل" },
              { title: "الإنتاج", icon: <Scissors />, color: "bg-purple-500", desc: "فصالة، خياطة، تشطيب" },
              { title: "التغليف", icon: <PackageCheck />, color: "bg-amber-500", desc: "فحص الجودة والتعبئة" },
              { title: "الشحن", icon: <Truck />, color: "bg-emerald-500", desc: "التسليم لشركة التوصيل" },
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="flex flex-col items-center bg-navy-900 border border-white/5 p-6 rounded-2xl shadow-xl hover:border-white/20 transition-all duration-300 print:bg-white print:border-gray-200">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {React.cloneElement(step.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 print:text-black">{step.title}</h3>
                  <p className="text-sm text-center text-gray-400 print:text-gray-600">{step.desc}</p>
                </div>
                {idx !== 3 && (
                  <div className="md:hidden flex justify-center my-4">
                     <ChevronsLeft className="text-gray-600 rotate-[-90deg]" />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};