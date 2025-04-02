import React from 'react';

export default function ChildrenPreaching() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Children's Spiritual Education</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Nurturing Young Minds</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                <ul className="space-y-3">
                  <li>Age Groups: 4-12 years</li>
                  <li>Weekly Classes: Sunday 10:00 AM</li>
                  <li>Special Holiday Programs</li>
                  <li>Parent-Child Activities</li>
                </ul>
              </div>

              <p>
                Our children's preaching program is designed to instill spiritual values and wisdom in 
                young minds through engaging activities, stories, and interactive learning. We create 
                a fun and nurturing environment where children can develop their spiritual understanding.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Activities & Learning</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Storytelling sessions from Vedic literature</li>
                  <li>Kirtan and bhajan singing</li>
                  <li>Arts and crafts with spiritual themes</li>
                  <li>Drama and role-playing activities</li>
                  <li>Festival celebrations and cultural events</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Join Our Children's Program</h3>
                <p>
                  We welcome children of all backgrounds to join our spiritual education program. 
                  Through age-appropriate activities and teachings, we help children develop strong 
                  moral values and spiritual understanding from an early age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 