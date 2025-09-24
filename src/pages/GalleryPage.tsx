import React, { useState } from 'react';
import { Building, Wrench, Monitor, X } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Building },
    { id: 'construction', label: 'Construction', icon: Building },
    { id: 'civil', label: 'Civil Engineering', icon: Wrench },
    { id: 'it', label: 'IT Services', icon: Monitor }
  ];

  const galleryImages = [
    // Construction Projects
    {
      id: 1,
      category: 'construction',
      title: 'Modern Office Complex',
      description: '12-story commercial building with LEED certification',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      category: 'construction',
      title: 'Luxury Residential Tower',
      description: '25-floor premium residential complex',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      category: 'construction',
      title: 'Industrial Warehouse',
      description: 'State-of-the-art logistics center',
      image: 'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      category: 'construction',
      title: 'Shopping Center',
      description: 'Modern retail complex with parking',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      category: 'construction',
      title: 'Hospital Complex',
      description: 'Medical facility with advanced infrastructure',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      category: 'construction',
      title: 'Educational Campus',
      description: 'University building with modern facilities',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      category: 'construction',
      title: 'Sports Complex',
      description: 'Multi-purpose athletic facility',
      image: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      category: 'construction',
      title: 'Hotel Development',
      description: 'Luxury hotel with conference facilities',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    // Civil Engineering Projects
    {
      id: 9,
      category: 'civil',
      title: 'Highway Infrastructure',
      description: 'Major highway expansion project',
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 10,
      category: 'civil',
      title: 'Water Treatment Plant',
      description: 'Municipal water treatment facility',
      image: 'https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 11,
      category: 'civil',
      title: 'Urban Bridge',
      description: 'Modern cable-stayed bridge construction',
      image: 'https://images.pexels.com/photos/681391/pexels-photo-681391.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 12,
      category: 'civil',
      title: 'Metro Station',
      description: 'Underground transit station project',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 13,
      category: 'civil',
      title: 'Dam Construction',
      description: 'Hydroelectric dam and reservoir',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 14,
      category: 'civil',
      title: 'Airport Runway',
      description: 'International airport expansion',
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 15,
      category: 'civil',
      title: 'Sewage Treatment',
      description: 'Wastewater treatment facility',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 16,
      category: 'civil',
      title: 'Port Development',
      description: 'Commercial port infrastructure',
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    // IT Services Projects
    {
      id: 17,
      category: 'it',
      title: 'Enterprise ERP System',
      description: 'Custom ERP dashboard and analytics',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 18,
      category: 'it',
      title: 'Healthcare Platform',
      description: 'Patient management system interface',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 19,
      category: 'it',
      title: 'E-commerce Solution',
      description: 'Modern online retail platform',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 20,
      category: 'it',
      title: 'Data Center',
      description: 'Cloud infrastructure and server management',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 21,
      category: 'it',
      title: 'Mobile Banking App',
      description: 'Secure financial mobile application',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 22,
      category: 'it',
      title: 'AI Analytics Platform',
      description: 'Machine learning data analytics dashboard',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 23,
      category: 'it',
      title: 'Cybersecurity Suite',
      description: 'Enterprise security monitoring system',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 24,
      category: 'it',
      title: 'IoT Management Platform',
      description: 'Industrial IoT monitoring and control',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
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
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.image)}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    image.category === 'construction' 
                      ? 'bg-blue-500 text-white'
                      : image.category === 'civil'
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-500 text-white'
                  }`}>
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                </div>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">Construction Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">Civil Engineering Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">IT Solutions Delivered</div>
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