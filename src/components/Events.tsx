import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, X, ArrowRight, Trophy, Vote, Users } from 'lucide-react';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Countdown logic for Independence Day Celebration
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // October 18, 2026
    const targetDate = new Date("2026-10-18T18:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const featuredEvent = {
    id: 1,
    title: "Football & Volleyball Tournament",
    date: "May 9, 2026",
    time: "10:00 - 17:00",
    location: "Sportovní areál Strahov, Prague",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200",
    category: "Sports",
    status: "Registration Open",
    description: "Our highly anticipated annual sports day. Come support or participate in football and volleyball matches. Competing teams this year: Zimbabwe, Nigeria, and Zambia. It's a day of healthy competition and immense pride."
  };

  const otherEvents = [
    {
      id: 2,
      title: "Independence Day Celebration",
      date: "October 18, 2026",
      time: "18:00 - 02:00",
      location: "Prague Congress Centre",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      category: "Gala",
      status: "Registration Open",
      description: "Join us for our premier annual event celebrating Zambia's independence. Featuring cultural performances, traditional cuisine, and an unforgettable celebration."
    },
    {
      id: 3,
      title: "Sip and Paint",
      date: "Date TBA",
      time: "TBA",
      location: "Prague City Center",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      category: "Social",
      status: "Coming Soon - Date TBA",
      description: "A relaxing evening of art, wine, and great company. No prior painting experience required, just a willingness to express yourself."
    },
    {
      id: 4,
      title: "Dine and Wine",
      date: "Date TBA",
      time: "TBA",
      location: "Premium Restaurant, Prague",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      category: "Interactive",
      status: "Coming Soon - Date TBA",
      description: "Enjoy an interactive culinary experience. Connect with professionals, savor incredible food, and grow your network."
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes('Registration Open')) return 'bg-emerald-500 text-white';
    if (status.includes('Coming Soon')) return 'bg-orange-warm text-white';
    if (status.includes('Members Only')) return 'bg-brand-dark text-[#c48b52] border border-[#c48b52]/50';
    return 'bg-gray-200 text-gray-800';
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-emerald-deep tracking-tight mb-6">
            AzACRE 2026 Schedule
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Join the vibrant Zambian community in the Czech Republic. From sports to cultural galas, our events are designed to foster unity and build lasting legacies.
          </p>
        </div>

        {/* Featured Event Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-deep rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 flex flex-col md:flex-row relative cursor-pointer group"
          onClick={() => setSelectedEvent(featuredEvent)}
        >
          <div className="md:w-1/2 relative min-h-[350px] md:min-h-[450px]">
             <img 
               src={featuredEvent.image} 
               alt={featuredEvent.title} 
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-transparent mix-blend-multiply" />
             <div className="absolute top-6 left-6 bg-orange-warm text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
               <Trophy className="w-4 h-4" /> Featured Event
             </div>
             
             {/* Hover info overlay */}
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-semibold flex items-center gap-2 text-lg">
                  View Tournament Details <ArrowRight className="w-5 h-5" />
                </span>
             </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative z-10 w-full">
            <div className={`mb-6 self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${getStatusColor(featuredEvent.status)}`}>
               {featuredEvent.status}
            </div>
            
            <span className="text-[#c48b52] font-semibold tracking-wider text-sm uppercase mb-2 block font-serif">
              {featuredEvent.category}
            </span>
            <h3 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4">
              {featuredEvent.title}
            </h3>
            
            <p className="text-emerald-50/90 text-lg font-light leading-relaxed mb-6">
              {featuredEvent.description}
            </p>
            
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8 backdrop-blur-md">
              <h4 className="text-sm uppercase tracking-widest text-orange-light font-semibold mb-2">Competing Teams</h4>
              <div className="flex gap-4 items-center font-serif text-xl">
                 <span>🇿🇼 Zimbabwe</span>
                 <span className="text-white/50">vs</span>
                 <span>🇳🇬 Nigeria</span>
                 <span className="text-white/50">vs</span>
                 <span>🇿🇲 Zambia</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-warm/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-light" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider">Date</p>
                  <p className="font-semibold text-sm sm:text-base">{featuredEvent.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-warm/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-light" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider">Location</p>
                  <p className="font-semibold text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">{featuredEvent.location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Independence Day Countdown */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-warm/20 mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-warm/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
           <div className="md:w-1/2 z-10">
             <h3 className="text-3xl font-serif font-bold text-emerald-deep mb-3">Countdown to Independence Day</h3>
             <p className="text-gray-600 leading-relaxed font-light mb-6">
                Join us on October 18 for our biggest gala of the year. Secure your tickets early and prepare for an unforgettable celebration of our heritage.
             </p>
             <button className="bg-orange-warm hover:bg-[#c93f0b] text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                Register Now <ArrowRight className="w-4 h-4" />
             </button>
           </div>
           
           <div className="grid grid-cols-4 gap-3 md:gap-6 text-center z-10 w-full md:w-1/2">
             {[
               { label: 'Days', value: timeLeft.days },
               { label: 'Hours', value: timeLeft.hours },
               { label: 'Mins', value: timeLeft.minutes },
               { label: 'Secs', value: timeLeft.seconds },
             ].map((unit, idx) => (
               <div key={idx} className="bg-emerald-50 rounded-2xl p-3 md:p-4 border border-emerald-100 shadow-sm">
                 <div className="text-2xl md:text-5xl font-serif font-bold text-emerald-deep mb-1">{unit.value}</div>
                 <div className="text-[10px] md:text-xs font-semibold text-orange-warm uppercase tracking-widest">{unit.label}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Other Events Grid */}
        <h3 className="text-2xl font-serif font-bold text-emerald-deep mb-8 relative inline-block">
          More Events
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#b87333] rounded-full" />
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {otherEvents.map((evt, idx) => (
            <motion.div 
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
              onClick={() => setSelectedEvent(evt)}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${getStatusColor(evt.status)}`}>
                  {evt.status}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <span className="text-orange-warm text-xs font-bold uppercase tracking-widest mb-2">{evt.category}</span>
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 group-hover:text-emerald-primary transition-colors leading-snug">{evt.title}</h3>
                
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-3 text-gray-500">
                    <Calendar className="w-4 h-4 text-[#c48b52]" />
                    <span className="text-sm font-medium">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <MapPin className="w-4 h-4 text-[#c48b52]" />
                    <span className="text-sm font-medium truncate">{evt.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elections Portal Section */}
        <div className="bg-[#1a2f24] rounded-3xl p-1 relative overflow-hidden shadow-2xl mb-12">
          {/* Copper styling border */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#b87333]/20 via-transparent to-[#b87333]/20" />
          
          <div className="bg-[#112219] rounded-[1.4rem] p-8 md:p-16 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none">
                <Vote className="w-96 h-96 text-white" />
            </div>

            <div className="max-w-2xl relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b87333]/10 border border-[#b87333]/30 text-[#e6be8a] text-xs font-bold uppercase tracking-wider mb-6">
                 <Users className="w-4 h-4" /> Members Only - Election Year
               </div>
               
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                 December 24 AGM & <span className="text-[#c48b52]">Elections Portal</span>
               </h2>
               
               <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                 Notice is hereby given that the Annual General Meeting (AGM) will take place on December 24, 2026. This is an election year where the new Executive Board will be elected to serve the Association of Zambians - Czech Republic (AZACRE) z.s.
               </p>

               <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                     <Calendar className="w-6 h-6 text-orange-warm mb-3" />
                     <h4 className="text-white font-semibold mb-1">Date & Time</h4>
                     <p className="text-gray-400 text-sm">Dec 24, 2026 • 14:00 (CET)</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                     <MapPin className="w-6 h-6 text-orange-warm mb-3" />
                     <h4 className="text-white font-semibold mb-1">Format</h4>
                     <p className="text-gray-400 text-sm">Hybrid (In-person & Virtual)</p>
                  </div>
               </div>

               <button className="bg-white text-[#112219] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl">
                 Nomination Forms Available Soon
               </button>
            </div>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] border border-gray-100"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 sm:h-80 relative shrink-0">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end p-8">
                   <div className="flex items-center gap-3 mb-2">
                     <span className="text-orange-light font-bold tracking-widest text-[10px] uppercase">{selectedEvent.category}</span>
                     <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getStatusColor(selectedEvent.status)}`}>
                       {selectedEvent.status}
                     </span>
                   </div>
                   <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">{selectedEvent.title}</h3>
                </div>
              </div>

              <div className="p-8 overflow-y-auto">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-start gap-4 text-gray-700">
                    <div className="bg-emerald-50 p-2.5 rounded-full text-emerald-primary">
                       <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">Date & Time</p>
                      <p className="font-semibold text-gray-800">{selectedEvent.date}</p>
                      <p className="text-sm text-gray-500 mt-1">{selectedEvent.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-gray-700">
                    <div className="bg-orange-50 p-2.5 rounded-full text-orange-warm">
                       <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">Location</p>
                      <p className="font-semibold text-gray-800">{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-lg font-serif font-bold text-brand-dark mb-3">About this Event</h4>
                  <p className="text-gray-600 leading-relaxed font-light">{selectedEvent.description}</p>
                  
                  {selectedEvent.id === 1 && (
                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <p className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">Participating Nations</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-lg font-medium">🇿🇼 Zimbabwe</span>
                        <span className="bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-lg font-medium">🇳🇬 Nigeria</span>
                        <span className="bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-lg font-medium">🇿🇲 Zambia</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      if(selectedEvent.status.includes('Open')) {
                        alert(`Opening registration portal for ${selectedEvent.title}...`);
                      } else {
                        alert(`Registration is not yet open for ${selectedEvent.title}.`);
                      }
                    }}
                    disabled={!selectedEvent.status.includes('Open')}
                    className="flex-1 bg-emerald-primary hover:bg-emerald-deep disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors shadow-lg disabled:shadow-none"
                  >
                    {selectedEvent.status.includes('Open') ? 'Register Now' : 'Registration Closed'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
