import React from 'react';
import { Upload, Settings, Play, Package, CheckCircle } from 'lucide-react';

export default function ProcessFlow() {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Design Upload',
      description: 'Import your CAD files in any standard format. EVO automatically analyzes geometry and recommends optimal print settings.',
      details: ['STL, OBJ, 3MF support', 'Automatic orientation', 'Structural analysis', 'Material recommendations']
    },
    {
      icon: Settings,
      number: '02',
      title: 'Configure & Optimize',
      description: 'Select your printing technology, materials, and quality settings. AI-powered optimization ensures best results.',
      details: ['Smart material selection', 'Quality presets', 'Support generation', 'Print time estimation']
    },
    {
      icon: Play,
      number: '03',
      title: 'Automated Production',
      description: 'EVO handles the entire print process with minimal intervention. Monitor progress remotely via cloud dashboard.',
      details: ['Automatic calibration', 'Real-time monitoring', 'Error detection', 'Process adjustment']
    },
    {
      icon: Package,
      number: '04',
      title: 'Post-Processing',
      description: 'Built-in guidance for finishing steps. Automated support removal and cleaning where applicable.',
      details: ['Support removal guides', 'Finishing instructions', 'Quality verification', 'Surface treatment tips']
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Quality Assurance',
      description: 'Integrated inspection tools and documentation. Every part tracked with complete manufacturing history.',
      details: ['Dimensional verification', 'Build reports', 'Traceability logs', 'Certification ready']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              WORKFLOW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Design to Finished Part
          </h2>
          <p className="text-xl text-gray-400">
            EVO streamlines your entire manufacturing workflow with intelligent automation
            and guided processes at every step.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-red-600 to-transparent" />
              )}

              <div className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-900 rounded-2xl p-8 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />

                <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50 mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="text-white" size={40} />
                    </div>
                    <div className="text-5xl font-bold text-red-600/20 font-mono">{step.number}</div>
                  </div>

                  <div className="lg:col-span-10">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-black/50 border border-gray-800 rounded-lg p-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-400">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Experience the EVO Workflow?</h3>
              <p className="text-gray-400">Schedule a demonstration and see the complete process in action.</p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold shadow-lg"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
