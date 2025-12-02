import React from 'react';
import { Truck, Box, Users, BarChart3, RotateCcw, CheckCircle2, Heart } from 'lucide-react';
import { Reveal } from './Reveal';
import { InventoryDemo, TrackingDemo } from './InteractiveDemos';

interface SolutionsProps {
  user?: string | null;
  likedFeatures?: string[];
  toggleLike?: (feature: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ user, likedFeatures = [], toggleLike }) => {
  const features = [
    {
      title: "ربط مباشر مع ZR Express",
      icon: <Truck className="w-8 h-8" />,
      desc: "الأولوية القصوى. ربط API متكامل يتيح إنشاء بوليصات الشحن وتتبع الطرود لحظياً. تضمن مزامنة الحالات (مثل 'واصل' أو 'مرتجع') تقليل مشاكل التوصيل وتحسين التواصل مع العملاء، ويتطلب الإعداد فقط توفير مفاتيح الربط (API Keys) من حساب ZR Express الخاص بكم.",
      color: "text-emerald-400",
      border: "border-emerald-500/50",
      bg: "bg-emerald-500/5",
      badge: "أولوية قصوى"
    },
    {
      title: "إدارة المخزون الذكية",
      icon: <Box className="w-8 h-8" />,
      desc: "خصم كميات القماش والاكسسوارات تلقائياً عند إنشاء أي طلب. تنبيهات عند وصول المخزون للحد الأدنى. دعم طباعة وقراءة الباركود.",
      color: "text-blue-400",
      border: "border-white/10",
      bg: "bg-white/5",
    },
    {
      title: "إدارة العمال والإنتاج",
      icon: <Users className="w-8 h-8" />,
      desc: "توزيع المهام على الخياطين. تتبع الإنتاجية لكل عامل. حساب الأجور تلقائياً بناءً على عدد القطع المنجزة أسبوعياً أو شهرياً.",
      color: "text-purple-400",
      border: "border-white/10",
      bg: "bg-white/5",
    },
    {
      title: "لوحة تحكم (Dashboard)",
      icon: <BarChart3 className="w-8 h-8" />,
      desc: "تقارير لحظية عن الأرباح، المبيعات اليومية، أفضل المنتجات مبيعاً، وتكاليف التشغيل. رؤية كاملة لعملك في شاشة واحدة.",
      color: "text-amber-400",
      border: "border-white/10",
      bg: "bg-white/5",
    },
    {
      title: "معالجة المرتجعات",
      icon: <RotateCcw className="w-8 h-8" />,
      desc: "إدارة سلسة للمرتجعات. إعادة المنتج للمخزون تلقائياً بضغطة زر، وتحديث الحسابات المالية للعميل وللورشة.",
      color: "text-pink-400",
      border: "border-white/10",
      bg: "bg-white/5",
    }
  ];

  return (
    <section className="py-20 page-break">
      <div className="container mx-auto px-6">
        <Reveal>
            <div className="flex flex-col items-center mb-16">
                <span className="text-emerald-400 font-semibold tracking-wider text-sm mb-2">الحل المقترح</span>
                <h2 className="text-4xl font-bold text-center print:text-black">نظام متكامل، مصمم لنموك</h2>
                {user && (
                    <p className="mt-4 text-gray-400 text-sm animate-pulse">
                        أهلاً {user}، يمكنك الضغط على أيقونة القلب <Heart className="w-3 h-3 inline text-pink-500" /> لحفظ الميزات التي تهمك.
                    </p>
                )}
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className={`group h-full p-8 rounded-3xl border ${feature.border} ${feature.bg} hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 relative overflow-hidden print:border-gray-200 print:bg-gray-50 flex flex-col`}>
                
                {/* Like Button */}
                {user && toggleLike && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(feature.title);
                        }}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="أضف للمفضلة"
                    >
                        <Heart 
                            className={`w-5 h-5 transition-all duration-300 ${likedFeatures.includes(feature.title) ? 'text-pink-500 fill-pink-500 scale-110' : 'text-white/70 hover:text-white'}`} 
                        />
                    </button>
                )}
                
                {/* Active Like Indicator (Visible even when not hovering if liked) */}
                {user && likedFeatures.includes(feature.title) && (
                     <div className="absolute top-4 right-4 p-2 z-10 group-hover:opacity-0 pointer-events-none">
                         <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                     </div>
                )}

                {feature.badge && (
                  <div className="absolute top-4 left-4 bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/30 print:text-emerald-700 print:bg-emerald-100 z-20">
                    {feature.badge}
                  </div>
                )}
                
                <div className={`mb-6 p-4 rounded-2xl bg-navy-900 w-fit ${feature.color} print:bg-white print:border print:border-gray-100 relative z-20`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors print:text-black print:group-hover:text-black relative z-20">
                    {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm print:text-gray-600 mb-4 flex-grow relative z-20">
                    {feature.desc}
                </p>

                {/* Interactive Demos */}
                <div className="relative z-20 mt-auto pt-4">
                    {feature.title === "إدارة المخزون الذكية" && <InventoryDemo />}
                    {feature.title === "ربط مباشر مع ZR Express" && <TrackingDemo />}
                </div>
                
                {/* Checkmark indicator */}
                {!(feature.title === "إدارة المخزون الذكية" || feature.title === "ربط مباشر مع ZR Express") && (
                   <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400 text-sm print:hidden relative z-20">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>مشمول في العرض</span>
                  </div>
                )}

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};