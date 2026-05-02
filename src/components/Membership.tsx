import { motion } from 'motion/react';
import { CheckCircle2, Info } from 'lucide-react';

export default function Membership() {
  const tiers = [
    {
      id: 'student',
      name: 'Student',
      prefix: '',
      price: '350 CZK',
      suffix: '/ year',
      description: 'Ideal for university students arriving or currently studying in the Czech Republic.',
      badge: 'Best Value for New Arrivals',
      features: [
        'Access to student mentorship programs',
        'Assistance with housing and visa guidance',
        'Discounted entry to AzACRE events',
        'Voting rights in General Assembly'
      ],
      link: 'https://azacremembership.lovable.app/'
    },
    {
      id: 'standard',
      name: 'Standard',
      prefix: '',
      price: '450 CZK',
      suffix: '/ year',
      description: 'For professionals, workers, and long-term Zambian residents.',
      badge: null,
      features: [
        'Full access to professional networking',
        'Career development resources',
        'Standard entry to AzACRE events',
        'Voting rights in General Assembly',
        'Opportunity to run for Executive Board'
      ],
      link: 'https://azacremembership.lovable.app/',
      isPopular: true
    },
    {
      id: 'affiliate',
      name: 'Affiliate',
      prefix: '',
      price: '450 CZK',
      suffix: '/ year',
      description: 'For friends of Zambia, spouses, or those without dual citizenship status.',
      badge: null,
      features: [
        'Invitation to open cultural events',
        'Access to community newsletters',
        'Support network for integration',
        'Non-voting participation status'
      ],
      link: 'https://azacremembership.lovable.app/'
    }
  ];

  return (
    <section id="membership" className="py-24 px-6 md:px-12 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-deep tracking-tight mb-6">
            Become a part of our <span className="text-orange-warm">Family.</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Membership is open to all Zambians and friends of Zambia residing in the Czech Republic. Choose the tier that best reflects your current status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-[2rem] p-8 shadow-sm border flex flex-col ${
                tier.isPopular ? 'border-emerald-primary shadow-lg scale-100 md:scale-[1.02] z-10' : 'border-gray-100'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-warm text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-md">
                  {tier.badge}
                </div>
              )}
              {tier.isPopular && !tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm min-h-[40px]">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {tier.prefix && <span className="text-gray-500 font-medium">{tier.prefix}</span>}
                  <span className="text-5xl font-serif font-bold text-orange-warm tracking-tight">
                    {tier.price}
                  </span>
                </div>
                <span className="text-gray-400 text-sm font-medium">{tier.suffix}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-primary shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center transition-colors ${
                  tier.isPopular 
                    ? 'bg-emerald-primary text-white hover:bg-emerald-deep shadow-md' 
                    : 'bg-emerald-50 text-emerald-primary hover:bg-emerald-100'
                }`}
              >
                Join as {tier.name}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#b87333]" />
          <Info className="w-6 h-6 text-[#c48b52] shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            <strong>Transparency Notice:</strong> All membership dues go directly toward the association’s official operations, event funding, and community outreach at our registered seat: <span className="font-semibold text-gray-800">Kurzova 2222/16, 155 00 Praha 5</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
