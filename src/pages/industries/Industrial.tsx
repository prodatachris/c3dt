import React from 'react';
import { Factory, Cog, Package, TrendingUp, ArrowRight, Check, Gauge, Cpu, Zap, Activity, AlertCircle, Clock, Target, Boxes, Shield, Users, Award, Workflow, DollarSign, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industrial() {
  const benefits = [
    {
      icon: Factory,
      title: 'Production Flexibility',
      description: 'Switch between technologies rapidly. Respond to changing demands with ease.',
      metrics: ['Fast swap', 'No retooling', '24/7 operation'],
    },
    {
      icon: Cog,
      title: 'Operational Efficiency',
      description: 'Consolidate multiple printers into one footprint. Reduce complexity and maintenance overhead.',
      metrics: ['Space savings', 'Lower TCO', 'Simplified operation'],
    },
    {
      icon: Package,
      title: 'Supply Chain Resilience',
      description: 'Manufacture critical parts on-site. Eliminate dependency on external suppliers.',
      metrics: ['Fast turnaround', 'No MOQ', 'Full control'],
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Pay for one platform instead of many. Maximize utilization across all technologies.',
      metrics: ['Lower CAPEX', 'Reduced footprint', 'Shared resources'],
    },
  ];

  const useCases = [
    'End-Use Production Parts',
    'Jigs, Fixtures & Tooling',
    'Replacement Parts On-Demand',
    'Rapid Prototyping',
    'Custom Manufacturing Aids',
    'Short-Run Production',
    'Functional Testing Components',
    'Production Line Components',
  ];

  const processData = [
    { stage: 'Setup', traditional: 'Hours', evo: 'Minutes', reduction: 'Faster' },
    { stage: 'Changeover', traditional: 'Days', evo: 'Minutes', reduction: 'Faster' },
    { stage: 'Training', traditional: 'Weeks', evo: 'Days', reduction: 'Shorter' },
    { stage: 'Maintenance', traditional: 'High', evo: 'Low', reduction: 'Reduced' },
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
                  INDUSTRIAL MANUFACTURING
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block text-gray-500 text-xl font-mono mb-2">[ SECTOR: MANUFACTURING ]</span>
                Transform Your Factory Floor with Additive Manufacturing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO brings single-cell manufacturing to your production facility. One 3D printing platform delivers the full
                spectrum of additive manufacturing capabilities your operation demands. From rapid prototyping to end-use parts,
                replace multiple machines with one integrated system. Reduce complexity, maximize uptime, and accelerate time-to-market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold border border-red-500"
                >
                  <Zap size={20} />
                  Request a Demo
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/investor-relations"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold border-2 border-gray-700"
                >
                  View ROI Calculator
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Gauge className="text-red-600" />
                  Manufacturing Impact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Check className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="text-white font-semibold mb-1">Significant Space Reduction</div>
                      <div className="text-gray-400 text-sm">Consolidate multiple printers into one compact footprint</div>
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
                      <div className="text-gray-400 text-sm">Streamlined processes get you up and running quickly</div>
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
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              MANUFACTURING CHALLENGES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Industrial Manufacturing Challenges Solved by 3D Printing
            </h2>
            <p className="text-xl text-gray-400">
              Traditional manufacturing creates operational inefficiencies that limit agility. EVO's additive manufacturing
              platform addresses these challenges with single-cell manufacturing and rapid prototyping capabilities.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">High Equipment Costs</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Industrial facilities require multiple specialized 3D printers for different materials and technologies. Each
                  machine represents significant capital expense, maintenance burden, and floor space requirements. Technology
                  diversity means training operators on multiple systems.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Replace multiple machines with one single-cell manufacturing platform. EVO consolidates FDM, metal, and
                        specialty printing capabilities in a compact footprint. Reduce capital expenditure, simplify training, and
                        minimize maintenance overhead. One system, multiple technologies, unified workflow.
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
                    <Clock className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Long Lead Times</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Traditional manufacturing requires tooling, fixtures, and setup time. Changes mean retooling delays. Rapid
                  prototyping takes weeks when outsourced. Supply chain dependencies create unpredictable timelines. Production
                  flexibility suffers.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        3D printing eliminates tooling entirely. Go from CAD to physical part in hours. Design changes happen
                        overnight with no setup penalty. Rapid prototyping on-site means instant validation. Tool-free changeover
                        between jobs takes minutes. Achieve supply chain independence for critical components.
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
                    <Boxes className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Inventory Management</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Maintaining spare parts inventory ties up capital. Obsolete parts become worthless when equipment upgrades. Low-volume
                  parts face minimum order quantities. Storage space costs money. Inventory accuracy requires continuous tracking.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Print parts on-demand. Store digital files instead of physical inventory. Produce exact quantities needed.
                        Never deal with minimum orders. Update legacy part designs digitally. Free warehouse space. Reduce carrying
                        costs. Additive manufacturing transforms inventory into digital assets.
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
                    <Target className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Limited Customization</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Mass production optimizes for volume, not variation. Custom parts require separate tooling investments. Small-batch
                  production is economically unfeasible. Customer-specific modifications add complexity and cost. Design changes
                  impact entire production runs.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        3D printing enables mass customization at scale. Every part can be unique at no additional cost. Produce
                        batch-of-one economically. Offer customer-specific variations without tooling penalties. Mix different designs
                        in the same build. Enable business models impossible with traditional manufacturing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Modernize Your Manufacturing Operations?
            </h3>
            <p className="text-gray-300 mb-6 text-lg max-w-3xl mx-auto">
              Discover how EVO's single-cell manufacturing platform eliminates traditional production bottlenecks.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold"
            >
              Schedule Manufacturing Assessment
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              FFF/FDM ADVANTAGES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Why Industrial Manufacturing Relies on FFF Technology
            </h2>
            <p className="text-xl text-gray-400">
              Fused Filament Fabrication delivers the durability, material properties, and production reliability that industrial applications demand.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Activity className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Engineering-Grade Materials</h3>
              <p className="text-gray-400 text-sm">
                Access to high-performance polymers like Nylon, PEEK, ULTEM, and carbon fiber composites for functional parts.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Gauge className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Proven Reliability</h3>
              <p className="text-gray-400 text-sm">
                Mature technology with decades of industrial use. Predictable results and consistent part quality.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Zap className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Minimal Post-Processing</h3>
              <p className="text-gray-400 text-sm">
                Parts come off the build plate ready to use. No powder removal, washing, or curing required.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Cpu className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Tool-Less Changeover</h3>
              <p className="text-gray-400 text-sm">
                Switch between materials and technologies in minutes. No specialized tooling or fixtures needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              INDUSTRIAL BENEFITS
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Measurable Operational Improvements
            </h2>
            <p className="text-xl text-gray-400">
              EVO delivers quantifiable improvements across all aspects of manufacturing operations.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-900 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/50">
                      <benefit.icon className="text-white" size={32} />
                    </div>
                    <span className="text-xs font-mono text-gray-600">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 mb-6">{benefit.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-800 border border-gray-700 rounded px-2 py-2 text-center">
                        <div className="text-xs font-mono text-gray-300">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Cpu className="text-red-600" />
                Process Comparison: Traditional vs EVO
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-800">
                      <th className="text-left py-4 px-4 text-gray-400 font-mono text-sm">PROCESS</th>
                      <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">TRADITIONAL</th>
                      <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">EVO</th>
                      <th className="text-right py-4 px-4 text-red-500 font-mono text-sm">REDUCTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                        <td className="py-4 px-4 text-white font-semibold">{row.stage}</td>
                        <td className="py-4 px-4 text-right text-gray-400 font-mono">{row.traditional}</td>
                        <td className="py-4 px-4 text-right text-green-500 font-mono font-bold">{row.evo}</td>
                        <td className="py-4 px-4 text-right text-red-500 font-mono font-bold">{row.reduction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Industrial Use Cases
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                From prototyping to production, EVO handles the full spectrum of industrial
                manufacturing needs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-900 transition-all"
                  >
                    <Check className="text-red-600 flex-shrink-0" size={18} />
                    <span className="text-gray-300 text-sm font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/50 to-gray-900/50 rounded-2xl p-12 border-2 border-red-800/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-red-500 font-mono text-sm tracking-wider">ROI ANALYSIS</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Rapid ROI Potential
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Industrial customers can achieve return on investment through reduced equipment costs,
                  space savings, and operational efficiency gains.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-white">Eliminate multiple separate printer purchases</strong> - Consolidate to one platform</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-white">Significantly reduce facility footprint</strong> - Free up valuable floor space</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-white">Lower total cost of ownership</strong> - Single platform, shared resources</span>
                  </li>
                </ul>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all font-bold border border-red-500"
                >
                  <Gauge size={20} />
                  Calculate Your ROI
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
