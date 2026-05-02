import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Lock, CheckCircle, ShieldAlert, X } from 'lucide-react';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaidMember, setIsPaidMember] = useState(false); // Mock state for demo

  const handleDocumentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isPaidMember) {
      setIsModalOpen(true);
    } else {
      // Logic to actually download the document
      alert("Downloading document...");
    }
  };

  return (
    <>
      <footer className="relative bg-emerald-deep text-white border-t border-[#b87333]/30 overflow-hidden">
        {/* Background Watermark Stamp */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-auto cursor-pointer select-none flex items-center justify-center"
          onDoubleClick={() => setIsPaidMember(!isPaidMember)} // Hidden way to toggle mock state
          title="Double click to toggle Paid Membership state for demo"
        >
          <div className="w-[400px] h-[400px] rounded-full border-8 border-current flex items-center justify-center relative">
            <div className="w-[360px] h-[360px] rounded-full border-4 border-dashed border-current flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center transform -rotate-12">
                 <span className="text-4xl font-serif font-bold uppercase tracking-[0.5em] text-current">Verified</span>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="w-[320px] h-[320px]">
                   <path id="curve" fill="transparent" d="M 10 50 A 40 40 0 1 1 90 50 A 40 40 0 1 1 10 50" />
                   <text width="100" className="text-[8px] font-bold uppercase tracking-widest fill-current">
                     <textPath href="#curve" startOffset="50%" textAnchor="middle">Association of Zambians - Czech Republic (AZACRE) z.s.</textPath>
                   </text>
                 </svg>
               </div>
            </div>
          </div>
        </div>

        {/* Decorative Top Border (Zambian Flag Colors) */}
        <div className="h-1.5 w-full flex">
          <div className="flex-1 bg-emerald-500"></div>
          <div className="flex-1 bg-red-600"></div>
          <div className="flex-1 bg-black"></div>
          <div className="flex-1 bg-orange-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-block">
                <h3 className="text-2xl font-serif font-bold tracking-tight text-[#e6be8a] mb-2">
                  Association of Zambians - Czech Republic <br/> (AZACRE) z.s.
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-[#b87333] to-transparent mt-4 mb-1"></div>
              </div>
              
              <div className="space-y-2 text-white/80 font-light">
                <p className="flex items-start gap-3">
                  <span className="font-semibold text-[#c48b52] uppercase tracking-widest text-xs mt-1 shrink-0">Registered Address</span>
                  <span>Kurzova 2222/16, <br/> 155 00 Praha 5, <br/> Czech Republic</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end space-y-4">
              <button 
                onClick={handleDocumentClick}
                className="inline-flex w-full md:w-auto justify-between items-center gap-4 bg-[#b87333]/10 hover:bg-[#b87333]/20 border border-[#b87333]/30 text-[#e6be8a] px-6 py-3 rounded-xl transition-colors group backdrop-blur-sm"
              >
                <span className="font-medium tracking-wide text-left">Official Constitution</span>
                {isPaidMember ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <Lock className="w-5 h-5 text-[#c48b52] shrink-0" />
                )}
              </button>

              <button 
                onClick={handleDocumentClick}
                className="inline-flex w-full md:w-auto justify-between items-center gap-4 bg-[#b87333]/10 hover:bg-[#b87333]/20 border border-[#b87333]/30 text-[#e6be8a] px-6 py-3 rounded-xl transition-colors group backdrop-blur-sm"
              >
                <span className="font-medium tracking-wide text-left">Annual Financial Reports</span>
                {isPaidMember ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <Lock className="w-5 h-5 text-[#c48b52] shrink-0" />
                )}
              </button>

              <div className="text-left md:text-right text-sm text-white/50 font-light mt-4 pt-4">
                <p>© {new Date().getFullYear()} AZACRE z.s. All rights reserved.</p>
                <p className="mt-1">Zambia Legacy Beyond Borders</p>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Access Restricted Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 pb-0">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                   <ShieldAlert className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Access Restricted</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Constitution and Financial Reports of Association of Zambians - Czech Republic (AZACRE) z.s. are available exclusively to registered members.
                </p>
              </div>

              <div className="p-8 pt-8 flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setIsModalOpen(false);
                    window.location.hash = '#dashboard';
                  }}
                  className="w-full bg-brand-dark text-white font-semibold py-3.5 rounded-xl hover:bg-emerald-900 transition-colors"
                >
                  Login to View
                </button>
                <a 
                  href="https://azacremembership.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-orange-warm text-white text-center font-semibold py-3.5 rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Join AzACRE
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
