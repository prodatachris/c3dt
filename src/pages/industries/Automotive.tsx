import React from 'react';
import { Car, Gauge, Zap, TrendingUp, ArrowRight, Check, Layers, Wind, CircuitBoard, Wrench, Package, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Automotive() {
  const ffdmBenefits = [
    {
      icon: Zap,
      title: 'Accelerate Development Cycles',
      description: 'Prototype parts in hours instead of weeks. Test and validate designs rapidly before committing to expensive tooling investments.',
    },
    {
      icon: Gauge,
      title: 'Functional Testing Capabilities',
      description: 'Create parts with mechanical properties suitable for real-world testing. Validate fit, form, and function early in development.',
    },
    {
      icon: Package,
      title: 'Low-Volume Production',
      description: 'Economically produce custom parts for limited edition vehicles, aftermarket products, and legacy vehicle support.',
    },
    {
      icon: TrendingUp,
      title: 'Design Iteration Freedom',
      description: 'Explore multiple design variants without tooling costs. Optimize parts for weight, performance, and manufacturing efficiency.',
    },
  ];

  const applications = [
    {
      icon: Car,
      title: 'Concept Development',
      description: 'Rapidly transform digital designs into physical models for evaluation and stakeholder review.',
      examples: ['Exterior styling models', 'Interior mockups', 'Ergonomic testing', 'Design reviews'],
    },
    {
      icon: Wrench,
      title: 'Functional Prototypes',
      description: 'Test parts under real operating conditions before tooling investment.',
      examples: ['Engine components', 'Bracket testing', 'Assembly validation', 'Performance evaluation'],
    },
    {
      icon: Wind,
      title: 'Aerodynamic Testing',
      description: 'Create precise wind tunnel models and aerodynamic components for performance optimization.',
      examples: ['Scale models', 'Aero parts', 'Underbody panels', 'Spoiler prototypes'],
    },
    {
      icon: CircuitBoard,
      title: 'Custom Interior Components',
      description: 'Produce unique interior parts for luxury, performance, and custom vehicles.',
      examples: ['Dashboard panels', 'Trim pieces', 'Console components', 'Custom bezels'],
    },
    {
      icon: Award,
      title: 'Manufacturing Tooling',
      description: 'Rapid production of jigs, fixtures, and assembly aids for the production line.',
      examples: ['Assembly fixtures', 'Quality gauges', 'Welding jigs', 'Paint masks'],
    },
    {
      icon: Package,
      title: 'Aftermarket & Restoration',
      description: 'On-demand production of replacement parts for classic cars and discontinued models.',
      examples: ['Obsolete parts', 'Custom upgrades', 'Restoration pieces', 'Performance mods'],
    },
  ];

  const materials = [
    { name: 'ABS', specs: 'Impact resistant, paintable', use: 'Interior components' },
    { name: 'ASA', specs: 'UV stable, weather resistant', use: 'Exterior parts' },
    { name: 'Nylon', specs: 'Strong, wear resistant', use: 'Functional prototypes' },
    { name: 'Carbon Fiber', specs: 'High strength-to-weight', use: 'Performance parts' },
    { name: 'TPU', specs: 'Flexible, impact absorbing', use: 'Seals and gaskets' },
    { name: 'PC-ABS', specs: 'Heat resistant, durable', use: 'Under-hood components' },
  ];

  const evoAdvantages = [
    {
      title: 'Speed to Market',
      description: 'Compress development timelines by weeks or months. Get products to market faster than competitors.',
      impact: 'Accelerate product launches',
    },
    {
      title: 'Cost-Effective Iteration',
      description: 'Test multiple design variants without expensive tooling. Fail fast and optimize before production.',
      impact: 'Reduce development costs',
    },
    {
      title: 'Material Flexibility',
      description: 'Access the full range of automotive materials from aesthetic plastics to engineering polymers in one platform.',
      impact: 'Match production materials',
    },
    {
      title: 'Custom Manufacturing',
      description: 'Economically produce low-volume custom parts for special editions, racing, and aftermarket applications.',
      impact: 'Enable new business models',
    },
  ];

  const processComparison = [
    { metric: 'Initial Prototype', traditional: '4-8 weeks', evo: '1-3 days', improvement: 'Faster' },
    { metric: 'Design Changes', traditional: 'Weeks + tooling cost', evo: 'Same day', improvement: 'Agile' },
    { metric: 'Minimum Order', traditional: '100-1000 units', evo: '1 unit', improvement: 'Flexible' },
    { metric: 'Material Variety', traditional: 'Limited', evo: 'Extensive', improvement: 'Versatile' },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-red-950/50 to-red-900/50 border border-red-800/50 rounded-full px-6 py-3 backdrop-blur-sm">
                <Car className="text-red-600" size={16} />
                <span className="text-red-500 text-sm font-bold tracking-wide font-mono">
                  AUTOMOTIVE INDUSTRY
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block text-gray-500 text-xl font-mono mb-2">[ SECTOR: AUTOMOTIVE ]</span>
                Accelerate Automotive Development with 3D Printing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO empowers automotive engineers and designers with rapid prototyping and additive manufacturing capabilities.
                Our single-cell manufacturing platform enables fast iteration of automotive components from initial concept to
                production tooling. Leverage 3D printing technology to compress development timelines, reduce tooling costs, and
                bring innovative vehicles to market faster with on-demand manufacturing of functional prototypes and end-use parts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold border border-red-500"
                >
                  <Zap size={20} />
                  Request Automotive Demo
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/evo"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold border-2 border-gray-700"
                >
                  View Capabilities
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Gauge className="text-red-600" />
                  Automotive Advantages
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Rapid Prototyping</div>
                      <div className="text-gray-400 text-sm">Parts in hours, not weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Cost-Effective Testing</div>
                      <div className="text-gray-400 text-sm">Validate before tooling investment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Material Versatility</div>
                      <div className="text-gray-400 text-sm">From aesthetic to functional materials</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Custom Production</div>
                      <div className="text-gray-400 text-sm">Low-volume and one-off parts</div>
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
              FFF/FDM FOR AUTOMOTIVE
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Why Automotive Engineers Rely on FFF 3D Printing Technology
            </h2>
            <p className="text-xl text-gray-400">
              Fused Filament Fabrication 3D printing delivers the speed, material properties, and cost-effectiveness that automotive
              development demands. Rapid prototyping with additive manufacturing enables engineers to test multiple design iterations
              quickly, validate functional performance, and accelerate time-to-market for new vehicle programs.
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
              What EVO Brings to Automotive Development
            </h2>
            <p className="text-xl text-gray-400">
              EVO delivers automotive-specific capabilities that transform how you develop and manufacture vehicles.
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
                  <TrendingUp size={16} />
                  {advantage.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="text-red-600" />
              Automotive Materials Portfolio
            </h3>
            <p className="text-gray-400 mb-6">
              From aesthetic prototypes to functional testing, EVO supports the full range of materials automotive applications require.
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
              Automotive Applications
            </h2>
            <p className="text-xl text-gray-400">
              From concept to production, EVO supports every stage of automotive development and manufacturing.
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Traditional vs EVO: Process Comparison
            </h2>
            <p className="text-xl text-gray-400">
              See how EVO transforms automotive development timelines and capabilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-400 font-mono text-sm">METRIC</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">TRADITIONAL</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">EVO</th>
                    <th className="text-right py-4 px-4 text-red-500 font-mono text-sm">ADVANTAGE</th>
                  </tr>
                </thead>
                <tbody>
                  {processComparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-white font-semibold">{row.metric}</td>
                      <td className="py-4 px-4 text-right text-gray-400 font-mono">{row.traditional}</td>
                      <td className="py-4 px-4 text-right text-green-500 font-mono font-bold">{row.evo}</td>
                      <td className="py-4 px-4 text-right text-red-500 font-mono font-bold">{row.improvement}</td>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Competitive Advantage Through Speed
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                In the automotive industry, time to market is everything. EVO compresses development
                cycles from months to weeks, giving you the agility to respond to market demands and
                stay ahead of competitors.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Rapid Design Validation</strong> - Test concepts in days instead of weeks</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Eliminate Tooling Delays</strong> - No waiting for expensive molds and fixtures</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Parallel Development</strong> - Test multiple variants simultaneously</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-950/50 to-gray-900/50 rounded-2xl p-12 border-2 border-red-800/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-red-500 font-mono text-sm tracking-wider">DEVELOPMENT IMPACT</span>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Weeks</div>
                    <div className="text-gray-300">Faster time to market</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Significant</div>
                    <div className="text-gray-300">Cost savings on tooling</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Unlimited</div>
                    <div className="text-gray-300">Design iterations</div>
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
            Ready to Transform Your Automotive Development?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how EVO can accelerate your product development and give you a competitive edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
            >
              Schedule Automotive Demo
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
