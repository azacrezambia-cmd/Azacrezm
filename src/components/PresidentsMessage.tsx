import { motion } from 'motion/react';
import mulengaPresidentSrc from '../../Public/Executive/Mulenga_president.jpeg';

export default function PresidentsMessage() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      {/* Copper Texture Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b87333' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#b87333]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: President's Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-[#b87333]/30" />
              <img 
                src={mulengaPresidentSrc} 
                alt="President John" 
                className="relative rounded-2xl object-cover w-full h-[500px] shadow-2xl z-10"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-100">
                <p className="font-serif font-bold text-emerald-deep text-lg">John</p>
                <p className="text-sm text-[#b87333] tracking-widest uppercase font-semibold">President, AzACRE</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col justify-center"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-deep mb-3">
                A message from our President
              </h2>
              <h3 className="text-xl md:text-2xl font-serif text-[#c48b52] italic">
                "Zambia Legacy Beyond Borders"
              </h3>
            </div>

            <blockquote className="relative border-l-4 border-[#b87333] pl-6 md:pl-8 py-2 mb-10">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                Welcome to AzACRE. Our association is built on the belief that our heritage is our greatest strength, no matter where we are in the world. As a legally registered entity in the heart of Europe (Praha 5), we are committed to ensuring that every Zambian in the Czech Republic has a community to lean on, a legacy to build, and a home away from home. Whether you are a student arriving at the airport or a professional launching a project, we are here to ensure your legacy knows no borders.
              </p>
            </blockquote>

            <div className="mb-12">
              <div className="font-serif text-4xl text-[#b87333] opacity-80" style={{ fontFamily: "'Cedarville Cursive', cursive, serif" }}>
                John
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
                Association of Zambians - Czech Republic (AZACRE) z.s., Registered at Kurzova 2222/16, Prague.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
