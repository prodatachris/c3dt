import React from 'react';
import { GraduationCap, Users, BookOpen, Lightbulb, ArrowRight, Check } from 'lucide-react';

export default function Education() {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Expose students to multiple manufacturing technologies in one platform. No need for multiple labs.',
      advantages: ['Complete technology coverage', 'Unified curriculum', 'Real-world skills'],
    },
    {
      icon: Users,
      title: 'Higher Throughput',
      description: 'More students can learn simultaneously. One EVO replaces an entire lab of single-purpose printers.',
      advantages: ['Maximize class size', 'Reduce wait times', 'More hands-on time'],
    },
    {
      icon: Lightbulb,
      title: 'Industry Preparation',
      description: 'Students graduate with experience on the same integrated platform used in manufacturing.',
      advantages: ['Career readiness', 'Industry credentials', 'Competitive advantage'],
    },
    {
      icon: GraduationCap,
      title: 'Budget Optimization',
      description: 'One investment covers all technologies. Maximize limited education budgets.',
      advantages: ['Lower capital costs', 'Reduced maintenance', 'Single training program'],
    },
  ];

  const programs = [
    {
      title: 'University Engineering Programs',
      description: 'Advanced research and comprehensive manufacturing education for engineering students.',
      features: ['Multi-material research', 'Senior design projects', 'Graduate research', 'Industry partnerships'],
    },
    {
      title: 'Vocational & Technical Schools',
      description: 'Hands-on training preparing students for immediate career placement.',
      features: ['Certification programs', 'Job-ready skills', 'Industry internships', 'Career pathways'],
    },
    {
      title: 'Community Colleges',
      description: 'Accessible advanced manufacturing education for diverse student populations.',
      features: ['Associate degrees', 'Certificate programs', 'Continuing education', 'Workforce development'],
    },
    {
      title: 'STEM Programs',
      description: 'Inspire the next generation with cutting-edge manufacturing technology.',
      features: ['K-12 outreach', 'Summer programs', 'Competition teams', 'Maker spaces'],
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
                  EDUCATION SOLUTIONS
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Prepare Students for the Future
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO brings industrial-grade, multi-technology manufacturing into the classroom.
                Give your students comprehensive training on the same platform they'll use in their careers.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
              >
                Request Education Pricing
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-4xl font-bold text-red-600 mb-2">Multiple</div>
                <div className="text-gray-400">Technologies in One Platform</div>
              </div>
              <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-4xl font-bold text-red-600 mb-2">Compact</div>
                <div className="text-gray-400">Lab Footprint</div>
              </div>
              <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-4xl font-bold text-red-600 mb-2">Extensive</div>
                <div className="text-gray-400">Material Options</div>
              </div>
              <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800">
                <div className="text-4xl font-bold text-red-600 mb-2">Unified</div>
                <div className="text-gray-400">Training Program</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Education Benefits
            </h2>
            <p className="text-xl text-gray-400">
              EVO solves the unique challenges facing educational institutions while delivering
              superior learning outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all"
              >
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 mb-6">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.advantages.map((advantage, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                      <Check className="text-red-600 flex-shrink-0" size={16} />
                      <span className="text-sm">{advantage}</span>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Educational Programs
            </h2>
            <p className="text-xl text-gray-400">
              EVO adapts to your institution's specific educational mission and student needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-950 to-gray-900 rounded-2xl p-12 border-2 border-red-800 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Special Education Pricing
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We offer significant discounts for educational institutions, along with curriculum
              support, training programs, and ongoing technical assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold"
              >
                Request Education Quote
                <ArrowRight size={20} />
              </a>
              <a
                href="/setup-resources"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold border-2 border-gray-700"
              >
                View Curriculum Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
