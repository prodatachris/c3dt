import React from 'react';
import { Zap, Clock, DollarSign, Layers, ArrowRight, Check, TrendingUp, Target, Lightbulb, Users, BarChart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RapidPrototyping() {
  const ffdmBenefits = [
    {
      icon: Clock,
      title: 'Fastest Concept to Part',
      description: 'Transform digital designs into physical prototypes overnight. FFF technology delivers the fastest turnaround from CAD to hand.',
    },
    {
      icon: DollarSign,
      title: 'Most Cost-Effective Iteration',
      description: 'Test multiple design variants without breaking the budget. FFF materials are significantly cheaper than alternatives.',
    },
    {
      icon: Layers,
      title: 'Widest Material Selection',
      description: 'Access hundreds of materials for functional testing. From rigid engineering plastics to flexible elastomers.',
    },
    {
      icon: Target,
      title: 'Large Build Capacity',
      description: 'Create full-scale prototypes in a single build. Test real-world size and ergonomics without assembly.',
    },
  ];

  const applications = [
    {
      icon: Lightbulb,
      title: 'Concept Validation',
      description: 'Quickly transform ideas into tangible models for evaluation and feedback.',
      examples: ['Initial concepts', 'Design exploration', 'Stakeholder reviews', 'Feasibility testing'],
    },
    {
      icon: Target,
      title: 'Form-Fit-Function Testing',
      description: 'Validate part dimensions, assembly fit, and mechanical function before production.',
      examples: ['Dimensional accuracy', 'Assembly validation', 'Mechanical testing', 'User interaction'],
    },
    {
      icon: Users,
      title: 'Market Research Samples',
      description: 'Create samples for focus groups, customer feedback, and market testing.',
      examples: ['Focus group models', 'User testing', 'Trade show samples', 'Customer reviews'],
    },
    {
      icon: RefreshCw,
      title: 'Iterative Design Cycles',
      description: 'Rapidly cycle through design improvements based on testing and feedback.',
      examples: ['Design refinement', 'Performance optimization', 'Ergonomic improvements', 'Feature validation'],
    },
    {
      icon: BarChart,
      title: 'Pre-Production Validation',
      description: 'Final validation before committing to expensive production tooling.',
      examples: ['Manufacturing feasibility', 'Assembly verification', 'Quality standards', 'Cost optimization'],
    },
    {
      icon: Users,
      title: 'Investor Presentations',
      description: 'Professional prototypes that demonstrate product viability to investors and partners.',
      examples: ['Pitch presentations', 'Funding rounds', 'Partnership demos', 'Trade shows'],
    },
  ];

  const materials = [
    { name: 'PLA', speed: 'Fast', cost: 'Low', use: 'Concept models' },
    { name: 'ABS', speed: 'Medium', cost: 'Low', use: 'Functional prototypes' },
    { name: 'PETG', speed: 'Medium', cost: 'Low', use: 'Durable testing' },
    { name: 'Nylon', speed: 'Medium', cost: 'Medium', use: 'Mechanical testing' },
    { name: 'TPU', speed: 'Medium', cost: 'Medium', use: 'Flexible parts' },
    { name: 'ASA', speed: 'Medium', cost: 'Medium', use: 'Aesthetic prototypes' },
  ];

  const evoAdvantages = [
    {
      title: 'Multi-Technology Access',
      description: 'One platform provides access to multiple printing technologies. Switch based on prototype requirements.',
      impact: 'Maximum flexibility',
    },
    {
      title: '24/7 Production',
      description: 'Queue multiple jobs for overnight production. Wake up to finished prototypes every morning.',
      impact: 'Compress timelines',
    },
    {
      title: 'Material Library',
      description: 'Extensive material selection lets you match prototype materials to production requirements.',
      impact: 'Better validation',
    },
    {
      title: 'Space Efficient',
      description: 'Replace multiple single-purpose machines with one compact platform. Maximize lab space.',
      impact: 'Reduce facility costs',
    },
  ];

  const speedComparison = [
    { stage: 'First Prototype', traditional: '2-4 weeks', evo: '4-24 hours', factor: 'Much Faster' },
    { stage: 'Design Iteration', traditional: '1-2 weeks', evo: '4-12 hours', factor: 'Much Faster' },
    { stage: 'Material Change', traditional: 'New vendor', evo: '5 minutes', factor: 'Instant' },
    { stage: 'Minimum Order', traditional: '10-100 units', evo: '1 unit', factor: 'Flexible' },
  ];

  const costBreakdown = [
    { item: 'Material Cost', traditional: 'High', evo: 'Low', savings: 'Significant' },
    { item: 'Setup Costs', traditional: 'High', evo: 'None', savings: 'Complete' },
    { item: 'Minimum Orders', traditional: 'Required', evo: 'Not required', savings: 'Major' },
    { item: 'Design Changes', traditional: 'Expensive', evo: 'Same cost', savings: 'Substantial' },
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
                <Zap className="text-red-600" size={16} />
                <span className="text-red-500 text-sm font-bold tracking-wide font-mono">
                  RAPID PROTOTYPING
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block text-gray-500 text-xl font-mono mb-2">[ SOLUTION: PROTOTYPING ]</span>
                From Idea to Prototype in Hours
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO revolutionizes rapid prototyping with unmatched speed and cost-effectiveness. Transform
                digital designs into physical prototypes overnight. Test, iterate, and perfect your designs
                at a pace that keeps up with your innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold border border-red-500"
                >
                  <Clock size={20} />
                  Start Prototyping Today
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/evo"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold border-2 border-gray-700"
                >
                  View Platform Details
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">Hours</div>
                <div className="text-gray-400">Not weeks for prototypes</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">Significant</div>
                <div className="text-gray-400">Cost reduction</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">Hundreds</div>
                <div className="text-gray-400">Material options</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-400">Continuous production</div>
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
              FFF/FDM ADVANTAGES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Why FFF is the Ultimate Rapid Prototyping Technology
            </h2>
            <p className="text-xl text-gray-400">
              Fused Filament Fabrication delivers unmatched speed, cost-effectiveness, and material versatility for rapid prototyping applications.
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
              What EVO Brings to Rapid Prototyping
            </h2>
            <p className="text-xl text-gray-400">
              EVO enhances rapid prototyping with multi-technology access, continuous production, and an extensive material library.
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
              Prototyping Materials Portfolio
            </h3>
            <p className="text-gray-400 mb-6">
              Choose from a wide range of materials optimized for different prototyping needs and budgets.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {materials.map((material, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-red-500 font-bold mb-1">{material.name}</div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Speed: {material.speed}</span>
                    <span className="text-gray-300">Cost: {material.cost}</span>
                  </div>
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
              Prototyping Applications
            </h2>
            <p className="text-xl text-gray-400">
              EVO supports every stage of product development from initial concept to final validation.
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
              Speed Comparison: Traditional vs EVO
            </h2>
            <p className="text-xl text-gray-400">
              See how EVO accelerates your prototyping workflow.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-400 font-mono text-sm">STAGE</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">TRADITIONAL</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">EVO</th>
                    <th className="text-right py-4 px-4 text-red-500 font-mono text-sm">RESULT</th>
                  </tr>
                </thead>
                <tbody>
                  {speedComparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-white font-semibold">{row.stage}</td>
                      <td className="py-4 px-4 text-right text-gray-400 font-mono">{row.traditional}</td>
                      <td className="py-4 px-4 text-right text-green-500 font-mono font-bold">{row.evo}</td>
                      <td className="py-4 px-4 text-right text-red-500 font-mono font-bold">{row.factor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <DollarSign className="text-red-600" />
              Cost Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-400 font-mono text-sm">COST FACTOR</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">TRADITIONAL</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-mono text-sm">EVO</th>
                    <th className="text-right py-4 px-4 text-red-500 font-mono text-sm">SAVINGS</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-white font-semibold">{row.item}</td>
                      <td className="py-4 px-4 text-right text-gray-400 font-mono">{row.traditional}</td>
                      <td className="py-4 px-4 text-right text-green-500 font-mono font-bold">{row.evo}</td>
                      <td className="py-4 px-4 text-right text-red-500 font-mono font-bold">{row.savings}</td>
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
                Iterate Without Limits
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Traditional prototyping methods force you to commit to designs early due to cost and time
                constraints. With EVO, iterate freely. Test bold ideas. Perfect your designs through rapid
                cycles of testing and refinement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Unlimited Iterations</strong> - Test as many variants as needed</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Overnight Turnaround</strong> - Start a build before leaving, return to finished parts</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Cost-Effective Testing</strong> - Material costs are minimal compared to alternatives</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-950/50 to-gray-900/50 rounded-2xl p-12 border-2 border-red-800/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-red-500 font-mono text-sm tracking-wider">PROTOTYPING POWER</span>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Overnight</div>
                    <div className="text-gray-300">Prototype delivery</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Significant</div>
                    <div className="text-gray-300">Lower cost per part</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Hundreds</div>
                    <div className="text-gray-300">Material choices</div>
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
            Ready to Accelerate Your Prototyping?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Transform your product development with rapid prototyping that keeps pace with your innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
            >
              Start Prototyping Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/evo"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg border-2 border-gray-700"
            >
              Explore EVO Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
