import React from 'react';
import { Palette, Film, Lightbulb, Star, ArrowRight, Check, Layers, Zap, TrendingUp, Package, Sparkles, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Creative() {
  const ffdmBenefits = [
    {
      icon: Palette,
      title: 'Unlimited Material Versatility',
      description: 'Access to hundreds of filament types including flexible, translucent, metallic, wood-filled, and composite materials for endless creative possibilities.',
    },
    {
      icon: Layers,
      title: 'Multi-Color & Multi-Material',
      description: 'Create complex pieces with multiple colors and materials in a single build, perfect for artistic expression and detailed product prototypes.',
    },
    {
      icon: Package,
      title: 'Large Build Volumes',
      description: 'FFF technology enables massive build sizes ideal for gallery installations, large-scale sculptures, and full-size product prototypes.',
    },
    {
      icon: Zap,
      title: 'Rapid Iteration',
      description: 'Quickly iterate designs at a fraction of the cost of traditional methods. Perfect for refining concepts and exploring creative directions.',
    },
  ];

  const applications = [
    {
      icon: Palette,
      title: 'Art & Sculpture',
      description: 'Create intricate sculptures and art pieces with unprecedented detail and material variety.',
      examples: ['Large-scale installations', 'Gallery pieces', 'Public art', 'Limited edition collectibles'],
    },
    {
      icon: Film,
      title: 'Film & Entertainment',
      description: 'Produce high-quality props, costumes, and special effects components rapidly.',
      examples: ['Movie props', 'Set pieces', 'Costume elements', 'Character models'],
    },
    {
      icon: Lightbulb,
      title: 'Product Design',
      description: 'Rapidly prototype and iterate on consumer products with multiple materials.',
      examples: ['Concept models', 'Functional prototypes', 'Focus group samples', 'Design validation'],
    },
    {
      icon: Star,
      title: 'Custom Manufacturing',
      description: 'Small-batch production of unique, personalized items for discerning clients.',
      examples: ['Jewelry', 'Home decor', 'Custom accessories', 'Bespoke furniture'],
    },
    {
      icon: Camera,
      title: 'Architectural Models',
      description: 'Build detailed architectural models and concept presentations with precision.',
      examples: ['Building models', 'Urban planning', 'Interior design mockups', 'Client presentations'],
    },
    {
      icon: Sparkles,
      title: 'Fashion & Wearables',
      description: 'Design and produce unique fashion pieces, accessories, and wearable art.',
      examples: ['Avant-garde fashion', 'Custom jewelry', 'Eyewear', 'Handbag prototypes'],
    },
  ];

  const materials = [
    { name: 'PLA', use: 'Detailed models, colorful art pieces' },
    { name: 'PETG', use: 'Durable props, outdoor installations' },
    { name: 'TPU/TPE', use: 'Flexible wearables, costume elements' },
    { name: 'Wood-Fill', use: 'Natural aesthetic pieces' },
    { name: 'Metal-Fill', use: 'Metallic finishes, jewelry' },
    { name: 'Translucent', use: 'Lighting art, decorative pieces' },
  ];

  const evoAdvantages = [
    {
      title: 'Extensive Material Library',
      description: 'Switch between aesthetic and functional materials instantly without investing in multiple machines.',
      impact: 'Expand your creative palette',
    },
    {
      title: 'Continuous Production',
      description: 'Work on multiple projects simultaneously with 24/7 operation capability.',
      impact: 'Meet tight deadlines',
    },
    {
      title: 'Studio Space Efficient',
      description: 'Replace multiple specialized printers with one compact platform.',
      impact: 'Maximize your workspace',
    },
    {
      title: 'Cost-Effective Experimentation',
      description: 'Test bold ideas without expensive material waste or machine downtime.',
      impact: 'Take creative risks',
    },
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
                <Palette className="text-red-600" size={16} />
                <span className="text-red-500 text-sm font-bold tracking-wide">
                  CREATIVE INDUSTRY
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Bring Your Vision to Life
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO empowers artists, designers, and creative professionals to push boundaries.
                With multiple printing technologies and extensive material options in one platform, your
                creative possibilities are limitless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/evo"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
                >
                  Explore EVO Platform
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg border-2 border-gray-700"
                >
                  Request a Demo
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">Hundreds</div>
                <div className="text-gray-400">Material Options</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">Multiple</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-400">Production</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all">
                <div className="text-3xl font-bold text-red-600 mb-2">Studio</div>
                <div className="text-gray-400">Friendly Size</div>
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
              FFF/FDM PRINTING BENEFITS
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Why Creative Professionals Choose FFF Technology
            </h2>
            <p className="text-xl text-gray-400">
              Fused Filament Fabrication offers unmatched versatility, material options, and creative freedom for artists and designers.
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
              What EVO Brings to Your Creative Studio
            </h2>
            <p className="text-xl text-gray-400">
              EVO consolidates multiple printing capabilities into one powerful platform designed for creative workflows.
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
              Creative Materials Library
            </h3>
            <p className="text-gray-400 mb-6">
              Access specialized materials perfect for creative applications without investing in multiple machines.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {materials.map((material, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-red-500 font-bold mb-1">{material.name}</div>
                  <div className="text-gray-400 text-sm">{material.use}</div>
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
              Creative Applications
            </h2>
            <p className="text-xl text-gray-400">
              From fine art to commercial production, EVO adapts to your creative workflow.
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
                Cost-Effective Creative Production
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                FFF printing with EVO offers the most economical way to produce creative work at scale.
                Experiment freely without worrying about material costs or machine investments.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Lower Material Costs</strong> - Filaments are significantly cheaper than resin or powder materials</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">One Platform, All Technologies</strong> - No need to purchase multiple specialized machines</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-white">Minimal Waste</strong> - Only use the material you need, no excess powder or resin</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-950/50 to-gray-900/50 rounded-2xl p-12 border-2 border-red-800/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-red-500 font-mono text-sm tracking-wider">SUCCESS METRICS</span>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">10x</div>
                    <div className="text-gray-300">Faster iteration cycles</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Significant</div>
                    <div className="text-gray-300">Cost reduction vs traditional methods</div>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-red-900/50">
                    <div className="text-3xl font-bold text-white mb-2">Unlimited</div>
                    <div className="text-gray-300">Design possibilities</div>
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
            Ready to Elevate Your Creative Process?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a demo to see how EVO can transform your creative workflow and unlock new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
            >
              Request a Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/evo"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg border-2 border-gray-700"
            >
              View Technical Specs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
