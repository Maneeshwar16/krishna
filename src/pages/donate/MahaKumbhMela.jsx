import React from 'react';

export default function MahaKumbhMela() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Maha Kumbh Mela</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Support the Sacred Gathering</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                <ul className="space-y-3">
                  <li>Pilgrim Support Services</li>
                  <li>Food Distribution</li>
                  <li>Medical Camps</li>
                  <li>Spiritual Programs</li>
                </ul>
              </div>

              <p>
                The Maha Kumbh Mela is one of the world's largest spiritual gatherings. Your support 
                helps us provide essential services to millions of pilgrims who come to participate 
                in this sacred event.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Support Areas</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Pilgrim accommodation facilities</li>
                  <li>Mass food distribution</li>
                  <li>Medical and health services</li>
                  <li>Spiritual discourse programs</li>
                  <li>Infrastructure development</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contribute to the Event</h3>
                <p>
                  To support our Maha Kumbh Mela initiatives, please contact our event coordination 
                  team. Your contribution helps us serve the spiritual needs of millions of devotees 
                  during this sacred gathering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 