import React from 'react';
import { Check, ArrowRight, Zap, Cpu, Box, Settings, Globe, Shield, Activity, Gauge, HardDrive, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrintGallery from '../components/PrintGallery';

export default function EVO() {
  const specifications = [
    { label: 'Build Volume', value: 'Large', unit: 'Capacity', icon: Box },
    { label: 'Technologies', value: 'Multiple', unit: 'Integrated', icon: Cpu },
    { label: 'Materials', value: 'Wide Range', unit: 'Compatible', icon: HardDrive },
    { label: 'Resolution', value: 'High', unit: 'Precision', icon: Gauge },
    { label: 'Temperature', value: 'Controlled', unit: 'Environment', icon: Thermometer },
    { label: 'Power', value: 'Industrial', unit: 'Grade', icon: Zap },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Advanced FDM/FFF Platform',
      description: 'State-of-the-art Fused Deposition Modeling with seamless switching between print sizes and materials.',
      specs: ['Tool-free swap', 'Quick change', 'Magnetic modules'],
    },
    {
      icon: Cpu,
      title: 'Intelligent Automation',
      description: 'AI-powered process optimization, automatic material detection, and predictive maintenance.',
      specs: ['AI optimization', 'Auto-calibration', 'Self-diagnostics'],
    },
    {
      icon: Box,
      title: 'Material Versatility',
      description: 'Print with diverse plastics, engineering polymers, composites, and specialty materials all on one platform.',
      specs: ['Multi-material', 'Hot-swap spools', 'Auto-detection'],
    },
    {
      icon: Settings,
      title: 'Tool-Free Changeover',
      description: 'Switch between materials and print sizes rapidly with magnetic quick-change modules.',
      specs: ['Fast swap', 'Zero tools', 'Magnetic lock'],
    },
    {
      icon: Globe,
      title: 'Cloud Connectivity',
      description: 'Remote monitoring, fleet management, and instant software updates from anywhere.',
      specs: ['Real-time data', 'Fleet control', 'OTA updates'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, secure file transfer, and comprehensive access controls.',
      specs: ['AES-256', 'Role-based', 'Audit logs'],
    },
  ];

  const capabilities = [
    'Prototyping & Product Development',
    'End-Use Production Parts',
    'Tooling & Manufacturing Aids',
    'Custom Fixtures & Jigs',
    'Functional Testing Components',
    'Short-Run Production',
    'On-Demand Manufacturing',
    'Replacement Parts',
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-red-950/50 to-red-900/50 border border-red-800/50 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-red-500 text-sm font-bold tracking-wide font-mono">
                  FLAGSHIP PLATFORM
                </span>
              </div>

              <div className="mb-4">
                <span className="text-gray-500 text-lg font-mono tracking-wider">[ MODEL: EVO-001 ]</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                EVO: The All-In-One Revolution
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO represents the culmination of years of engineering innovation. One platform.
                Multiple technologies. Unlimited possibilities. Transform your manufacturing facility
                with the world's first truly integrated 3D printing system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact-us"
                  className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg flex items-center justify-center gap-2 border border-red-500"
                >
                  <Zap size={20} />
                  Request a Demo
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#specifications"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold text-lg border-2 border-gray-700 text-center"
                >
                  View Specifications
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg p-4 text-center hover:border-red-900 transition-all">
                  <div className="text-3xl font-bold text-red-600">Multiple</div>
                  <div className="text-gray-400 text-sm font-mono mt-1">TECH</div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg p-4 text-center hover:border-red-900 transition-all">
                  <div className="text-3xl font-bold text-red-600">High</div>
                  <div className="text-gray-400 text-sm font-mono mt-1">EFFICIENCY</div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg p-4 text-center hover:border-red-900 transition-all">
                  <div className="text-3xl font-bold text-red-600">Wide</div>
                  <div className="text-gray-400 text-sm font-mono mt-1">RANGE</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center p-8 border-2 border-gray-800 relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                <div className="absolute top-4 left-4 bg-gray-900/90 border border-gray-800 rounded px-3 py-1">
                  <span className="text-xs text-gray-400 font-mono">EVO-001</span>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6667650acd969c112f9a8ac5/66df4f0c113a487fc309af04_evo_image.webp"
                  alt="EVO Platform 3D Printer"
                  className="w-full h-full object-contain relative z-10"
                />
                <div className="absolute bottom-4 right-4 bg-gray-900/90 border border-gray-800 rounded px-3 py-1 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400 font-mono">OPERATIONAL</span>
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
              REVOLUTIONARY FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              Engineering Excellence
            </h2>
            <p className="text-xl text-gray-400">
              EVO combines cutting-edge hardware with intelligent software to deliver unprecedented
              manufacturing flexibility and efficiency.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-900 hover:shadow-xl hover:shadow-red-900/20 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/50">
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <span className="text-xs font-mono text-gray-600">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.specs.map((spec, idx) => (
                      <span key={idx} className="text-xs font-mono bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specifications" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-8">
                <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
                  TECHNICAL SPECIFICATIONS
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-8">System Parameters</h2>

              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg p-6 hover:border-red-900 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <spec.icon className="text-red-600" size={20} />
                      <span className="text-gray-500 font-mono text-xs uppercase">{spec.label}</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-mono mb-1">{spec.value}</div>
                    <div className="text-gray-500 text-sm font-mono">{spec.unit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Manufacturing Capabilities</h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-900 transition-all"
                  >
                    <Check className="text-red-600 flex-shrink-0" size={18} />
                    <span className="text-gray-300 text-sm font-medium">{capability}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-red-950/50 to-gray-900/50 rounded-xl border-2 border-red-800/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="text-red-600" size={24} />
                    Ready to Transform Your Manufacturing?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    See EVO in action and discover how it can revolutionize your production workflow.
                  </p>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all font-bold border border-red-500"
                  >
                    <Activity size={20} />
                    Schedule a Demo
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              MATERIAL COMPATIBILITY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              Extensive Material Library
            </h2>
            <p className="text-xl text-gray-400">
              EVO supports an extensive range of materials across all printing technologies, giving you
              the flexibility to choose the perfect material for every application.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { category: 'Thermoplastics', materials: ['PLA', 'ABS', 'PETG', 'Nylon (PA)', 'PC', 'TPU/TPE', 'ASA', 'PEI'] },
              { category: 'Engineering Polymers', materials: ['PEEK', 'ULTEM', 'PPSU', 'PPS', 'Carbon Fiber', 'Glass Fiber', 'Kevlar'] },
              { category: 'Resins', materials: ['Standard', 'Tough', 'Flexible', 'Castable', 'Dental', 'Biocompatible', 'High Temp'] },
              { category: 'Metals', materials: ['Stainless Steel', 'Titanium', 'Aluminum', 'Tool Steel', 'Inconel', 'Copper', 'Bronze'] },
              { category: 'Ceramics', materials: ['Alumina', 'Zirconia', 'Silicon Carbide', 'Silicon Nitride', 'Porcelain'] },
              { category: 'Composites', materials: ['Carbon Fiber', 'Fiberglass', 'Kevlar', 'Metal-filled', 'Wood-filled', 'Mineral-filled'] },
              { category: 'Specialty', materials: ['Conductive', 'Magnetic', 'Glow-in-Dark', 'Dissolvable', 'Food-Safe', 'Bio-based'] },
              { category: 'Powders', materials: ['PA11', 'PA12', 'TPU Powder', 'PP', 'Sandstone', 'Full Color'] }
            ].map((group, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-6 hover:border-red-900 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.materials.map((material, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="text-red-600">→</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8 text-center">
            <p className="text-gray-300 text-lg mb-4">
              Can't find your specific material? EVO's open architecture supports custom material profiles and third-party materials.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors">
              Contact us about custom materials <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              SOFTWARE & INTEGRATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              Powerful Software Ecosystem
            </h2>
            <p className="text-xl text-gray-400">
              EVO's software suite provides complete control, from design to finished part, with seamless
              integration into your existing workflows.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'EVO Command Center',
                description: 'Intuitive control interface for managing all printing operations, monitoring jobs, and analyzing performance.',
                features: ['Real-time monitoring', 'Remote access', 'Job queueing', 'Analytics dashboard', 'Multi-device sync', 'Mobile app']
              },
              {
                title: 'CAD Integration',
                description: 'Direct plugins for major CAD platforms ensure seamless workflow from design to production.',
                features: ['SolidWorks plugin', 'Fusion 360 support', 'AutoCAD compatibility', 'Rhino integration', 'Native file import', 'Automatic orientation']
              },
              {
                title: 'Slicing Engine',
                description: 'Advanced slicing algorithms optimized for each printing technology with intelligent support generation.',
                features: ['Multi-method slicing', 'Adaptive layers', 'Smart supports', 'Material optimization', 'Print preview', 'Custom profiles']
              },
              {
                title: 'Cloud Services',
                description: 'Cloud-connected features enable remote management, OTA updates, and fleet coordination.',
                features: ['Remote monitoring', 'Fleet management', 'Usage analytics', 'Cloud storage', 'Automatic updates', 'Backup & restore']
              },
              {
                title: 'API & SDK',
                description: 'Comprehensive API and SDK for custom integrations and automated workflows.',
                features: ['RESTful API', 'Python SDK', 'Webhooks', 'Custom scripts', 'ERP integration', 'PLM connectivity']
              },
              {
                title: 'Quality Management',
                description: 'Built-in QA tools for inspection, documentation, and certification requirements.',
                features: ['Inspection protocols', 'Traceability logs', 'Certification reports', 'ISO compliance', 'Audit trails', 'Digital twins']
              }
            ].map((software, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">{software.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{software.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {software.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="text-red-600 flex-shrink-0" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              SUPPORT & TRAINING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              World-Class Support & Training
            </h2>
            <p className="text-xl text-gray-400">
              From installation to advanced operations, our comprehensive support ensures you maximize
              your EVO investment from day one.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Installation & Setup',
                items: ['White-glove delivery', 'Professional installation', 'Full calibration', 'Network configuration', 'Initial test prints', 'Documentation handoff']
              },
              {
                title: 'Training Programs',
                items: ['On-site training', 'Virtual sessions', 'Certification courses', 'Advanced workshops', 'Material training', 'Maintenance training']
              },
              {
                title: 'Technical Support',
                items: ['24/7 phone support', 'Email support', 'Live chat', 'Remote diagnostics', 'Emergency service', 'Dedicated account manager']
              },
              {
                title: 'Maintenance Services',
                items: ['Preventive maintenance', 'Annual inspections', 'Parts replacement', 'Calibration services', 'Software updates', 'Performance optimization']
              },
              {
                title: 'Resources Library',
                items: ['Video tutorials', 'User manuals', 'Material guides', 'Best practices', 'Troubleshooting docs', 'Community forums']
              },
              {
                title: 'Warranty & Protection',
                items: ['Standard warranty', 'Extended coverage', 'Parts protection', 'Labor coverage', 'Loaner programs', 'Upgrade paths']
              }
            ].map((support, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-6 hover:border-red-900 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="text-red-600" size={24} />
                  {support.title}
                </h3>
                <ul className="space-y-3">
                  {support.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check className="text-red-600 flex-shrink-0 mt-1" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-950/50 to-gray-900/50 border-2 border-red-800/50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Comprehensive Support Package</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every EVO purchase includes a complete support package with installation, training, and ongoing
              technical assistance. We're committed to your success every step of the way.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold border border-red-500"
            >
              Learn About Support Options <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              APPLICATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-400">
              See how industries worldwide leverage EVO's versatility to solve complex manufacturing challenges.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: 'Aerospace & Defense',
                description: 'Producing lightweight, high-strength components with complex geometries for aircraft and defense systems.',
                applications: ['Drone components', 'Satellite parts', 'Tooling & fixtures', 'Prototype assemblies', 'Custom fittings', 'Lightweight brackets']
              },
              {
                industry: 'Automotive',
                description: 'Accelerating product development and producing custom components for vehicles and manufacturing lines.',
                applications: ['Concept models', 'Functional prototypes', 'Jigs & fixtures', 'Custom trim pieces', 'Testing components', 'Production aids']
              },
              {
                industry: 'Medical & Dental',
                description: 'Creating patient-specific devices, surgical guides, and dental prosthetics with biocompatible materials.',
                applications: ['Surgical guides', 'Dental models', 'Custom implants', 'Prosthetics', 'Anatomical models', 'Medical devices']
              },
              {
                industry: 'Consumer Products',
                description: 'Rapidly iterating designs and producing limited-run custom products for discerning customers.',
                applications: ['Product prototypes', 'Custom designs', 'Limited editions', 'Packaging solutions', 'Display pieces', 'Market testing']
              },
              {
                industry: 'Architecture',
                description: 'Creating detailed scale models and custom building components for architectural visualization.',
                applications: ['Scale models', 'Concept designs', 'Custom fixtures', 'Facade elements', 'Interior details', 'Client presentations']
              },
              {
                industry: 'Education & Research',
                description: 'Providing students and researchers access to professional-grade multi-technology manufacturing.',
                applications: ['Research projects', 'Student prototypes', 'Teaching models', 'Engineering samples', 'Material testing', 'Innovation labs']
              }
            ].map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {app.industry}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{app.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {app.applications.map((application, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="text-red-600">→</span>
                        {application}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
                <img
                  src="/evo_img.png"
                  alt="EVO Single-Cell 3D Printing Solution"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
                  FACTORY-IN-A-BOX
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                A Single-Cell 3D Printing Solution
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Single-Cell manufacturing is a system capable of using multiple tools and production methods in one process. EVO is being designed as a factory-in-a-box that switches from tool-to-tool instead of machine-to-machine on a factory-line.
              </p>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl">
                <div className="w-1 h-full bg-gradient-to-b from-red-600 to-red-900 rounded-full" />
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg">Revolutionary Efficiency</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    By consolidating multiple manufacturing steps into a single platform, EVO eliminates the need for material handling between machines, reduces production time, and minimizes floor space requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PrintGallery />

      <section className="py-24 bg-gradient-to-br from-gray-950 via-black to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
          <div className="mb-8">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              GET STARTED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience EVO?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Transform your manufacturing capabilities with the world's most advanced integrated 3D printing platform.
            Schedule a demonstration or request detailed information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact-us"
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg flex items-center justify-center gap-2 border border-red-500"
            >
              Request a Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/setup-resources"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold text-lg border-2 border-gray-700"
            >
              View Resources
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <Activity className="text-red-600 mb-3" size={32} />
              <h4 className="text-white font-bold mb-2">Live Demonstration</h4>
              <p className="text-sm text-gray-400">See EVO in action at our Austin facility or via virtual demo</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <Globe className="text-red-600 mb-3" size={32} />
              <h4 className="text-white font-bold mb-2">Expert Consultation</h4>
              <p className="text-sm text-gray-400">Discuss your specific needs with our engineering team</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <Box className="text-red-600 mb-3" size={32} />
              <h4 className="text-white font-bold mb-2">Custom Quote</h4>
              <p className="text-sm text-gray-400">Get pricing tailored to your requirements and volume</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
