import React from 'react';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [videoError, setVideoError] = React.useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: videoError ? 'url(/image.png)' : 'none'
        }}
      />

      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source
            src="https://s3.amazonaws.com/webflow-prod-assets/6667650acd969c112f9a8ac5/66b144ee3d8169336cce0341_C3DT_WebBanner_ToolheadSwap_39sec_HD1080_optimized.mp4"
            type="video/mp4"
          />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of 3D Printing is{' '}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
              All-In-One
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="text-red-500 font-semibold">EVO Platform:</span> A single-cell manufacturing system
            consolidating multiple industrial 3D printers into one integrated production unit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/evo"
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-red-900/50 border border-red-500"
            >
              <Zap size={20} />
              EXPLORE EVO PLATFORM
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/investor-relations"
              className="group bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold text-lg flex items-center gap-2 border-2 border-gray-700 hover:border-gray-600"
            >
              <Shield size={20} />
              INVESTOR RELATIONS
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />
    </section>
  );
}
