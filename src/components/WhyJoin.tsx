import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, Unlock, ShieldCheck } from 'lucide-react';

interface Reason {
  id: string;
  title: string;
  description: string;
  image: string;
  isExclusive: boolean;
  isLockedDoc?: boolean;
}

const reasons: Reason[] = [
  {
    id: "airport",
    title: "Airport Pickup",
    description: "Start your journey in the Czech Republic with a warm welcome at Prague Terminal 1.",
    image: "https://images.unsplash.com/photo-1544485542-a8c60aed86e3?auto=format&fit=crop&q=80&w=800",
    isExclusive: true
  },
  {
    id: "housing",
    title: "Housing Support",
    description: "Guidance with securing modern apartments and communicating with Czech landlords.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    isExclusive: true
  },
  {
    id: "visa",
    title: "Visa Help",
    description: "Immigration experts helping with your Czech visa application over a cup of coffee.",
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800",
    isExclusive: false
  },
  {
    id: "events",
    title: "Community Events",
    description: "High-action sports like the May 9th Football Tournament (Zambia vs. Nigeria/Zimbabwe).",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800",
    isExclusive: false
  },
  {
    id: "career",
    title: "Career Growth",
    description: "Professional networking mixers with people in suits talking, laughing, and building futures.",
    image: "https://images.unsplash.com/photo-1515169065258-744db60eb2aa?auto=format&fit=crop&q=80&w=800",
    isExclusive: true
  },
  {
    id: "legal",
    title: "Legal Foundation",
    description: "Credible organization operating from our official headquarters at Kurzova 2222/16.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    isExclusive: false
  },
  {
    id: "financial",
    title: "Financial Proofing",
    description: "Support tracking bank statements and securing your required proof of funds.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    isExclusive: true
  },
  {
    id: "constitution",
    title: "The Constitution",
    description: "The full text of the Association's Constitution and detailed financial audit records.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    isExclusive: true,
    isLockedDoc: true
  },
  {
    id: "document",
    title: "Document Recovery",
    description: "Lost a passport or ID? We assist with embassy liaisons and paperwork replacement.",
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800",
    isExclusive: true
  },
  {
    id: "discounts",
    title: "Partner Discounts",
    description: "Special access and pricing for community galas, cultural dinners, and partner services.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    isExclusive: true
  }
];

export default function WhyJoin() {
  const [isPaidMember, setIsPaidMember] = useState(false);

  // In a real app, this would be tied to global auth state.
  // For the demo, we'll let the user double-click the lock to fake login,
  // or it could be hardcoded as false naturally.
  
  return (
    <section id="why-join" className="py-24 px-6 md:px-12 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-deep tracking-tight mb-6">
            Why Join <span className="text-orange-warm">AzACRE?</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Discover the 10 core reasons our members call this association their home away from home.
          </p>
        </div>

        {/* The Staggered Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {reasons.map((reason, idx) => {
            // Give some items a specific aspect ratio for the masonry effect
            const aspectClass = idx % 4 === 0 ? "aspect-[4/5]" : idx % 3 === 0 ? "aspect-[3/4]" : "aspect-square";
            
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white break-inside-avoid ${aspectClass}`}
              >
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlaid Motto on the very first image */}
                {idx === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center p-6 z-10 pointer-events-none">
                     <p className="text-white/40 font-serif font-bold text-4xl leading-tight text-center tracking-wide" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                       Zambia Legacy Beyond Borders
                     </p>
                  </div>
                )}
                
                {/* Default Gradient for text legibility */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${reason.isLockedDoc ? 'opacity-80' : 'group-hover:opacity-0'}`} />

                {/* Emerald Green Hover Overlay */}
                <div className={`absolute inset-0 bg-emerald-900/90 text-white opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm z-20 ${reason.isLockedDoc && !isPaidMember ? '' : 'group-hover:opacity-100'}`}>
                   {reason.isExclusive && (
                      <span className="bg-orange-warm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-1 shadow-md">
                        <ShieldCheck className="w-3 h-3" /> Member Exclusive
                      </span>
                   )}
                   <h3 className="text-2xl font-serif font-bold mb-3">{reason.title}</h3>
                   <p className="text-emerald-50 text-sm font-light leading-relaxed">{reason.description}</p>
                </div>

                {/* Constitution Lock Logic */}
                {reason.isLockedDoc && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-30" onDoubleClick={() => setIsPaidMember(!isPaidMember)}>
                    <div className="bg-black/60 p-6 rounded-2xl backdrop-blur-md flex flex-col items-center border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                      {!isPaidMember ? (
                         <>
                           <Lock className="w-10 h-10 text-[#c48b52] mb-3" />
                           <h4 className="text-white font-serif font-bold text-lg">Secure Document</h4>
                           <p className="text-xs text-gray-400 mt-2 max-w-[200px] text-center">
                             Locked. Log in with a Paid Membership to view.
                           </p>
                         </>
                      ) : (
                         <>
                           <Unlock className="w-10 h-10 text-emerald-400 mb-3" />
                           <h4 className="text-white font-serif font-bold text-lg">Access Granted</h4>
                           <p className="text-xs text-emerald-200 mt-2 font-medium">Click to open PDF</p>
                         </>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Baseline Title (Visible when not hovered) */}
                <div className={`absolute bottom-0 left-0 p-6 w-full z-10 transition-opacity duration-300 ${reason.isLockedDoc ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                  <h3 className="text-white font-serif font-bold text-xl">{reason.title}</h3>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
