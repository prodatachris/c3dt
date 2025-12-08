import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setPlatformsOpen(false);
    setKnowledgeOpen(false);
    setIndustriesOpen(false);
  }, [location]);

  const platforms = [
    { name: 'EVO', href: '/evo', description: 'Current generation' },
    { name: 'DUO', href: '/duo', description: 'Discontinued' },
    { name: 'DYAD', href: '/dyad', description: 'Coming 2027' },
  ];

  const knowledge = [
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Setup Resources', href: '/setup-resources' },
  ];

  const industries = [
    { name: 'Creative', href: '/industries/creative' },
    { name: 'Industrial', href: '/industries/industrial' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Aerospace', href: '/industries/aerospace' },
    { name: 'Automotive', href: '/industries/automotive' },
    { name: 'Rapid Prototyping', href: '/industries/rapid-prototyping' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md border-b border-gray-900' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://cdn.prod.website-files.com/6667650acd969c112f9a8ac5/66b2893e91e498d474d54bd7_Group%202.svg"
                  alt="Creative 3D Technologies"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-gray-300 hover:text-red-600 font-medium transition-colors flex items-center gap-1">
                  Platforms
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border-2 border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {platforms.map((platform) => (
                    <Link
                      key={platform.name}
                      to={platform.href}
                      className="block px-6 py-4 hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-800 last:border-b-0"
                    >
                      <div className="text-white font-semibold mb-1">{platform.name}</div>
                      <div className="text-gray-400 text-sm">{platform.description}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-300 hover:text-red-600 font-medium transition-colors flex items-center gap-1">
                  Knowledge
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border-2 border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {knowledge.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-6 py-3 text-white hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-800 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-300 hover:text-red-600 font-medium transition-colors flex items-center gap-1">
                  Industries
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border-2 border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.href}
                      className="block px-6 py-3 text-white hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-800 last:border-b-0"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/maintenance"
                className="text-gray-300 hover:text-red-600 font-medium transition-colors"
              >
                Support
              </Link>

              <Link
                to="/investor-relations"
                className="text-gray-300 hover:text-red-600 font-medium transition-colors"
              >
                Investors
              </Link>

              <Link
                to="/contact-us"
                className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden pt-20 overflow-y-auto">
          <div className="px-6 py-8 space-y-6">
            <div>
              <button
                onClick={() => setPlatformsOpen(!platformsOpen)}
                className="flex items-center justify-between w-full text-xl font-semibold text-white mb-4"
              >
                Platforms
                <ChevronDown size={20} className={`transform transition-transform ${platformsOpen ? 'rotate-180' : ''}`} />
              </button>
              {platformsOpen && (
                <div className="space-y-3 pl-4 mb-4">
                  {platforms.map((platform) => (
                    <Link
                      key={platform.name}
                      to={platform.href}
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {platform.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setKnowledgeOpen(!knowledgeOpen)}
                className="flex items-center justify-between w-full text-xl font-semibold text-white mb-4"
              >
                Knowledge
                <ChevronDown size={20} className={`transform transition-transform ${knowledgeOpen ? 'rotate-180' : ''}`} />
              </button>
              {knowledgeOpen && (
                <div className="space-y-3 pl-4 mb-4">
                  {knowledge.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex items-center justify-between w-full text-xl font-semibold text-white mb-4"
              >
                Industries
                <ChevronDown size={20} className={`transform transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="space-y-3 pl-4 mb-4">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.href}
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/maintenance"
              className="block text-xl font-semibold text-white hover:text-red-600 transition-colors"
            >
              Support
            </Link>

            <Link
              to="/investor-relations"
              className="block text-xl font-semibold text-white hover:text-red-600 transition-colors"
            >
              Investors
            </Link>

            <Link
              to="/contact-us"
              className="block w-full bg-red-600 text-white text-center px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
