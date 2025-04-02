import React from 'react';

export default function NityaSeva() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Nitya Seva</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Daily Service Support</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Seva Categories</h3>
                <ul className="space-y-3">
                  <li>Daily Temple Maintenance</li>
                  <li>Prasadam Distribution</li>
                  <li>Deity Worship Support</li>
                  <li>Community Service</li>
                </ul>
              </div>

              <p>
                Nitya Seva is our daily service program that supports the temple's regular activities 
                and maintenance. Your contribution helps ensure the smooth running of temple services 
                and the continuation of our spiritual mission.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Contribution Options</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Monthly recurring donations</li>
                  <li>Annual service support</li>
                  <li>Specific seva sponsorship</li>
                  <li>General temple maintenance</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Support Our Daily Services</h3>
                <p>
                  To contribute to our Nitya Seva program, please visit our temple office or contact 
                  our seva department. We offer various options to support our daily temple activities 
                  and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 