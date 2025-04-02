import React from 'react';

export default function FoodForLifeAnnadaan() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Food for Life Annadaan</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Nourishing Bodies and Souls</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Overview</h3>
                <ul className="space-y-3">
                  <li>Daily Food Distribution</li>
                  <li>Community Feeding Programs</li>
                  <li>Special Festival Feasts</li>
                  <li>Emergency Relief Efforts</li>
                </ul>
              </div>

              <p>
                Food for Life Annadaan is our temple's initiative to provide nutritious, 
                sanctified food to those in need. This program follows the principle that 
                food is not just physical sustenance but also spiritual nourishment.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">How You Can Help</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Sponsor a meal</li>
                  <li>Volunteer for food distribution</li>
                  <li>Donate ingredients</li>
                  <li>Support kitchen operations</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
                <p>
                  To participate in our Food for Life Annadaan program, please contact 
                  our temple office. We welcome both individual and group participation 
                  in this noble cause of serving prasadam to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 