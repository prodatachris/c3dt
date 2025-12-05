import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Volcano Summit 2025',
      date: '2025-02-15',
      location: 'Austin, Texas',
      time: '9:00 AM - 5:00 PM CST',
      description: 'Join us at the premier startup and venture capital conference in the Southwest. See live EVO demonstrations and meet our team.',
      type: 'Conference',
      registrationLink: '#',
    },
    {
      title: 'New York Climate Week',
      date: '2025-03-20',
      location: 'New York, NY',
      time: '10:00 AM - 6:00 PM EST',
      description: 'Showcasing sustainable manufacturing solutions and discussing how EVO reduces industrial carbon footprint significantly.',
      type: 'Exhibition',
      registrationLink: '#',
    },
    {
      title: 'LA Tech Week',
      date: '2025-04-10',
      location: 'Los Angeles, CA',
      time: '11:00 AM - 7:00 PM PST',
      description: 'Experience hands-on EVO demonstrations and learn about our AI-powered manufacturing intelligence.',
      type: 'Technology Showcase',
      registrationLink: '#',
    },
  ];

  const pastEvents = [
    {
      title: 'SF Tech Week 2024',
      date: '2024-10-15',
      location: 'San Francisco, CA',
      description: 'Presented EVO platform to leading Bay Area manufacturers and secured multiple pilot partnerships.',
    },
    {
      title: 'Austin Startup Crawl Week',
      date: '2024-09-08',
      location: 'Austin, Texas',
      description: 'Hosted facility tours and live manufacturing demonstrations for the Austin startup community.',
    },
    {
      title: 'SXSW 2024',
      date: '2024-03-12',
      location: 'Austin, Texas',
      description: 'Featured in the Innovation Awards showcase with our integrated manufacturing approach.',
    },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Events & Appearances
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet us at industry events, conferences, and showcases. Experience live EVO
              demonstrations and connect with our team.
            </p>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-red-950 to-gray-900 p-6 border-b-2 border-gray-800">
                    <div className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {event.type}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                      <Calendar size={16} />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                      <MapPin size={16} />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Clock size={16} />
                      {event.time}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <a
                      href={event.registrationLink}
                      className="inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors"
                    >
                      Register Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Past Events</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900 rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Invite Us to Your Event
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            We're always looking for opportunities to showcase EVO and discuss the future of
            manufacturing. Interested in having us present or exhibit at your event?
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-semibold text-lg"
          >
            Contact Our Team
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
