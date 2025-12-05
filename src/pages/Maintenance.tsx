import React from 'react';
import { Wrench, Clock, Shield, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Maintenance() {
  const services = [
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Scheduled maintenance to keep your EVO running at peak performance.',
      includes: [
        'Quarterly system inspection',
        'Component calibration',
        'Software updates',
        'Performance optimization',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Emergency Support',
      description: '24/7 rapid response for critical issues affecting production.',
      includes: [
        '4-hour response time',
        'Remote diagnostics',
        'Priority parts shipping',
        'On-site support available',
      ],
    },
    {
      icon: Shield,
      title: 'Extended Warranty',
      description: 'Comprehensive coverage beyond standard warranty period.',
      includes: [
        'Parts and labor coverage',
        'Unlimited support tickets',
        'Annual system upgrades',
        'Loaner equipment during repairs',
      ],
    },
  ];

  const plans = [
    {
      name: 'Basic Support',
      price: '$2,500',
      period: 'per year',
      features: [
        'Email support',
        'Software updates',
        'Online documentation',
        'Remote diagnostics',
        'Standard warranty coverage',
      ],
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: 'per year',
      popular: true,
      features: [
        'Priority phone support',
        'Quarterly maintenance visits',
        'Emergency support (8-hour response)',
        'Extended warranty',
        'Training sessions',
        'Performance reports',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        '24/7 dedicated support',
        'Monthly maintenance visits',
        'Emergency support (4-hour response)',
        'Full warranty coverage',
        'Unlimited training',
        'Custom SLA agreements',
        'Dedicated account manager',
      ],
    },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Maintenance & Support
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Keep your EVO platform running at peak performance with our comprehensive maintenance
              and support services. From preventive care to emergency assistance, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl border-2 border-gray-800 p-8"
              >
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="text-red-600 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Support Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-red-950 to-gray-900 border-2 border-red-600 shadow-xl shadow-red-900/20'
                      : 'bg-gray-900 border-2 border-gray-800'
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact-us"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-12 border-2 border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Contact Support
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-400 mb-2">Monday - Friday, 8 AM - 8 PM CST</p>
                <a href="tel:+1-555-0123" className="text-red-500 font-semibold hover:text-red-400">
                  +1 (555) 012-3456
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-400 mb-2">24/7 ticket submission</p>
                <a href="mailto:support@creative3dtechnologies.com" className="text-red-500 font-semibold hover:text-red-400">
                  support@c3dt.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Emergency Line</h3>
                <p className="text-gray-400 mb-2">24/7 for critical issues</p>
                <a href="tel:+1-555-9999" className="text-red-500 font-semibold hover:text-red-400">
                  +1 (555) 999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
