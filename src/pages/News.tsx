import React from 'react';
import { Calendar, ArrowRight, Trophy, Globe, Rocket, Users } from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      icon: Trophy,
      category: 'Recognition',
      date: '2024-11-15',
      title: 'C3DT Selected for Endeavor Heartland Accelerator 2025',
      excerpt: 'Creative 3D Technologies joins prestigious cohort of high-impact entrepreneurs shaping the future of manufacturing.',
      link: '#',
    },
    {
      icon: Globe,
      category: 'Sustainability',
      date: '2024-09-20',
      title: 'CEO Addresses UN General Assembly on Sustainable Manufacturing',
      excerpt: 'Our CEO presented on how integrated 3D printing can dramatically reduce manufacturing carbon footprint at the UN Climate Action Summit.',
      link: '#',
    },
    {
      icon: Rocket,
      category: 'Product',
      date: '2024-08-10',
      title: 'EVO Platform Achieves 10,000 Hours Continuous Operation Milestone',
      excerpt: 'Beta customer validates EVO reliability with 10,000+ hours of uninterrupted industrial production.',
      link: '#',
    },
    {
      icon: Users,
      category: 'Events',
      date: '2024-07-15',
      title: 'C3DT Showcases EVO at SXSW 2024',
      excerpt: 'Live demonstrations at South by Southwest highlight EVO capabilities and attract global manufacturing interest.',
      link: '#',
    },
    {
      icon: Trophy,
      category: 'Recognition',
      date: '2024-05-22',
      title: 'Named Top 10 Manufacturing Innovator by Tech Review',
      excerpt: 'Industry publication recognizes C3DT for revolutionary approach to additive manufacturing integration.',
      link: '#',
    },
    {
      icon: Globe,
      category: 'Sustainability',
      date: '2024-03-08',
      title: 'C3DT Participates in COP28 Dubai',
      excerpt: 'Demonstrating sustainable manufacturing solutions at the UN Climate Change Conference.',
      link: '#',
    },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay informed about C3DT's latest achievements, product announcements, industry
              recognition, and our role in advancing sustainable manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <article
                key={index}
                className="group bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <article.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-red-500 text-sm font-semibold">{article.category}</div>
                      <div className="text-gray-500 text-xs flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to our newsletter for the latest product updates, company news, and industry insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:border-red-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
