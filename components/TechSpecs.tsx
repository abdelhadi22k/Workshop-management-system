import React from 'react';
import { Smartphone, ShieldCheck, Database, LayoutGrid } from 'lucide-react';
import { Reveal } from './Reveal';

export const TechSpecs: React.FC = () => {
  return (
    <section className="py-20 bg-navy-800/30 print:bg-white page-break">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center print:text-black">المواصفات التقنية</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                { icon: <LayoutGrid />, title: "واجهة مستخدم عربية", desc: "تصميم بسيط وسهل الاستخدام لا يتطلب خبرة تقنية مسبقة." },
                { icon: <Smartphone />, title: "متوافق مع جميع الأجهزة", desc: "يعمل بكفاءة على الكمبيوتر، التابلت، والهاتف المحمول." },
                { icon: <ShieldCheck />, title: "أمان وصلاحيات", desc: "نظام صلاحيات متقدم (مدير، محاسب، خياط) لحماية البيانات." },
                { icon: <Database />, title: "نسخ احتياطي", desc: "نظام نسخ احتياطي يومي آلي لقاعدة البيانات لضمان عدم ضياع المعلومات." }
            ].map((spec, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                    <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/5 transition-colors print:border print:border-gray-200">
                        <div className="bg-gray-800 p-3 rounded-lg text-gray-300 print:bg-gray-100 print:text-gray-700">
                            {spec.icon}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 print:text-black">{spec.title}</h4>
                            <p className="text-gray-400 text-sm print:text-gray-600">{spec.desc}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};