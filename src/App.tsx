import { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import HomePage from './pages/HomePage';
import ConstructionPage from './pages/ConstructionPage';
import CivilEngineeringPage from './pages/CivilEngineeringPage';
import ITServicesPage from './pages/ITServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

type PageType = 'home' | 'construction' | 'civil' | 'it' | 'gallery' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'construction', label: 'Construction' },
    { id: 'civil', label: 'Civil Engineering' },
    { id: 'it', label: 'IT Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'construction':
        return <ConstructionPage />;
      case 'civil':
        return <CivilEngineeringPage />;
      case 'it':
        return <ITServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center animated-element delay-2">
              <div className="w-12 h-12 shine-effect rounded-lg flex items-center justify-center p-[2px] shadow-lg overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark">
                <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center floating">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-dark">SVP</span>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-dark hover:scale-105 transition-transform duration-300">
                  SubsequentVision Projects
                </h1>
                <p className="text-sm text-gray-600 slide-in-bottom delay-4">Crafting Excellence, Building Future</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="flex space-x-8">
                {navigation.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as PageType)}
                    className={`nav-item px-3 py-2 text-sm font-medium animated-element delay-${index + 2} 
                      ${currentPage === item.id ? 'text-sky-500' : 'text-gray-700'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-light transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t slide-in-bottom">
              <div className="space-y-2">
                {navigation.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as PageType);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium card animated-element delay-${index + 1} ${
                      currentPage === item.id
                        ? 'bg-sky-50/50 border-l-4 border-sky-500 text-sky-600'
                        : 'hover:bg-white/50 text-gray-700 hover:text-sky-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-64px)]">{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SVP</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold">SubsequentVision Projects</h3>
                  <p className="text-sm text-gray-400">Crafting Excellence, Building Future</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading provider of construction, civil engineering, and IT services. 
                We deliver innovative solutions with a commitment to excellence and reliability.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setCurrentPage('construction')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Construction
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('civil')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Civil Engineering
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('it')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    IT Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('gallery')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Gallery
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">123 Business Park, Cape Town, 8000</span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+27 21 123 4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@subsequentvisionprojects.co.za</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} SubsequentVision Projects. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-primary-light transition-all duration-300" title="Follow us on Facebook" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-light transition-all duration-300" title="Follow us on LinkedIn" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-light transition-all duration-300" title="Follow us on Instagram" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;