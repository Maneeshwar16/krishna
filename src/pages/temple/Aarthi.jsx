import React from 'react';

export default function Aarthi() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Temple Aarthi</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Daily Aarthi Schedule</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Morning Aarthi</h3>
                  <ul className="space-y-2">
                    <li>Mangala Aarthi - 4:30 AM</li>
                    <li>Darshan Aarthi - 7:15 AM</li>
                    <li>Raj Bhog Aarthi - 12:30 PM</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Evening Aarthi</h3>
                  <ul className="space-y-2">
                    <li>Dhoop Aarthi - 4:30 PM</li>
                    <li>Sandhya Aarthi - 7:00 PM</li>
                    <li>Shayan Aarthi - 8:30 PM</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6">
                Join us for these beautiful ceremonies where we offer our love and devotion to 
                Sri Sri Radha Krishna through the traditional offering of light, incense, flowers, 
                and other auspicious items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 