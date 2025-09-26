import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building, Wrench, Monitor, ArrowRight, Users, Award, Clock, CheckCircle, Star, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'construction' | 'civil' | 'it' | 'gallery' | 'contact') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageFilter, setImageFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      image: '/renovations/IMG-20250924-WA0017.jpg',
      title: 'Excellence in Renovations',
      subtitle: 'Transforming spaces with precision and quality',
      service: 'gallery' as const
    },
    {
      image: '/renovations/IMG-20250924-WA0025.jpg',
      title: 'Professional Renovation Services',
      subtitle: 'Creating beautiful spaces that stand the test of time',
      service: 'gallery' as const
    },
    {
      image: '/IT & SECURITY/IMG-20250924-WA0008.jpg',
      title: 'Innovative IT & Security Services',
      subtitle: 'Technology and security solutions for modern business',
      service: 'it' as const
    }
  ];

  const services = [
    {
      icon: Building,
      title: 'Construction',
      description: 'Comprehensive construction services from residential to commercial projects with a focus on quality and timely delivery.',
      page: 'construction' as const,
      features: ['Residential Buildings', 'Commercial Complexes', 'Industrial Facilities', 'Quality Assurance']
    },
    {
      icon: Wrench,
      title: 'Civil Engineering',
      description: 'Expert civil engineering solutions including infrastructure development, road construction, and water management systems.',
      page: 'civil' as const,
      features: ['Highway Development', 'Water Treatment', 'Bridge Construction', 'Site Planning']
    },
    {
      icon: Monitor,
      title: 'IT Services',
      description: 'Complete IT solutions including software development, system integration, and technical support for businesses.',
      page: 'it' as const,
      features: ['Software Development', 'Cloud Solutions', 'Cybersecurity', 'System Integration']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Building },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Expert Team Members', icon: Users }
  ];

  const galleryImages = [
    // Renovation Projects
    {
      id: 1,
      category: 'renovations',
      title: 'Residential Renovation 1',
      description: 'Complete home transformation',
      image: '/renovations/IMG-20250924-WA0017.jpg'
    },
    {
      id: 2,
      category: 'renovations',
      title: 'Residential Renovation 2',
      description: 'Modern living space design',
      image: '/renovations/IMG-20250924-WA0018.jpg'
    },
    {
      id: 3,
      category: 'renovations',
      title: 'Residential Renovation 3',
      description: 'Kitchen and bathroom upgrade',
      image: '/renovations/IMG-20250924-WA0019.jpg'
    },
    {
      id: 4,
      category: 'renovations',
      title: 'Residential Renovation 4',
      description: 'Exterior renovation project',
      image: '/renovations/IMG-20250924-WA0020.jpg'
    },
    {
      id: 5,
      category: 'renovations',
      title: 'Residential Renovation 5',
      description: 'Interior design makeover',
      image: '/renovations/IMG-20250924-WA0021.jpg'
    },
    {
      id: 6,
      category: 'renovations',
      title: 'Residential Renovation 6',
      description: 'Complete property renovation',
      image: '/renovations/IMG-20250924-WA0022.jpg'
    },
    // IT & Security Projects
    {
      id: 7,
      category: 'it',
      title: 'IT Infrastructure Setup 1',
      description: 'Network installation project',
      image: '/IT & SECURITY/IMG-20250924-WA0004.jpg'
    },
    {
      id: 8,
      category: 'it',
      title: 'Security System Installation 1',
      description: 'Advanced security deployment',
      image: '/IT & SECURITY/IMG-20250924-WA0005.jpg'
    },
    {
      id: 9,
      category: 'it',
      title: 'IT Infrastructure Setup 2',
      description: 'Server room configuration',
      image: '/IT & SECURITY/IMG-20250924-WA0006.jpg'
    },
    {
      id: 10,
      category: 'it',
      title: 'Security System Installation 2',
      description: 'CCTV monitoring system',
      image: '/IT & SECURITY/IMG-20250924-WA0007.jpg'
    },
    {
      id: 11,
      category: 'it',
      title: 'IT Infrastructure Setup 3',
      description: 'Data center implementation',
      image: '/IT & SECURITY/IMG-20250924-WA0008.jpg'
    },
    {
      id: 12,
      category: 'it',
      title: 'Security System Installation 3',
      description: 'Access control system',
      image: '/IT & SECURITY/IMG-20250924-WA0009.jpg'
    }
  ];

  const filteredGalleryImages = imageFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === imageFilter);

  const features = [
    {
      icon: Award,
      title: 'Industry Leading',
      description: 'Award-winning projects and industry recognition for excellence in all service areas.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous quality control processes and compliance with international standards.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Efficient project management ensuring on-time delivery without compromising quality.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International best practices applied to local projects with global expertise.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Cape Town Properties',
      text: 'Subsequentvisionprojects delivered our commercial complex ahead of schedule with exceptional quality. Their attention to detail is unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      company: 'City Infrastructure Dept.',
      text: 'The bridge project exceeded all expectations. Professional team, innovative solutions, and flawless execution.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'TechFlow Solutions',
      text: 'Their IT services transformed our business operations. The custom software solution has increased our efficiency by 40%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-green-900/80" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className={`max-w-5xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-pulse">
                Building Tomorrow's World
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-blue-100 font-light max-w-4xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => onNavigate(slides[currentSlide].service)}
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-green-700 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-lg"
              >
                Explore Services
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" size={24} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 border-2 border-white/80 text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300 text-lg hover:shadow-2xl transform hover:scale-105"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-bounce hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-green-400/20 rounded-full animate-pulse hidden lg:block" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors duration-200">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating background elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-100 rounded-full opacity-30 animate-bounce" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              '/renovations/IMG-20250924-WA0023.jpg',
              '/renovations/IMG-20250924-WA0024.jpg',
              '/IT & SECURITY/IMG-20250924-WA0010.jpg'
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Subsequentvisionprojects
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              We are a leading provider of comprehensive construction, civil engineering, and IT services.
              With years of experience and a commitment to excellence, we deliver innovative solutions
              that build tomorrow's infrastructure while meeting today's technological needs.
            </p>

            {/* Interactive Image Filter Gallery */}
            <div className="mt-16">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { id: 'all', label: 'All Projects', icon: Building },
                  { id: 'renovations', label: 'Renovations', icon: Building },
                  { id: 'it', label: 'IT & Security', icon: Monitor }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setImageFilter(filter.id)}
                    className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${imageFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                      }`}
                  >
                    <filter.icon className="mr-2" size={20} />
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGalleryImages.slice(0, 8).map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                        <p className="text-xs text-gray-200">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${image.category === 'renovations'
                        ? 'bg-blue-500 text-white'
                        : 'bg-purple-500 text-white'
                        }`}>
                        {image.category === 'renovations' ? 'Renovations' : 'IT & Security'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View All Projects
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets us apart in the industry and makes us the preferred choice for complex projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-green-200/30 to-transparent rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full animate-ping" />
          <div className="absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PROFESSIONAL SERVICES
              </span>
            </div>
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions across construction, engineering, and technology with unmatched expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-transparent transform hover:-translate-y-6 hover:rotate-1"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700" />

                <div className="relative z-10 p-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-blue-500/25">
                    <service.icon className="text-white group-hover:scale-110 transition-transform duration-300" size={40} />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 group-hover:scale-105 transition-all duration-300">
                    <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-green-600">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center group/item">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="text-white" size={14} />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate(service.page)}
                    className="group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Explore {service.title}
                      <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" size={20} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            ))}
          </div>

          {/* Service Statistics */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Construction Projects</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Engineering Solutions</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
              <div className="text-gray-600">IT Solutions Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the clients who trust us with their most important projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-800 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-400/20 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full animate-ping" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Dream Project?
            </span>
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our expert team to discuss your construction, civil engineering,
            or IT service needs. We're here to bring your vision to life with unmatched expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="group px-12 py-6 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 text-xl"
            >
              Get Free Quote
              <TrendingUp className="inline ml-3 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="px-12 py-6 border-2 border-white/80 text-white font-bold rounded-full hover:bg-white hover:text-blue-700 backdrop-blur-sm transition-all duration-300 text-xl hover:shadow-2xl transform hover:scale-105"
            >
              View Our Work
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center">
              <Clock className="mr-3" size={24} />
              <span className="text-lg">24/7 Support Available</span>
            </div>
            <div className="flex items-center justify-center">
              <Award className="mr-3" size={24} />
              <span className="text-lg">Award-Winning Projects</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="mr-3" size={24} />
              <span className="text-lg">Expert Team of 50+</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;