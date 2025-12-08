import React from 'react';
import { Plane, Rocket, Shield, Gauge, ArrowRight, Check, Zap, Layers, Award, Target, Wind, CircuitBoard, AlertCircle, Clock, DollarSign, FileText, TrendingUp, Package, Cpu, Users } from 'lucide-react';
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

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              AEROSPACE CHALLENGES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Aerospace Manufacturing Challenges Solved by 3D Printing
            </h2>
            <p className="text-xl text-gray-400">
              Traditional aerospace manufacturing creates critical bottlenecks that impact development timelines and operational readiness.
              EVO's additive manufacturing platform addresses these aerospace-specific challenges with rapid prototyping and on-demand production.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Extended Lead Times</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Traditional aerospace manufacturing involves complex supply chains with 6-12 month lead times for tooling and parts.
                  Design changes trigger cascading delays across programs. Prototype iterations take months. Mission-critical parts face
                  lengthy procurement processes. Aircraft remain grounded awaiting components. Development programs miss launch windows.
                  Competitive advantage erodes while waiting for traditional manufacturing.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        3D printing eliminates tooling entirely, compressing 6-month lead times into days. Rapid prototyping enables
                        overnight design iteration. On-demand manufacturing produces replacement parts without minimum orders or tooling
                        costs. Design changes happen in CAD files, not factory floors. Critical components print on-site, eliminating
                        supply chain dependencies. Accelerate development cycles by 10x. Restore aircraft to service faster with additive
                        manufacturing capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Obsolescence and Legacy Parts</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Aircraft operate for 30+ years but suppliers discontinue parts after 10-15 years. Original tooling gets scrapped.
                  OEM manufacturers exit the business. Finding replacements for obsolete components becomes impossible. Aircraft face
                  early retirement due to unavailable parts. Reverse engineering costs more than original manufacturing. Maintaining
                  spare parts inventory ties up capital and warehouse space.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Store parts as digital CAD files instead of physical inventory. Print legacy components on-demand without
                        original tooling. Reproduce obsolete parts through reverse engineering and additive manufacturing. Extend
                        aircraft service life by decades. Eliminate dependency on OEM spare parts programs. Transform warehouse
                        inventory into digital libraries. Single-cell manufacturing enables batch-of-one production economically.
                        Maintain mission readiness regardless of parts availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">High Development Costs</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Aerospace development requires extensive prototyping and testing. Traditional manufacturing demands expensive tooling
                  for each design iteration. Minimum order quantities force purchasing 100+ units to test one design. Prototype costs
                  reach hundreds of thousands of dollars. Budget constraints limit iteration cycles. Engineering teams must commit to
                  designs before adequate physical testing. Mistakes discovered late cost millions to rectify.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        3D printing produces aerospace prototypes at a fraction of traditional costs. No tooling investment required.
                        Print single units for testing without minimum orders. Rapid prototyping enables unlimited design iterations
                        within project budgets. Test multiple design variations in parallel. Discover design flaws early when changes
                        cost pennies, not millions. Validate concepts physically before committing to production tooling. Additive
                        manufacturing democratizes aerospace innovation by lowering iteration costs by 95%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gauge className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Weight Reduction Requirements</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Every kilogram of aircraft weight costs thousands in lifetime fuel consumption. Traditional manufacturing limits
                  topology optimization. Solid components use more material than necessary. Complex internal structures require assembly
                  of multiple parts. Weight reduction demands exotic materials and expensive machining. Engineers compromise between
                  strength and weight. Fuel efficiency suffers from heavy legacy designs constrained by manufacturing limitations.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Additive manufacturing enables topology optimization impossible with traditional methods. Create organic lattice
                        structures that maximize strength-to-weight ratios. Design hollow internal geometries without assembly. Build
                        complex parts as single units. Reduce component weight by 40-60% while maintaining structural performance. Print
                        with high-strength aerospace polymers and carbon fiber composites. Achieve optimal weight distribution through
                        generative design. Transform fuel efficiency with lightweight 3D printed aerospace components.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Accelerate Your Aerospace Development?
            </h3>
            <p className="text-gray-300 mb-6 text-lg max-w-3xl mx-auto">
              Discover how EVO's 3D printing platform solves aerospace-specific manufacturing challenges with rapid prototyping and on-demand production.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold"
            >
              Schedule Aerospace Consultation
              <ArrowRight size={20} />
            </Link>
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
