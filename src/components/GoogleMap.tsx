import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
  address: string;
  className?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  
  // Coordinates for 15 White Road, Ladysmith 3370 (approximate)
  const coordinates = { lat: -28.5665, lng: 29.7804 };
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // If no API key, don't try to load the map
    if (!googleMapsApiKey) {
      setMapError(true);
      return;
    }

    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Set up callback
      window.initMap = initializeMap;
      
      script.onerror = () => {
        console.error('Failed to load Google Maps');
        setMapError(true);
      };

      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: coordinates,
          zoom: 15,
          mapTypeId: 'roadmap',
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry.fill',
              stylers: [{ color: '#f5f5f5' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#c9c9c9' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            }
          ]
        });

        // Add marker
        new window.google.maps.Marker({
          position: coordinates,
          map: map,
          title: address,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C12.268 0 6 6.268 6 14C6 24 20 40 20 40S34 24 34 14C34 6.268 27.732 0 20 0ZM20 19C17.239 19 15 16.761 15 14S17.239 9 20 9S25 11.239 25 14S22.761 19 20 19Z" fill="#2563eb"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 40)
          }
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; font-family: Arial, sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">SubsequentVision Projects</h3>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">${address}</p>
            </div>
          `
        });

        // Show info window on marker click
        const marker = new window.google.maps.Marker({
          position: coordinates,
          map: map,
          title: address
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        setMapLoaded(true);
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError(true);
      }
    };

    loadGoogleMaps();
  }, [googleMapsApiKey, address]);

  // Fallback component when map fails to load or no API key
  const MapFallback = () => (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 h-full rounded-lg flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-200">
      <MapPin size={48} className="text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Us Here</h3>
      <p className="text-gray-600 text-center mb-4">{address}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          <ExternalLink size={16} className="mr-2" />
          Open in Google Maps
        </a>
        <a
          href={`https://maps.apple.com/?q=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
        >
          <ExternalLink size={16} className="mr-2" />
          Open in Apple Maps
        </a>
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">
        Click above to get directions using your preferred maps app
      </p>
    </div>
  );

  if (mapError || !googleMapsApiKey) {
    return (
      <div className={className}>
        <MapFallback />
      </div>
    );
  }

  return (
    <div className={className}>
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg"
        style={{ minHeight: '300px' }}
      />
      {!mapLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;