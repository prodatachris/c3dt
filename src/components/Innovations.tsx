import React from 'react';
import { Layers, Box, Gauge, Grid3x3, Workflow, Zap } from 'lucide-react';

export default function Innovations() {
  const innovations = [
    {
      icon: Layers,
      title: 'Dual Toolhead Technology',
      description: 'Independent toolheads operate simultaneously for unmatched printing speed and multi-material capabilities.',
    },
    {
      icon: Box,
      title: 'Multi-Format Support',
      description: 'Compatible with virtually all standard file formats and material specifications for seamless integration.',
    },
    {
      icon: Gauge,
      title: 'Material Diversity',
      description: 'Print with plastics, metals, ceramics, composites, and experimental materials on a single platform.',
    },
    {
      icon: Grid3x3,
      title: 'Multiple Methods',
      description: 'FDM, FFF, and more—all accessible from one unified control system.',
    },
    {
      icon: Workflow,
      title: 'Massive Build Volume',
      description: 'Industry-leading build envelope accommodates projects from small prototypes to large-scale production parts.',
    },
    {
      icon: Zap,
      title: 'Modular Architecture',
      description: 'Upgrade and expand capabilities without replacing equipment, protecting your investment for years to come.',
    },
  ];

  return (
    <section id="innovations" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Innovations Driving Performance
          </h2>
          <p className="text-xl text-gray-400">
            Six breakthrough technologies working together to deliver unprecedented manufacturing capabilities
            and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gray-900 hover:bg-gray-800 hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300 border-2 border-gray-800 hover:border-red-600"
            >
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <innovation.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{innovation.title}</h3>
              <p className="text-gray-400 leading-relaxed">{innovation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
