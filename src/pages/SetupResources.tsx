import React from 'react';
import { Book, Video, FileText, Download, PlayCircle, CheckCircle } from 'lucide-react';

export default function SetupResources() {
  const resources = [
    {
      icon: Book,
      title: 'Quick Start Guide',
      description: 'Get your EVO platform up and running in under 2 hours with our comprehensive setup guide.',
      type: 'PDF Document',
      size: '12 MB',
      downloadLink: '#',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video walkthroughs covering installation, calibration, and first print.',
      type: 'Video Series',
      duration: '45 min',
      downloadLink: '#',
    },
    {
      icon: FileText,
      title: 'User Manual',
      description: 'Complete reference documentation for all EVO features, specifications, and operations.',
      type: 'PDF Document',
      size: '48 MB',
      downloadLink: '#',
    },
    {
      icon: FileText,
      title: 'Material Guide',
      description: 'Detailed profiles and best practices for all supported materials.',
      type: 'PDF Document',
      size: '24 MB',
      downloadLink: '#',
    },
    {
      icon: Video,
      title: 'Advanced Techniques',
      description: 'Master complex multi-material prints and technology switching workflows.',
      type: 'Video Series',
      duration: '90 min',
      downloadLink: '#',
    },
    {
      icon: FileText,
      title: 'Troubleshooting Guide',
      description: 'Common issues and solutions to keep your EVO running smoothly.',
      type: 'PDF Document',
      size: '8 MB',
      downloadLink: '#',
    },
  ];

  const setupSteps = [
    {
      number: 1,
      title: 'Unboxing & Inspection',
      description: 'Carefully unpack your EVO and verify all components are present.',
    },
    {
      number: 2,
      title: 'Physical Setup',
      description: 'Position EVO on a stable surface and connect power and network cables.',
    },
    {
      number: 3,
      title: 'Software Installation',
      description: 'Download and install the EVO Control Suite on your computer.',
    },
    {
      number: 4,
      title: 'Calibration',
      description: 'Run the automated calibration sequence for all print modules.',
    },
    {
      number: 5,
      title: 'Material Loading',
      description: 'Install your first materials following the quick-change procedure.',
    },
    {
      number: 6,
      title: 'First Print',
      description: 'Complete a test print to verify all systems are operating correctly.',
    },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Setup Resources
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything you need to successfully install, configure, and operate your EVO platform.
              From quick start guides to advanced techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                    <resource.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{resource.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{resource.type}</span>
                    <span>{resource.size || resource.duration}</span>
                  </div>

                  <a
                    href={resource.downloadLink}
                    className="flex items-center justify-center gap-2 w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Setup Process Overview
            </h2>
            <div className="space-y-6">
              {setupSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-gray-900 rounded-xl border-2 border-gray-800"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-gray-600" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Additional Help?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our support team is available to assist with setup, training, and ongoing technical questions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/maintenance"
              className="p-8 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">Technical Support</h3>
              <p className="text-gray-400">Access maintenance services and expert assistance</p>
            </a>
            <a
              href="/contact-us"
              className="p-8 bg-gradient-to-br from-red-950 to-gray-900 rounded-xl border-2 border-red-800 hover:border-red-600 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">Schedule Training</h3>
              <p className="text-gray-300">Book personalized training sessions for your team</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
