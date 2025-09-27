import React, { useState } from 'react';
import { Code, Shield, Cloud, Settings, ArrowRight, Phone, Mail } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectSize: '',
    urgency: '',
    message: ''
  });

  const caseStudies = [
    {
      title: 'IT Infrastructure Setup',
      description: 'Complete network infrastructure installation for enterprise client',
      image: '/IT & SECURITY/IMG-20250924-WA0004.jpg',
      details: ['Network architecture', 'Server configuration', '24/7 monitoring', 'Deployed 2024']
    },
    {
      title: 'Security System Installation',
      description: 'Comprehensive security system deployment for commercial facility',
      image: '/IT & SECURITY/IMG-20250924-WA0005.jpg',
      details: ['CCTV surveillance', 'Access control', 'Alarm systems', 'Deployed 2024']
    },
    {
      title: 'Data Center Implementation',
      description: 'Enterprise data center setup with redundancy and backup systems',
      image: '/IT & SECURITY/IMG-20250924-WA0008.jpg',
      details: ['Redundant systems', 'Backup solutions', 'Climate control', 'Deployed 2024']
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom applications, web platforms, and mobile app development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security assessments, data protection, and compliance solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud migration, infrastructure, and managed services'
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'API development, third-party integrations, and workflow automation'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('IT services quote request:', formData);
    alert('Thank you for your IT services inquiry! Our technical team will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      projectSize: '',
      urgency: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-700 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold mb-4">IT Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Empowering businesses with innovative technology solutions 
              that drive efficiency, security, and growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <img
              src="/IT & SECURITY/IMG-20250924-WA0010.jpg"
              alt="IT Infrastructure"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/IT & SECURITY/IMG-20250924-WA0011.jpg"
              alt="Security Systems"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/IT & SECURITY/IMG-20250924-WA0012.jpg"
              alt="Network Solutions"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/IT & SECURITY/IMG-20250924-WA0013.jpg"
              alt="System Integration"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">IT Solutions Overview</h2>
            <p className="text-xl text-gray-600">Comprehensive technology services for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h2>
            <p className="text-xl text-gray-600">Real-world IT solutions delivering measurable results</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={caseStudies[selectedCase].image}
                alt={caseStudies[selectedCase].title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {caseStudies[selectedCase].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {caseStudies[selectedCase].description}
              </p>
              <ul className="space-y-2 mb-8">
                {caseStudies[selectedCase].details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="text-blue-600 mr-3" size={16} />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCase(index)}
                    className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                      selectedCase === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Case {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Request IT Services Quote</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business with technology? Let's discuss your IT needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Service Type</option>
                    <option value="software-development">Software Development</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="system-integration">System Integration</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Size
                  </label>
                  <select
                    id="projectSize"
                    name="projectSize"
                    value={formData.projectSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Project Size</option>
                    <option value="small">Small (1-50 users)</option>
                    <option value="medium">Medium (50-500 users)</option>
                    <option value="large">Large (500+ users)</option>
                    <option value="enterprise">Enterprise (Multi-location)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Urgency Level</option>
                  <option value="asap">ASAP (Critical)</option>
                  <option value="weeks">Within 2-4 weeks</option>
                  <option value="months">1-3 months</option>
                  <option value="planned">Long-term planning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your IT project requirements, current systems, and objectives..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200"
                >
                  Request Quote
                </button>
                <div className="flex items-center justify-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span className="text-sm">0693878987</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span className="text-sm">support@subsequentvisionprokects.co.za</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;