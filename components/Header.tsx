import React, { useState } from 'react';
import { Printer, LogIn, User, X, LogOut, Heart } from 'lucide-react';

interface HeaderProps {
  user: string | null;
  onLogin: (name: string) => void;
  onLogout: () => void;
  likesCount: number;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, likesCount }) => {
  const [showModal, setShowModal] = useState(false);
  const [nameInput, setNameInput] = useState('');

  const handlePrint = () => window.print();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onLogin(nameInput);
      setShowModal(false);
      setNameInput('');
    }
  };

  return (
    <>
      <header className="fixed top-6 right-6 z-50 flex gap-3 pointer-events-auto print:hidden">
        {/* Likes Counter (Only if user logged in) */}
        {user && likesCount > 0 && (
          <div className="bg-navy-900/80 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-500">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span className="text-sm font-bold">{likesCount}</span>
          </div>
        )}

        {/* User / Login Button */}
        {user ? (
          <div className="group relative">
            <button 
              className="bg-emerald-500/90 hover:bg-emerald-500 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              <span className="font-semibold text-sm max-w-[100px] truncate">{user}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-navy-900 border border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right scale-95 group-hover:scale-100">
                <button 
                    onClick={onLogout}
                    className="w-full text-right px-4 py-3 text-red-400 hover:bg-white/5 flex items-center gap-2 justify-end transition-colors"
                >
                    <span>تسجيل خروج</span>
                    <LogOut className="w-4 h-4" />
                </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span>دخول العميل</span>
            <LogIn className="w-5 h-5" />
          </button>
        )}

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="طباعة العرض"
        >
          <Printer className="w-6 h-6" />
        </button>
      </header>

      {/* Auth Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity" onClick={() => setShowModal(false)}></div>
          <div className="bg-navy-800 border border-white/10 rounded-3xl p-8 w-full max-w-md relative shadow-2xl animate-[float_0.5s_ease-out]">
            <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <User className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">تسجيل دخول العميل</h3>
                <p className="text-gray-400 text-sm">قم بتسجيل الدخول لحفظ المميزات التي تهمك في العرض</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-2 text-right font-medium">الاسم الكامل / اسم الشركة</label>
                    <input 
                        type="text" 
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all text-right placeholder-gray-600"
                        placeholder="أدخل الاسم هنا..."
                        required
                        autoFocus
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform active:scale-[0.98]"
                >
                    دخول للعرض
                </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};