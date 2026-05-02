import { motion } from 'motion/react';
import { FileText, Lock, Shield } from 'lucide-react';

export default function Legal() {
  const documents = [
    { title: "AZACRE z.s. Constitution", date: "Ratified Dec 2025" },
    { title: "2025 Financial Audit", date: "Jan 15, 2026" },
    { title: "Executive Board Minutes - March", date: "Mar 05, 2026" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 p-8 opacity-[0.02] pointer-events-none">
         <Shield className="w-96 h-96 text-[#b87333]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-serif font-bold text-brand-dark tracking-tight mb-4">
            Official <span className="text-[#c48b52]">Documentation.</span>
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-6">
            As a registered entity (zapsaný spolek) in the Czech Republic, we maintain transparency regarding our association's structure and major events. 
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-8">
             <h4 className="font-semibold text-gray-800 text-sm mb-3">Public Information</h4>
             <ul className="space-y-2 text-sm text-gray-600">
               <li><span className="font-semibold text-gray-700">Registered Name:</span> AzACRE z.s.</li>
               <li><span className="font-semibold text-gray-700">Registered Address:</span> Kurzova 2222/16, 155 00 Praha 5</li>
               <li><span className="font-semibold text-gray-700">Motto:</span> Zambia Legacy Beyond Borders</li>
             </ul>
          </div>
        </div>

        <div className="lg:w-2/3 w-full max-w-2xl">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-emerald-deep mb-6">Internal Documents (Members Only)</h3>
             <div className="space-y-4">
               {documents.map((doc, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50"
                 >
                    <div className="flex items-center gap-4">
                       <div className="bg-white p-2.5 rounded-lg shadow-sm text-gray-500 border border-gray-100">
                          <FileText className="w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-semibold text-gray-800 text-sm">{doc.title}</h4>
                         <p className="text-xs text-gray-500 mt-0.5">{doc.date}</p>
                       </div>
                    </div>
                    
                    <div className="p-2 text-gray-400 group relative cursor-not-allowed">
                       <Lock className="w-5 h-5" />
                       <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-56 p-2.5 bg-gray-900 text-white text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                          Access Restricted. Please log in with your Paid Membership to view official documents.
                          {/* small triangle pointing down */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                       </div>
                    </div>
                 </motion.div>
               ))}
             </div>
             <p className="text-xs text-gray-400 mt-6 pt-6 border-t border-gray-100">
               * The full text of the Constitution, detailed bank statements, expense logs, and Executive Board minutes are accessible strictly via the Member Dashboard to active, paid members.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
