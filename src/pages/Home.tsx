import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Features from '../components/Features';
import TechnologyShowcase from '../components/TechnologyShowcase';
import Innovations from '../components/Innovations';
import FutureProof from '../components/FutureProof';
import PrintGallery from '../components/PrintGallery';

export default function Home() {
  const [videoError, setVideoError] = React.useState(false);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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
              <button
                onClick={scrollToContact}
                className="group bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold text-lg flex items-center gap-2 border-2 border-gray-700 hover:border-gray-600"
              >
                GET MORE INFORMATION
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />
      </section>

      <Features />

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join companies that are transforming their production with Continuous Composites
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-10 mb-12">
            <div className="flex flex-wrap items-center justify-center gap-16">
              <img
                src="/us-army.png"
                alt="US Army"
                className="h-24 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/disney.png"
                alt="Disney"
                className="h-20 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/acc-white.png"
                alt="ACC"
                className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <p className="text-2xl text-white font-semibold mb-8">
            Ready to transform your manufacturing?
          </p>

          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-bold text-xl flex items-center gap-3 mx-auto shadow-2xl hover:shadow-red-900/50 border border-red-500"
          >
            Request a Demo
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <TechnologyShowcase />

      <Innovations />

      <FutureProof />

      <PrintGallery />

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
