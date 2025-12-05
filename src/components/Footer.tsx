import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src="https://cdn.prod.website-files.com/6667650acd969c112f9a8ac5/6674605645ae08d09cf87bfe_logo%201.svg"
                alt="Creative 3D Technologies"
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing industrial 3D printing with innovative all-in-one manufacturing solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="mailto:info@creative3dtechnologies.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Platforms</h3>
            <ul className="space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Knowledge</h3>
            <ul className="space-y-3">
              {footerLinks.knowledge.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-gray-400 text-sm">
              {currentYear} Creative 3D Technologies, Inc. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Austin, Texas
            </p>
            <p className="text-gray-400 text-sm">
              Website designed by:{' '}
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
