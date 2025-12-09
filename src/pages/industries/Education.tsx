import React from 'react';
import { GraduationCap, Users, BookOpen, Lightbulb, ArrowRight, Check, AlertCircle, Clock, DollarSign, Target, Shield, Award, Cpu, TrendingUp, Layers, Workflow, Package, Star, Zap, FileText, Video, Microscope } from 'lucide-react';

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
                Prepare Students for the Future of 3D Printing and Additive Manufacturing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                EVO brings industrial-grade, multi-technology 3D printing directly into the classroom. Give your students
                comprehensive hands-on training in additive manufacturing, rapid prototyping, and single-cell manufacturing
                on the same professional platform they'll use in their careers. From engineering programs to vocational schools,
                prepare the next generation of manufacturing professionals with real-world 3D printing experience.
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

      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              EDUCATIONAL CHALLENGES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Educational Challenges Solved by EVO's 3D Printing Platform
            </h2>
            <p className="text-xl text-gray-400">
              Traditional educational 3D printing solutions create operational bottlenecks and limit learning outcomes. EVO's
              single-cell manufacturing platform addresses these challenges head-on.
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
                    <h3 className="text-xl font-bold text-white mb-2">Limited Equipment Budgets</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Educational institutions need multiple 3D printing technologies for comprehensive additive manufacturing education,
                  but face severe budget constraints. Purchasing separate FDM, resin, and specialty printers requires massive capital
                  investment. Each technology demands its own training, maintenance, and material inventory. Many programs compromise
                  by teaching only one technology, leaving students unprepared for industry demands.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        One EVO platform replaces an entire lab of specialized 3D printers. Teach all major additive manufacturing
                        technologies from a single investment. Educational pricing makes comprehensive 3D printing education accessible.
                        Students gain hands-on experience with FDM, advanced materials, and rapid prototyping workflows using the same
                        industrial platform they'll encounter in careers. Consolidate maintenance, training, and material costs.
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
                    <Users className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Low Student Throughput</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Traditional 3D printers serve one student at a time. With class sizes of 20-30 students and single-purpose equipment,
                  wait times become excessive. Students get minimal hands-on time. Print queues extend for days. Labs stay busy 24/7
                  but still can't meet demand. Learning suffers when students must wait weeks to see their designs printed. Project
                  timelines extend beyond semester boundaries.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        EVO's large build volume and efficient workflow maximize student throughput. Print multiple student projects
                        simultaneously. Rapid prototyping speeds mean overnight turnaround for most assignments. 24/7 autonomous operation
                        keeps the platform productive between class sessions. Remote job submission lets students queue prints outside lab
                        hours. One EVO serves an entire program, not just individual students. Maximize hands-on learning time.
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
                    <Shield className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Safety and Supervision Requirements</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Resin 3D printers require chemical handling protocols unsuitable for many educational settings. Powder-based systems
                  create airborne particulate hazards. Both demand intensive faculty supervision. Safety equipment, ventilation, and
                  containment add facility costs. Liability concerns limit student access. Schools must choose between comprehensive
                  technology coverage and student safety, often sacrificing advanced manufacturing education.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        FFF 3D printing uses solid filament materials - no hazardous chemicals, resins, or powders. Safe for classroom
                        use without special ventilation or PPE. Students can operate independently after basic training. Minimal
                        supervision required during operation. No chemical disposal or powder containment systems needed. Meets safety
                        standards for K-12 through university settings. Enable comprehensive additive manufacturing education without
                        compromising student safety or requiring hazmat protocols.
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
                    <h3 className="text-xl font-bold text-white mb-2">Industry Skills Gap</h3>
                    <p className="text-sm text-gray-500 font-mono">CHALLENGE</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Students graduate with 3D printing experience on consumer-grade equipment that bears little resemblance to industrial
                  systems. Entry-level hobby printers teach bad habits and don't expose students to professional workflows. Employers
                  must retrain graduates on production equipment. Educational institutions struggle to afford industrial 3D printing
                  platforms. The technology gap between classroom and career creates friction in workforce development.
                </p>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-white font-semibold mb-1">EVO Solution</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Students train on the same industrial single-cell manufacturing platform used in production environments.
                        Learn professional workflows, quality control, and production-grade rapid prototyping. Graduate with experience
                        on equipment they'll encounter in manufacturing careers. Employers value EVO training as industry-relevant
                        preparation. Educational pricing makes industrial 3D printing accessible to institutions. Bridge the technology
                        gap between education and industry. Students enter workforce with immediately applicable additive manufacturing skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-2 border-red-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your 3D Printing Education Program?
            </h3>
            <p className="text-gray-300 mb-6 text-lg max-w-3xl mx-auto">
              Discover how EVO's educational solutions eliminate traditional barriers to comprehensive additive manufacturing education.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold"
            >
              Schedule Educational Consultation
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              FFF/FDM FOR EDUCATION
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Why Educators Choose FFF 3D Printing Technology
            </h2>
            <p className="text-xl text-gray-400">
              Fused Filament Fabrication 3D printing provides the perfect balance of safety, affordability, and educational value
              for teaching additive manufacturing and rapid prototyping in classroom environments. Students gain practical experience
              with industry-standard single-cell manufacturing technology.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Check className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Classroom Safe</h3>
              <p className="text-gray-400 text-sm">
                No hazardous chemicals, powders, or resins. Clean, safe technology suitable for all educational settings.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Check className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Budget Friendly</h3>
              <p className="text-gray-400 text-sm">
                Lower operating costs than other 3D printing technologies. Maximize educational budgets with affordable materials.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Check className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Low Maintenance</h3>
              <p className="text-gray-400 text-sm">
                Simple upkeep that doesn't require dedicated technicians. Teachers and students can manage maintenance.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl">
              <Check className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Industry Standard</h3>
              <p className="text-gray-400 text-sm">
                Students learn technology used in real manufacturing. Graduates enter workforce with relevant skills.
              </p>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              EDUCATIONAL SUCCESS STORIES
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Real Results from Educational Institutions Using 3D Printing
            </h2>
            <p className="text-xl text-gray-400">
              See how universities and technical schools are transforming their additive manufacturing programs with EVO's 3D printing platform.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-red-600" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white">State University</h3>
                  <p className="text-sm text-gray-500">Mechanical Engineering</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">300%</div>
                  <div className="text-sm text-gray-400">Increase in Student Throughput</div>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">$180K</div>
                  <div className="text-sm text-gray-400">Annual Lab Cost Savings</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                "Replaced 6 specialized 3D printers with one EVO platform. Students now learn FDM, advanced materials, and rapid prototyping
                in a unified curriculum. Lab utilization increased 3x while maintenance costs dropped 65%."
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Award size={14} className="text-red-600" />
                <span>ABET Accredited Program</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-red-600" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white">Technical College</h3>
                  <p className="text-sm text-gray-500">Advanced Manufacturing</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Graduate Employment Rate</div>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Lab Access for Students</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                "EVO transformed our certificate program. Students graduate with industrial 3D printing experience employers value.
                Remote job submission means students can run projects overnight. Placement rate improved 40% since adoption."
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Award size={14} className="text-red-600" />
                <span>Industry Partnership Program</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Microscope className="text-red-600" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white">Research Institute</h3>
                  <p className="text-sm text-gray-500">Materials Science</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">12</div>
                  <div className="text-sm text-gray-400">Research Papers Published</div>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Material Combinations Tested</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                "EVO's multi-material capability enables advanced composite research impossible with single-technology platforms.
                Graduate students explore novel material combinations. Published 12 papers on additive manufacturing in first year."
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Award size={14} className="text-red-600" />
                <span>NSF Grant Recipient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              CURRICULUM INTEGRATION
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Seamless Integration into Your 3D Printing Curriculum
            </h2>
            <p className="text-xl text-gray-400">
              EVO fits naturally into existing manufacturing, engineering, and design programs with comprehensive curriculum support.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Course Materials & Lab Guides</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      Comprehensive lab manuals, lecture slides, and project templates designed for semester-long courses.
                      Cover additive manufacturing fundamentals, design for 3D printing, material selection, and post-processing.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>12-week curriculum framework</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>20+ hands-on lab exercises</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>Assessment rubrics and grading guides</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Video Training Library</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      Professional video tutorials covering operation, maintenance, troubleshooting, and advanced techniques.
                      Students can learn at their own pace with on-demand access to training materials.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>50+ instructional videos</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>Step-by-step project walkthroughs</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>Troubleshooting and maintenance guides</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Faculty Development Workshops</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      Comprehensive training programs for instructors. Learn pedagogical best practices for teaching additive
                      manufacturing and integrating EVO into existing courses across multiple disciplines.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>On-site faculty training workshops</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>Online instructor certification program</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="text-red-600" size={16} />
                        <span>Ongoing technical support hotline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-950 to-gray-900 border-2 border-red-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Sample Course Outline</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Introduction to Additive Manufacturing - 16 Week Semester Course
                </p>
                <div className="space-y-3">
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-sm">Weeks 1-3</span>
                      <span className="text-xs text-gray-500 font-mono">FUNDAMENTALS</span>
                    </div>
                    <p className="text-gray-400 text-sm">3D printing history, technologies, materials overview, design principles</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-sm">Weeks 4-6</span>
                      <span className="text-xs text-gray-500 font-mono">CAD & SLICING</span>
                    </div>
                    <p className="text-gray-400 text-sm">CAD for additive manufacturing, slicing software, support structures, orientation</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-sm">Weeks 7-9</span>
                      <span className="text-xs text-gray-500 font-mono">MATERIALS</span>
                    </div>
                    <p className="text-gray-400 text-sm">Material properties, selection criteria, testing methods, quality control</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-sm">Weeks 10-12</span>
                      <span className="text-xs text-gray-500 font-mono">APPLICATIONS</span>
                    </div>
                    <p className="text-gray-400 text-sm">Rapid prototyping, tooling, end-use parts, industry case studies</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-sm">Weeks 13-16</span>
                      <span className="text-xs text-gray-500 font-mono">CAPSTONE</span>
                    </div>
                    <p className="text-gray-400 text-sm">Final project: design, print, test functional prototype presentation</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Student Project Ideas</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Functional Mechanical Assembly</p>
                      <p className="text-gray-400 text-xs">Design and print multi-part mechanism with moving components</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Topology-Optimized Bracket</p>
                      <p className="text-gray-400 text-xs">Apply generative design for maximum strength-to-weight ratio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Custom Manufacturing Jig</p>
                      <p className="text-gray-400 text-xs">Create specialized tooling for specific assembly or inspection task</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Assistive Device Prototype</p>
                      <p className="text-gray-400 text-xs">Design accessibility aid or medical device prototype</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Drone Component Redesign</p>
                      <p className="text-gray-400 text-xs">Optimize existing UAV part for 3D printing manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
              MATERIALS LIBRARY
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6">
              Comprehensive Material Options for Educational 3D Printing
            </h2>
            <p className="text-xl text-gray-400">
              Teach students material science fundamentals with access to industrial-grade polymers, composites, and specialty filaments.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">PLA</h3>
                  <p className="text-xs text-gray-500 font-mono">ENTRY-LEVEL</p>
                </div>
                <Star className="text-yellow-500" size={20} />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Print Temp</span>
                  <span className="text-white">190-220°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="text-green-500">Easy</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Perfect for beginners. Teach fundamentals of 3D printing with easy-to-print biodegradable material. Available in 20+ colors.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Prototyping</span>
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Visual Models</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">PETG</h3>
                  <p className="text-xs text-gray-500 font-mono">INTERMEDIATE</p>
                </div>
                <Star className="text-yellow-500" size={20} />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Print Temp</span>
                  <span className="text-white">230-250°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="text-yellow-500">Moderate</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Balance of strength and ease. Teach intermediate concepts with durable, chemical-resistant material suitable for functional parts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Functional Parts</span>
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Tooling</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">ABS</h3>
                  <p className="text-xs text-gray-500 font-mono">INTERMEDIATE</p>
                </div>
                <Star className="text-yellow-500" size={20} />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Print Temp</span>
                  <span className="text-white">240-260°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="text-yellow-500">Moderate</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Industrial standard material. Teach professional workflows with heat-resistant, impact-resistant polymer used in manufacturing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">High Temp</span>
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Automotive</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Nylon</h3>
                  <p className="text-xs text-gray-500 font-mono">ADVANCED</p>
                </div>
                <Zap className="text-red-600" size={20} />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Print Temp</span>
                  <span className="text-white">250-270°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="text-red-500">Advanced</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                High-performance engineering polymer. Exceptional strength, flexibility, and wear resistance for demanding applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Engineering</span>
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Durable Parts</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-red-600 transition-all rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">TPU Flexible</h3>
                  <p className="text-xs text-gray-500 font-mono">SPECIALTY</p>
                </div>
                <Zap className="text-red-600" size={20} />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Print Temp</span>
                  <span className="text-white">210-230°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="text-yellow-500">Moderate</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Rubber-like elastomer material. Teach students about flexible materials for gaskets, seals, and vibration dampening.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Flexible</span>
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Seals</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950 to-gray-900 border-2 border-red-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Carbon Fiber</h3>
                  <p className="text-xs text-gray-500 font-mono">COMPOSITE</p>
                </div>
                <Award className="text-red-600" size={20} />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Print Temp</span>
                  <span className="text-white">260-290°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Difficulty</span>
                  <span className="text-red-500">Expert</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Advanced composite material. Teach aerospace and automotive applications with exceptional strength-to-weight ratio.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-black text-gray-300 rounded">Aerospace</span>
                <span className="text-xs px-2 py-1 bg-black text-gray-300 rounded">Racing</span>
              </div>
            </div>
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
