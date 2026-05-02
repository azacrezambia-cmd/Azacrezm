import { useState, useRef, useEffect } from 'react';
import { translateTextBatch } from './lib/gemini';
import { Globe, Loader2, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PresidentsMessage from './components/PresidentsMessage';
import WhyJoin from './components/WhyJoin';
import Events from './components/Events';
import Membership from './components/Membership';
import ExecutiveBoard from './components/ExecutiveBoard';
import Contacts from './components/Contacts';
import ImmigrationAssistant from './components/ImmigrationAssistant';
import MemberDashboard from './components/MemberDashboard';
import Footer from './components/Footer';
import Legal from './components/Legal';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  const [originalTexts, setOriginalTexts] = useState<{node: Text, original: string}[]>([]);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'events'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#dashboard') {
        setCurrentView('dashboard');
        window.scrollTo(0, 0);
      } else if (hash === '#events') {
        setCurrentView('events');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };
    
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleLang = async () => {
    if (isTranslating) return;
    const targetLang = lang === 'en' ? 'Bemba/Nyanja' : 'en';
    setLang(targetLang);
    
    if (!appRef.current) return;
    setIsTranslating(true);

    let nodesToTranslate: typeof originalTexts = [];
    
    if (targetLang === 'en') {
       originalTexts.forEach(t => t.node.nodeValue = t.original);
       setIsTranslating(false);
       return;
    }

    if (originalTexts.length === 0) {
       const walker = document.createTreeWalker(appRef.current, NodeFilter.SHOW_TEXT, {
          acceptNode: function(node) {
             if (node.parentElement?.closest('.no-translate')) return NodeFilter.FILTER_REJECT;
             if (node.nodeValue?.trim() === '') return NodeFilter.FILTER_REJECT;
             return NodeFilter.FILTER_ACCEPT;
          }
       });
       
       let node;
       while ((node = walker.nextNode())) {
          nodesToTranslate.push({ node: node as Text, original: node.nodeValue || '' });
       }
       setOriginalTexts(nodesToTranslate);
    } else {
       nodesToTranslate = originalTexts;
    }

    const strings = nodesToTranslate.map(t => t.original);
    try {
      const translated = await translateTextBatch(strings, targetLang);
      nodesToTranslate.forEach((t, i) => {
        if (translated[i]) t.node.nodeValue = translated[i];
      });
    } catch (e) {
      console.error("Translation error", e);
    }
    setIsTranslating(false);
  };

  return (
    <div ref={appRef} className="bg-brand-light font-sans antialiased text-brand-dark min-h-screen selection:bg-emerald-primary/20">
      <Navbar />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <PresidentsMessage />
            <WhyJoin />
            <Membership />
            <ExecutiveBoard />
            <Legal />
            <Contacts />
          </>
        ) : currentView === 'events' ? (
          <Events />
        ) : (
          <MemberDashboard />
        )}
      </main>

      <Footer />

      <ImmigrationAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 no-translate">
        <button 
          onClick={() => setIsAssistantOpen(true)}
          className="bg-emerald-primary hover:bg-emerald-deep text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 flex items-center justify-center group"
          title="Immigration Assistant"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-medium text-sm">
            Ask Assistant
          </span>
        </button>

        <button 
          onClick={handleToggleLang}
          disabled={isTranslating}
          className="bg-orange-warm hover:bg-orange-light text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 flex items-center justify-center group disabled:scale-100 disabled:opacity-80"
          title="Translate Website"
        >
          {isTranslating ? <Loader2 className="w-6 h-6 animate-spin" /> : <Globe className="w-6 h-6" />}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-medium text-sm pr-1">
            {lang === 'en' ? 'Translate to Bemba/Nyanja' : 'Translate to English'}
          </span>
        </button>
      </div>

    </div>
  );
}
