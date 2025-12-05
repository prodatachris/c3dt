import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function ProductShowcase() {
  const capabilities = [
    'Dual Independent Toolheads',
    'Multi-Format Support',
    'Extensive Material Library',
    'Multiple Printing Methods',
    'Large Build Volume',
    'Modular Design System',
  ];

  return (
    <section id="product" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                EVO PLATFORM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The All-In-One Manufacturing Solution
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              EVO transforms manufacturing with a single integrated platform that replaces multiple
              traditional 3D printers. Significantly reduce your facility footprint while expanding your
              production capabilities.
            </p>

            <div className="space-y-4 mb-10">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="text-gray-300 font-medium">{capability}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#innovations"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold border-2 border-gray-700 text-center"
              >
                Technical Specs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center p-8">
              <img
                src="https://cdn.prod.website-files.com/6667650acd969c112f9a8ac5/66df4f0c113a487fc309af04_evo_image.webp"
                alt="EVO Platform 3D Printer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Multiple</div>
              <div className="text-red-100 text-sm">Printers in One</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
