import React from 'react';
import { Factory, Palette, GraduationCap, Rocket, Wrench, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UseCases() {
  const useCases = [
    {
      icon: Factory,
      title: 'Industrial Manufacturing',
      description: 'Transform production lines with integrated additive manufacturing capabilities.',
      applications: [
        'Production tooling and fixtures',
        'End-use manufacturing parts',
        'Custom component production',
        'Replacement parts on-demand'
      ],
      link: '/industries/industrial',
      color: 'red'
    },
    {
      icon: Palette,
      title: 'Creative & Design',
      description: 'Bring artistic visions to life with unlimited material and method combinations.',
      applications: [
        'Art installations and sculptures',
        'Film and entertainment props',
        'Product design prototyping',
        'Custom limited editions'
      ],
      link: '/industries/creative',
      color: 'orange'
    },
    {
      icon: GraduationCap,
      title: 'Education & Research',
      description: 'Prepare students with hands-on experience on professional-grade equipment.',
      applications: [
        'Engineering curriculum labs',
        'Research and development',
        'Technical training programs',
        'STEM education initiatives'
      ],
      link: '/industries/education',
      color: 'yellow'
    },
    {
      icon: Rocket,
      title: 'Aerospace & Defense',
      description: 'Produce mission-critical components with precision and reliability.',
      applications: [
        'Lightweight structural parts',
        'Complex geometries',
        'Rapid prototyping',
        'Custom tooling solutions'
      ],
      link: '/contact-us',
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Automotive',
      description: 'Accelerate development cycles and streamline production workflows.',
      applications: [
        'Concept model development',
        'Functional testing parts',
        'Production line tooling',
        'Custom vehicle components'
      ],
      link: '/contact-us',
      color: 'green'
    },
    {
      icon: Lightbulb,
      title: 'Product Development',
      description: 'Iterate faster and test more thoroughly with multi-material capabilities.',
      applications: [
        'Rapid concept validation',
        'Functional prototypes',
        'Pre-production testing',
        'Market research samples'
      ],
      link: '/contact-us',
      color: 'purple'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              APPLICATIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming Industries Worldwide
          </h2>
          <p className="text-xl text-gray-400">
            From production floors to research labs, EVO delivers versatile manufacturing capabilities
            that adapt to your unique needs and challenges.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Link
              key={index}
              to={useCase.link}
              className="group relative p-8 rounded-xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-red-900/5 rounded-full blur-2xl" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-red-900/50 mb-6">
                  <useCase.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{useCase.description}</p>

                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-red-600 mt-1">→</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-red-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <span className="text-xl">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Don't see your industry? EVO's flexible architecture adapts to countless applications.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all font-bold border border-gray-700"
          >
            Discuss Your Application
          </Link>
        </div>
      </div>
    </section>
  );
}
