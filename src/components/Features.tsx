import React from 'react';
import { Zap, Target, TrendingUp, Shield, Gauge, Database, Layers, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Single-Cell Architecture',
      description: 'Revolutionary design consolidates multiple industrial 3D printers into one integrated system, dramatically reducing facility footprint and operational complexity.',
      specs: ['Significant space reduction', 'Lower TCO', 'Multiple technologies'],
    },
    {
      icon: Target,
      title: 'Multi-Method Capability',
      description: 'Seamlessly switch between print size and material within a single platform, enabling unprecedented manufacturing flexibility.',
      specs: ['Fast changeover', 'Wide material range', 'Zero retooling'],
    },
    {
      icon: TrendingUp,
      title: 'Production Scalability',
      description: 'Scale from prototype to production without changing equipment. Our modular design grows with your business needs and manufacturing demands.',
      specs: ['24/7 operation', 'Modular expansion', 'Cloud monitoring'],
    },
    {
      icon: Shield,
      title: 'Enterprise Reliability',
      description: 'Built for 24/7 industrial operations with redundant systems, predictive maintenance, and industry-leading uptime guarantees.',
      specs: ['High uptime guarantee', 'Predictive AI', 'Hot-swap modules'],
    },
  ];

  const metrics = [
    { icon: Gauge, label: 'Production Speed', value: 'Faster Production', color: 'red' },
    { icon: Database, label: 'Material Options', value: 'Extensive', color: 'orange' },
    { icon: Layers, label: 'Print Methods', value: 'Multiple', color: 'yellow' },
    { icon: Lock, label: 'Security', value: 'Enterprise Grade', color: 'green' },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Leading Manufacturers Choose{' '}
            <span className="text-red-600">EVO</span>
          </h2>
          <p className="text-xl text-gray-400">
            Our innovative approach transforms traditional 3D printing workflows into streamlined,
            efficient production systems trusted by industry leaders.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-lg border-2 border-gray-800 hover:border-red-900 transition-all duration-300 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-red-900/5 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-red-900/50">
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <div className="text-xs font-mono text-gray-600">
                    #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>

                <div className="flex flex-wrap gap-2">
                  {feature.specs.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-gray-800 text-gray-300 px-3 py-1 rounded border border-gray-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg p-6 text-center hover:border-red-900 transition-all group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-950 transition-colors">
                <metric.icon className="text-red-600" size={24} />
              </div>
              <div className="text-sm font-mono text-gray-500 mb-2">{metric.label}</div>
              <div className="text-2xl font-bold text-white font-mono">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <h3 className="text-2xl font-bold text-white">Industrial-Grade Performance</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Built to meet the demanding requirements of high-volume manufacturing environments. EVO delivers consistent quality,
            exceptional reliability, and seamless integration into existing production workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
