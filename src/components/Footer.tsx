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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-3">
              <img
                src="https://cdn.prod.website-files.com/6667650acd969c112f9a8ac5/6674605645ae08d09cf87bfe_logo%201.svg"
                alt="Creative 3D Technologies"
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Revolutionizing industrial 3D printing with innovative all-in-one manufacturing solutions.
            </p>
            <div className="flex gap-2 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-red-600 transition-all border border-gray-800 hover:border-red-600"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-red-600 transition-all border border-gray-800 hover:border-red-600"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-red-600 transition-all border border-gray-800 hover:border-red-600"
              >
                <Youtube size={14} />
              </a>
              <a
                href="mailto:info@creative3dtechnologies.com"
                className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-red-600 transition-all border border-gray-800 hover:border-red-600"
              >
                <Mail size={14} />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs leading-snug">
                  1600 Dungan Ln Building 2, Austin, TX 78754
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-red-500 flex-shrink-0" />
                <a href="tel:+15128846575" className="text-gray-400 text-xs hover:text-red-500 transition-colors">
                  +1 (512) 884-6575
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-white text-xs uppercase tracking-wider">Platforms</h3>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-xs block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-white text-xs uppercase tracking-wider">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-xs block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-white text-xs uppercase tracking-wider">Knowledge</h3>
            <ul className="space-y-2">
              {footerLinks.knowledge.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-xs block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-white text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-xs block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
            <p className="text-gray-500">
              {currentYear} Creative 3D Technologies, Inc. All rights reserved.
            </p>
            <p className="text-gray-500">
              Website designed by{' '}
              <a
                href="https://drivetopline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
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
