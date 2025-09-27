import React, { useState } from 'react';
import { Loader as Road, Droplets, Grid as Bridge, MapPin, ArrowRight, Phone, Mail } from 'lucide-react';

const CivilEngineeringPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectScope: '',
    location: '',
    message: ''
  });

  const projects = [
    {
      title: 'Residential Property Development',
      description: 'Complete residential renovation with structural improvements',
      image: '/renovations/IMG-20250924-WA0036.jpg',
      details: ['Structural renovation', 'Modern systems', 'Quality materials', 'Completed 2024']
    },
    {
      title: 'Home Renovation Project',
      description: 'Comprehensive home renovation with modern amenities',
      image: '/renovations/IMG-20250924-WA0037.jpg',
      details: ['Full renovation', 'Modern design', 'Energy efficient', 'Completed 2024']
    },
    {
      title: 'Property Modernization',
      description: 'Complete property upgrade with contemporary features',
      image: '/renovations/IMG-20250924-WA0038.jpg',
      details: ['Modern upgrades', 'Quality finishes', 'Improved functionality', 'Completed 2024']
    }
  ];

  const services = [
    {
      icon: Road,
      title: 'Transportation Engineering',
      description: 'Highway design, traffic systems, and transportation planning'
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Water treatment plants, sewage systems, and stormwater management'
    },
    {
      icon: Bridge,
      title: 'Structural Engineering',
      description: 'Bridge construction, tunnels, and large-scale infrastructure'
    },
    {
      icon: MapPin,
      title: 'Site Development',
      description: 'Land surveying, soil analysis, and site preparation'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Civil engineering quote request:', formData);
    alert('Thank you for your civil engineering project inquiry! Our team will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      projectScope: '',
      location: '',
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
            <h1 className="text-5xl font-bold mb-4">Civil Engineering</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Designing and building the infrastructure that connects communities 
              and supports sustainable development for future generations.
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
              src="/renovations/IMG-20250924-WA0039.jpg"
              alt="Residential Renovation"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/renovations/IMG-20250924-WA0040.jpg"
              alt="Property Development"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/renovations/IMG-20250924-WA0041.jpg"
              alt="Home Renovation"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="/renovations/IMG-20250924-WA0042.jpg"
              alt="Property Modernization"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Civil Engineering Services</h2>
            <p className="text-xl text-gray-600">Comprehensive infrastructure solutions for modern communities</p>
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

      {/* Project Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Past Projects</h2>
            <p className="text-xl text-gray-600">Infrastructure projects that make a difference</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {projects[selectedProject].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {projects[selectedProject].description}
              </p>
              <ul className="space-y-2 mb-8">
                {projects[selectedProject].details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="text-blue-600 mr-3" size={16} />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProject(index)}
                    className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                      selectedProject === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Project {index + 1}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Request Civil Engineering Services</h2>
            <p className="text-xl text-gray-600">
              Planning an infrastructure project? Let our civil engineers provide expert consultation.
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
                    <option value="transportation">Transportation Engineering</option>
                    <option value="water">Water Management</option>
                    <option value="structural">Structural Engineering</option>
                    <option value="site-development">Site Development</option>
                    <option value="consulting">General Consulting</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Scope
                  </label>
                  <select
                    id="projectScope"
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Project Scope</option>
                    <option value="small">Small Scale (Local)</option>
                    <option value="medium">Medium Scale (Regional)</option>
                    <option value="large">Large Scale (Municipal)</option>
                    <option value="mega">Mega Project (Provincial)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Province"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your civil engineering project requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200"
                >
                  Request Consultation
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

export default CivilEngineeringPage;