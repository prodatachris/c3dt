import React from 'react';
import { Palette, Film, Lightbulb, Star, ArrowRight } from 'lucide-react';

export default function Creative() {
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
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  CREATIVE INDUSTRY
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Bring Your Vision to Life
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO empowers artists, designers, and creative professionals to push boundaries.
                With access to multiple printing technologies and an extensive range of materials in one platform, your
                creative possibilities are limitless.
              </p>
              <a
                href="/evo"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
              >
                Explore EVO Platform
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-3xl font-bold text-red-600 mb-2">Extensive</div>
                <div className="text-gray-400">Materials</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-3xl font-bold text-red-600 mb-2">Multiple</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-400">Production</div>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-3xl font-bold text-red-600 mb-2">Compact</div>
                <div className="text-gray-400">Footprint</div>
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

          <div className="grid md:grid-cols-2 gap-8">
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Creative Process?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a demo to see how EVO can transform your creative workflow.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
          >
            Request a Demo
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
