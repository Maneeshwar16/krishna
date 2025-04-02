import React from 'react';

export default function Shop() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Temple Shop</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Spiritual Items</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Books & Literature</h3>
                  <ul className="space-y-2">
                    <li>Bhagavad Gita As It Is</li>
                    <li>Krishna Book</li>
                    <li>Science of Self Realization</li>
                    <li>Back to Godhead Magazines</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Puja Items</h3>
                  <ul className="space-y-2">
                    <li>Mala Beads</li>
                    <li>Incense & Dhoop</li>
                    <li>Puja Thali Sets</li>
                    <li>Deity Pictures</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Visit Our Shop</h3>
                <p>
                  Visit our temple shop to explore a wide range of spiritual items, books, and puja materials. 
                  All proceeds support the temple's activities and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 