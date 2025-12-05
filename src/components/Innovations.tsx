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
    <section id="innovations" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
            BREAKTHROUGH TECHNOLOGY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
            Core Innovations Driving Performance
          </h2>
          <p className="text-xl text-gray-400">
            Six breakthrough technologies working together to deliver unprecedented manufacturing capabilities
            and operational efficiency.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur rounded-2xl overflow-hidden border border-gray-800 hover:border-red-900 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-10 flex flex-col items-center text-center">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-900/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <innovation.icon className="text-white" size={48} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
