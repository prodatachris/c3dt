import React from 'react';
import { Factory, Cog, Package, TrendingUp, ArrowRight, Check, Gauge, Cpu, Zap, Activity, AlertCircle, Clock, Target, Boxes, Shield, Users, Award, Workflow, DollarSign, Layers, Wrench, PieChart, Box, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industrial() {
  const ffdmBenefits = [
    {
      icon: Activity,
      title: 'Production Flexibility',
      description: 'Switch between technologies rapidly. Respond to changing demands with ease. FFF 3D printing adapts to your production schedule without expensive retooling or downtime.',
    },
    {
      icon: Gauge,
      title: 'Operational Efficiency',
      description: 'Consolidate multiple printers into one footprint. Reduce complexity and maintenance overhead. Streamline your manufacturing operations with single-cell additive manufacturing.',
    },
    {
      icon: Package,
      title: 'Supply Chain Resilience',
      description: 'Manufacture critical parts on-site. Eliminate dependency on external suppliers. Build supply chain independence with rapid prototyping and on-demand production.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Pay for one platform instead of many. Maximize utilization across all technologies. Reduce capital expenditure while expanding manufacturing capabilities.',
    },
  ];

  const evoAdvantages = [
    {
      title: 'Reduced Equipment Costs',
      description: 'Replace multiple specialized 3D printers with one integrated single-cell manufacturing platform. Lower capital investment, simplified procurement, unified maintenance.',
      impact: 'Lower total cost of ownership',
    },
    {
      title: 'Faster Time-to-Market',
      description: 'Compress development cycles with rapid prototyping. Eliminate tooling delays. Go from concept to production-ready parts in days, not months.',
      impact: 'Accelerate product launches',
    },
    {
      title: 'Manufacturing Agility',
      description: 'Adapt to changing requirements instantly. Switch between prototype, tooling, and production runs without retooling. Enable mass customization at scale.',
      impact: 'Respond faster to market demands',
    },
    {
      title: 'Quality and Consistency',
      description: 'Achieve repeatable, consistent results across all additive manufacturing technologies. Built-in process monitoring ensures quality control.',
      impact: 'Improve product quality',
    },
  ];

  const materials = [
    { name: 'ABS', property: 'Heat Resistant', use: 'Functional parts, tooling, fixtures' },
    { name: 'Nylon', property: 'High Strength', use: 'Gears, brackets, durable components' },
    { name: 'PETG', property: 'Chemical Resistant', use: 'Industrial containers, housings' },
    { name: 'PC (Polycarbonate)', property: 'Impact Resistant', use: 'Safety guards, shields, enclosures' },
    { name: 'Carbon Fiber', property: 'Superior Strength', use: 'Structural components, aerospace' },
    { name: 'Glass Fiber', property: 'Dimensional Stability', use: 'Precision jigs, fixtures' },
    { name: 'PEEK', property: 'Extreme Performance', use: 'High-temp applications, demanding environments' },
    { name: 'TPU Flexible', property: 'Shock Absorption', use: 'Gaskets, seals, vibration dampening' },
  ];

  const applications = [
    {
      icon: Box,
      title: 'End-Use Production Parts',
      description: 'Manufacture functional production components with industrial-grade materials and 3D printing technology. Replace traditional manufacturing for low to medium volumes.',
      examples: ['Custom assemblies', 'Replacement components', 'Limited production runs', 'Batch-of-one manufacturing'],
    },
    {
      icon: Wrench,
      title: 'Jigs, Fixtures & Tooling',
      description: 'Create custom manufacturing aids on-demand. Rapid prototyping of specialized tooling reduces lead times and enables production optimization.',
      examples: ['Assembly fixtures', 'Quality inspection jigs', 'Work-holding devices', 'Process-specific tools'],
    },
    {
      icon: Package,
      title: 'Replacement Parts On-Demand',
      description: 'Print spare parts as needed. Eliminate inventory carrying costs and maintain operations with additive manufacturing for legacy equipment.',
      examples: ['Obsolete components', 'Emergency repairs', 'Low-volume spares', 'Digital inventory'],
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Accelerate product development with fast iteration cycles. Test designs physically before committing to production tooling.',
      examples: ['Functional prototypes', 'Design validation', 'Form and fit testing', 'Pre-production samples'],
    },
    {
      icon: Settings2,
      title: 'Custom Manufacturing Aids',
      description: 'Optimize your production line with purpose-built aids. Single-cell manufacturing enables economical one-off tooling solutions.',
      examples: ['Positioning guides', 'Assembly aids', 'Ergonomic handles', 'Process optimization tools'],
    },
    {
      icon: Activity,
      title: 'Functional Testing Components',
      description: 'Create test fixtures and validation equipment with industrial 3D printing. Support quality control processes with custom-designed test apparatus.',
      examples: ['Test fixtures', 'Calibration tools', 'Validation equipment', 'Quality control aids'],
    },
  ];

  const processData = [
    { stage: 'Initial Prototyping', traditional: '4-6 weeks', evo: '24-48 hours', improvement: '95% faster' },
    { stage: 'Design Iterations', traditional: '2-3 weeks each', evo: 'Overnight', improvement: '90% faster' },
    { stage: 'Tooling Lead Time', traditional: '8-12 weeks', evo: 'Not required', improvement: '100% eliminated' },
    { stage: 'Setup/Changeover', traditional: 'Hours', evo: 'Minutes', improvement: '85% faster' },
    { stage: 'Minimum Order Qty', traditional: '100+ units', evo: '1 unit', improvement: '99% reduction' },
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
                <Factory className="text-red-600" size={16} />
                <span className="text-red-500 text-sm font-bold tracking-wide font-mono">
                  INDUSTRIAL SOLUTIONS
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block text-gray-500 text-xl font-mono mb-2">[ SECTOR: INDUSTRIAL ]</span>
                Transform Your Factory Floor with Single Cell Additive Manufacturing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO delivers industrial 3D printing with the flexibility and reliability your manufacturing operations demand. Our single-cell manufacturing platform consolidates multiple additive manufacturing technologies into one compact system. From rapid prototyping to end-use production parts, streamline your factory floor with industrial FFF 3D printing that reduces costs, accelerates time-to-market, and enables supply chain independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold border border-red-500"
                >
                  <Zap size={20} />
                  Request Industrial Demo
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Gauge className="text-red-600" />
                  Industrial Manufacturing Impact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Significant Space Reduction</div>
                      <div className="text-gray-400 text-sm">Consolidate multiple 3D printers into one compact footprint</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Lower Total Cost of Ownership</div>
                      <div className="text-gray-400 text-sm">Reduced equipment, maintenance, and operational costs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Faster Setup Times</div>
                      <div className="text-gray-400 text-sm">Minutes instead of hours for job changeover</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Simplified Training</div>
                      <div className="text-gray-400 text-sm">One platform means faster operator onboarding</div>
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
              EXPLORE THE DIFFERENCE
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Why Industrial Leaders Choose FFF 3D Printing Technology
            </h2>
            <p className="text-xl text-gray-400">
              Fused Filament Fabrication delivers the material properties, production reliability, and operational efficiency that industrial manufacturing demands. Single-cell additive manufacturing with FFF technology provides unmatched flexibility for factory floor applications.
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
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              EVO ADVANTAGES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              What EVO Brings to Industrial Manufacturing
            </h2>
            <p className="text-xl text-gray-400">
              EVO consolidates multiple 3D printing technologies into one platform designed for demanding industrial environments and production workflows.
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
              Industrial-Grade Materials Portfolio
            </h3>
            <p className="text-gray-400 mb-6">
              Access engineering-grade polymers and composite materials designed for demanding industrial applications. EVO's single-cell manufacturing supports the full range of industrial 3D printing materials.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {materials.map((material, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-600 transition-all">
                  <div className="text-red-500 font-bold mb-1">{material.name}</div>
                  <div className="text-gray-300 text-sm mb-2 font-mono">{material.property}</div>
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
              Industrial 3D Printing Applications
            </h2>
            <p className="text-xl text-gray-400">
              From prototyping to production, EVO handles the full spectrum of industrial manufacturing needs with additive manufacturing technology.
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

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <PieChart className="text-red-600" />
              Traditional vs EVO: Process Comparison
            </h2>
            <p className="text-xl text-gray-400">
              See how EVO's additive manufacturing platform compares to traditional industrial manufacturing methods across key operational metrics.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
            <div className="relative overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-400 font-mono text-sm">PROCESS</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">TRADITIONAL</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">EVO</th>
                    <th className="text-right py-4 px-4 text-green-500 font-mono text-sm">IMPROVEMENT</th>
                  </tr>
                </thead>
                <tbody>
                  {processData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-white font-semibold">{row.stage}</td>
                      <td className="py-4 px-4 text-right text-gray-400 font-mono">{row.traditional}</td>
                      <td className="py-4 px-4 text-right text-red-500 font-mono font-bold">{row.evo}</td>
                      <td className="py-4 px-4 text-right text-green-500 font-mono font-bold">{row.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
                COMPETITIVE EDGE
              </span>
              <h2 className="text-4xl font-bold text-white mb-6 mt-6">
                Industrial Manufacturing Competitive Advantage
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                EVO delivers measurable operational improvements that translate directly to competitive advantage in industrial manufacturing environments.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Rapid Response Manufacturing</strong> - Respond to customer demands in days instead of weeks with rapid prototyping and production</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Mass Customization at Scale</strong> - Enable business models impossible with traditional manufacturing constraints</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Supply Chain Independence</strong> - Manufacture critical components on-site, eliminate external dependencies</span>
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
                    <div className="text-3xl font-bold text-white mb-2">Reduced Costs</div>
                    <div className="text-gray-300">Lower equipment and operational expenses</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Single Platform</div>
                    <div className="text-gray-300">Efficiency through consolidated operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industrial Manufacturing?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how EVO's single-cell additive manufacturing platform can revolutionize your factory floor operations with industrial 3D printing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
            >
              Schedule Industrial Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/evo"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg border-2 border-gray-700"
            >
              Download Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
