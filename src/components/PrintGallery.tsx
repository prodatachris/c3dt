import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const videoGallery = [
  {
    embedUrl: 'https://drive.google.com/file/d/1nAFEGC_l_hY4U3SWzaF9OmHDqsE4oxSc/preview',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1nAFEGC_l_hY4U3SWzaF9OmHDqsE4oxSc&sz=w320',
    title: 'Production Quality',
    description: 'Real-world production parts and quality demonstration'
  },
  {
    embedUrl: 'https://drive.google.com/file/d/1DlniK1T5wKTYOBq7k4ZpvpaSHpZ-IZiP/preview',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1DlniK1T5wKTYOBq7k4ZpvpaSHpZ-IZiP&sz=w320',
    title: 'EVO 3D Printer Demo',
    description: 'Watch the future of 3D printing in action with our revolutionary EVO platform'
  },
  {
    embedUrl: 'https://drive.google.com/file/d/1TYMo1IA-ATKJe_45Xt9bQ_RwXkrPhS2A/preview',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1TYMo1IA-ATKJe_45Xt9bQ_RwXkrPhS2A&sz=w320',
    title: 'Print Startup',
    description: 'See the EVO system initialization and startup process'
  },
  {
    embedUrl: 'https://drive.google.com/file/d/1Y2yhLe4bMhsW5iIhUoSF1LbKIWBr7NeT/preview',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1Y2yhLe4bMhsW5iIhUoSF1LbKIWBr7NeT&sz=w320',
    title: 'Function Test',
    description: 'Demonstration of operational capabilities and precision'
  },
  {
    embedUrl: 'https://drive.google.com/file/d/1WkRLEdJbNNCx0jwFOldrIo2vHhMXN4ps/preview',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1WkRLEdJbNNCx0jwFOldrIo2vHhMXN4ps&sz=w320',
    title: 'Large Volume Bed',
    description: 'Showcase of bed movement and capacity capabilities'
  },
  {
    embedUrl: 'https://drive.google.com/file/d/1wiesLWfeqEI2ZStgO3KSb_cvP2eFz74_/preview',
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1wiesLWfeqEI2ZStgO3KSb_cvP2eFz74_&sz=w320',
    title: 'Toolhead Swap',
    description: 'Watch the modular toolhead exchange process in real-time'
  }
];

export default function PrintGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videoGallery.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videoGallery.length) % videoGallery.length);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-mono text-sm tracking-wider border border-red-900 px-4 py-2 rounded-full bg-red-950/30">
            VIDEO SHOWCASE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
            See EVO in Action
          </h2>
          <p className="text-xl text-gray-400">
            Watch demonstration videos showcasing the EVO platform's capabilities,
            precision engineering, and revolutionary modular design.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-6 rounded-xl overflow-hidden">
            <div className="relative bg-gray-900 aspect-video">
              <iframe
                src={videoGallery[activeIndex].embedUrl}
                title={videoGallery[activeIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pointer-events-none">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {videoGallery[activeIndex].title}
                </h3>
                <p className="text-gray-300">{videoGallery[activeIndex].description}</p>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {videoGallery.map((video, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`cursor-pointer aspect-video bg-gray-900 rounded-lg overflow-hidden border-2 transition-all relative group ${
                  activeIndex === index
                    ? 'border-red-600 ring-2 ring-red-600/50'
                    : 'border-gray-800 hover:border-red-600'
                }`}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <Play className="w-8 h-8 text-white drop-shadow-lg" fill="white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                  <div className="text-xs text-white text-center font-medium leading-tight">
                    {video.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
