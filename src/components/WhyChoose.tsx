import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhyChoose() {
  const comparisons = [
    {
      feature: 'Technology Integration',
      traditional: 'Multiple separate systems, each requiring dedicated space, training, and maintenance',
      evo: 'All technologies unified in a single platform with shared infrastructure and streamlined operation',
      advantage: true
    },
    {
      feature: 'Facility Requirements',
      traditional: 'Large footprint needed for multiple printers, material storage, and operational space',
      evo: 'Compact single-unit design consolidates everything into minimal floor space',
      advantage: true
    },
    {
      feature: 'Operator Training',
      traditional: 'Separate training required for each printing technology and system',
      evo: 'Unified interface and workflow for all technologies reduces training time',
      advantage: true
    },
    {
      feature: 'Material Changeover',
      traditional: 'Manual intervention, extended downtime, and potential cross-contamination',
      evo: 'Rapid tool-free changeover with automated material handling and clean transitions',
      advantage: true
    },
    {
      feature: 'Maintenance Complexity',
      traditional: 'Multiple service contracts, varied spare parts inventory, different maintenance schedules',
      evo: 'Single service relationship, standardized components, and predictive maintenance',
      advantage: true
    },
    {
      feature: 'Initial Investment',
      traditional: 'High capital expenditure for multiple specialized machines',
      evo: 'Consolidated investment with comprehensive capabilities from day one',
      advantage: true
    },
    {
      feature: 'Scalability',
      traditional: 'Adding capabilities requires purchasing and integrating new equipment',
      evo: 'Modular architecture allows capability expansion without equipment replacement',
      advantage: true
    },
    {
      feature: 'Workflow Integration',
      traditional: 'Separate software and processes for each technology create workflow bottlenecks',
      evo: 'Unified control system and seamless workflow management across all methods',
      advantage: true
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              COMPARISON
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose EVO Over Traditional Systems
          </h2>
          <p className="text-xl text-gray-400">
            See how EVO's integrated approach transforms every aspect of your additive manufacturing operations.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800">
            <div className="bg-gray-900 p-6">
              <h3 className="text-xl font-bold text-white">Feature</h3>
            </div>
            <div className="bg-gray-900 p-6">
              <h3 className="text-xl font-bold text-gray-400">Traditional Multi-Printer Setup</h3>
            </div>
            <div className="bg-gradient-to-br from-red-950 to-gray-900 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-red-500">EVO Platform</span>
              </h3>
            </div>
          </div>

          {comparisons.map((comparison, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800">
              <div className="bg-black p-6">
                <h4 className="font-bold text-white mb-2">{comparison.feature}</h4>
              </div>
              <div className="bg-black p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-400 text-sm leading-relaxed">{comparison.traditional}</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-black p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300 text-sm leading-relaxed">{comparison.evo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
