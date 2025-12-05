import React from 'react';
import { Layers, Droplet, Wind, Sparkles, Hexagon, Boxes } from 'lucide-react';

export default function TechnologyShowcase() {
  const technologies = [
    {
      icon: Layers,
      name: 'FDM/FFF',
      fullName: 'Fused Deposition Modeling',
      description: 'Most versatile method for rapid prototyping and functional parts with engineering-grade thermoplastics.',
      materials: 'PLA, ABS, PETG, Nylon, TPU, Carbon Fiber composites',
      applications: 'Prototypes, jigs, fixtures, end-use parts',
      strengths: ['Wide material selection', 'Cost-effective', 'Large build volumes', 'Production-ready parts']
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced FDM/FFF Technology
          </h2>
          <p className="text-xl text-gray-400">
            EVO leverages advanced Fused Deposition Modeling technology, offering exceptional versatility
            for a wide range of applications and materials.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
        </div>

        <div className="max-w-2xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-900 rounded-2xl p-8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform">
                    <tech.icon className="text-white" size={32} />
                  </div>
                  <div className="text-xs font-mono text-gray-600">
                    #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-mono">{tech.fullName}</p>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {tech.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-mono text-red-500 mb-2">MATERIALS</div>
                    <p className="text-sm text-gray-500">{tech.materials}</p>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-red-500 mb-2">APPLICATIONS</div>
                    <p className="text-sm text-gray-500">{tech.applications}</p>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-red-500 mb-2">KEY STRENGTHS</div>
                    <ul className="grid grid-cols-2 gap-2">
                      {tech.strengths.map((strength, idx) => (
                        <li key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                          <span className="text-red-600">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              The Power of Choice
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              EVO's advanced FDM/FFF implementation offers unmatched material versatility and build
              flexibility, allowing you to tackle diverse manufacturing challenges from rapid prototyping
              to production-grade parts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black border border-gray-800 rounded-lg px-6 py-3">
                <span className="text-red-500 font-bold">No technology lock-in</span>
              </div>
              <div className="bg-black border border-gray-800 rounded-lg px-6 py-3">
                <span className="text-red-500 font-bold">Rapid method switching</span>
              </div>
              <div className="bg-black border border-gray-800 rounded-lg px-6 py-3">
                <span className="text-red-500 font-bold">Future-proof investment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
