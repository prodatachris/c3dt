import React from 'react';
import { TrendingUp, Target, Rocket, DollarSign, BarChart3, Award } from 'lucide-react';

export default function InvestorRelations() {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Market Opportunity',
      description: 'Addressing $15B+ global industrial 3D printing market with disruptive technology.',
    },
    {
      icon: Target,
      title: 'Proven Traction',
      description: 'Growing customer base across creative, industrial, and educational sectors.',
    },
    {
      icon: Rocket,
      title: 'Technology Leadership',
      description: 'Patent-pending innovations in multi-method single-cell architecture.',
    },
    {
      icon: Award,
      title: 'Industry Validation',
      description: 'Featured at CES 2025, recognized by leading manufacturing publications.',
    },
  ];

  const metrics = [
    { label: 'Market Size', value: '$15B+', sublabel: 'Total Addressable Market' },
    { label: 'Space Reduction', value: 'Significant', sublabel: 'vs Traditional Setup' },
    { label: 'Cost Efficiency', value: 'Lower', sublabel: 'TCO' },
    { label: 'Time to Market', value: '2025', sublabel: 'Production Scale' },
  ];

  return (
    <section id="investors" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
              INVESTOR RELATIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming a $15B Industry
          </h2>
          <p className="text-xl text-gray-400">
            C3DT is positioned to capture significant market share in the rapidly growing industrial
            3D printing sector with breakthrough technology and proven business model.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl text-center border-2 border-gray-800 hover:border-red-600 transition-colors">
              <div className="text-4xl font-bold text-red-600 mb-2">{metric.value}</div>
              <div className="text-white font-semibold mb-1">{metric.label}</div>
              <div className="text-gray-400 text-sm">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-900 border-2 border-gray-800 hover:border-red-600 hover:shadow-xl hover:shadow-red-900/20 transition-all"
            >
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Series A Investment Opportunity</h3>
            <p className="text-gray-300 text-lg mb-8">
              We are raising our Series A round to scale production, expand our team, and accelerate
              market penetration. Join us in revolutionizing industrial manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold"
              >
                Request Investment Deck
              </a>
              <a
                href="#contact"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all font-semibold border-2 border-gray-700"
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <BarChart3 className="mx-auto mb-4 text-red-600" size={32} />
            <h4 className="font-bold text-white mb-2">Financial Overview</h4>
            <p className="text-gray-400 text-sm">Detailed projections and growth strategy available for qualified investors.</p>
          </div>
          <div className="text-center p-6">
            <Target className="mx-auto mb-4 text-red-600" size={32} />
            <h4 className="font-bold text-white mb-2">Go-to-Market</h4>
            <p className="text-gray-400 text-sm">Proven customer acquisition channels and strategic partnerships.</p>
          </div>
          <div className="text-center p-6">
            <Rocket className="mx-auto mb-4 text-red-600" size={32} />
            <h4 className="font-bold text-white mb-2">Technology Roadmap</h4>
            <p className="text-gray-400 text-sm">Clear product development timeline and innovation pipeline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
