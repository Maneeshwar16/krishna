import React from 'react';

export default function GauraPurnima() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Gaura Purnima</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Celebration of Divine Love</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Festival Activities</h3>
                <ul className="space-y-3">
                  <li>Special Puja Ceremonies</li>
                  <li>Kirtan Programs</li>
                  <li>Feast Distribution</li>
                  <li>Cultural Programs</li>
                </ul>
              </div>

              <p>
                Gaura Purnima is a sacred festival celebrating the appearance day of Lord Chaitanya 
                Mahaprabhu. Your support helps us organize grand celebrations that bring devotees 
                together in spiritual joy and devotion.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Support Areas</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Festival decorations</li>
                  <li>Prasadam preparation</li>
                  <li>Cultural performances</li>
                  <li>Guest accommodation</li>
                  <li>Program materials</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contribute to the Festival</h3>
                <p>
                  To support our Gaura Purnima celebrations, please contact our festival coordination 
                  team. Your contribution helps us create a memorable spiritual experience for all 
                  participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 