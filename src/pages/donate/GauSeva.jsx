import React from 'react';

export default function GauSeva() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Gau Seva</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Support Our Cows</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Seva Opportunities</h3>
                <ul className="space-y-3">
                  <li>Daily Cow Care</li>
                  <li>Feed and Nutrition</li>
                  <li>Medical Care</li>
                  <li>Goshala Maintenance</li>
                </ul>
              </div>

              <p>
                Gau Seva is a special program dedicated to the care and protection of cows, which are 
                considered sacred in Vedic culture. Your support helps us provide proper care, 
                nutrition, and medical attention to our beloved cows.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Support Options</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Adopt a cow program</li>
                  <li>Monthly feed sponsorship</li>
                  <li>Medical care support</li>
                  <li>Goshala development</li>
                  <li>General cow care</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Join Our Gau Seva Program</h3>
                <p>
                  To contribute to our Gau Seva program, please visit our temple office or contact 
                  our goshala department. We offer various ways to support our cows and participate 
                  in this sacred service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 