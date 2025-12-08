import React from 'react';
import { Palette, Film, Lightbulb, Star, ArrowRight, Check, Layers, Zap, TrendingUp, Package, Sparkles, Camera, AlertCircle, DollarSign, Clock, Users, BookOpen, Award, Shield, Cpu, Target, Boxes, Workflow } from 'lucide-react';
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
    { name: 'PLA', temp: '190-220°C', strength: 'Medium', finish: 'Excellent', use: 'Detailed models, colorful art pieces, prototypes', properties: 'Easy to print, vibrant colors, biodegradable' },
    { name: 'PETG', temp: '220-250°C', strength: 'High', finish: 'Good', use: 'Durable props, outdoor installations, functional parts', properties: 'Weather resistant, strong layer adhesion, clear options' },
    { name: 'TPU/TPE', temp: '210-230°C', strength: 'Flexible', finish: 'Textured', use: 'Flexible wearables, costume elements, grips', properties: 'Rubber-like flexibility, impact resistant, soft touch' },
    { name: 'Wood-Fill', temp: '190-220°C', strength: 'Medium', finish: 'Natural', use: 'Natural aesthetic pieces, sculptures, furniture accents', properties: 'Real wood particles, sandable, stainable' },
    { name: 'Metal-Fill', temp: '195-220°C', strength: 'Medium-High', finish: 'Metallic', use: 'Metallic finishes, jewelry, decorative objects', properties: 'Contains real metal particles, polishable, authentic weight' },
    { name: 'Translucent', temp: '210-240°C', strength: 'Medium', finish: 'Clear', use: 'Lighting art, decorative pieces, display models', properties: 'Light transmission, crystal-clear finish, tintable' },
    { name: 'Carbon Fiber', temp: '240-270°C', strength: 'Very High', finish: 'Technical', use: 'Structural art, high-end props, performance parts', properties: 'Extreme strength, lightweight, premium aesthetic' },
    { name: 'Silk/Satin', temp: '200-230°C', strength: 'Medium', finish: 'Glossy', use: 'Luxury items, jewelry, premium prototypes', properties: 'Reflective sheen, smooth surface, premium appearance' },
    { name: 'Glow-in-Dark', temp: '190-220°C', strength: 'Medium', finish: 'Special Effect', use: 'Art installations, theatrical props, signage', properties: 'Luminescent effect, charges with light, unique aesthetic' },
    { name: 'Color-Change', temp: '190-210°C', strength: 'Medium', finish: 'Interactive', use: 'Interactive art, temperature indicators, novelty items', properties: 'Changes color with temperature, engaging, dynamic' },
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
                Bring Your Vision to Life with Advanced 3D Printing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO empowers artists, designers, and creative professionals to push boundaries through innovative
                additive manufacturing technology. With multiple 3D printing technologies and extensive material
                options in one single-cell manufacturing platform, your creative possibilities are limitless. From
                rapid prototyping to final production, transform your artistic vision into reality faster than ever.
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

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              INDUSTRY CHALLENGES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Creative Industry Challenges Solved by Additive Manufacturing
            </h2>
            <p className="text-xl text-gray-400">
              Traditional creative production methods create bottlenecks that limit artistic expression. EVO's 3D printing
              platform eliminates these barriers with rapid prototyping and flexible manufacturing capabilities.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">High Production Costs</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Traditional manufacturing requires expensive molds, tooling, and minimum order quantities that make experimentation
                  financially prohibitive for artists and small studios. Limited budgets force creative compromises.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        3D printing eliminates tooling costs entirely. Create one-off pieces or small batches at the same per-unit
                        cost as mass production. Test bold creative ideas without financial risk. Materials cost pennies per gram,
                        making experimentation affordable for any budget.
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
                    <h3 className="text-xl font-bold text-white mb-2">Slow Iteration Cycles</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Outsourcing production means waiting weeks for prototypes. Each design revision adds more delays. By the time
                  you receive physical samples, your creative momentum has stalled and opportunities have passed.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Rapid prototyping transforms ideas into physical objects overnight. Start a print before leaving your
                        studio and return to finished pieces. Test multiple design variations in parallel. Compress weeks of
                        traditional iteration into days with additive manufacturing technology.
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
                    <h3 className="text-xl font-bold text-white mb-2">Material Limitations</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Traditional processes limit material choices. Different materials require different equipment and techniques.
                  Exploring new aesthetic properties means investing in entirely new production methods and vendor relationships.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Access hundreds of materials on one 3D printing platform. Switch from flexible TPU to rigid carbon fiber
                        to translucent PETG in minutes. Create multi-material pieces combining different properties in a single
                        build. Explore wood-fill, metal-fill, glow-in-dark, and specialty filaments without investing in new equipment.
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
                    <h3 className="text-xl font-bold text-white mb-2">Design Constraints</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Manufacturing limitations force design compromises. Undercuts, internal structures, and complex geometries
                  are difficult or impossible. Your creative vision gets diluted by technical constraints of traditional fabrication.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Additive manufacturing builds layer by layer, enabling geometries impossible with traditional methods.
                        Create hollow structures, interlocking pieces, internal channels, and organic forms directly from your
                        digital designs. No assembly required. Single-cell manufacturing produces complex pieces as one unit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Overcome Creative Production Bottlenecks?
            </h3>
            <p className="text-gray-300 mb-6 text-lg max-w-3xl mx-auto">
              Discover how EVO's 3D printing platform eliminates the traditional barriers between creative vision and physical reality.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold"
            >
              Schedule Your Creative Consultation
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
              Access specialized materials perfect for creative applications without investing in multiple machines. EVO's
              single-cell manufacturing platform supports the full spectrum of creative 3D printing materials.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materials.map((material, index) => (
                <div key={index} className="p-5 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-900 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-red-500 font-bold text-lg">{material.name}</div>
                    <div className="text-xs font-mono text-gray-600">{material.temp}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-xs">
                      <span className="text-gray-500">Strength:</span>
                      <span className="text-white ml-1 font-medium">{material.strength}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-500">Finish:</span>
                      <span className="text-white ml-1 font-medium">{material.finish}</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm mb-2 leading-relaxed">{material.use}</div>
                  <div className="text-gray-600 text-xs leading-relaxed">{material.properties}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <Sparkles className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-2">Custom Material Development</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Need a specific aesthetic property not listed? EVO's open architecture supports custom material profiles. Work
                    with our team to develop unique filament blends tailored to your artistic vision. From custom colors to
                    specialized composite materials, push the boundaries of what's possible in creative 3D printing.
                  </p>
                </div>
              </div>
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

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              CREATIVE WORKFLOW
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Streamlined Rapid Prototyping Process for Creative Projects
            </h2>
            <p className="text-xl text-gray-400">
              EVO's 3D printing workflow integrates seamlessly into your creative process, from initial concept to final piece.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-6 hover:border-red-900 transition-all h-full">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-black">
                  1
                </div>
                <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center mb-4 mt-2">
                  <Lightbulb className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Design Creation</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Create your design in any 3D modeling software: Blender, Maya, ZBrush, Fusion 360, or CAD tools. EVO accepts
                  all standard file formats including STL, OBJ, 3MF, and STEP.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>All major CAD formats</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>Direct mesh import</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-6 hover:border-red-900 transition-all h-full">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-black">
                  2
                </div>
                <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center mb-4 mt-2">
                  <Workflow className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Slicing & Setup</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Import your design into EVO's intelligent slicing software. The system automatically optimizes orientation,
                  generates supports, and selects ideal print settings based on your material choice.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>Auto-optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>Smart support generation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-6 hover:border-red-900 transition-all h-full">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-black">
                  3
                </div>
                <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center mb-4 mt-2">
                  <Cpu className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Additive Manufacturing</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  EVO's 3D printing process builds your piece layer by layer with precision. Monitor progress remotely via
                  cloud connectivity. Receive notifications when prints complete. Run multiple jobs 24/7.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>Remote monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>24/7 production</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-6 hover:border-red-900 transition-all h-full">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-black">
                  4
                </div>
                <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center mb-4 mt-2">
                  <Award className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Finishing & Display</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Parts come off the build plate ready for minimal post-processing. Sand, paint, polish, or leave raw depending
                  on your aesthetic goals. Most creative projects require only simple support removal.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>Minimal post-processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Check className="text-red-600" size={14} />
                    <span>Multiple finish options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Rapid Iteration Advantage</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The real power of additive manufacturing for creative work is iteration speed. Traditional fabrication locks you
              into designs early. With EVO's rapid prototyping workflow, test ideas physically before committing. Make changes
              overnight. Explore multiple directions simultaneously. This velocity transforms the creative process itself.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-500 mb-1">Hours</div>
                <div className="text-gray-400 text-sm">First physical prototype</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-500 mb-1">Unlimited</div>
                <div className="text-gray-400 text-sm">Design iterations</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-500 mb-1">Parallel</div>
                <div className="text-gray-400 text-sm">Concept exploration</div>
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
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Creative Studios Transformed by 3D Printing
            </h2>
            <p className="text-xl text-gray-400">
              See how creative professionals leverage EVO's single-cell manufacturing platform to produce groundbreaking work.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Film className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Film Production Studio</h3>
                  <p className="text-sm text-gray-500 font-mono">LOS ANGELES, CA</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A major film production studio replaced their entire prop prototyping workflow with a single EVO platform. Previously
                dependent on external vendors with 2-3 week turnarounds, they now produce functional prop prototypes overnight.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">92%</div>
                  <div className="text-gray-400 text-sm">Faster prototyping</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">$180K</div>
                  <div className="text-gray-400 text-sm">Annual savings</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-300">
                "EVO eliminated our vendor dependency. We iterate 10x faster and have complete creative control. The material
                variety lets us match final prop specifications perfectly during prototyping."
              </blockquote>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Jewelry Designer</h3>
                  <p className="text-sm text-gray-500 font-mono">NEW YORK, NY</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A high-end jewelry designer uses EVO to create master models for lost-wax casting. The ability to print in
                castable materials with incredible detail revolutionized their design process. Complex geometries previously
                impossible to fabricate are now standard.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">5x</div>
                  <div className="text-gray-400 text-sm">Design complexity</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">3 Days</div>
                  <div className="text-gray-400 text-sm">To finished piece</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-300">
                "The detail resolution rivals traditional wax carving. I can explore organic forms that would take weeks by hand.
                My clients love seeing physical prototypes before committing to precious metals."
              </blockquote>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Gallery Artist</h3>
                  <p className="text-sm text-gray-500 font-mono">AUSTIN, TX</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A contemporary artist creates large-scale installations using EVO's large build volume. The ability to produce
                complex modular components that interlock precisely enables installations spanning entire gallery spaces. Each
                exhibition features unique geometries designed specifically for the venue.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">12ft</div>
                  <div className="text-gray-400 text-sm">Largest installation</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">8</div>
                  <div className="text-gray-400 text-sm">Exhibitions per year</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-300">
                "Single-cell manufacturing means I can produce modular components that fit together perfectly. The precision is
                impossible to achieve by hand. I'm creating work I literally couldn't make any other way."
              </blockquote>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Product Design Studio</h3>
                  <p className="text-sm text-gray-500 font-mono">SAN FRANCISCO, CA</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A boutique product design studio prototypes consumer electronics housings and accessories. The ability to print
                in engineering-grade materials enables functional testing before tooling investment. They present clients with
                working prototypes instead of renders.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">40%</div>
                  <div className="text-gray-400 text-sm">Client acquisition increase</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-500 mb-1">Same Day</div>
                  <div className="text-gray-400 text-sm">Design revisions</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-300">
                "Rapid prototyping with functional materials changed our client relationships. We can test fit, ergonomics, and
                aesthetics in real-world conditions. Clients make better decisions with physical prototypes."
              </blockquote>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold text-lg"
            >
              Share Your Creative Vision
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Cost-Effective Creative Production Through 3D Printing
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
