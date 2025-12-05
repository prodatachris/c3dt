import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platforms: [
      { name: 'EVO', href: '/evo' },
      { name: 'DUO', href: '/duo' },
      { name: 'DYAD', href: '/dyad' },
    ],
    industries: [
      { name: 'Creative', href: '/industries/creative' },
      { name: 'Industrial', href: '/industries/industrial' },
      { name: 'Education', href: '/industries/education' },
    ],
    knowledge: [
      { name: 'News', href: '/news' },
      { name: 'Events', href: '/events' },
      { name: 'Setup Resources', href: '/setup-resources' },
    ],
    company: [
      { name: 'Investor Relations', href: '/investor-relations' },
      { name: 'Support', href: '/maintenance' },
      { name: 'Contact Us', href: '/contact-us' },
    ],
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://cdn.prod.website-files.com/6667650acd969c112f9a8ac5/6674605645ae08d09cf87bfe_logo%201.svg"
                alt="Creative 3D Technologies"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Revolutionizing industrial 3D printing with innovative all-in-one manufacturing solutions.
            </p>
            <div className="flex gap-3 mb-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-red-600"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-red-600"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-red-600"
              >
                <Youtube size={18} />
              </a>
              <a
                href="mailto:info@creative3dtechnologies.com"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-red-600"
              >
                <Mail size={18} />
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    1600 Dungan Ln Building 2<br />
                    Austin, TX 78754
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-red-500 flex-shrink-0" />
                  <a href="tel:+15128846575" className="text-gray-400 text-sm hover:text-red-500 transition-colors">
                    +1 (512) 884-6575
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Platforms</h3>
            <ul className="space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm block hover:translate-x-1 transition-transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm block hover:translate-x-1 transition-transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Knowledge</h3>
            <ul className="space-y-3">
              {footerLinks.knowledge.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm block hover:translate-x-1 transition-transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm block hover:translate-x-1 transition-transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-2 text-sm text-center">
            <p className="text-gray-500">
              {currentYear} Creative 3D Technologies, Inc. All rights reserved.
            </p>
            <p className="text-gray-500">
              Website designed by{' '}
              <a
                href="https://drivetopline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors font-medium"
              >
                drivetopline.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
