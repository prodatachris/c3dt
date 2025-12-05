import React from 'react';
import { Archive, ArrowRight } from 'lucide-react';

export default function DUO() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-gray-800">
            <Archive className="text-gray-500" size={36} />
          </div>

          <div className="inline-block mb-4">
            <span className="bg-gray-800 text-gray-400 text-sm font-semibold px-4 py-2 rounded-full">
              DISCONTINUED PRODUCT
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            DUO Platform
          </h1>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            The DUO platform was our first-generation dual-technology 3D printer that paved the way
            for our revolutionary EVO system. While DUO is no longer in production, it played a
            crucial role in validating the concept of multi-technology integration.
          </p>

          <div className="bg-gray-900 rounded-2xl p-12 mb-12 border-2 border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Legacy & Evolution</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Introduced in 2017, DUO featured advanced FDM technology in a dual-head configuration,
              demonstrating the viability and value of integrated printing systems. The insights and
              innovations from DUO directly informed the development of our flagship EVO platform.
            </p>
            <p className="text-gray-400">
              For existing DUO customers, we continue to provide support and service. Please contact
              our maintenance team for assistance.
            </p>
          </div>

          <a
            href="/evo"
            className="group inline-block p-8 bg-gradient-to-br from-red-950 to-gray-900 rounded-xl border-2 border-red-800 hover:border-red-600 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Discover EVO</h3>
            <p className="text-gray-300 mb-4">
              Explore our current flagship platform with advanced integrated manufacturing
            </p>
            <div className="flex items-center gap-2 text-red-500 font-semibold justify-center">
              Learn More
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
