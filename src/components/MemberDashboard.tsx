import { useState } from 'react';
import { motion } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { Lock, Mail, CreditCard, ExternalLink, ArrowRight, CheckCircle, AlertCircle, FileText, Download, UploadCloud, Shield } from 'lucide-react';

export default function MemberDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'member' | 'treasurer'>('member');
  const [isLoading, setIsLoading] = useState(false);

  // Mock user status. In a real app, this would be fetched from the database after login.
  // We'll add a toggle for demo purposes.
  const [isApproved, setIsApproved] = useState(false);
  
  const mockUser = {
    name: role === 'treasurer' ? "Lamsen (Treasurer)" : "John Doe",
    membershipId: "AZC-2026-0492",
    joinDate: "Jan 2026",
    status: isApproved || role === 'treasurer' ? "Approved" : "Pending"
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      // Simulate checking email to assign role
      if (email.toLowerCase().includes('lamsen')) {
        setRole('treasurer');
        setIsApproved(true);
      } else {
        setRole('member');
      }
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center p-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl border border-emerald-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-2">Member Portal</h2>
            <p className="text-gray-500 text-sm">Access your digital member card and status.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-primary focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-primary focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-emerald-deep text-white font-semibold py-3 rounded-xl hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? 'Signing in...' : (
                <>Sign In <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account? <a href="#membership" className="text-emerald-primary font-semibold hover:underline">Join AzACRE</a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-brand-dark">Member Dashboard</h1>
          <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-800 font-medium">Log out</button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column: Digital Card */}
          <div className="flex flex-col items-center">
            {/* Apple Wallet Style Card with Copper Texture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-[340px] h-[540px] rounded-[32px] overflow-hidden shadow-2xl text-white font-sans flex flex-col justify-between p-8"
              style={{
                // Copper gradient and subtle texture overlay
                background: `linear-gradient(135deg, #b87333 0%, #c48b52 30%, #e6be8a 50%, #c48b52 70%, #b87333 100%)`,
                boxShadow: '0 25px 50px -12px rgba(184, 115, 51, 0.4), inset 0 0 20px rgba(255,255,255,0.2)'
              }}
            >
              {/* Copper texture overlay */}
              <div 
                className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
              ></div>

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-semibold text-white/80 mb-1">AzACRE</h3>
                  <div className="text-xl font-serif font-bold text-white shadow-sm">Digital Member</div>
                </div>
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center my-6">
                <div className="bg-white p-3 rounded-2xl shadow-lg mb-4">
                  <QRCodeSVG 
                    value={`azacre:member:${mockUser.membershipId}`} 
                    size={160} 
                    bgColor={"#ffffff"}
                    fgColor={"#1a1a1a"}
                    level={"Q"}
                  />
                </div>
                <p className="text-sm font-mono tracking-widest text-white/90 bg-black/20 py-1 px-4 rounded-full backdrop-blur-sm">
                  {mockUser.membershipId}
                </p>
              </div>

              <div className="relative z-10">
                <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Member Name</p>
                <div className="text-2xl font-bold truncate">{mockUser.name}</div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-[10px] text-white/70 uppercase tracking-widest">Valid From</p>
                      <p className="text-sm font-medium">{mockUser.joinDate}</p>
                    </div>
                    {isApproved ? (
                       <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/50 px-3 py-1 rounded-full backdrop-blur-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-100" />
                          <span className="text-xs font-bold text-emerald-50">PAID</span>
                       </div>
                    ) : (
                       <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-400/50 px-3 py-1 rounded-full backdrop-blur-sm">
                          <AlertCircle className="w-4 h-4 text-red-100" />
                          <span className="text-xs font-bold text-red-50">PENDING</span>
                       </div>
                    )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Actions and Status */}
          <div className="space-y-6 flex flex-col justify-center">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="text-lg font-semibold text-brand-dark mb-4">Membership Status</h3>
               
               {isApproved ? (
                 <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-4">
                    <div className="mt-1 bg-emerald-100 p-2 rounded-full text-emerald-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Active & Paid</h4>
                      <p className="text-sm text-emerald-700/80 mt-1">Your membership is fully active. You have access to all AzACRE benefits and voting rights.</p>
                    </div>
                 </div>
               ) : (
                 <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-full text-orange-warm">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-900">Pending / Unpaid</h4>
                      <p className="text-sm text-orange-800/80 mt-1 mb-4">Your membership payment is pending. Complete your registration to unlock full member benefits.</p>
                      
                      <a 
                        href="https://azacremembership.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-orange-warm hover:bg-[#c93f0b] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                      >
                         Complete Payment at Lovable <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                 </div>
               )}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="text-lg font-semibold text-brand-dark mb-3">Quick Actions</h3>
               <div className="space-y-4">
                 <a 
                   href="https://azacremembership.lovable.app/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-emerald-primary hover:bg-emerald-50 transition-all group"
                 >
                   <span className="font-medium text-gray-800 group-hover:text-emerald-primary">Register & Pay via AzACRE Lovable Portal</span>
                   <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-primary" />
                 </a>
                 
                 {/* For Demo Purposes Only */}
                 <button 
                   onClick={() => setIsApproved(!isApproved)}
                   className="text-xs text-gray-400 underline w-full text-left"
                 >
                   (Demo) Toggle Status to {isApproved ? 'Pending' : 'Approved'}
                 </button>
               </div>
            </div>

          </div>

        </div>

        {/* The Vault: Protected Documents Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Shield className="w-48 h-48 text-emerald-900" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-2 flex items-center gap-3">
               The Vault <Lock className="w-5 h-5 text-gray-400" />
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Official documents and reports for active members. 
              <br/> <span className="text-xs text-orange-warm font-semibold tracking-wider uppercase">Notice: All internal documents are for private member use only and contain proprietary information.</span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 { title: "AZACRE z.s. Constitution", date: "Ratified Dec 2025" },
                 { title: "2025 Financial Audit", date: "Jan 15, 2026" },
                 { title: "Executive Board Minutes - March", date: "Mar 05, 2026" }
               ].map((doc, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all">
                    <div className="flex items-center gap-4">
                       <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-700">
                          <FileText className="w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-semibold text-gray-800 text-sm">{doc.title}</h4>
                         <p className="text-xs text-gray-500 mt-0.5">{doc.date}</p>
                       </div>
                    </div>
                    {isApproved || role === 'treasurer' ? (
                      <button className="p-2 text-emerald-primary hover:bg-emerald-100 rounded-full transition-colors" title="Download">
                         <Download className="w-5 h-5" />
                      </button>
                    ) : (
                      <div className="p-2 text-gray-400 group relative">
                         <Lock className="w-5 h-5" />
                         <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                            Access Restricted. Complete payment to view.
                         </div>
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Admin Portal for Treasurer */ }
        {role === 'treasurer' && (
          <div className="mt-8 bg-brand-dark rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden text-white">
            <h2 className="text-2xl font-serif font-bold text-[#c48b52] mb-2 flex items-center gap-3">
               Treasurer Admin Portal
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl text-sm">
              Securely upload PDF financial reports. Documents uploaded here will automatically appear in 'The Vault' for all paid members to see.
            </p>

            <div className="border-2 border-dashed border-gray-600 rounded-2xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
               <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-4" />
               <h4 className="font-semibold text-gray-200 mb-1">Upload Financial Report</h4>
               <p className="text-xs text-gray-500">PDF documents only. (Max 10MB)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
