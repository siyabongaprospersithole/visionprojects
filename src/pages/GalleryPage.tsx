import React, { useState } from 'react';
import { Building, Wrench, Monitor, X, Play } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<{url: string, type: string} | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Building },
    { id: 'renovations', label: 'Renovations', icon: Building },
    { id: 'it', label: 'IT & Security', icon: Monitor }
  ];

  const galleryImages = [
    // Renovations Projects
    {
      id: 1,
      category: 'renovations',
      title: 'Residential Renovation Project 1',
      description: 'Complete home renovation and modernization',
      image: '/renovations/IMG-20250924-WA0017.jpg',
      type: 'image'
    },
    {
      id: 2,
      category: 'renovations',
      title: 'Residential Renovation Project 2',
      description: 'Kitchen and bathroom renovation',
      image: '/renovations/IMG-20250924-WA0018.jpg',
      type: 'image'
    },
    {
      id: 3,
      category: 'renovations',
      title: 'Residential Renovation Project 3',
      description: 'Living space transformation',
      image: '/renovations/IMG-20250924-WA0019.jpg',
      type: 'image'
    },
    {
      id: 4,
      category: 'renovations',
      title: 'Residential Renovation Project 4',
      description: 'Exterior renovation and landscaping',
      image: '/renovations/IMG-20250924-WA0020.jpg',
      type: 'image'
    },
    {
      id: 5,
      category: 'renovations',
      title: 'Residential Renovation Project 5',
      description: 'Interior design and renovation',
      image: '/renovations/IMG-20250924-WA0021.jpg',
      type: 'image'
    },
    {
      id: 6,
      category: 'renovations',
      title: 'Residential Renovation Project 6',
      description: 'Modern home renovation',
      image: '/renovations/IMG-20250924-WA0022.jpg',
      type: 'image'
    },
    {
      id: 7,
      category: 'renovations',
      title: 'Residential Renovation Project 7',
      description: 'Complete property makeover',
      image: '/renovations/IMG-20250924-WA0023.jpg',
      type: 'image'
    },
    {
      id: 8,
      category: 'renovations',
      title: 'Residential Renovation Project 8',
      description: 'Luxury home renovation',
      image: '/renovations/IMG-20250924-WA0024.jpg',
      type: 'image'
    },
    {
      id: 9,
      category: 'renovations',
      title: 'Residential Renovation Project 9',
      description: 'Contemporary renovation design',
      image: '/renovations/IMG-20250924-WA0025.jpg',
      type: 'image'
    },
    {
      id: 10,
      category: 'renovations',
      title: 'Residential Renovation Project 10',
      description: 'Home improvement and renovation',
      image: '/renovations/IMG-20250924-WA0026.jpg',
      type: 'image'
    },
    {
      id: 11,
      category: 'renovations',
      title: 'Renovation Process Video 1',
      description: 'Time-lapse of renovation process',
      image: '/renovations/VID-20250924-WA0002.mp4',
      type: 'video'
    },
    {
      id: 12,
      category: 'renovations',
      title: 'Renovation Process Video 2',
      description: 'Construction and renovation workflow',
      image: '/renovations/VID-20250925-WA0001.mp4',
      type: 'video'
    },
    {
      id: 13,
      category: 'renovations',
      title: 'Renovation Process Video 3',
      description: 'Before and after renovation showcase',
      image: '/renovations/VID-20250925-WA0002.mp4',
      type: 'video'
    },
    {
      id: 14,
      category: 'renovations',
      title: 'Renovation Process Video 4',
      description: 'Professional renovation techniques',
      image: '/renovations/VID-20250925-WA0003.mp4',
      type: 'video'
    },
    {
      id: 15,
      category: 'renovations',
      title: 'Renovation Process Video 5',
      description: 'Complete renovation documentation',
      image: '/renovations/VID-20250925-WA0004.mp4',
      type: 'video'
    },
    // IT & Security Projects
    {
      id: 16,
      category: 'it',
      title: 'IT Infrastructure Setup 1',
      description: 'Network infrastructure installation',
      image: '/IT & SECURITY/IMG-20250924-WA0004.jpg',
      type: 'image'
    },
    {
      id: 17,
      category: 'it',
      title: 'Security System Installation 1',
      description: 'Advanced security system deployment',
      image: '/IT & SECURITY/IMG-20250924-WA0005.jpg',
      type: 'image'
    },
    {
      id: 18,
      category: 'it',
      title: 'IT Infrastructure Setup 2',
      description: 'Server room configuration',
      image: '/IT & SECURITY/IMG-20250924-WA0006.jpg',
      type: 'image'
    },
    {
      id: 19,
      category: 'it',
      title: 'Security System Installation 2',
      description: 'CCTV and monitoring system setup',
      image: '/IT & SECURITY/IMG-20250924-WA0007.jpg',
      type: 'image'
    },
    {
      id: 20,
      category: 'it',
      title: 'IT Infrastructure Setup 3',
      description: 'Data center implementation',
      image: '/IT & SECURITY/IMG-20250924-WA0008.jpg',
      type: 'image'
    },
    {
      id: 21,
      category: 'it',
      title: 'Security System Installation 3',
      description: 'Access control system installation',
      image: '/IT & SECURITY/IMG-20250924-WA0009.jpg',
      type: 'image'
    },
    {
      id: 22,
      category: 'it',
      title: 'IT Infrastructure Setup 4',
      description: 'Network cabling and setup',
      image: '/IT & SECURITY/IMG-20250924-WA0010.jpg',
      type: 'image'
    },
    {
      id: 23,
      category: 'it',
      title: 'Security System Installation 4',
      description: 'Integrated security solutions',
      image: '/IT & SECURITY/IMG-20250924-WA0011.jpg',
      type: 'image'
    },
    {
      id: 24,
      category: 'it',
      title: 'IT Infrastructure Setup 5',
      description: 'Enterprise IT solutions',
      image: '/IT & SECURITY/IMG-20250924-WA0012.jpg',
      type: 'image'
    },
    {
      id: 25,
      category: 'it',
      title: 'Security System Installation 5',
      description: 'Comprehensive security implementation',
      image: '/IT & SECURITY/IMG-20250924-WA0013.jpg',
      type: 'image'
    },
    {
      id: 26,
      category: 'it',
      title: 'IT & Security Installation Process',
      description: 'Professional installation and setup process',
      image: '/IT & SECURITY/VID-20250924-WA0001.mp4',
      type: 'video'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-72 bg-gradient-to-r from-blue-700 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold mb-4">Project Gallery</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Showcasing our expertise across construction, civil engineering, and IT services
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <category.icon className="mr-2" size={20} />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMedia({url: item.image, type: item.type})}
              >
                {item.type === 'video' ? (
                  <div className="relative">
                    <video
                      src={item.image}
                      className="w-full h-64 object-cover"
                      muted
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <Play className="text-white" size={32} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    item.category === 'renovations' 
                      ? 'bg-blue-500 text-white'
                      : 'bg-purple-500 text-white'
                  }`}>
                    {item.category === 'renovations' ? 'Renovations' : 'IT & Security'}
                  </span>
                </div>
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-red-500 text-white">
                      VIDEO
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              type="button"
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            {selectedMedia.type === 'video' ? (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <img
                src={selectedMedia.url}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-blue-100">Renovation Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">13+</div>
              <div className="text-blue-100">IT & Security Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-blue-100">Project Videos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;