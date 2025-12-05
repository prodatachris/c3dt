import React from 'react';
import { Sparkles, ArrowRight, Rocket, Brain, Zap, Globe, Cpu, Layers, Target, Leaf, Recycle, TrendingUp, Users, Award, CheckCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DYAD() {
  const features = [
    {
      icon: Rocket,
      title: 'Next-Gen Integration',
      description: 'Expanding beyond current capabilities with seamless integration of emerging additive manufacturing methods and hybrid processes.',
      details: ['15+ manufacturing technologies', 'Hybrid subtractive/additive', 'Novel material systems', 'Quantum sensing integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning for autonomous operation, quality prediction, and continuous self-optimization.',
      details: ['Fully autonomous operation', 'Predictive maintenance', 'Real-time optimization', 'Quality forecasting']
    },
    {
      icon: Zap,
      title: 'Enhanced Performance',
      description: 'Revolutionary speed and precision improvements through parallel processing and next-generation material delivery systems.',
      details: ['Parallel process execution', 'Advanced thermal management', 'High-speed material handling', 'Precision enhancements']
    },
    {
      icon: Globe,
      title: 'Sustainable Manufacturing',
      description: 'Carbon-neutral operations with closed-loop material recycling and dramatically reduced environmental impact.',
      details: ['Zero-waste manufacturing', 'Renewable energy powered', 'Material recycling', 'Carbon footprint tracking']
    },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Sparkles className="text-white" size={36} />
            </div>

            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold px-4 py-2 rounded-full">
                COMING 2027
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              DYAD: The Future of Manufacturing
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Building on the success of EVO, DYAD will represent the next quantum leap in
              integrated manufacturing technology. More technologies. Greater intelligence.
              Unprecedented capabilities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border-2 border-gray-800 hover:border-red-900 transition-all">
                <div className="text-4xl font-bold text-red-600 mb-2">2027</div>
                <div className="text-gray-400 text-sm font-semibold">Target Launch</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border-2 border-gray-800 hover:border-red-900 transition-all">
                <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-400 text-sm font-semibold">Technologies</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border-2 border-gray-800 hover:border-red-900 transition-all">
                <div className="text-4xl font-bold text-red-600 mb-2">Fully</div>
                <div className="text-gray-400 text-sm font-semibold">Autonomous</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border-2 border-gray-800 hover:border-red-900 transition-all">
                <div className="text-4xl font-bold text-red-600 mb-2">Carbon</div>
                <div className="text-gray-400 text-sm font-semibold">Neutral</div>
              </div>
            </div>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
            >
              Join the Waitlist
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-400">
              DYAD will push the boundaries of what's possible in additive manufacturing with
              breakthrough innovations across hardware, software, and materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-900 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="text-red-600 flex-shrink-0" size={16} />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of the Revolution
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            DYAD is currently in advanced development. Join our waitlist to receive exclusive
            updates, early access opportunities, and special launch pricing when DYAD becomes
            available in 2027.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/contact-us"
              className="group p-8 bg-gradient-to-br from-red-950 to-gray-900 rounded-xl border-2 border-red-800 hover:border-red-600 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">Join Waitlist</h3>
              <p className="text-gray-300 mb-4">
                Get exclusive updates and early access to DYAD
              </p>
              <div className="flex items-center gap-2 text-red-500 font-semibold justify-center">
                Sign Up Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a
              href="/evo"
              className="group p-8 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-gray-700 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">Explore EVO</h3>
              <p className="text-gray-300 mb-4">
                Transform your manufacturing today with our current platform
              </p>
              <div className="flex items-center gap-2 text-white font-semibold justify-center">
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              COLLABORATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              Research Partnerships
            </h2>
            <p className="text-xl text-gray-400">
              DYAD development is supported by collaborations with leading research institutions and industry partners worldwide.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Users,
                title: 'Academic Partners',
                description: 'Collaborating with top universities on advanced materials, AI systems, and manufacturing processes.',
                areas: ['Material science research', 'AI/ML development', 'Process optimization', 'Sustainability studies']
              },
              {
                icon: Award,
                title: 'Industry Leaders',
                description: 'Working with manufacturing giants to understand real-world needs and validate capabilities.',
                areas: ['Beta testing programs', 'Use case development', 'Standards creation', 'Market feedback']
              },
              {
                icon: BookOpen,
                title: 'Technology Providers',
                description: 'Integrating best-in-class components and technologies from specialized manufacturers.',
                areas: ['Hardware components', 'Software platforms', 'Material suppliers', 'Sensing systems']
              }
            ].map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 hover:border-red-900 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/50">
                  <partner.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{partner.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.areas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="text-red-600 flex-shrink-0" size={16} />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Partnering?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're actively seeking research collaborations, beta testing partners, and technology integrations.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors">
              Contact Our Partnership Team <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
          <div className="mb-8">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              STAY INFORMED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the DYAD Waitlist
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Be among the first to experience the future of additive manufacturing. Join our exclusive waitlist
            for priority access, special launch pricing, and ongoing development updates.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <Sparkles className="text-red-600 mb-3 mx-auto" size={32} />
              <h4 className="text-white font-bold mb-2">Early Access</h4>
              <p className="text-sm text-gray-400">Get priority access when DYAD launches</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <TrendingUp className="text-red-600 mb-3 mx-auto" size={32} />
              <h4 className="text-white font-bold mb-2">Special Pricing</h4>
              <p className="text-sm text-gray-400">Exclusive launch discounts for waitlist members</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <Rocket className="text-red-600 mb-3 mx-auto" size={32} />
              <h4 className="text-white font-bold mb-2">Development Updates</h4>
              <p className="text-sm text-gray-400">Regular progress reports and milestone announcements</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg flex items-center justify-center gap-2 border border-red-500"
            >
              Join Waitlist
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/evo"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold text-lg border-2 border-gray-700"
            >
              Explore EVO Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
