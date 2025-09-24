import React, { useState } from 'react';
import { Building, Users, Calendar, Award, ArrowRight, Phone, Mail } from 'lucide-react';

const ConstructionPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const projects = [
    {
      title: 'Modern Office Complex',
      description: 'A 12-story commercial building with sustainable design features',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: ['12 floors', '50,000 sq ft', 'LEED certified', 'Completed 2023']
    },
    {
      title: 'Luxury Residential Tower',
      description: 'Premium residential complex with panoramic city views',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: ['25 floors', '200 units', 'Premium finishes', 'Completed 2023']
    },
    {
      title: 'Industrial Warehouse',
      description: 'State-of-the-art logistics and distribution center',
      image: 'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: ['100,000 sq ft', 'Automated systems', '24/7 operations', 'Completed 2022']
    }
  ];

  const services = [
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and mixed-use developments'
    },
    {
      icon: Users,
      title: 'Residential Projects',
      description: 'Custom homes, apartments, and residential communities'
    },
    {
      icon: Calendar,
      title: 'Project Management',
      description: 'End-to-end project coordination and timeline management'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and safety compliance'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Construction quote request:', formData);
    alert('Thank you for your construction project inquiry! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
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
            <h1 className="text-5xl font-bold mb-4">Construction Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              From concept to completion, we deliver exceptional construction projects 
              that exceed expectations and stand the test of time.
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
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
              alt="Commercial Construction"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
              alt="Residential Projects"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
              alt="Industrial Construction"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
              alt="Quality Construction"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Construction Expertise</h2>
            <p className="text-xl text-gray-600">Comprehensive construction services for every project type</p>
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

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our recent construction achievements</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Request a Construction Quote</h2>
            <p className="text-xl text-gray-600">
              Ready to start your construction project? Get a detailed quote from our experts.
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
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-500k">Under R500,000</option>
                    <option value="500k-1m">R500,000 - R1,000,000</option>
                    <option value="1m-5m">R1,000,000 - R5,000,000</option>
                    <option value="over-5m">Over R5,000,000</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="over-12-months">Over 12 months</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your construction project..."
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
                    <span className="text-sm">+27 21 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span className="text-sm">construction@Subsequentvisionprojects.co.za</span>
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

export default ConstructionPage;