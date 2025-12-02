import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from './Reveal';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-navy-800/30 print:bg-white page-break">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center print:text-black">القيمة المضافة للمشروع</h2>
        </Reveal>

        <Reveal delay={200}>
            <div className="overflow-hidden rounded-2xl border border-white/10 print:border-gray-300">
                <table className="w-full">
                    <thead className="bg-navy-900 print:bg-gray-100">
                        <tr>
                            <th className="p-6 text-right text-gray-400 w-1/2 print:text-gray-600">قبل النظام</th>
                            <th className="p-6 text-right text-emerald-400 w-1/2 print:text-emerald-700 font-bold">بعد النظام ✨</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 print:divide-gray-200">
                        {[
                            { before: "ضياع في تتبع حالة الطلبات", after: "تتبع دقيق ولحظي لكل طلب" },
                            { before: "هدر في القماش والمواد الخام", after: "خصم تلقائي ورقابة صارمة على المخزون" },
                            { before: "حسابات يدوية للأجور وعرضة للأخطاء", after: "حساب آلي للأجور وتقارير مالية دقيقة" },
                            { before: "كتابة بوليصات الشحن يدوياً", after: "ربط فوري وطباعة تلقائية مع ZR Express" }
                        ].map((row, idx) => (
                            <tr key={idx} className="bg-white/[0.02] hover:bg-white/[0.05] print:bg-white">
                                <td className="p-6 text-gray-400 flex items-center gap-2 print:text-gray-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                                    {row.before}
                                </td>
                                <td className="p-6 text-white font-medium border-r border-white/5 print:border-gray-200 print:text-black">
                                    <div className="flex items-center gap-2">
                                        <ArrowLeft className="w-4 h-4 text-emerald-500" />
                                        {row.after}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Reveal>
      </div>
    </section>
  );
};