import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FileText, X, MessageSquare, Loader2, Upload } from 'lucide-react';
import { askImmigrationQuestion } from '../lib/gemini';

export default function ImmigrationAssistant({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState<{role: 'user'|'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleAsk = async () => {
    if (!file || !question || isLoading) return;
    setIsLoading(true);
    setChat(prev => [...prev, { role: 'user', text: question }]);
    try {
      const ans = await askImmigrationQuestion(question, file);
      setChat(prev => [...prev, { role: 'ai', text: ans }]);
    } catch (e: any) {
      setChat(prev => [...prev, { role: 'ai', text: 'Error: ' + e.message }]);
    }
    setQuestion('');
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm no-translate">
      <div className="bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        <div className="bg-emerald-primary p-6 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6" />
            <h3 className="font-medium text-lg text-white">Immigration Assistant</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-gray-50/50">
          {chat.length === 0 ? (
            <div className="text-center text-gray-400 py-10 flex flex-col items-center">
              <MessageSquare className="w-12 h-12 mb-4 opacity-50 text-gray-400" />
              <p className="text-gray-500">Upload a Czech immigration document and ask me questions about it.</p>
            </div>
          ) : (
            chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                  msg.role === 'user' ? 'bg-emerald-primary text-white rounded-br-none' : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-bl-none'
                }`}>
                  <ReactMarkdown className="markdown-body text-sm leading-relaxed">{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))
          )}
          {isLoading && (
             <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-none px-5 py-3 text-emerald-primary">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
             </div>
          )}
        </div>

        <div className="p-6 bg-white border-t border-gray-100 shrink-0">
           <div className="flex flex-col gap-3">
              {file ? (
                <div className="flex items-center gap-2 text-sm text-emerald-primary bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">
                  <FileText className="w-4 h-4 text-emerald-primary shrink-0" />
                  <span className="truncate text-emerald-800 font-medium">{file.name}</span>
                  <button onClick={() => setFile(null)} className="ml-auto hover:text-red-500"><X className="w-4 h-4"/></button>
                </div>
              ) : (
                <label className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-200 hover:border-emerald-primary hover:bg-emerald-50 transition-colors p-4 rounded-xl cursor-pointer text-gray-500 text-sm font-medium">
                  <Upload className="w-4 h-4 shrink-0 text-emerald-primary" />
                  <span className="text-gray-600 block pt-0.5">Upload Official Document (PDF/Image)</span>
                  <input type="file" className="hidden" accept="application/pdf,image/*" onChange={e => setFile(e.target.files?.[0] || null)} />
                </label>
              )}
              
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAsk()}
                  placeholder="Ask a question about the document..." 
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-primary/50 text-sm font-sans"
                />
                <button 
                  onClick={handleAsk}
                  disabled={!file || !question || isLoading}
                  className="bg-emerald-primary text-white rounded-full px-6 py-3 font-semibold hover:bg-emerald-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Ask
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
