import { MapPin, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-brand-light">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left: Contact Form */}
        <div className="lg:w-1/2 w-full">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 font-light">Have questions about the community? Reach out to us below.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-primary outline-none bg-white font-sans" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-primary outline-none bg-white font-sans" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-primary outline-none bg-white font-sans" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-primary outline-none bg-white resize-none font-sans"></textarea>
            </div>
            <button type="submit" className="bg-emerald-primary hover:bg-emerald-deep text-white px-8 py-4 rounded-xl font-semibold transition-colors w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Map & Info */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 text-emerald-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-dark mb-1">Office</h4>
                  <p className="text-gray-600 font-light">Prague 1, Czech Republic<br/>(Meetings by appointment)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 text-emerald-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-dark mb-1">Email</h4>
                  <p className="text-gray-600 font-light">secretary@azacre.cz</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h4 className="font-serif font-bold text-lg text-brand-dark mb-4">Connect with us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1HrU5gAU1v/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-orange-warm transition-colors">
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a href="https://www.instagram.com/azacre.cz?igsh=YnJ6dG45Yjdya21j&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-orange-warm transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/azacre-z-s/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-orange-warm transition-colors">
                  <Linkedin className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
