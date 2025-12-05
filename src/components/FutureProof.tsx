import React from 'react';

export default function FutureProof() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            A{' '}
            <span className="bg-red-600 text-white px-4 py-1">
              Future-Proof
            </span>{' '}
            Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            EVO is an entire 3D Print Shop within a Single-Cell, designed as a multi-purpose
            system encompassing an entire suite of 10+ industrial 3D printers within a single
            unit that often outperforms currently established tools and production methods.
          </p>
        </div>

        <div>
          <img
            src="/tool-heads copy.png"
            alt="EVO Platform Configurations"
            className="w-full max-w-6xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
