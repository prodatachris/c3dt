import React from 'react';
import { Plane, Rocket, Shield, Gauge, ArrowRight, Check, Zap, Layers, Award, Target, Wind, CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Aerospace() {
  const ffdmBenefits = [
    {
      icon: Shield,
      title: 'High-Strength Engineering Polymers',
      description: 'Access to aerospace-grade materials including PEEK, ULTEM, and carbon fiber composites that meet strict performance requirements.',
    },
    {
      icon: Gauge,
      title: 'Lightweight Component Production',
      description: 'Create complex geometries with optimized weight-to-strength ratios. Reduce aircraft weight while maintaining structural integrity.',
    },
    {
      icon: Award,
      title: 'Certification-Ready Documentation',
      description: 'Full traceability and process documentation to support aerospace certification requirements and quality standards.',
    },
    {
      icon: Zap,
      title: 'Rapid Design Iteration',
      description: 'Accelerate development cycles with fast prototyping. Test and validate designs before committing to expensive tooling.',
    },
  ];

  const applications = [
    {
      icon: Rocket,
      title: 'Drone & UAV Components',
      description: 'Lightweight, durable parts for unmanned aerial systems and commercial drones.',
      examples: ['Airframe components', 'Mounting brackets', 'Camera housings', 'Control surfaces'],
    },
    {
      icon: Plane,
      title: 'Aircraft Interior Components',
      description: 'Custom cabin parts that meet FAA flame, smoke, and toxicity requirements.',
      examples: ['Seat components', 'Cabin fixtures', 'Air vents', 'Interior panels'],
    },
    {
      icon: CircuitBoard,
      title: 'Satellite Parts & Assemblies',
      description: 'High-precision components for space applications with thermal stability.',
      examples: ['Mounting brackets', 'Electronics housings', 'Structural components', 'Antenna parts'],
    },
    {
      icon: Target,
      title: 'Tooling & Fixtures',
      description: 'Custom manufacturing aids for composite layup and assembly operations.',
      examples: ['Layup mandrels', 'Assembly jigs', 'Inspection fixtures', 'Vacuum forming tools'],
    },
    {
      icon: Wind,
      title: 'Wind Tunnel Models',
      description: 'Precise aerodynamic testing models with complex geometries.',
      examples: ['Scale aircraft models', 'Component tests', 'Concept validation', 'Flow analysis'],
    },
    {
      icon: Layers,
      title: 'Rapid Replacement Parts',
      description: 'On-demand production of legacy parts and rapid response for mission-critical components.',
      examples: ['Obsolete parts', 'Low-volume spares', 'Field repairs', 'Quick turnaround'],
    },
  ];

  const materials = [
    { name: 'ULTEM 9085', specs: 'FST compliant, high strength', use: 'Aircraft interiors' },
    { name: 'PEEK', specs: 'Excellent chemical resistance', use: 'High-performance parts' },
    { name: 'Carbon Fiber', specs: 'Superior strength-to-weight', use: 'Structural components' },
    { name: 'Nylon CF', specs: 'Strong, lightweight', use: 'Functional prototypes' },
    { name: 'PC-ABS', specs: 'Durable, heat resistant', use: 'Tooling and fixtures' },
    { name: 'ASA', specs: 'UV stable, weather resistant', use: 'Outdoor applications' },
  ];

  const evoAdvantages = [
    {
      title: 'Multi-Material Capability',
      description: 'Switch between aerospace-grade materials without investing in multiple specialized machines.',
      impact: 'Reduce capital expenditure',
    },
    {
      title: 'Supply Chain Independence',
      description: 'Manufacture critical parts on-site. Reduce dependency on external suppliers and long lead times.',
      impact: 'Accelerate production timelines',
    },
    {
      title: 'Compliance Documentation',
      description: 'Built-in process monitoring and documentation to support aerospace quality requirements.',
      impact: 'Simplify certification',
    },
    {
      title: 'Design Freedom',
      description: 'Create complex internal structures and optimized geometries impossible with traditional manufacturing.',
      impact: 'Enhance performance',
    },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-red-950/50 to-red-900/50 border border-red-800/50 rounded-full px-6 py-3 backdrop-blur-sm">
                <Rocket className="text-red-600" size={16} />
                <span className="text-red-500 text-sm font-bold tracking-wide font-mono">
                  AEROSPACE INDUSTRY
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block text-gray-500 text-xl font-mono mb-2">[ SECTOR: AEROSPACE ]</span>
                Precision Aerospace 3D Printing and Additive Manufacturing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO delivers aerospace-grade additive manufacturing with the precision, reliability, and material performance
                required for aviation and space applications. Our single-cell manufacturing platform enables rapid prototyping
                of flight components and production of mission-critical aerospace parts. From UAV components to aircraft interior
                parts, leverage advanced 3D printing technology for lightweight, high-strength aerospace manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold border border-red-500"
                >
                  <Zap size={20} />
                  Request Aerospace Demo
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/evo"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold border-2 border-gray-700"
                >
                  View Specifications
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="text-red-600" />
                  Aerospace Capabilities
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">High-Performance Materials</div>
                      <div className="text-gray-400 text-sm">PEEK, ULTEM, carbon fiber composites</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Weight Optimization</div>
                      <div className="text-gray-400 text-sm">Reduce aircraft weight with optimized designs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Rapid Turnaround</div>
                      <div className="text-gray-400 text-sm">Days instead of weeks for prototype parts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Full Traceability</div>
                      <div className="text-gray-400 text-sm">Documentation for certification requirements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              FFF/FDM FOR AEROSPACE
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Why Aerospace Leaders Choose FFF 3D Printing Technology
            </h2>
            <p className="text-xl text-gray-400">
              Fused Filament Fabrication 3D printing provides the material properties, precision, and reliability required for
              demanding aerospace applications. Additive manufacturing enables rapid prototyping of aerospace components with
              high-performance polymers and composites suitable for flight-critical applications.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ffdmBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-900 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-red-900/50">
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What EVO Brings to Aerospace Manufacturing
            </h2>
            <p className="text-xl text-gray-400">
              EVO consolidates multiple additive manufacturing technologies into one platform designed for aerospace precision and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {evoAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-400 mb-4">{advantage.description}</p>
                <div className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm">
                  <Target size={16} />
                  {advantage.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="text-red-600" />
              Aerospace-Grade Materials
            </h3>
            <p className="text-gray-400 mb-6">
              Access high-performance polymers engineered for aerospace applications. EVO supports the full range of materials required for flight.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {materials.map((material, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-red-500 font-bold mb-1">{material.name}</div>
                  <div className="text-gray-300 text-sm mb-2">{material.specs}</div>
                  <div className="text-gray-500 text-xs">{material.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Aerospace Applications
            </h2>
            <p className="text-xl text-gray-400">
              From unmanned systems to commercial aviation, EVO supports the full spectrum of aerospace manufacturing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all"
              >
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                  <app.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-400 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Mission-Critical Reliability
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Aerospace demands the highest standards of quality and reliability. EVO delivers
                consistent, repeatable results with full process documentation and traceability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Process Monitoring</strong> - Real-time tracking and documentation for quality assurance</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Material Traceability</strong> - Complete material lot tracking from source to part</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Certification Support</strong> - Documentation packages to support aerospace approvals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-950/50 to-gray-900/50 rounded-2xl p-12 border-2 border-red-800/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-red-500 font-mono text-sm tracking-wider">PERFORMANCE METRICS</span>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Significant</div>
                    <div className="text-gray-300">Weight reduction potential</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Days</div>
                    <div className="text-gray-300">Not weeks for parts</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Full</div>
                    <div className="text-gray-300">Material traceability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Advance Your Aerospace Manufacturing?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how EVO can accelerate your aerospace development and production with aerospace-grade additive manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
            >
              Schedule Aerospace Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/evo"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg border-2 border-gray-700"
            >
              Download Technical Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
