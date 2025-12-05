import React from 'react';
import { Building2, Users, Award, Globe } from 'lucide-react';

export default function CompanyStory() {
  const milestones = [
    {
      icon: Building2,
      title: 'Founded in Austin',
      description: '2017',
      detail: 'Established with a vision to revolutionize industrial 3D printing manufacturing.',
    },
    {
      icon: Users,
      title: 'World-Class Team',
      description: 'Expert Team',
      detail: 'Engineers, designers, and manufacturing specialists from leading tech companies.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Innovation Leader',
      detail: 'Recognized for breakthrough technology in integrated additive manufacturing.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International',
      detail: 'Serving customers across industrial, creative, and educational sectors worldwide.',
    },
  ];

  return (
    <section id="company" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building the Future of Manufacturing
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Since 2017, Creative 3D Technologies has been on a mission to transform industrial
            manufacturing through innovative, integrated 3D printing solutions. Based in Austin, Texas,
            we combine cutting-edge engineering with practical manufacturing expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <milestone.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">{milestone.description}</div>
              <p className="text-gray-400 text-sm">{milestone.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 shadow-lg border-2 border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              We exist to eliminate the complexity and inefficiency of traditional 3D printing workflows.
              By consolidating multiple printing technologies into one unified platform, we empower
              manufacturers to innovate faster, scale efficiently, and compete globally.
            </p>
            <div className="inline-block bg-red-950 px-8 py-4 rounded-lg border-2 border-red-800">
              <p className="text-white font-semibold">
                "Transforming manufacturing complexity into competitive advantage"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
