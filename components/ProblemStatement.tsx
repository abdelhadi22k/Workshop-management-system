import React from 'react';
import { AlertTriangle, XCircle, FileWarning } from 'lucide-react';
import { Reveal } from './Reveal';

export const ProblemStatement: React.FC = () => {
  return (
    <section className="py-20 page-break">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden print:bg-red-50 print:border-red-200">
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle className="w-64 h-64 text-red-500" />
             </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-red-500/20 p-2 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-white print:text-black">التحديات الحالية ⚠️</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-lg print:text-gray-700">صعوبة في تتبع الطلبات المتراكمة ومعرفة حالتها بدقة.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-lg print:text-gray-700">غياب الربط الآلي مع شركة الشحن مما يسبب أخطاء في العناوين.</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <FileWarning className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-lg print:text-gray-700">عدم وجود تقارير دقيقة عن استهلاك القماش وهدر المواد.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <FileWarning className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-lg print:text-gray-700">حساب أجور الخياطين (بالقطعة) يتم يدوياً ويستغرق وقتاً طويلاً.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};