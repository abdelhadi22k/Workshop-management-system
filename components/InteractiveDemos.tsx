import React, { useState, useEffect } from 'react';
import { ShoppingBag, Play, Pause } from 'lucide-react';

export const InventoryDemo: React.FC = () => {
  const [stock, setStock] = useState(124);
  const [lastRemoved, setLastRemoved] = useState(0);

  const handleOrder = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card hover/click effects if any
    if (stock < 5) {
      setStock(124); // Reset for demo
      return;
    }
    const amount = Math.floor(Math.random() * 5) + 1;
    setStock(prev => prev - amount);
    setLastRemoved(amount);
    
    // Reset visual indicator after animation
    setTimeout(() => setLastRemoved(0), 1000);
  };

  return (
    <div className="bg-navy-800/80 rounded-xl p-4 border border-white/10 select-none backdrop-blur-sm shadow-inner relative z-30 group/demo hover:border-white/20 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-300">مثال حي: قماش حرير (متر)</span>
        <div className="flex items-center gap-2">
            <span className={`text-[10px] bg-red-500/20 text-red-400 px-1.5 rounded transition-opacity duration-300 ${lastRemoved > 0 ? 'opacity-100' : 'opacity-0'}`}>
                -{lastRemoved}m
            </span>
            <span className={`text-sm font-bold font-mono transition-all duration-300 ${lastRemoved > 0 ? 'text-red-400 scale-110' : 'text-emerald-400'}`}>
            {stock}m
            </span>
        </div>
      </div>
      
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
        {/* Progress bar fills from right to left in RTL document flow */}
        <div 
          className={`absolute top-0 right-0 h-full transition-all duration-500 ease-out ${stock < 20 ? 'bg-red-500' : 'bg-emerald-500'}`}
          style={{ width: `${(stock / 150) * 100}%` }}
        />
      </div>

      <button 
        onClick={handleOrder}
        className="w-full py-2 bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-500/30 border border-white/10 rounded-lg text-xs flex items-center justify-center gap-2 transition-all active:scale-95 group/btn"
      >
        <ShoppingBag className="w-3 h-3 text-gray-400 group-hover/btn:text-emerald-400 transition-colors" />
        <span className="group-hover/btn:text-emerald-100 transition-colors">
            {stock < 5 ? 'إعادة تعبئة المخزون' : 'محاكاة طلب جديد'}
        </span>
      </button>
    </div>
  );
};

export const TrackingDemo: React.FC = () => {
  const steps = ['تم الطلب', 'قيد التجهيز', 'تم الشحن', 'تم التوصيل'];
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
            if (prev === 3) return 0;
            return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const toggleDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAutoPlaying && currentStep === 3) {
        setCurrentStep(0);
    }
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="bg-navy-800/80 rounded-xl p-4 border border-white/10 select-none backdrop-blur-sm shadow-inner relative z-30 group/demo hover:border-white/20 transition-colors">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
            <span className="text-xs text-gray-300 font-mono tracking-wider">#ZR-8821</span>
            <span className={`px-1.5 py-0.5 text-[10px] rounded border transition-all duration-300 ${
                currentStep === 3 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' 
                : 'bg-blue-500/20 text-blue-400 border-blue-500/20'
            }`}>
                {steps[currentStep]}
            </span>
        </div>
        <button 
            onClick={toggleDemo} 
            className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5" 
            title={isAutoPlaying ? "إيقاف المحاكاة" : "تشغيل المحاكاة"}
        >
            {isAutoPlaying ? (
                <Pause className="w-3 h-3 text-emerald-400 fill-emerald-400/20" />
            ) : (
                <Play className="w-3 h-3 text-gray-400 ml-0.5" />
            )}
        </button>
      </div>
      
      <div className="flex justify-between items-center relative mx-1 mb-2">
        {/* Line Background */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -z-0"></div>
        
        {/* Active Line Progress: In RTL 'right-0' anchors it to the start of the flow */}
        <div 
            className="absolute top-1/2 right-0 h-0.5 bg-emerald-500 -z-0 transition-all duration-500 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((_, idx) => (
          <div 
            key={idx}
            className={`w-3 h-3 rounded-full z-10 border-2 transition-all duration-500 flex items-center justify-center ${
              idx <= currentStep 
                ? 'bg-navy-900 border-emerald-500 scale-110' 
                : 'bg-navy-900 border-gray-600'
            }`}
          >
             {idx <= currentStep && <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-1">
        <span className={`text-[10px] transition-colors duration-300 ${currentStep >= 0 ? 'text-emerald-400' : 'text-gray-500'}`}>{steps[0]}</span>
        <span className={`text-[10px] transition-colors duration-300 ${currentStep >= 3 ? 'text-emerald-400' : 'text-gray-500'}`}>{steps[3]}</span>
      </div>
    </div>
  );
};