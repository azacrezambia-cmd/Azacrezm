import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, ShieldCheck } from 'lucide-react';

import mulengaPresidentSrc from '../../Public/Executive/Mulenga_president.jpeg';
import mapaloVPSrc from '../../Public/Executive/Mapalo_VP.jpeg';
import davidSGSrc from '../../Public/Executive/David_sg.jpeg';
import shikeAmbassadorSrc from '../../Public/Executive/Shike_Ambassador.jpeg';
import cholaBrandSrc from '../../Public/Executive/Chola_Brand.jpeg';
import lamsenTreasurerSrc from '../../Public/Executive/Lamsen_Treasurer.jpeg';
import teddyStudentSrc from '../../Public/Executive/Teddy_student.jpeg';
import dianaStudentSrc from '../../Public/Executive/Diana_Student.jpeg';
import tashaPlanningSrc from '../../Public/Executive/Tasha_Planning.jpeg';

export default function ExecutiveBoard() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const team = {
    president: {
      id: 1, name: "John", role: "President", image: mulengaPresidentSrc,
      bio: "John leads the strategic direction of AzACRE and acts as the primary liaison with the Zambian Embassy and community.",
    },
    vp: {
      id: 2, name: "Mapalo", role: "Vice President", image: mapaloVPSrc,
      bio: "Mapalo focuses on operational excellence, ensuring that the association's goals are met efficiently.",
    },
    secgen: {
      id: 3, name: "David", role: "Secretary General", image: davidSGSrc,
      bio: "David manages communications, event planning, and official documentation for all association activities.",
    },
    shike: {
      id: 4, name: "Shike", role: "Brand Ambassador", image: shikeAmbassadorSrc,
      bio: "Shike represents the values of AzACRE and works on brand partnerships and community outreach.",
    },
    chola: {
      id: 5, name: "Chola", role: "Brand Ambassador", image: cholaBrandSrc,
      bio: "Chola promotes the public image of the association and engages with our diverse community on all platforms.",
    },
    teddy: {
      id: 6, name: "Teddy", role: "Student Ambassador", image: teddyStudentSrc,
      bio: "Teddy ensures student voices are heard within the association and helps new arrivals settle in the Czech Republic.",
    },
    diana: {
      id: 7, name: "Diana", role: "Student Ambassador", image: dianaStudentSrc,
      bio: "Diana connects students across universities and supports educational initiatives within the community.",
    },
    planning: {
      id: 8, name: "Tasha", role: "Planning Officer", image: tashaPlanningSrc,
      bio: "Tasha is responsible for organizing logistics and ensuring smooth execution of all AzACRE events.",
    },
    treasurer: {
      id: 9, name: "Lamsen", role: "Treasurer", image: lamsenTreasurerSrc,
      bio: "Lamsen handles the financial health of the association, managing membership dues and event budgets.",
    }
  };

  const nodes = [
    { id: 'president', data: team.president, cx: 600, cy: 180 },
    { id: 'vp', data: team.vp, cx: 250, cy: 580 },
    { id: 'secgen', data: team.secgen, cx: 600, cy: 580 },
    { id: 'treasurer', data: team.treasurer, cx: 950, cy: 580 },
    { id: 'planning', data: team.planning, cx: 600, cy: 980 },
    { id: 'shike', data: team.shike, cx: 240, cy: 1380 },
    { id: 'chola', data: team.chola, cx: 480, cy: 1380 },
    { id: 'teddy', data: team.teddy, cx: 720, cy: 1380 },
    { id: 'diana', data: team.diana, cx: 960, cy: 1380 },
  ];

  const connections = [
    { id: 'vp-conn', path: 'M 600,320 C 600,380 250,380 250,440', activeFor: ['vp'] },
    { id: 'secgen-conn', path: 'M 600,320 C 600,380 600,380 600,440', activeFor: ['secgen', 'planning', 'shike', 'chola', 'teddy', 'diana'] },
    { id: 'treasurer-conn', path: 'M 600,320 C 600,380 950,380 950,440', activeFor: ['treasurer'] },
    { id: 'planning-conn', path: 'M 600,720 C 600,780 600,780 600,840', activeFor: ['planning', 'shike', 'chola', 'teddy', 'diana'] },
    { id: 'shike-conn', path: 'M 600,1120 C 600,1180 240,1180 240,1240', activeFor: ['shike'] },
    { id: 'chola-conn', path: 'M 600,1120 C 600,1180 480,1180 480,1240', activeFor: ['chola'] },
    { id: 'teddy-conn', path: 'M 600,1120 C 600,1180 720,1180 720,1240', activeFor: ['teddy'] },
    { id: 'diana-conn', path: 'M 600,1120 C 600,1180 960,1180 960,1240', activeFor: ['diana'] },
  ];

  const lineageMap: Record<string, string[]> = {
    'president': ['president'],
    'vp': ['president', 'vp'],
    'secgen': ['president', 'secgen'],
    'treasurer': ['president', 'treasurer'],
    'planning': ['president', 'secgen', 'planning'],
    'shike': ['president', 'secgen', 'planning', 'shike'],
    'chola': ['president', 'secgen', 'planning', 'chola'],
    'teddy': ['president', 'secgen', 'planning', 'teddy'],
    'diana': ['president', 'secgen', 'planning', 'diana'],
  };

  const isNodeActive = (nodeId: string) => {
    if (!hoveredNode) return false;
    return lineageMap[hoveredNode]?.includes(nodeId);
  };

  return (
    <section id="board" className="py-24 px-6 md:px-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight mb-4">Organizational Structure</h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Dedicated volunteers working to serve and connect the Zambian diaspora.
          </p>
        </div>

        {/* Chart Container */}
        <div className="w-full overflow-x-auto pb-16 custom-scrollbar">
          <div className="relative mx-auto mt-8" style={{ width: 1200, height: 1600 }}>
            {/* SVG Connections background */}
            <svg 
              className="absolute inset-0 pointer-events-none" 
              width="1200" 
              height="1600" 
              viewBox="0 0 1200 1600"
              style={{ zIndex: 0 }}
            >
              {connections.map(conn => {
                const isActivePath = hoveredNode && conn.activeFor.includes(hoveredNode);
                return (
                  <path 
                    key={conn.id}
                    d={conn.path}
                    fill="none"
                    stroke={isActivePath ? "#DF4913" : "#E5E7EB"}
                    strokeWidth={isActivePath ? "4" : "3"}
                    className="transition-all duration-300 ease-in-out"
                    strokeLinecap="round"
                    strokeDasharray={isActivePath ? "0" : "8, 8"}
                  />
                );
              })}
            </svg>

            {/* Nodes Overlay */}
            {nodes.map(node => {
              const active = isNodeActive(node.id);
              const isHoveredSelf = hoveredNode === node.id;
              
              return (
                <div 
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-56 group transition-transform duration-300 cursor-pointer 
                    ${isHoveredSelf ? 'z-20 scale-105' : 'z-10'}`}
                  style={{ left: node.cx, top: node.cy }}
                >
                  <div className={`relative mb-6 mx-auto w-44 h-44 sm:w-48 sm:h-48 transition-all duration-300 rounded-full p-1 
                    ${active ? 'bg-orange-warm' : 'bg-transparent'}`}>
                    
                    {/* Inner image container */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-brand-light relative border-4 border-white shadow-lg">
                      <img 
                        src={node.data.image} 
                        alt={node.data.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-emerald-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                        <a 
                          href="#" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-12 h-12 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-emerald-primary hover:text-white shadow-lg transition-all scale-75 group-hover:scale-100" 
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-5 h-5 fill-current" />
                        </a>
                      </div>
                    </div>

                    {/* Financial Transparency Icon for Treasurer */}
                    {node.data.role === 'Treasurer' && (
                      <div className="absolute -top-1 -right-1 bg-white rounded-full p-2.5 shadow-xl border border-gray-100 z-10 text-orange-warm group-hover:text-emerald-primary transition-colors duration-300">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  
                  <div className={`text-center bg-white p-4 rounded-xl shadow-sm border transition-colors duration-300 relative w-full
                    ${active ? 'border-orange-warm/30 shadow-orange-warm/10' : 'border-gray-100'}`}>
                    <h3 className={`text-xl font-serif font-bold transition-colors duration-300 ${active ? 'text-orange-warm' : 'text-brand-dark'}`}>
                      {node.data.name}
                    </h3>
                    <p className="text-emerald-primary font-semibold text-sm uppercase tracking-wider mt-1 mb-2">
                      {node.data.role}
                    </p>

                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isHoveredSelf ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-2 border-t border-gray-100 mt-2">
                        <p className="text-gray-500 text-xs leading-relaxed">{node.data.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
