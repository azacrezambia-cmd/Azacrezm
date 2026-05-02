import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex border-none focus:outline-none focus:ring-0 w-full">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&q=80&w=2070')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Blended overlay: Zambian flag colors with opacity + dark fade for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/80 via-black/50 to-orange-warm/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-widest uppercase mb-6">
            Association for Zambians in the Czech Republic
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-2 drop-shadow-lg">
            Welcome <span className="text-orange-light italic">Home.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-serif font-medium text-[#c48b52] tracking-wide mb-8 drop-shadow-md">
            Zambia Legacy Beyond Borders
          </p>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl leading-relaxed mb-10">
            A prestigious community fostering unity, growth, and connection for the Zambian diaspora across the Czech Republic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#membership" 
              className="bg-orange-warm hover:bg-orange-light text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              Become a Member
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#events" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center"
            >
              Explore Events
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer z-10" onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
}
